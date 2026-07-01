// Batch-affine signed-digit Pippenger MSM.
//
// Control flow lives here; ALL field arithmetic is imported from the main
// wasmcurves module (same linear memory). Buckets are kept in AFFINE
// coordinates and filled with batched affine additions: one field inversion
// per batch via Montgomery's trick, so each bucket add costs ~2M + 1S + 3M
// (amortized inversion) instead of an 11M jacobian addMixed.
//
// Conflict-free scheduling: for each window the points are bucket-sorted
// (counting sort), then processed in LAYERS -- layer L takes the (L+1)-th
// point of every bucket. Within a layer each bucket is touched at most once,
// so a batch never contains two adds into the same bucket and no deferral
// machinery is needed. The batch is flushed at every layer boundary (a
// bucket's layer-L+1 add depends on its layer-L result).
//
// Doubling (P == bucket) and cancellation (P == -bucket) are detected at
// schedule time from the coordinates.
//
// IMPORTANT: this module must have NO linear-memory statics (no data
// segments) -- it shares memory with the main module and anything static
// would clobber it. All state is wasm globals; scratch comes from the main
// module's bump allocator at address 0.

@external("curve", "f_mul") declare function f_mul(a: i32, b: i32, r: i32): void;
@external("curve", "f_square") declare function f_square(a: i32, r: i32): void;
@external("curve", "f_add") declare function f_add(a: i32, b: i32, r: i32): void;
@external("curve", "f_sub") declare function f_sub(a: i32, b: i32, r: i32): void;
@external("curve", "f_neg") declare function f_neg(a: i32, r: i32): void;
@external("curve", "f_inverse") declare function f_inverse(a: i32, r: i32): void;
@external("curve", "f_isZero") declare function f_isZero(a: i32): i32;
@external("curve", "g_add") declare function g_add(a: i32, b: i32, r: i32): void;
@external("curve", "g_addMixed") declare function g_addMixed(a: i32, b: i32, r: i32): void;
@external("curve", "g_double") declare function g_double(a: i32, r: i32): void;
@external("curve", "g_zero") declare function g_zero(r: i32): void;
@external("curve", "g_isZero") declare function g_isZero(a: i32): i32;

const BATCH: i32 = 512;

// per-call state (wasm globals -- no linear-memory statics allowed here)
let N8: i32 = 0;        // bytes per base-field element
let C: i32 = 0;         // window bits
let HALF: i32 = 0;      // 2^(C-1) == bucket count
let FULL: i32 = 0;      // 2^C
let NB: i32 = 0;
let NWIN: i32 = 0;      // real windows + 1 carry-guard window
let NPTS: i32 = 0;
let SCS: i32 = 0;       // scalar size in bytes
let SCBITS: i32 = 0;
let PBASES: i32 = 0;
let PSCAL: i32 = 0;
let PCARRY: i32 = 0;    // 1 byte per (window, point): carry INTO the window
let PBUCK: i32 = 0;     // NB affine points (x,y)
let POCC: i32 = 0;      // bucket occupancy flags
let PDIG: i32 = 0;      // per-point signed digit for the current window (i32)
let PPERM: i32 = 0;     // rank-sorted entries: pairs ((i<<1)|neg, bucket) (u32 x2)
let PCNT: i32 = 0;      // per-bucket point count (u32)
let PFILL: i32 = 0;     // per-bucket rank cursor (u32)
let PLCNT: i32 = 0;     // per-layer entry count (u32)
let PLSTART: i32 = 0;   // per-layer segment start (u32)
let PLFILL: i32 = 0;    // per-layer scatter cursor (u32)
let PENTB: i32 = 0;     // batch entry: bucket index (u32)
let PENTX: i32 = 0;     // batch entry: ptr to incoming x2 (u32)
let PNUM: i32 = 0;      // batch entry: lambda numerator
let PDEN: i32 = 0;      // batch entry: lambda denominator
let PPREF: i32 = 0;     // prefix products for Montgomery batch inversion
let T1: i32 = 0;
let T2: i32 = 0;
let LAM: i32 = 0;
let TINV: i32 = 0;
let NE: i32 = 0;        // entries in the current batch

