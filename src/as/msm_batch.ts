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
@external("curve", "f_conj") declare function f_conj(a: i32, r: i32): void;

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
// GLV state: items >= NORIG use the materialized phi-bases table; PSIGN (when
// nonzero) holds a per-item sub-scalar sign that flips the item's digits.
let NORIG: i32 = 0;
let PPHI: i32 = 0;
let PSIGN: i32 = 0;

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

// ---------------------------------------------------------------------------
// Scalar-size partitioning (ported from rapidsnark/ffiasm's MSM):
// classify scalars by significant bits BEFORE the bucket method. Zeros are
// dropped, ones are accumulated with plain mixed additions, scalars up to
// SMALL_BITS run Pippenger over few windows, and only full-width scalars pay
// full window costs. Witness MSMs (A/B1/B2/C) are dominated by 0/1 wires --
// a sha256 witness is ~2/3 zeros and ~1/3 ones -- while the H MSM's uniform
// scalars take the (nearly)-all-big fast path and skip the gather.

const SMALL_BITS: i32 = 64;

// partition scan results (globals: AS functions cannot return tuples)
let PN_ZERO: i32 = 0;
let PN_ONE: i32 = 0;
let PN_SMALL: i32 = 0;
let PN_BIG: i32 = 0;
let PMAX_SMALL: i32 = 0;    // max significant bits among small scalars
let PMAX_BIG: i32 = 0;      // max significant bits among big scalars

// significant bits of the scs-byte little-endian scalar at pS (0 if zero)
function sigBits(pS: i32, scs: i32): i32 {
    for (let b = scs - 1; b >= 0; b--) {
        const v = load<u8>(pS + b) as i32;
        if (v != 0) return (b << 3) + (32 - clz<i32>(v));
    }
    return 0;
}

// classify each scalar into zero(0) / one(1) / small(2) / big(3), one byte
// per scalar at pCls; counts and max bit-lengths land in the PN_*/PMAX_*
// globals.
function partitionScan(pScalars: i32, scs: i32, n: i32, pCls: i32): void {
    PN_ZERO = 0; PN_ONE = 0; PN_SMALL = 0; PN_BIG = 0;
    PMAX_SMALL = 0; PMAX_BIG = 0;
    for (let i = 0; i < n; i++) {
        const bits = sigBits(pScalars + i * scs, scs);
        let cls: i32;
        if (bits == 0) { cls = 0; PN_ZERO++; }
        else if (bits == 1) { cls = 1; PN_ONE++; }
        else if (bits <= SMALL_BITS) {
            cls = 2; PN_SMALL++;
            if (bits > PMAX_SMALL) PMAX_SMALL = bits;
        } else {
            cls = 3; PN_BIG++;
            if (bits > PMAX_BIG) PMAX_BIG = bits;
        }
        store<u8>(pCls + i, cls as u8);
    }
}

// 8-byte-chunk copy (len must be a multiple of 8 -- point/scalar sizes are)
function memCopy8(src: i32, dst: i32, len: i32): void {
    for (let k = 0; k < len; k += 8) store<u64>(dst + k, load<u64>(src + k));
}

// pAcc (jacobian) += affine base at pB, skipping the (0,0) infinity encoding
function addAffineIf(pAcc: i32, pB: i32): void {
    if (f_isZero(pB) != 0 && f_isZero(pB + N8) != 0) return;
    g_addMixed(pAcc, pB, pAcc);
}

// plain (no endomorphism) MSM over contiguous bases/scalars into pr (zeroed
// here). scbits clamps the window sweep to the partition's real bit-width;
// the carry-guard window in msmRun absorbs the recode carry past it.
function runPlain(pB: i32, pS: i32, scs: i32, scbits: i32, n: i32, pr: i32): void {
    g_zero(pr);
    if (n == 0) return;
    NPTS = n;
    SCS = scs;
    SCBITS = scbits;
    PBASES = pB;
    PSCAL = pS;
    NORIG = n;
    PPHI = 0;
    PSIGN = 0;
    C = winSize(n);
    msmRun(pr);
}

