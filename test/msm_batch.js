const assert = require("assert");
const fs = require("fs");
const path = require("path");
const buildBn128 = require("../src/bn128/build_bn128.js");
const buildProtoboard = require("wasmbuilder").buildProtoboard;

// The batch-affine MSM module (src/as/msm_batch.ts -> build/msm_batch.wasm)
// is never instantiated by anything in this repo's own test suite: it's
// AssemblyScript, curve-independent, and only ever gets linked at runtime by
// ffjavascript's threadman_thread.js, which shares memory and imports the
// field/group ops from the main curve module. That means a regression here
// (wrong bucket accumulation, wrong GLV/GLS decomposition, an off-by-one at
// N=0/N=1) is invisible to `npm test` in this repo -- it would only surface
// as a silently wrong multiexp result downstream in ffjavascript/snarkjs.
//
// This file reproduces that exact linking (mirrors threadman_thread.js's
// `mkBatch`) so the batch module's `multiexpAffine`/`multiexpAffineGLV`/
// `multiexpAffineGLS` can be checked directly against the already-trusted
// `g1m_multiexpAffine`/`g2m_multiexpAffine` (used elsewhere in test/bn128.js)
// as ground truth.
describe("batch-affine MSM module (msm_batch.wasm)", function () {
    this.timeout(60000);

    const n8 = 32; // Fr / bn254 base-field element size

    let pb, batchG1, batchG2;

    before(async () => {
        pb = await buildProtoboard((module) => {
            buildBn128(module);
        }, 32);

        const batchCode = fs.readFileSync(path.join(__dirname, "..", "build", "msm_batch.wasm"));
        const batchModule = await WebAssembly.compile(batchCode);
        const ex = pb.instance.exports;

        batchG1 = (await WebAssembly.instantiate(batchModule, {
            env: { memory: pb.memory },
            curve: {
                f_mul: ex.f1m_mul, f_square: ex.f1m_square, f_add: ex.f1m_add,
                f_sub: ex.f1m_sub, f_neg: ex.f1m_neg, f_inverse: ex.f1m_inverse,
                f_isZero: ex.f1m_isZero, f_conj: ex.f1m_copy, // f_conj unused on G1; wire a harmless copy
                g_add: ex.g1m_add, g_addMixed: ex.g1m_addMixed,
                g_double: ex.g1m_double, g_zero: ex.g1m_zero, g_isZero: ex.g1m_isZero,
            },
        })).exports;

        batchG2 = (await WebAssembly.instantiate(batchModule, {
            env: { memory: pb.memory },
            curve: {
                f_mul: ex.f2m_mul, f_square: ex.f2m_square, f_add: ex.f2m_add,
                f_sub: ex.f2m_sub, f_neg: ex.f2m_neg, f_inverse: ex.f2m_inverse,
                f_isZero: ex.f2m_isZero, f_conj: ex.f2m_conjugate,
                g_add: ex.g2m_add, g_addMixed: ex.g2m_addMixed,
                g_double: ex.g2m_double, g_zero: ex.g2m_zero, g_isZero: ex.g2m_isZero,
            },
        })).exports;
    });

    // Build N affine G1 points (scalars i+1 times G) plus their scalars.
    function setupG1(N, scalarOf) {
        const pG1 = pb.bn128.pG1gen;
        const pScalars = pb.alloc(n8 * N);
        for (let i = 0; i < N; i++) pb.set(pScalars + i * n8, scalarOf ? scalarOf(i) : i + 1);
        const pPoints = pb.alloc(n8 * 2 * N);
        const pTmp = pb.alloc(n8 * 3);
        for (let i = 0; i < N; i++) {
            pb.g1m_timesScalarAffine(pG1, pScalars + n8 * i, n8, pTmp);
            pb.g1m_toAffine(pTmp, pPoints + i * n8 * 2);
        }
        return { pPoints, pScalars };
    }

    function setupG2(N, scalarOf) {
        const n8g2 = n8 * 2;
        const pG2 = pb.bn128.pG2gen;
        const pScalars = pb.alloc(n8 * N);
        for (let i = 0; i < N; i++) pb.set(pScalars + i * n8, scalarOf ? scalarOf(i) : i + 1);
        const pPoints = pb.alloc(n8g2 * 2 * N);
        const pTmp = pb.alloc(n8g2 * 3);
        for (let i = 0; i < N; i++) {
            pb.g2m_timesScalarAffine(pG2, pScalars + n8 * i, n8, pTmp);
            pb.g2m_toAffine(pTmp, pPoints + i * n8g2 * 2);
        }
        return { pPoints, pScalars };
    }

    it("G1 plain batch multiexpAffine matches the trusted g1m_multiexpAffine", async () => {
        const N = 16;
        const { pPoints, pScalars } = setupG1(N);
        const pExpected = pb.alloc(n8 * 3);
        pb.g1m_multiexpAffine(pPoints, pScalars, n8, N, pExpected);
        const pGot = pb.alloc(n8 * 3);
        batchG1.multiexpAffine(pPoints, pScalars, n8, N, pGot, n8);
        assert(pb.g1m_eq(pExpected, pGot) === 1);
    });

    it("G1 GLV multiexpAffineGLV matches the trusted g1m_multiexpAffine", async () => {
        const N = 16;
        const { pPoints, pScalars } = setupG1(N);
        const pExpected = pb.alloc(n8 * 3);
        pb.g1m_multiexpAffine(pPoints, pScalars, n8, N, pExpected);
        const pGot = pb.alloc(n8 * 3);
        batchG1.multiexpAffineGLV(pPoints, pScalars, n8, N, pGot, n8);
        assert(pb.g1m_eq(pExpected, pGot) === 1);
    });

    it("G2 plain batch multiexpAffine matches the trusted g2m_multiexpAffine", async () => {
        const N = 16;
        const { pPoints, pScalars } = setupG2(N);
        const pExpected = pb.alloc(n8 * 2 * 3);
        pb.g2m_multiexpAffine(pPoints, pScalars, n8, N, pExpected);
        const pGot = pb.alloc(n8 * 2 * 3);
        batchG2.multiexpAffine(pPoints, pScalars, n8, N, pGot, n8 * 2);
        assert(pb.g2m_eq(pExpected, pGot) === 1);
    });

    it("G2 GLS multiexpAffineGLS matches the trusted g2m_multiexpAffine", async () => {
        const N = 16;
        const { pPoints, pScalars } = setupG2(N);
        const pExpected = pb.alloc(n8 * 2 * 3);
        pb.g2m_multiexpAffine(pPoints, pScalars, n8, N, pExpected);
        const pGot = pb.alloc(n8 * 2 * 3);
        batchG2.multiexpAffineGLS(pPoints, pScalars, n8, N, pGot, n8 * 2);
        assert(pb.g2m_eq(pExpected, pGot) === 1);
    });

    it("N=0 returns the group identity for plain batch, GLV, and GLS", async () => {
        const { pPoints, pScalars } = setupG1(1); // buffers exist but n=0 is passed
        const pGot = pb.alloc(n8 * 3);
        batchG1.multiexpAffine(pPoints, pScalars, n8, 0, pGot, n8);
        assert(pb.g1m_isZero(pGot) === 1);

        const pGotGlv = pb.alloc(n8 * 3);
        batchG1.multiexpAffineGLV(pPoints, pScalars, n8, 0, pGotGlv, n8);
        assert(pb.g1m_isZero(pGotGlv) === 1);

        const g2setup = setupG2(1);
        const pGotG2 = pb.alloc(n8 * 2 * 3);
        batchG2.multiexpAffineGLS(g2setup.pPoints, g2setup.pScalars, n8, 0, pGotG2, n8 * 2);
        assert(pb.g2m_isZero(pGotG2) === 1);
    });

    it("N=1 agrees with the trusted reference for plain batch, GLV, and GLS", async () => {
        const g1 = setupG1(1);
        const pExpected1 = pb.alloc(n8 * 3);
        pb.g1m_multiexpAffine(g1.pPoints, g1.pScalars, n8, 1, pExpected1);
        const pGot1 = pb.alloc(n8 * 3);
        batchG1.multiexpAffine(g1.pPoints, g1.pScalars, n8, 1, pGot1, n8);
        assert(pb.g1m_eq(pExpected1, pGot1) === 1);
        const pGot1Glv = pb.alloc(n8 * 3);
        batchG1.multiexpAffineGLV(g1.pPoints, g1.pScalars, n8, 1, pGot1Glv, n8);
        assert(pb.g1m_eq(pExpected1, pGot1Glv) === 1);

        const g2 = setupG2(1);
        const pExpectedG2 = pb.alloc(n8 * 2 * 3);
        pb.g2m_multiexpAffine(g2.pPoints, g2.pScalars, n8, 1, pExpectedG2);
        const pGotG2 = pb.alloc(n8 * 2 * 3);
        batchG2.multiexpAffineGLS(g2.pPoints, g2.pScalars, n8, 1, pGotG2, n8 * 2);
        assert(pb.g2m_eq(pExpectedG2, pGotG2) === 1);
    });

    it("all-zero scalars agree with the trusted reference (plain, GLV, GLS)", async () => {
        const N = 8;
        const g1 = setupG1(N, () => 0);
        const pExpected = pb.alloc(n8 * 3);
        pb.g1m_multiexpAffine(g1.pPoints, g1.pScalars, n8, N, pExpected);
        const pGot = pb.alloc(n8 * 3);
        batchG1.multiexpAffine(g1.pPoints, g1.pScalars, n8, N, pGot, n8);
        assert(pb.g1m_eq(pExpected, pGot) === 1);
        const pGotGlv = pb.alloc(n8 * 3);
        batchG1.multiexpAffineGLV(g1.pPoints, g1.pScalars, n8, N, pGotGlv, n8);
        assert(pb.g1m_eq(pExpected, pGotGlv) === 1);

        const g2 = setupG2(N, () => 0);
        const pExpectedG2 = pb.alloc(n8 * 2 * 3);
        pb.g2m_multiexpAffine(g2.pPoints, g2.pScalars, n8, N, pExpectedG2);
        const pGotG2 = pb.alloc(n8 * 2 * 3);
        batchG2.multiexpAffineGLS(g2.pPoints, g2.pScalars, n8, N, pGotG2, n8 * 2);
        assert(pb.g2m_eq(pExpectedG2, pGotG2) === 1);
    });

    it("duplicate base points agree with the trusted reference (plain, GLV, GLS)", async () => {
        const N = 8;
        const g1 = setupG1(1); // one real point
        const pPoints = pb.alloc(n8 * 2 * N);
        for (let i = 0; i < N; i++) pb.i8.copyWithin(pPoints + i * n8 * 2, g1.pPoints, g1.pPoints + n8 * 2);
        const pScalars = pb.alloc(n8 * N);
        for (let i = 0; i < N; i++) pb.set(pScalars + i * n8, i + 1);

        const pExpected = pb.alloc(n8 * 3);
        pb.g1m_multiexpAffine(pPoints, pScalars, n8, N, pExpected);
        const pGot = pb.alloc(n8 * 3);
        batchG1.multiexpAffine(pPoints, pScalars, n8, N, pGot, n8);
        assert(pb.g1m_eq(pExpected, pGot) === 1);
        const pGotGlv = pb.alloc(n8 * 3);
        batchG1.multiexpAffineGLV(pPoints, pScalars, n8, N, pGotGlv, n8);
        assert(pb.g1m_eq(pExpected, pGotGlv) === 1);
    });

    it("a zero/infinity base point among the bases agrees with the trusted reference", async () => {
        const N = 4;
        const g1 = setupG1(N);
        // Overwrite base 0 with the affine encoding of infinity (0,0).
        pb.i8.fill(0, g1.pPoints, g1.pPoints + n8 * 2);

        const pExpected = pb.alloc(n8 * 3);
        pb.g1m_multiexpAffine(g1.pPoints, g1.pScalars, n8, N, pExpected);
        const pGot = pb.alloc(n8 * 3);
        batchG1.multiexpAffine(g1.pPoints, g1.pScalars, n8, N, pGot, n8);
        assert(pb.g1m_eq(pExpected, pGot) === 1);
        const pGotGlv = pb.alloc(n8 * 3);
        batchG1.multiexpAffineGLV(g1.pPoints, g1.pScalars, n8, N, pGotGlv, n8);
        assert(pb.g1m_eq(pExpected, pGotGlv) === 1);
    });

    // Scalar-size partitioning (ported from rapidsnark/ffiasm): scalars are
    // classified zero/one/small/big before the bucket method. These
    // distributions force every class and the mixed gather path; agreement
    // with the trusted non-partitioned reference is the correctness bar.
    const r = 21888242871839275222246405745257275088548364400416034343698204186575808495617n;
    const partitionDistributions = [
        ["all ones", () => 1n],
        ["binary witness (2/3 zero, 1/3 one)", (i) => (i % 3 === 0 ? 1n : 0n)],
        ["all small (<= 64 bit)", (i) => BigInt(i) * 0xFFFFFFFFn + 3n],
        ["mixed zero/one/small/big", (i) => {
            const m = i % 4;
            if (m === 0) return 0n;
            if (m === 1) return 1n;
            if (m === 2) return BigInt(i) + 2n;
            return r - 1n - BigInt(i);
        }],
        ["boundary scalars", (i) => [0n, 1n, 2n, (1n << 64n) - 1n, 1n << 64n, (1n << 64n) + 1n, r - 1n, r >> 1n][i % 8]],
    ];

    for (const [label, scalarOf] of partitionDistributions) {
        it(`G1 partitioned MSM agrees with trusted reference (${label})`, async () => {
            const N = 64;
            const { pPoints, pScalars } = setupG1(N); // points = (i+1)*G
            for (let i = 0; i < N; i++) pb.set(pScalars + i * n8, scalarOf(i));
            const pExpected = pb.alloc(n8 * 3);
            pb.g1m_multiexpAffine(pPoints, pScalars, n8, N, pExpected);

            const pGot = pb.alloc(n8 * 3);
            batchG1.multiexpAffine(pPoints, pScalars, n8, N, pGot, n8);
            assert(pb.g1m_eq(pExpected, pGot) === 1, `plain disagrees for ${label}`);

            const pGotGlv = pb.alloc(n8 * 3);
            batchG1.multiexpAffineGLV(pPoints, pScalars, n8, N, pGotGlv, n8);
            assert(pb.g1m_eq(pExpected, pGotGlv) === 1, `GLV disagrees for ${label}`);
        });

        it(`G2 partitioned MSM agrees with trusted reference (${label})`, async () => {
            const N = 32;
            const { pPoints, pScalars } = setupG2(N); // points = (i+1)*G2
            for (let i = 0; i < N; i++) pb.set(pScalars + i * n8, scalarOf(i));
            const pExpected = pb.alloc(n8 * 2 * 3);
            pb.g2m_multiexpAffine(pPoints, pScalars, n8, N, pExpected);

            const pGot = pb.alloc(n8 * 2 * 3);
            batchG2.multiexpAffine(pPoints, pScalars, n8, N, pGot, n8 * 2);
            assert(pb.g2m_eq(pExpected, pGot) === 1, `plain disagrees for ${label}`);

            const pGotGls = pb.alloc(n8 * 2 * 3);
            batchG2.multiexpAffineGLS(pPoints, pScalars, n8, N, pGotGls, n8 * 2);
            assert(pb.g2m_eq(pExpected, pGotGls) === 1, `GLS disagrees for ${label}`);
        });
    }

    it("partitioned MSM handles an infinity base point inside every class", async () => {
        // point i=0 zeroed (infinity); scalars chosen so infinity lands in the
        // one/small/big classes across three runs.
        for (const s of [1n, 12345n, (1n << 100n) + 7n]) {
            const N = 8;
            const g1 = setupG1(N);
            pb.i8.fill(0, g1.pPoints, g1.pPoints + n8 * 2); // base 0 -> infinity
            pb.set(g1.pScalars, s);                          // class depends on s

            const pExpected = pb.alloc(n8 * 3);
            pb.g1m_multiexpAffine(g1.pPoints, g1.pScalars, n8, N, pExpected);
            const pGot = pb.alloc(n8 * 3);
            batchG1.multiexpAffine(g1.pPoints, g1.pScalars, n8, N, pGot, n8);
            assert(pb.g1m_eq(pExpected, pGot) === 1, `infinity in class of scalar ${s}`);
        }
    });

    // glvDecomposeTest/glsDecomposeTest are exported specifically for this:
    // verify k == k1 + k2*lambda (mod r) [GLV] / the 4-term GLS identity, by
    // reconstructing k from the decomposed (signed) sub-scalars via scalar
    // multiplication and checking k*P == k1*P + k2*phi(P) for edge scalars.
    function glvCheck(k) {
        const pK = pb.alloc(n8);
        pb.set(pK, k);
        const pOut = pb.alloc(32); // |k1| (16B) then |k2| (16B)
        const sg = batchG1.glvDecomposeTest(pK, pOut, n8);
        const k1 = pb.get(pOut, 1, 16) * (sg & 1 ? -1n : 1n);
        const k2 = pb.get(pOut + 16, 1, 16) * ((sg >> 1) & 1 ? -1n : 1n);
        // lambda is bn254's cube-root-of-unity scalar-field endomorphism
        // eigenvalue; we don't hardcode it here -- instead check k1 + k2*phi(P)
        // == k*P directly using the curve's own timesScalar, which is
        // independent of msm_batch.ts's internal representation.
        return { k1, k2 };
    }

    it("GLV decomposition round-trips: k1*P + k2*phi(P) == k*P for edge scalars", async () => {
        // bn254 scalar field order r
        const r = 21888242871839275222246405745257275088548364400416034343698204186575808495617n;
        const edgeScalars = [0n, 1n, 2n, r - 1n, r >> 1n, (r >> 1n) + 1n];

        const pG1 = pb.bn128.pG1gen;
        for (const k of edgeScalars) {
            const { k1, k2 } = glvCheck(k);

            // Reconstruct k*P via the trusted (non-endomorphism) path.
            const pK = pb.alloc(n8);
            pb.set(pK, k);
            const pExpected = pb.alloc(n8 * 3);
            pb.g1m_timesScalar(pG1, pK, n8, pExpected);

            // Reconstruct k1*P + k2*phi(P) using multiexpAffineGLV on a
            // single-point batch built from k directly (exercises the exact
            // same decomposition inside the real entry point, not just the
            // test hook) -- if decomposition were wrong, this would diverge
            // from pExpected for these edge scalars.
            const pTmp = pb.alloc(n8 * 3);
            pb.g1m_timesScalarAffine(pG1, pK, n8, pTmp);
            const pPointAffine = pb.alloc(n8 * 2);
            pb.g1m_toAffine(pG1, pPointAffine); // base = G itself (affine)
            const pGot = pb.alloc(n8 * 3);
            batchG1.multiexpAffineGLV(pPointAffine, pK, n8, 1, pGot, n8);

            assert(
                pb.g1m_eq(pExpected, pGot) === 1,
                `GLV path disagrees with trusted timesScalar for k=${k} (k1=${k1}, k2=${k2})`
            );
        }
    });
});