function allocMem(len: i32): i32 {
    let p: u32 = load<u32>(0);
    while (p & 3) p++;
    const res = p;
    const end: u32 = p + (len as u32);
    store<u32>(0, end);
    // grow the (shared, imported) memory if the bump allocation passed its end
    const cap: u32 = (memory.size() as u32) << 16;
    if (end > cap) {
        memory.grow((((end - cap) >> 16) + 1) as i32);
    }
    return res as i32;
}

// 8-byte-chunk copy of one field element (N8 is always a multiple of 8)
function fcopy(src: i32, dst: i32): void {
    for (let k = 0; k < N8; k += 8) store<u64>(dst + k, load<u64>(src + k));
}

// window size table, indexed by clz(n) -- mirrors build_multiexp's pTSizes
function winSize(n: i32): i32 {
    const z = clz<i32>(n);
    if (z <= 9) return 17;
    if (z <= 11) return 16;
    if (z == 12) return 15;
    if (z == 13) return 14;
    if (z <= 15) return 13;
    if (z == 16) return 12;
    if (z == 17) return 11;
    if (z == 18) return 10;
    if (z == 19) return 9;
    if (z == 20) return 8;
    if (z <= 22) return 7;
    if (z == 23) return 6;
    if (z == 24) return 5;
    if (z == 25) return 4;
    if (z == 26) return 3;
    return 2;   // signed windowing needs C >= 2
}

// raw (unsigned) C-bit window of the scalar at pScalar, starting at startBit
function getChunk(pScalar: i32, startBit: i32): i32 {
    const bitsToEnd = SCBITS - startBit;
    let mask = (1 << C) - 1;
    if (C > bitsToEnd) mask = (1 << bitsToEnd) - 1;
    let v: i32 = load<i32>(pScalar + (startBit >> 3));
    v = v >>> (startBit & 7);
    return v & mask;
}

// carry-recode pass: store the carry flowing INTO each window (column-major)
function recode(): void {
    for (let i = 0; i < NPTS; i++) {
        let carry = 0;
        const pS = PSCAL + i * SCS;
        for (let j = 0; j < NWIN; j++) {
            store<u8>(PCARRY + j * NPTS + i, carry as u8);
            const sb = j * C;
            let raw = 0;
            if (sb < SCBITS) raw = getChunk(pS, sb);
            if (raw + carry >= HALF) carry = 1;
            else carry = 0;
        }
    }
}

// signed digit of point i in window j, in [-2^(C-1), 2^(C-1)-1]
function digitFor(i: i32, j: i32): i32 {
    const sb = j * C;
    let raw = 0;
    if (sb < SCBITS) raw = getChunk(PSCAL + i * SCS, sb);
    let d = raw + (load<u8>(PCARRY + j * NPTS + i) as i32);
    if (d >= HALF) d -= FULL;
    return d;
}

// apply entry k of the batch; LAM must already hold its lambda
function applyOne(k: i32): void {
    const t = load<u32>(PENTB + k * 4) as i32;
    const px2 = load<u32>(PENTX + k * 4) as i32;
    const pbx = PBUCK + t * (N8 << 1);
    const pby = pbx + N8;
    f_square(LAM, T1);
    f_sub(T1, pbx, T1);
    f_sub(T1, px2, T1);          // T1 = x3 = l^2 - x1 - x2
    f_sub(pbx, T1, T2);
    f_mul(LAM, T2, T2);
    f_sub(T2, pby, T2);          // T2 = y3 = l*(x1-x3) - y1
    fcopy(T1, pbx);
    fcopy(T2, pby);
}