// Shared partitioned driver. runBig executes the big partition (plain, GLV
// or GLS -- whatever the entry point uses) over gathered bases/scalars into
// a zeroed jacobian target. Assumes partitionScan() has already filled the
// class array at pCls and the PN_*/PMAX_* globals.
// Returns false when the caller should use its own (nearly) all-big fast
// path over the ORIGINAL input instead (partitioning would only pay gather
// costs); true when pr holds the finished result.
function runPartitionedRest(pBases: i32, pScalars: i32, scalarSize: i32, n: i32,
    pr: i32, pCls: i32): bool {
    // (nearly) all full width: the gather saves nothing
    if (PN_BIG >= n - (n >> 4)) return false;

    const sG = N8 << 1;

    // all small: bases and scalars are usable in place; just clamp the sweep
    if (PN_SMALL == n) {
        runPlain(pBases, pScalars, scalarSize, PMAX_SMALL, n, pr);
        return true;
    }

    // mixed: ones direct-added into pr; small/big gathered and run separately
    g_zero(pr);
    const pTmp = allocMem(3 * N8);

    if (PN_ONE > 0) {
        for (let i = 0; i < n; i++) {
            if (load<u8>(pCls + i) == 1) addAffineIf(pr, pBases + i * sG);
        }
    }

    if (PN_SMALL > 0) {
        const pSB = allocMem(PN_SMALL * sG);
        const pSS = allocMem(PN_SMALL << 3);
        let k = 0;
        for (let i = 0; i < n; i++) {
            if (load<u8>(pCls + i) == 2) {
                memCopy8(pBases + i * sG, pSB + k * sG, sG);
                store<u64>(pSS + (k << 3), load<u64>(pScalars + i * scalarSize));
                k++;
            }
        }
        runPlain(pSB, pSS, 8, PMAX_SMALL, PN_SMALL, pTmp);
        g_add(pr, pTmp, pr);
    }

    if (PN_BIG > 0) {
        const pBB = allocMem(PN_BIG * sG);
        const pBS = allocMem(PN_BIG * scalarSize);
        let k = 0;
        for (let i = 0; i < n; i++) {
            if (load<u8>(pCls + i) == 3) {
                memCopy8(pBases + i * sG, pBB + k * sG, sG);
                memCopy8(pScalars + i * scalarSize, pBS + k * scalarSize, scalarSize);
                k++;
            }
        }
        runBigPartition(pBB, pBS, scalarSize, PN_BIG, pTmp);
        g_add(pr, pTmp, pr);
    }

    return true;
}

// how the current entry point wants its big partition executed:
// 0 = plain, 1 = GLV, 2 = GLS. Set before runPartitionedRest.
let BIG_MODE: i32 = 0;
let PGC: i32 = 0;   // decomposition constants for GLV/GLS big runs

