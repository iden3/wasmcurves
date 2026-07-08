const assert = require("assert");
const { bitLength } = require("../src/bigint.js");

const buildF1m = require("../src/build_f1m");
const buildProtoboard = require("wasmbuilder").buildProtoboard;

// bn254 base field (q) and scalar field (r) -- same moduli used throughout
// the rest of the suite (test/bn128.js, test/f1.js).
const bn128q = 21888242871839275222246405745257275088696311157297823662689037894645226208583n;
const bn128r = 21888242871839275222246405745257275088548364400416034343698204186575808495617n;

// Ported from ffiasm's test/fieldasm.js `getCriticalNumbers`: field-arithmetic
// bugs (missed carries, off-by-one borrows) cluster at 32/64-bit limb
// boundaries, not at "nice" small numbers. Build a set of field elements
// hugging those boundaries (0, 32, 64, the modulus's own bit length, +-2^31,
// +-2^32, +-2^63, +-2^64, q/2) with a small +-lim window around each,
// reduced mod q. This targets exactly the class of bug the CIOS Montgomery
// `noCarry` fast path (build_f1m.js buildMul/buildSquare, gated on
// `q < 2^(32*n32-1)`) could introduce: a wrong assumption about which limb
// a carry lands in only shows up right at those limb edges.
function getCriticalNumbers(q, lim) {
    const numbers = new Set();

    function addFrontier(f) {
        for (let i = -lim; i <= lim; i++) {
            let n = (f + BigInt(i)) % q;
            if (n < 0n) n += q;
            numbers.add(n);
        }
    }

    addFrontier(0n);
    addFrontier(32n);
    addFrontier(64n);
    addFrontier(BigInt(bitLength(q)));
    addFrontier(1n << 31n);
    addFrontier(q - (1n << 31n));
    addFrontier(1n << 32n);
    addFrontier(q - (1n << 32n));
    addFrontier(1n << 63n);
    addFrontier(q - (1n << 63n));
    addFrontier(1n << 64n);
    addFrontier(q - (1n << 64n));
    addFrontier(1n << BigInt(bitLength(q) - 1));
    addFrontier(q >> 1n);

    return Array.from(numbers);
}

describe("f1m critical-number stress tests (limb-boundary carries)", function () {
    this.timeout(120000);

    function generateTests(q, name) {
        const nums = getCriticalNumbers(q, 2);

        it(`${name}: f1m_mul matches BigInt mulmod at limb boundaries`, async () => {
            const pb = await buildProtoboard((module) => {
                buildF1m(module, q);
            }, 32);

            const pA = pb.alloc();
            const pB = pb.alloc();
            const pC = pb.alloc();

            for (let i = 0; i < nums.length; i++) {
                for (let j = 0; j < nums.length; j++) {
                    const a = nums[i];
                    const b = nums[j];

                    pb.set(pA, a);
                    pb.set(pB, b);
                    pb.f1m_toMontgomery(pA, pA);
                    pb.f1m_toMontgomery(pB, pB);
                    pb.f1m_mul(pA, pB, pC);
                    pb.f1m_fromMontgomery(pC, pC);

                    const c = pb.get(pC);
                    const expected = (a * b) % q;

                    assert.equal(
                        c.toString(), expected.toString(),
                        `f1m_mul(${a}, ${b}) mod ${q} = ${c}, expected ${expected}`
                    );
                }
            }
        });

        it(`${name}: f1m_square matches f1m_mul(x, x) at limb boundaries`, async () => {
            const pb = await buildProtoboard((module) => {
                buildF1m(module, q);
            }, 32);

            const pA = pb.alloc();
            const pC1 = pb.alloc();
            const pC2 = pb.alloc();

            for (let i = 0; i < nums.length; i++) {
                const a = nums[i];

                pb.set(pA, a);
                pb.f1m_toMontgomery(pA, pA);
                pb.f1m_square(pA, pC1);
                pb.f1m_mul(pA, pA, pC2);

                const c1 = pb.get(pC1);
                const c2 = pb.get(pC2);

                assert.equal(
                    c1.toString(), c2.toString(),
                    `f1m_square(${a}) = ${c1}, but f1m_mul(${a}, ${a}) = ${c2}`
                );
            }
        });

        it(`${name}: toMontgomery/fromMontgomery round-trips at limb boundaries`, async () => {
            const pb = await buildProtoboard((module) => {
                buildF1m(module, q);
            }, 32);

            const pA = pb.alloc();

            for (let i = 0; i < nums.length; i++) {
                const a = nums[i];

                pb.set(pA, a);
                pb.f1m_toMontgomery(pA, pA);
                pb.f1m_fromMontgomery(pA, pA);

                const back = pb.get(pA);
                assert.equal(back.toString(), a.toString());
            }
        });
    }

    // q < 2^255 -> exercises the CIOS "no-carry" fast path (q < R/2)
    generateTests(bn128q, "bn128 base field (q)");
    // r < 2^255 too -> same fast path, different modulus/constants
    generateTests(bn128r, "bn128 scalar field (r)");
});