// flush the pending batch: one field inversion for all NE denominators
function applyBatch(): void {
    if (NE == 0) return;
    fcopy(PDEN, PPREF);
    for (let k = 1; k < NE; k++) {
        f_mul(PPREF + (k - 1) * N8, PDEN + k * N8, PPREF + k * N8);
    }
    f_inverse(PPREF + (NE - 1) * N8, TINV);
    for (let k = NE - 1; k >= 1; k--) {
        f_mul(TINV, PPREF + (k - 1) * N8, T1);   // T1 = 1/den[k]
        f_mul(TINV, PDEN + k * N8, TINV);        // TINV = 1/prefix[k-1]
        f_mul(PNUM + k * N8, T1, LAM);
        applyOne(k);
    }
    f_mul(PNUM, TINV, LAM);
    applyOne(0);
    NE = 0;
}

// route one point (perm entry) into bucket t: place, schedule, double or cancel
function processEntry(e: i32, t: i32): void {
    const i = e >>> 1;
    const neg = e & 1;

    const px = PBASES + i * (N8 << 1);
    const py = px + N8;
    if (f_isZero(px) != 0 && f_isZero(py) != 0) return;   // zero-affine base

    const pbx = PBUCK + t * (N8 << 1);
    const pby = pbx + N8;

    if (load<u8>(POCC + t) == 0) {
        // empty bucket: place +-P directly (no field muls)
        fcopy(px, pbx);
        if (neg) f_neg(py, pby);
        else fcopy(py, pby);
        store<u8>(POCC + t, 1);
        return;
    }

    // occupied: schedule a batched affine add of +-P into the bucket
    const pd = PDEN + NE * N8;
    const pn = PNUM + NE * N8;
    f_sub(px, pbx, pd);                       // den = x2 - x1
    if (f_isZero(pd) != 0) {
        // same x: doubling or cancellation
        if (neg) f_add(pby, py, T1);          // y1 - (-y2) == 0 ?
        else f_sub(pby, py, T1);              // y1 - y2 == 0 ?
        if (f_isZero(T1) != 0) {
            // P == bucket: double. num = 3*x1^2, den = 2*y1
            f_square(pbx, T1);
            f_add(T1, T1, T2);
            f_add(T2, T1, pn);
            f_add(pby, pby, pd);
        } else {
            // P == -bucket: cancels to infinity
            store<u8>(POCC + t, 0);
            return;
        }
    } else {
        // num = (+-y2) - y1
        if (neg) { f_add(py, pby, pn); f_neg(pn, pn); }
        else f_sub(py, pby, pn);
    }
    store<u32>(PENTB + NE * 4, t as u32);
    store<u32>(PENTX + NE * 4, px as u32);
    NE++;
    if (NE == BATCH) applyBatch();
}

