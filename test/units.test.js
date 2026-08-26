import { bitLength, isOdd, isNegative, abs, isUnit, compare, modInv, modPow, isPrime, square } from "../src/bigint.js";
import { bigInt2BytesLE, bigInt2U32LE, isOcamNum } from "../src/utils.js";
import { describe, assert, it } from "vitest";

describe("bigint.js helpers", () => {
    it("bitLength / isOdd / isNegative / abs / isUnit / compare / square", () => {
        // quirk: bitLength(0) is 1 ("0".length) -- callers only pass
        // nonzero field/curve parameters
        assert.equal(bitLength(0n), 1);
        assert.equal(bitLength(1n), 1);
        assert.equal(bitLength(255n), 8);
        assert.equal(bitLength(256n), 9);

        assert.isTrue(isOdd(3n));
        assert.isFalse(isOdd(4n));

        assert.isTrue(isNegative(-1n));
        assert.isFalse(isNegative(0n));
        assert.isFalse(isNegative(1n));

        assert.equal(abs(-5n), 5n);
        assert.equal(abs(5n), 5n);

        assert.isTrue(isUnit(1n));
        assert.isFalse(isUnit(2n));

        assert.isTrue(compare(2n, 1n) > 0);
        assert.isTrue(compare(1n, 2n) < 0);
        assert.equal(compare(2n, 2n), 0);

        assert.equal(square(9n), 81n);
    });

    it("modInv and modPow agree with Fermat inversion", () => {
        const p = 101n;
        for (const a of [1n, 2n, 7n, 55n, 100n]) {
            const inv = modInv(a, p);
            assert.equal((inv * a) % p, 1n, `inv(${a})`);
            assert.equal(modPow(a, p - 2n, p), inv, `fermat(${a})`);
        }
        assert.equal(modPow(3n, 0n, 7n), 1n);
    });

    it("isPrime classifies small and cryptographic primes", () => {
        // regression: isKnownPrime used to return false (not undefined) for
        // values outside its hardcoded list, so isPrime never reached
        // Miller-Rabin and every custom prime was reported composite --
        // which made build_f1m skip generating _sqrt/_isSquare
        assert.isTrue(isPrime(2n));
        assert.isTrue(isPrime(101n));
        assert.isTrue(isPrime(65537n));
        assert.isTrue(isPrime(0xffffffff00000001n)); // goldilocks
        assert.isFalse(isPrime(100n));
        assert.isFalse(isPrime(1n));
        assert.isFalse(isPrime(65537n * 101n));
        // bn254 r
        assert.isTrue(isPrime(21888242871839275222246405745257275088548364400416034343698204186575808495617n));
        assert.isFalse(isPrime(21888242871839275222246405745257275088548364400416034343698204186575808495615n));
    });
});

describe("utils.js codegen helpers", () => {
    it("bigInt2BytesLE and bigInt2U32LE produce little-endian layouts", () => {
        assert.deepEqual(bigInt2BytesLE(0x0102030405n, 8), [5, 4, 3, 2, 1, 0, 0, 0]);
        assert.deepEqual(bigInt2U32LE(0x01000000020000000300000004n, 4), [4, 3, 2, 1]);
    });

    it("isOcamNum recognizes only the legacy [flag, size, limbs] shape", () => {
        assert.isTrue(isOcamNum([1, 2, [1, 2]]));
        assert.isFalse(isOcamNum([1, 2]));
        assert.isFalse(isOcamNum([1, "2", [1]]));
        assert.isFalse(isOcamNum([1, 2, 3]));
        assert.isFalse(isOcamNum("nope"));
    });
});

describe("build_f1m over a custom prime", () => {
    it("generates and exports _sqrt/_isSquare (regression: skipped for unlisted primes)", async () => {
        const { buildProtoboard } = await import("wasmbuilder");
        const { default: buildF1m } = await import("../src/build_f1m.js");
        const q = 0xffffffff00000001n; // goldilocks, not in the known-prime list
        const pb = await buildProtoboard((module) => {
            buildF1m(module, q, "f1m");
        }, 8);

        assert.isFunction(pb.f1m_sqrt, "sqrt export exists");
        assert.isFunction(pb.f1m_isSquare, "isSquare export exists");

        const pA = pb.alloc(8);
        const pS = pb.alloc(8);
        pb.set(pA, 9n, 8);
        pb.f1m_toMontgomery(pA, pA);
        assert.equal(pb.f1m_isSquare(pA), 1);
        pb.f1m_sqrt(pA, pS);
        // s^2 == 9 (in montgomery form)
        pb.f1m_square(pS, pS);
        pb.f1m_fromMontgomery(pS, pS);
        assert.equal(pb.get(pS, 1, 8), 9n);
    });
});