function runBigPartition(pB: i32, pS: i32, scalarSize: i32, n: i32, pr: i32): void {
    if (BIG_MODE == 1) runGlv(pB, pS, n, pr);
    else if (BIG_MODE == 2) runGls(pB, pS, n, pr);
    else runPlain(pB, pS, scalarSize, PMAX_BIG, n, pr);
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
    // e = ((basePtr >> 2) << 1) | neg  (pointers are 4-byte aligned -- the bump
    // allocators guarantee only 4-byte alignment, so encode at that granularity)
    const neg = e & 1;
    const px = (e >>> 1) << 2;
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
        let d = digitFor(i, j);
        if (PSIGN != 0) {
            if (load<u8>(PSIGN + i) != 0) d = 0 - d;
        }
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
            let pb: i32;
            if (i < NORIG) pb = PBASES + i * (N8 << 1);
            else pb = PPHI + (i - NORIG) * (N8 << 1);
            store<u32>(PPERM + pos * 8, (((pb >> 2) << 1) | neg) as u32);
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

// core MSM over the prepared globals (N8, NPTS, SCS, SCBITS, PSCAL, PBASES,
// NORIG, PPHI, PSIGN, C). Allocates its scratch from the bump allocator; the
// caller saves/restores the allocator pointer.
function msmRun(pr: i32): void {
    HALF = 1 << (C - 1);
    FULL = 1 << C;
    NB = HALF;
    NWIN = (SCBITS - 1) / C + 1 + 1;         // +1 carry-guard window

    const n = NPTS;
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
}

// entry point. pr receives the jacobian result (3*n8f bytes).
export function multiexpAffine(pBases: i32, pScalars: i32, scalarSize: i32, n: i32, pr: i32, n8f: i32): void {
    g_zero(pr);
    if (n == 0) return;

    N8 = n8f;
    const saved: u32 = load<u32>(0);

    const pCls = allocMem(n);
    partitionScan(pScalars, scalarSize, n, pCls);
    BIG_MODE = 0;
    if (!runPartitionedRest(pBases, pScalars, scalarSize, n, pr, pCls)) {
        // (nearly) all big: run in place, window sweep clamped to the real max
        runPlain(pBases, pScalars, scalarSize,
            PMAX_BIG > 0 ? PMAX_BIG : 1, n, pr);
    }
    store<u32>(0, saved);
}

// ------------------------- GLV (bn254 G1) -------------------------
// k*P = k1*P + k2*phi(P) with phi(x,y) = (beta*x, y) = lambda*(x,y) and
// k = k1 + lambda*k2 (mod r), |k1|,|k2| < 2^127. Halves the window count
// (128-bit sub-scalars) at the cost of materializing the phi bases (one
// field mul per point) and one decomposition per scalar.

// GLV constants, generalized layout shared by both curves (verified offline;
// beta/lambda pairings verified empirically against lambda*P on each curve):
//   0: W1 = floor(b2*2^256/r) (7 limbs)     28: W2 = floor(|b1|*2^256/r) (7)
//   56: a1 (4 limbs)   72: a2 (4)   88: |b1| (4)   104: |b2| (4)
//   120: beta in Montgomery form (n8f bytes)
// Both curves have b1 < 0 and b2 > 0, so the decomposition code is shared.
function writeGlvConstsBn254(p: i32): void {
    store<u32>(p + 0, 0xc7e0b3d7);
    store<u32>(p + 4, 0xd91d232e);
    store<u32>(p + 8, 0x00000002);
    store<u32>(p + 12, 0x00000000);
    store<u32>(p + 16, 0x00000000);
    store<u32>(p + 20, 0x00000000);
    store<u32>(p + 24, 0x00000000);
    store<u32>(p + 28, 0x391eb18d);
    store<u32>(p + 32, 0x7a7bd9d4);
    store<u32>(p + 36, 0xa773d2cf);
    store<u32>(p + 40, 0x4ccef014);
    store<u32>(p + 44, 0x00000002);
    store<u32>(p + 48, 0x00000000);
    store<u32>(p + 52, 0x00000000);
    store<u32>(p + 56, 0x94d213e3);
    store<u32>(p + 60, 0x89d32568);
    store<u32>(p + 64, 0x00000000);
    store<u32>(p + 68, 0x00000000);
    store<u32>(p + 72, 0x1221250b);
    store<u32>(p + 76, 0x0be4e154);
    store<u32>(p + 80, 0xeeb859fd);
    store<u32>(p + 84, 0x6f4d8248);
    store<u32>(p + 88, 0x7d4f1128);
    store<u32>(p + 92, 0x8211bbeb);
    store<u32>(p + 96, 0xeeb859fc);
    store<u32>(p + 100, 0x6f4d8248);
    store<u32>(p + 104, 0x94d213e3);
    store<u32>(p + 108, 0x89d32568);
    store<u32>(p + 112, 0x00000000);
    store<u32>(p + 116, 0x00000000);
    store<u32>(p + 120, 0xd782e155);
    store<u32>(p + 124, 0x71930c11);
    store<u32>(p + 128, 0xffbe3323);
    store<u32>(p + 132, 0xa6bb947c);
    store<u32>(p + 136, 0xd4741444);
    store<u32>(p + 140, 0xaa303344);
    store<u32>(p + 144, 0x26594943);
    store<u32>(p + 148, 0x2c3b3f0d);
}

function writeGlvConstsBls12381(p: i32): void {
    store<u32>(p + 0, 0xf6cfee30);
    store<u32>(p + 4, 0x63f6e522);
    store<u32>(p + 8, 0xe01faadd);
    store<u32>(p + 12, 0x7c6becf1);
    store<u32>(p + 16, 0x00000001);
    store<u32>(p + 20, 0x00000000);
    store<u32>(p + 24, 0x00000000);
    store<u32>(p + 28, 0x00000002);
    store<u32>(p + 32, 0x00000000);
    store<u32>(p + 36, 0x00000000);
    store<u32>(p + 40, 0x00000000);
    store<u32>(p + 44, 0x00000000);
    store<u32>(p + 48, 0x00000000);
    store<u32>(p + 52, 0x00000000);
    store<u32>(p + 56, 0xffffffff);
    store<u32>(p + 60, 0x00000000);
    store<u32>(p + 64, 0x0001a402);
    store<u32>(p + 68, 0xac45a401);
    store<u32>(p + 72, 0x00000001);
    store<u32>(p + 76, 0x00000000);
    store<u32>(p + 80, 0x00000000);
    store<u32>(p + 84, 0x00000000);
    store<u32>(p + 88, 0x00000001);
    store<u32>(p + 92, 0x00000000);
    store<u32>(p + 96, 0x00000000);
    store<u32>(p + 100, 0x00000000);
    store<u32>(p + 104, 0x00000000);
    store<u32>(p + 108, 0x00000001);
    store<u32>(p + 112, 0x0001a402);
    store<u32>(p + 116, 0xac45a401);
    store<u32>(p + 120, 0x8671f071);
    store<u32>(p + 124, 0xcd03c9e4);
    store<u32>(p + 128, 0x1fcda5d2);
    store<u32>(p + 132, 0x5dab2246);
    store<u32>(p + 136, 0xd3851b95);
    store<u32>(p + 140, 0x587042af);
    store<u32>(p + 144, 0x01bacb9e);
    store<u32>(p + 148, 0x8eb60ebe);
    store<u32>(p + 152, 0x83d050d2);
    store<u32>(p + 156, 0x03f97d6e);
    store<u32>(p + 160, 0x54638741);
    store<u32>(p + 164, 0x18f02065);
}

// out = x*y, schoolbook 32-bit limbs, truncated to `no` limbs
function mulLimbs(pX: i32, nx: i32, pY: i32, ny: i32, pOut: i32, no: i32): void {
    for (let k = 0; k < no; k++) store<u32>(pOut + k * 4, 0);
    for (let i = 0; i < nx; i++) {
        if (i >= no) break;
        const xi: u64 = load<u32>(pX + i * 4) as u64;
        if (xi == 0) continue;
        let c: u64 = 0;
        let j = 0;
        for (; j < ny; j++) {
            const idx = i + j;
            if (idx >= no) break;
            const s: u64 = (load<u32>(pOut + idx * 4) as u64) + xi * (load<u32>(pY + j * 4) as u64) + c;
            store<u32>(pOut + idx * 4, s as u32);
            c = s >> 32;
        }
        for (let idx = i + j; idx < no; idx++) {
            if (c == 0) break;
            const s: u64 = (load<u32>(pOut + idx * 4) as u64) + c;
            store<u32>(pOut + idx * 4, s as u32);
            c = s >> 32;
        }
    }
}

// pOut(no limbs) = (pt + 2^255) >> 256   (rounding shift for the c_i)
function roundShift(pt: i32, nt: i32, pOut: i32, no: i32): void {
    let c: u64 = ((load<u32>(pt + 28) as u64) + 0x80000000) >> 32;
    for (let j = 0; j < no; j++) {
        let v: u64 = c;
        if (8 + j < nt) v += load<u32>(pt + (8 + j) * 4) as u64;
        store<u32>(pOut + j * 4, v as u32);
        c = v >> 32;
    }
}

// 5-limb (160-bit) two's-complement helpers
function sub5(pA: i32, pB: i32, pR: i32): void {
    let bw: u64 = 0;
    for (let j = 0; j < 5; j++) {
        const d: u64 = (load<u32>(pA + j * 4) as u64) + 0x100000000 - (load<u32>(pB + j * 4) as u64) - bw;
        store<u32>(pR + j * 4, d as u32);
        bw = 1 - (d >> 32);
    }
}
function neg5(pW: i32): void {
    let c: u64 = 1;
    for (let j = 0; j < 5; j++) {
        const v: u64 = ((load<u32>(pW + j * 4) ^ 0xffffffff) as u64) + c;
        store<u32>(pW + j * 4, v as u32);
        c = v >> 32;
    }
}

// decompose canonical k (8 limbs) -> |k1|,|k2| (4 limbs each; < 2^127).
// Returns bit0 = sign(k1), bit1 = sign(k2).
function glvDecompose(pK: i32, pgc: i32, pt: i32, pc1: i32, pc2: i32,
                      pu: i32, pv: i32, pw: i32, pK1: i32, pK2: i32): i32 {
    mulLimbs(pK, 8, pgc, 7, pt, 15);              // k * W1
    roundShift(pt, 15, pc1, 5);                   // c1
    mulLimbs(pK, 8, pgc + 28, 7, pt, 15);         // k * W2
    roundShift(pt, 15, pc2, 5);                   // c2
    // k1 = k - c1*a1 - c2*a2   (mod 2^160, two's complement)
    mulLimbs(pc1, 5, pgc + 56, 4, pu, 5);
    mulLimbs(pc2, 5, pgc + 72, 4, pv, 5);
    sub5(pK, pu, pw);
    sub5(pw, pv, pw);
    let sg = 0;
    if ((load<u32>(pw + 16) & 0x80000000) != 0) { neg5(pw); sg = 1; }
    store<u64>(pK1, load<u64>(pw));
    store<u64>(pK1 + 8, load<u64>(pw + 8));
    // k2 = c1*|b1| - c2*b2     (b1 is negative, so -c1*b1 = c1*|b1|)
    mulLimbs(pc1, 5, pgc + 88, 4, pu, 5);
    mulLimbs(pc2, 5, pgc + 104, 4, pv, 5);
    sub5(pu, pv, pw);
    if ((load<u32>(pw + 16) & 0x80000000) != 0) { neg5(pw); sg |= 2; }
    store<u64>(pK2, load<u64>(pw));
    store<u64>(pK2 + 8, load<u64>(pw + 8));
    return sg;
}

// 3-limb (96-bit) two's-complement helpers for the GLS decomposition
function sub3(pA: i32, pB: i32, pR: i32): void {
    let bw: u64 = 0;
    for (let j = 0; j < 3; j++) {
        const d: u64 = (load<u32>(pA + j * 4) as u64) + 0x100000000 - (load<u32>(pB + j * 4) as u64) - bw;
        store<u32>(pR + j * 4, d as u32);
        bw = 1 - (d >> 32);
    }
}
function add3(pA: i32, pB: i32, pR: i32): void {
    let c: u64 = 0;
    for (let j = 0; j < 3; j++) {
        const s: u64 = (load<u32>(pA + j * 4) as u64) + (load<u32>(pB + j * 4) as u64) + c;
        store<u32>(pR + j * 4, s as u32);
        c = s >> 32;
    }
}
function neg3(pW: i32): void {
    let c: u64 = 1;
    for (let j = 0; j < 3; j++) {
        const v: u64 = ((load<u32>(pW + j * 4) ^ 0xffffffff) as u64) + c;
        store<u32>(pW + j * 4, v as u32);
        c = v >> 32;
    }
}

// bn254 GLS (G2) constants, recomputed & verified offline: Babai rounding
// constants W_j = floor(adj_j*2^256/r) (all positive), the LLL-reduced 4-dim
// lattice basis |b_ji| + signs, and the psi/psi^2/psi^3 Frobenius-twist
// multipliers in Montgomery form (Gx, Gy, NxE, NyE, Gx3, Gy3).
function writeGlsConsts(p: i32): void {
    store<u32>(p + 0, 0x32e42728);
    store<u32>(p + 4, 0x2dff2915);
    store<u32>(p + 8, 0xa3e5577f);
    store<u32>(p + 12, 0x55b4ca7b);
    store<u32>(p + 16, 0xb0d92b95);
    store<u32>(p + 20, 0x9e80318a);
    store<u32>(p + 24, 0x00000000);
    store<u32>(p + 28, 0x95d51bb1);
    store<u32>(p + 32, 0x46f4bda9);
    store<u32>(p + 36, 0xfc7184ae);
    store<u32>(p + 40, 0x08e5da66);
    store<u32>(p + 44, 0xb0d92b93);
    store<u32>(p + 48, 0x9e80318a);
    store<u32>(p + 52, 0x00000000);
    store<u32>(p + 56, 0xc7e0b3d7);
    store<u32>(p + 60, 0xd91d232e);
    store<u32>(p + 64, 0x00000002);
    store<u32>(p + 68, 0x00000000);
    store<u32>(p + 72, 0x00000000);
    store<u32>(p + 76, 0x00000000);
    store<u32>(p + 80, 0x00000000);
    store<u32>(p + 84, 0xcef3cd3f);
    store<u32>(p + 88, 0xc170977d);
    store<u32>(p + 92, 0xa3e5577d);
    store<u32>(p + 96, 0x55b4ca7b);
    store<u32>(p + 100, 0xb0d92b95);
    store<u32>(p + 104, 0x9e80318a);
    store<u32>(p + 108, 0x00000000);
    store<u32>(p + 112, 0x94d213e3);
    store<u32>(p + 116, 0x89d32568);
    store<u32>(p + 120, 0x00000000);
    store<u32>(p + 124, 0x00000000);
    store<u32>(p + 128, 0x94d213e2);
    store<u32>(p + 132, 0x89d32568);
    store<u32>(p + 136, 0x00000001);
    store<u32>(p + 140, 0x00000000);
    store<u32>(p + 144, 0x94d213e2);
    store<u32>(p + 148, 0x89d32568);
    store<u32>(p + 152, 0x4a6909f2);
    store<u32>(p + 156, 0x44e992b4);
    store<u32>(p + 160, 0x4a6909f1);
    store<u32>(p + 164, 0x44e992b4);
    store<u32>(p + 168, 0x4a6909f1);
    store<u32>(p + 172, 0x44e992b4);
    store<u32>(p + 176, 0x4a6909f2);
    store<u32>(p + 180, 0x44e992b4);
    store<u32>(p + 184, 0x4a6909f1);
    store<u32>(p + 188, 0x44e992b4);
    store<u32>(p + 192, 0x4a6909f1);
    store<u32>(p + 196, 0x44e992b4);
    store<u32>(p + 200, 0x94d213e2);
    store<u32>(p + 204, 0x89d32568);
    store<u32>(p + 208, 0x94d213e3);
    store<u32>(p + 212, 0x89d32568);
    store<u32>(p + 216, 0x4a6909f1);
    store<u32>(p + 220, 0x44e992b4);
    store<u32>(p + 224, 0x4a6909f2);
    store<u32>(p + 228, 0x44e992b4);
    store<u32>(p + 232, 0x4a6909f1);
    store<u32>(p + 236, 0x44e992b4);
    store<u8>(p + 240, 0);
    store<u8>(p + 241, 0);
    store<u8>(p + 242, 0);
    store<u8>(p + 243, 0);
    store<u8>(p + 244, 0);
    store<u8>(p + 245, 0);
    store<u8>(p + 246, 1);
    store<u8>(p + 247, 0);
    store<u8>(p + 248, 0);
    store<u8>(p + 249, 0);
    store<u8>(p + 250, 0);
    store<u8>(p + 251, 1);
    store<u8>(p + 252, 0);
    store<u8>(p + 253, 1);
    store<u8>(p + 254, 1);
    store<u8>(p + 255, 1);
    store<u32>(p + 256, 0x4563ab30);
    store<u32>(p + 260, 0xb5773b10);
    store<u32>(p + 264, 0xa9aa6454);
    store<u32>(p + 268, 0x347f91c8);
    store<u32>(p + 272, 0x242e0991);
    store<u32>(p + 276, 0x7a007127);
    store<u32>(p + 280, 0x118214ec);
    store<u32>(p + 284, 0x1956bcd8);
    store<u32>(p + 288, 0xa0aa4757);
    store<u32>(p + 292, 0x6e849f1e);
    store<u32>(p + 296, 0x89f89141);
    store<u32>(p + 300, 0xaa1c7b6d);
    store<u32>(p + 304, 0xfae0ca3a);
    store<u32>(p + 308, 0xb6e713cd);
    store<u32>(p + 312, 0x4e82ebc3);
    store<u32>(p + 316, 0x26694fbb);
    store<u32>(p + 320, 0x2936b629);
    store<u32>(p + 324, 0xe4bbdd0c);
    store<u32>(p + 328, 0xe133bacb);
    store<u32>(p + 332, 0xbb30f162);
    store<u32>(p + 336, 0xf9645366);
    store<u32>(p + 340, 0x31a9d1b6);
    store<u32>(p + 344, 0xa500f8dd);
    store<u32>(p + 348, 0x253570be);
    store<u32>(p + 352, 0x5ffe77c7);
    store<u32>(p + 356, 0xa1d77ce4);
    store<u32>(p + 360, 0x7826d1db);
    store<u32>(p + 364, 0x07affd11);
    store<u32>(p + 368, 0xbb7edc6b);
    store<u32>(p + 372, 0x6d16bd27);
    store<u32>(p + 376, 0x85defecc);
    store<u32>(p + 380, 0x2c872002);
    store<u32>(p + 384, 0x13e80b9c);
    store<u32>(p + 388, 0x3350c88e);
    store<u32>(p + 392, 0xdb5e56b9);
    store<u32>(p + 396, 0x7dce557c);
    store<u32>(p + 400, 0xb615564a);
    store<u32>(p + 404, 0x6001b4b8);
    store<u32>(p + 408, 0x020217e0);
    store<u32>(p + 412, 0x2682e617);
    store<u32>(p + 416, 0x00000000);
    store<u32>(p + 420, 0x00000000);
    store<u32>(p + 424, 0x00000000);
    store<u32>(p + 428, 0x00000000);
    store<u32>(p + 432, 0x00000000);
    store<u32>(p + 436, 0x00000000);
    store<u32>(p + 440, 0x00000000);
    store<u32>(p + 444, 0x00000000);
    store<u32>(p + 448, 0x12edefaa);
    store<u32>(p + 452, 0x68c34889);
    store<u32>(p + 456, 0x72aabf4f);
    store<u32>(p + 460, 0x8d087f68);
    store<u32>(p + 464, 0x09081231);
    store<u32>(p + 468, 0x51e1a247);
    store<u32>(p + 472, 0x4729c0fa);
    store<u32>(p + 476, 0x2259d6b1);
    store<u32>(p + 480, 0x00000000);
    store<u32>(p + 484, 0x00000000);
    store<u32>(p + 488, 0x00000000);
    store<u32>(p + 492, 0x00000000);
    store<u32>(p + 496, 0x00000000);
    store<u32>(p + 500, 0x00000000);
    store<u32>(p + 504, 0x00000000);
    store<u32>(p + 508, 0x00000000);
    store<u32>(p + 512, 0x16ad6bad);
    store<u32>(p + 516, 0xc9af22f7);
    store<u32>(p + 520, 0x4aa662b2);
    store<u32>(p + 524, 0xb311782a);
    store<u32>(p + 528, 0xe248c7f4);
    store<u32>(p + 532, 0x19eeaf64);
    store<u32>(p + 536, 0xe3439f82);
    store<u32>(p + 540, 0x20273e77);
    store<u32>(p + 544, 0xf7ce93ac);
    store<u32>(p + 548, 0xacc02860);
    store<u32>(p + 552, 0x7ba76b4c);
    store<u32>(p + 556, 0x3933d581);
    store<u32>(p + 560, 0x446c8467);
    store<u32>(p + 564, 0x69e6188b);
    store<u32>(p + 568, 0x4417cc55);
    store<u32>(p + 572, 0x0a46036d);
    store<u32>(p + 576, 0xaf46471e);
    store<u32>(p + 580, 0x5764af0a);
    store<u32>(p + 584, 0x873e0fc1);
    store<u32>(p + 588, 0xdc50792e);
    store<u32>(p + 592, 0x881d04f6);
    store<u32>(p + 596, 0x86a673ff);
    store<u32>(p + 600, 0x3c30a74c);
    store<u32>(p + 604, 0x0b2eddb4);
    store<u32>(p + 608, 0x787e8580);
    store<u32>(p + 612, 0x9a490f32);
    store<u32>(p + 616, 0xf04af8b1);
    store<u32>(p + 620, 0x8fd16d7f);
    store<u32>(p + 624, 0xc6027bf2);
    store<u32>(p + 628, 0x4b39888e);
    store<u32>(p + 632, 0x5b52a15d);
    store<u32>(p + 636, 0x03dd2e70);
}

// 4-dim decomposition: k = k1 + k2*lam + k3*lam^2 + k4*lam^3 (mod r),
// |k_i| < 2^66. Writes |k_i| into pOut + i*stride (12 bytes each); returns
// sign bits (bit i = sign of k_{i+1}).
function glsDecompose(pK: i32, pgc: i32, pt: i32, pc: i32, pt2: i32, pw: i32,
                      pOut: i32, stride: i32): i32 {
    for (let j = 0; j < 4; j++) {
        mulLimbs(pK, 8, pgc + j * 28, 7, pt, 15);
        roundShift(pt, 15, pc + j * 12, 3);          // c_j mod 2^96 (all W_j > 0)
    }
    let sg = 0;
    for (let i = 0; i < 4; i++) {
        // acc = (i == 0 ? k : 0) mod 2^96
        if (i == 0) {
            store<u32>(pw, load<u32>(pK));
            store<u32>(pw + 4, load<u32>(pK + 4));
            store<u32>(pw + 8, load<u32>(pK + 8));
        } else {
            store<u32>(pw, 0); store<u32>(pw + 4, 0); store<u32>(pw + 8, 0);
        }
        for (let j = 0; j < 4; j++) {
            mulLimbs(pc + j * 12, 3, pgc + 112 + ((j << 2) + i) * 8, 2, pt2, 3);
            // k_i -= c_j * b_ji ; negative b_ji flips the subtraction to an add
            if (load<u8>(pgc + 240 + (j << 2) + i) != 0) add3(pw, pt2, pw);
            else sub3(pw, pt2, pw);
        }
        if ((load<u32>(pw + 8) & 0x80000000) != 0) { neg3(pw); sg |= (1 << i); }
        store<u32>(pOut + i * stride, load<u32>(pw));
        store<u32>(pOut + i * stride + 4, load<u32>(pw + 4));
        store<u32>(pOut + i * stride + 8, load<u32>(pw + 8));
    }
    return sg;
}

// test hook: writes |k1..k4| (12B each, contiguous) at pOut, returns sign bits
export function glsDecomposeTest(pK: i32, pOut: i32): i32 {
    const saved: u32 = load<u32>(0);
    const pgc = allocMem(640);
    writeGlsConsts(pgc);
    const pt = allocMem(60), pc = allocMem(48), pt2 = allocMem(12), pw = allocMem(12);
    const sg = glsDecompose(pK, pgc, pt, pc, pt2, pw, pOut, 12);
    store<u32>(0, saved);
    return sg;
}

// GLS core over gathered full-width scalars: 4-dim decomposition + psi
// orbits over the quadrupled point set. PGC must already hold the GLS
// constants. pr is zeroed here.
function runGls(pBases: i32, pScalars: i32, n: i32, pr: i32): void {
    g_zero(pr);
    if (n == 0) return;

    const pgc = PGC;
    const pt = allocMem(60), pc = allocMem(48), pt2 = allocMem(12), pw = allocMem(12);
    const pSub = allocMem((n << 2) * 12);
    const psign = allocMem(n << 2);
    const pphi = allocMem(3 * n * (N8 << 1));     // psi(P), psi^2(P), psi^3(P)
    const ct = allocMem(N8);

    for (let i = 0; i < n; i++) {
        const sg = glsDecompose(pScalars + i * 32, pgc, pt, pc, pt2, pw,
            pSub + i * 12, n * 12);
        store<u8>(psign + i, (sg & 1) as u8);
        store<u8>(psign + n + i, ((sg >> 1) & 1) as u8);
        store<u8>(psign + 2 * n + i, ((sg >> 2) & 1) as u8);
        store<u8>(psign + 3 * n + i, ((sg >> 3) & 1) as u8);
    }
    // materialize the psi orbits:
    //   psi(x,y)   = (conj(x)*Gx,  conj(y)*Gy)
    //   psi^2(x,y) = (x*NxE,       y*NyE)          (NxE, NyE in Fq)
    //   psi^3(x,y) = (conj(x)*Gx3, conj(y)*Gy3)
    const sG = N8 << 1;
    for (let i = 0; i < n; i++) {
        const px = pBases + i * sG;
        const py = px + N8;
        const d1 = pphi + i * sG;
        const d2 = pphi + (n + i) * sG;
        const d3 = pphi + (2 * n + i) * sG;
        f_conj(px, ct); f_mul(ct, pgc + 256, d1);
        f_conj(py, ct); f_mul(ct, pgc + 320, d1 + N8);
        f_mul(px, pgc + 384, d2);
        f_mul(py, pgc + 448, d2 + N8);
        f_conj(px, ct); f_mul(ct, pgc + 512, d3);
        f_conj(py, ct); f_mul(ct, pgc + 576, d3 + N8);
    }

    NPTS = n << 2;
    SCS = 12;
    SCBITS = 68;
    PSCAL = pSub;
    PBASES = pBases;
    PPHI = pphi;
    NORIG = n;
    PSIGN = psign;
    C = winSize(n << 2);

    msmRun(pr);
}

// GLS entry point: bn254 G2 only (32-byte scalars, 64-byte Fq2 elements);
// anything else falls through to the generic path. Scalars are partitioned
// first (GLS decomposition only pays for full-width scalars); the cache
// budget below is checked against the BIG partition, since that is what
// gets the psi-orbit materialization.
export function multiexpAffineGLS(pBases: i32, pScalars: i32, scalarSize: i32, n: i32, pr: i32, n8f: i32): void {
    if (scalarSize != 32 || n8f != 64) {
        multiexpAffine(pBases, pScalars, scalarSize, n, pr, n8f);
        return;
    }
    g_zero(pr);
    if (n == 0) return;

    N8 = n8f;
    const saved: u32 = load<u32>(0);

    const pCls = allocMem(n);
    partitionScan(pScalars, scalarSize, n, pCls);

    // The psi-orbit materialization quadruples the bases working set (4n
    // points of 2*n8f bytes). Measured on G2: GLS wins while that set stays
    // cache-resident (~24% at <= 3 MiB) and loses beyond it (~-13% at 4+
    // MiB) -- gauge it on the big partition, the part that actually gets
    // decomposed, and fall back to the plain batch path above the budget.
    if (((PN_BIG << 2) * (n8f << 1)) > (3 << 20)) {
        BIG_MODE = 0;
        if (!runPartitionedRest(pBases, pScalars, scalarSize, n, pr, pCls)) {
            runPlain(pBases, pScalars, scalarSize,
                PMAX_BIG > 0 ? PMAX_BIG : 1, n, pr);
        }
        store<u32>(0, saved);
        return;
    }

    PGC = allocMem(640);
    writeGlsConsts(PGC);
    BIG_MODE = 2;
    if (!runPartitionedRest(pBases, pScalars, scalarSize, n, pr, pCls)) {
        runGls(pBases, pScalars, n, pr);
    }
    store<u32>(0, saved);
}

// test hook: writes |k1| (16B) then |k2| (16B) at pOut, returns the sign bits
export function glvDecomposeTest(pK: i32, pOut: i32, n8f: i32): i32 {
    const saved: u32 = load<u32>(0);
    const pgc = allocMem(120 + n8f);
    if (n8f == 48) writeGlvConstsBls12381(pgc);
    else writeGlvConstsBn254(pgc);
    const pt = allocMem(60), pc1 = allocMem(20), pc2 = allocMem(20);
    const pu = allocMem(20), pv = allocMem(20), pw = allocMem(20);
    const sg = glvDecompose(pK, pgc, pt, pc1, pc2, pu, pv, pw, pOut, pOut + 16);
    store<u32>(0, saved);
    return sg;
}

// GLV core over gathered full-width scalars: decompose k = k1 + k2*lambda,
// materialize phi bases, run the doubled point set. PGC must already hold
// the curve's GLV constants. pr is zeroed here.
function runGlv(pBases: i32, pScalars: i32, n: i32, pr: i32): void {
    g_zero(pr);
    if (n == 0) return;

    const pgc = PGC;
    const pt = allocMem(60), pc1 = allocMem(20), pc2 = allocMem(20);
    const pu = allocMem(20), pv = allocMem(20), pw = allocMem(20);
    const pSub = allocMem((n << 1) * 16);         // |k1| slots then |k2| slots
    const psign = allocMem(n << 1);
    const pphi = allocMem(n * (N8 << 1));

    for (let i = 0; i < n; i++) {
        const sg = glvDecompose(pScalars + i * 32, pgc, pt, pc1, pc2, pu, pv, pw,
            pSub + i * 16, pSub + ((n + i) << 4));
        store<u8>(psign + i, (sg & 1) as u8);
        store<u8>(psign + n + i, ((sg >> 1) & 1) as u8);
    }
    // phi bases: (beta*x, y). beta*0 = 0, so zero-affine bases stay zero.
    for (let i = 0; i < n; i++) {
        const srcP = pBases + i * (N8 << 1);
        const dstP = pphi + i * (N8 << 1);
        f_mul(srcP, pgc + 120, dstP);
        fcopy(srcP + N8, dstP + N8);
    }

    NPTS = n << 1;
    SCS = 16;
    SCBITS = 128;
    PSCAL = pSub;
    PBASES = pBases;
    PPHI = pphi;
    NORIG = n;
    PSIGN = psign;
    C = winSize(n << 1);

    msmRun(pr);
}

// GLV entry point: bn254 (n8f=32) and bls12-381 (n8f=48) G1; anything else
// falls through to the generic path. Scalars are partitioned first -- GLV
// decomposition only ever pays off for full-width scalars, so zeros/ones/
// small ride the plain paths and only the big partition is decomposed.
export function multiexpAffineGLV(pBases: i32, pScalars: i32, scalarSize: i32, n: i32, pr: i32, n8f: i32): void {
    if (scalarSize != 32 || (n8f != 32 && n8f != 48)) {
        multiexpAffine(pBases, pScalars, scalarSize, n, pr, n8f);
        return;
    }
    g_zero(pr);
    if (n == 0) return;

    N8 = n8f;
    const saved: u32 = load<u32>(0);

    PGC = allocMem(120 + n8f);
    if (n8f == 48) writeGlvConstsBls12381(PGC);
    else writeGlvConstsBn254(PGC);

    const pCls = allocMem(n);
    partitionScan(pScalars, scalarSize, n, pCls);
    BIG_MODE = 1;
    if (!runPartitionedRest(pBases, pScalars, scalarSize, n, pr, pCls)) {
        runGlv(pBases, pScalars, n, pr);
    }
    store<u32>(0, saved);
}