// fill + reduce one window; result (jacobian) into pAcc
function processWindow(j: i32, pAcc: i32, pTmp: i32): void {
    // --- pass 1: digits + per-bucket counts ---
    for (let t = 0; t < NB; t++) {
        store<u32>(PCNT + t * 4, 0);
        store<u8>(POCC + t, 0);
    }
    let maxOcc = 0;
    for (let i = 0; i < NPTS; i++) {
        const d = digitFor(i, j);
        store<i32>(PDIG + i * 4, d);
        if (d != 0) {
            const t = (d > 0 ? d - 1 : -d - 1);
            const cn = (load<u32>(PCNT + t * 4) as i32) + 1;
            store<u32>(PCNT + t * 4, cn as u32);
            if (cn > maxOcc) maxOcc = cn;
        }
    }

    // --- pass 2: layer sizes + segment starts ---
    // A point's rank within its bucket is its LAYER. Layer L has one entry per
    // bucket with more than L points: lcnt[L] = #buckets with cnt > L.
    for (let L = 0; L < maxOcc; L++) store<u32>(PLCNT + L * 4, 0);
    for (let t = 0; t < NB; t++) {
        const cn = load<u32>(PCNT + t * 4) as i32;
        for (let r = 0; r < cn; r++) {
            store<u32>(PLCNT + r * 4, (load<u32>(PLCNT + r * 4) + 1));
        }
    }
    let s = 0;
    for (let L = 0; L < maxOcc; L++) {
        store<u32>(PLSTART + L * 4, s as u32);
        store<u32>(PLFILL + L * 4, s as u32);
        s += load<u32>(PLCNT + L * 4) as i32;
    }

    // --- pass 3: stable scatter by rank; each layer keeps ascending point
    // order, so the fill phase reads the bases near-sequentially (the random
    // accesses land in the small bucket array instead of the big bases run) ---
    for (let t = 0; t < NB; t++) store<u32>(PFILL + t * 4, 0);
    for (let i = 0; i < NPTS; i++) {
        const d = load<i32>(PDIG + i * 4);
        if (d != 0) {
            let t: i32;
            let neg: i32;
            if (d > 0) { t = d - 1; neg = 0; }
            else { t = -d - 1; neg = 1; }
            const r = load<u32>(PFILL + t * 4) as i32;      // rank = layer
            store<u32>(PFILL + t * 4, (r + 1) as u32);
            const pos = load<u32>(PLFILL + r * 4) as i32;
            store<u32>(PLFILL + r * 4, (pos + 1) as u32);
            store<u32>(PPERM + pos * 8, ((i << 1) | neg) as u32);
            store<u32>(PPERM + pos * 8 + 4, t as u32);
        }
    }

    // --- conflict-free layers (a bucket appears at most once per layer) ---
    NE = 0;
    for (let L = 0; L < maxOcc; L++) {
        const from = load<u32>(PLSTART + L * 4) as i32;
        const to = from + (load<u32>(PLCNT + L * 4) as i32);
        for (let k = from; k < to; k++) {
            processEntry(load<u32>(PPERM + k * 8) as i32, load<u32>(PPERM + k * 8 + 4) as i32);
        }
        applyBatch();   // layer boundary: next layer may touch the same buckets
    }

    // --- running-sum reduction: acc = sum_{m=1..NB} m * bucket[m-1] ---
    g_zero(pAcc);
    g_zero(pTmp);
    for (let t = NB - 1; t >= 0; t--) {
        if (load<u8>(POCC + t) != 0) g_addMixed(pTmp, PBUCK + t * (N8 << 1), pTmp);
        g_add(pAcc, pTmp, pAcc);
    }
}

// entry point. pr receives the jacobian result (3*n8f bytes).
export function multiexpAffine(pBases: i32, pScalars: i32, scalarSize: i32, n: i32, pr: i32, n8f: i32): void {
    g_zero(pr);
    if (n == 0) return;

    N8 = n8f;
    NPTS = n;
    SCS = scalarSize;
    SCBITS = scalarSize << 3;
    PBASES = pBases;
    PSCAL = pScalars;
    C = winSize(n);
    HALF = 1 << (C - 1);
    FULL = 1 << C;
    NB = HALF;
    const nChunks = (SCBITS - 1) / C + 1;
    NWIN = nChunks + 1;                      // +1 carry-guard window

    const saved: u32 = load<u32>(0);
    PCARRY = allocMem(NWIN * n);
    PBUCK = allocMem(NB * (N8 << 1));
    POCC = allocMem(NB);
    PDIG = allocMem(n * 4);
    PPERM = allocMem(n * 8);
    PCNT = allocMem(NB * 4);
    PFILL = allocMem(NB * 4);
    PLCNT = allocMem((n + 1) * 4);
    PLSTART = allocMem((n + 1) * 4);
    PLFILL = allocMem((n + 1) * 4);
    PENTB = allocMem(BATCH * 4);
    PENTX = allocMem(BATCH * 4);
    PNUM = allocMem(BATCH * N8);
    PDEN = allocMem(BATCH * N8);
    PPREF = allocMem(BATCH * N8);
    T1 = allocMem(N8);
    T2 = allocMem(N8);
    LAM = allocMem(N8);
    TINV = allocMem(N8);
    const pAux = allocMem(3 * N8);
    const pTmp = allocMem(3 * N8);

    recode();

    for (let j = NWIN - 1; j >= 0; j--) {
        if (g_isZero(pr) == 0) {
            for (let k = 0; k < C; k++) g_double(pr, pr);
        }
        processWindow(j, pAux, pTmp);
        g_add(pr, pAux, pr);
    }

    store<u32>(0, saved);
}