describe("branch mop-up", () => {
    it("bigint edge values", async () => {
        const { isPrime, modInv, compare, bitLength, abs, modPow, isOdd } = await import("../src/bigint.js");
        // isBasicPrime sieve arms
        assert.isTrue(isPrime(3n));
        assert.isTrue(isPrime(5n));
        assert.isFalse(isPrime(9n));    // divisible by 3
        assert.isFalse(isPrime(25n));   // divisible by 5
        assert.isTrue(isPrime(47n));    // < 49 fast-true path
        assert.isTrue(isPrime(-7n));    // negative prime via abs
        assert.isFalse(isPrime(-9n));
        // 64-bit boundary uses the fixed Miller-Rabin base set
        assert.isTrue(isPrime(18446744073709551557n)); // largest 64-bit prime
        // modInv with a negative value normalizes first
        const inv = modInv(-3n, 101n);
        assert.equal(((inv * -3n) % 101n + 101n) % 101n, 1n);
        assert.equal(compare(-2n, 3n), -1);
        assert.equal(compare(3n, -2n), 1);
        assert.equal(bitLength(-255n), 8);
        assert.equal(abs(0n), 0n);
        assert.equal(modPow(5n, 1n, 3n), 2n);
        assert.isTrue(isOdd(-3n));
    });

    it("builders are idempotent: rebuilding an existing prefix returns early", async () => {
        const { buildProtoboard } = await import("wasmbuilder");
        const { default: buildBn128 } = await import("../src/bn128/build_bn128.js");
        const { default: buildBls12381 } = await import("../src/bls12381/build_bls12381.js");
        const { default: buildMNT6753 } = await import("../src/mnt6753/build_mnt6753.js");
        const { default: buildF2m } = await import("../src/build_f2m.js");
        const { default: buildF3m } = await import("../src/build_f3m.js");
        const { default: buildCurveJacobianA0 } = await import("../src/build_curve_jacobian_a0.js");
        const { default: buildCurveProjective } = await import("../src/build_curve_projective.js");

        const pbBn = await buildProtoboard((module) => {
            buildBn128(module);
            assert.equal(buildBn128(module), "bn128");                    // guard
            assert.equal(buildF2m(module, "f1m_neg", "f2m", "f1m"), "f2m");   // registered by bn128
            assert.equal(buildCurveJacobianA0(module, "g1m", "f1m", 0), "g1m"); // registered by bn128
        }, 32);
        assert.isFunction(pbBn.g1m_add);

        const pbBls = await buildProtoboard((module) => {
            buildBls12381(module);
            assert.equal(buildBls12381(module), "bls12381");              // guard
        }, 48);
        assert.isFunction(pbBls.g1m_add);

        const pbMnt = await buildProtoboard((module) => {
            buildMNT6753(module, "mnt6753");
            assert.equal(buildMNT6753(module, "mnt6753"), "mnt6753");     // guard
            assert.equal(buildF3m(module, "f1m_neg", "f3m", "f1m"), "f3m");   // registered by mnt6753
            assert.equal(buildCurveProjective(module, "g1m", "f1m", 0), "g1m"); // registered by mnt6753
        }, 96);
        assert.isFunction(pbMnt.g1m_add);
    });

    it("f1m over a 5-limb prime exercises alternative tom-cook splits", async () => {
        const { buildProtoboard } = await import("wasmbuilder");
        const { default: buildF1m } = await import("../src/build_f1m.js");
        const { isPrime } = await import("../src/bigint.js");

        // deterministically find the first 320-bit prime >= 2^319 + 9
        let q = (1n << 319n) + 9n;
        while (!isPrime(q)) q += 2n;

        const pb = await buildProtoboard((module) => {
            buildF1m(module, q, "f5");
        }, 40);

        const pA = pb.alloc(40), pB = pb.alloc(40), pC = pb.alloc(40);
        const a = 0x123456789abcdef0fedcba9876543210n;
        const b = 0xdeadbeefcafebabe1234567890abcdefn;
        pb.set(pA, a, 40); pb.f5_toMontgomery(pA, pA);
        pb.set(pB, b, 40); pb.f5_toMontgomery(pB, pB);
        pb.f5_mul(pA, pB, pC);
        pb.f5_fromMontgomery(pC, pC);
        assert.equal(pb.get(pC, 1, 40), (a * b) % q);
    });
});
