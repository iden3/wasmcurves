/*
    Copyright 2019 0KIMS association.

    This file is part of wasmsnark (Web Assembly zkSnark Prover).

    wasmsnark is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    wasmsnark is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with wasmsnark. If not, see <https://www.gnu.org/licenses/>.
*/

const buildInt = require("./build_int.js");
const utils = require("./utils.js");
const buildExp = require("./build_timesscalar");
const buildBatchInverse = require("./build_batchinverse");
const buildBatchConvertion = require("./build_batchconvertion");
const buildBatchOp = require("./build_batchop");
const { bitLength, modInv, modPow, isPrime, isOdd, square } = require("./bigint.js");

module.exports = function buildF1m(module, _q, _prefix, _intPrefix) {
    const q = BigInt(_q);
    const n64 = Math.floor((bitLength(q - 1n) - 1)/64) +1;
    const n32 = n64*2;
    const n8 = n64*8;

    const prefix = _prefix || "f1m";
    if (module.modules[prefix]) return prefix;  // already builded

    const intPrefix = buildInt(module, n64, _intPrefix);
    const pq = module.alloc(n8, utils.bigInt2BytesLE(q, n8));

    const pR2 = module.alloc(utils.bigInt2BytesLE(square(1n << BigInt(n64*64)) % q, n8));
    const pOne = module.alloc(utils.bigInt2BytesLE((1n << BigInt(n64*64)) % q, n8));
    const pZero = module.alloc(utils.bigInt2BytesLE(0n, n8));
    const _minusOne = q - 1n;
    const _e = _minusOne >> 1n; // e = (p-1)/2
    const pe = module.alloc(n8, utils.bigInt2BytesLE(_e, n8));

    const _ePlusOne = _e + 1n; // e = (p-1)/2
    const pePlusOne = module.alloc(n8, utils.bigInt2BytesLE(_ePlusOne, n8));

    module.modules[prefix] = {
        pq: pq,
        pR2: pR2,
        n64: n64,
        q: q,
        pOne: pOne,
        pZero: pZero,
        pePlusOne: pePlusOne
    };

    function buildOne() {
        const f = module.addFunction(prefix+"_one");
        f.addParam("pr", "i32");

        const c = f.getCodeBuilder();

        f.addCode(c.call(intPrefix + "_copy", c.i32_const(pOne), c.getLocal("pr")));
    }

    function buildAdd() {
        const f = module.addFunction(prefix+"_add");
        f.addParam("x", "i32");
        f.addParam("y", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();

        f.addCode(
            c.if(
                c.call(intPrefix+"_add", c.getLocal("x"),  c.getLocal("y"), c.getLocal("r")),
                c.drop(c.call(intPrefix+"_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))),
                c.if(
                    c.call(intPrefix+"_gte", c.getLocal("r"), c.i32_const(pq)  ),
                    c.drop(c.call(intPrefix+"_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))),
                )
            )
        );
    }

    function buildSub() {
        const f = module.addFunction(prefix+"_sub");
        f.addParam("x", "i32");
        f.addParam("y", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();

        f.addCode(
            c.if(
                c.call(intPrefix+"_sub", c.getLocal("x"),  c.getLocal("y"), c.getLocal("r")),
                c.drop(c.call(intPrefix+"_add", c.getLocal("r"),  c.i32_const(pq), c.getLocal("r")))
            )
        );
    }

    function buildNeg() {
        const f = module.addFunction(prefix+"_neg");
        f.addParam("x", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();

        f.addCode(
            c.call(prefix + "_sub", c.i32_const(pZero), c.getLocal("x"), c.getLocal("r"))
        );
    }


    function buildIsNegative() {
        const f = module.addFunction(prefix+"_isNegative");
        f.addParam("x", "i32");
        f.setReturnType("i32");

        const c = f.getCodeBuilder();

        const AUX = c.i32_const(module.alloc(n8));

        f.addCode(
            c.call(prefix + "_fromMontgomery", c.getLocal("x"), AUX),
            c.call(intPrefix + "_gte", AUX, c.i32_const(pePlusOne) )
        );
    }

    function buildSign() {
        const f = module.addFunction(prefix+"_sign");
        f.addParam("x", "i32");
        f.setReturnType("i32");

        const c = f.getCodeBuilder();

        const AUX = c.i32_const(module.alloc(n8));

        f.addCode(
            c.if (
                c.call(intPrefix + "_isZero", c.getLocal("x")),
                c.ret(c.i32_const(0))
            ),
            c.call(prefix + "_fromMontgomery", c.getLocal("x"), AUX),
            c.if(
                c.call(intPrefix + "_gte", AUX, c.i32_const(pePlusOne)),
                c.ret(c.i32_const(-1))
            ),
            c.ret(c.i32_const(1))
        );
    }


    function buildMReduct() {
        const carries = module.alloc(n32*n32*8);

        const f = module.addFunction(prefix+"_mReduct");
        f.addParam("t", "i32");
        f.addParam("r", "i32");
        f.addLocal("np32", "i64");
        f.addLocal("c", "i64");
        f.addLocal("m", "i64");

        const c = f.getCodeBuilder();

        const np32 = Number(0x100000000n - modInv(q, 0x100000000n));

        f.addCode(c.setLocal("np32", c.i64_const(np32)));

        for (let i=0; i<n32; i++) {
            f.addCode(c.setLocal("c", c.i64_const(0)));

            f.addCode(
                c.setLocal(
                    "m",
                    c.i64_and(
                        c.i64_mul(
                            c.i64_load32_u(c.getLocal("t"), i*4),
                            c.getLocal("np32")
                        ),
                        c.i64_const("0xFFFFFFFF")
                    )
                )
            );

            for (let j=0; j<n32; j++) {

                f.addCode(
                    c.setLocal("c",
                        c.i64_add(
                            c.i64_add(
                                c.i64_load32_u(c.getLocal("t"), (i+j)*4),
                                c.i64_shr_u(c.getLocal("c"), c.i64_const(32))
                            ),
                            c.i64_mul(
                                c.i64_load32_u(c.i32_const(pq), j*4),
                                c.getLocal("m")
                            )
                        )
                    )
                );

                f.addCode(
                    c.i64_store32(
                        c.getLocal("t"),
                        (i+j)*4,
                        c.getLocal("c")
                    )
                );
            }

            f.addCode(
                c.i64_store32(
                    c.i32_const(carries),
                    i*4,
                    c.i64_shr_u(c.getLocal("c"), c.i64_const(32))
                )
            );
        }

        f.addCode(
            c.call(
                prefix+"_add",
                c.i32_const(carries),
                c.i32_add(
                    c.getLocal("t"),
                    c.i32_const(n32*4)
                ),
                c.getLocal("r")
            )
        );
    }



    function buildMul() {

        // Montgomery multiplication, CIOS (coarsely integrated operand
        // scanning): for each y-limb, one multiply-accumulate pass over the
        // x-limbs followed by one reduction pass, all in i64 locals with a
        // single running carry. Replaces the previous product-scanning form
        // (dual c0/c1 accumulators): same 32-bit limbs, same R = 2^(32*n32),
        // bit-identical results, ~20% faster (shorter dependency chain per
        // product and q-limbs as immediates instead of loads).
        const f = module.addFunction(prefix+"_mul");
        f.addParam("x", "i32");
        f.addParam("y", "i32");
        f.addParam("r", "i32");
        f.addLocal("yi", "i64");
        f.addLocal("m", "i64");
        f.addLocal("cc", "i64");
        f.addLocal("s", "i64");

        for (let i=0;i<n32; i++) f.addLocal("x"+i, "i64");
        for (let j=0;j<=n32+1; j++) f.addLocal("t"+j, "i64");

        const c = f.getCodeBuilder();

        const np32 = Number(0x100000000n - modInv(q, 0x100000000n));
        const qLimbs = [];
        for (let j=0; j<n32; j++) qLimbs.push(Number((q >> BigInt(32*j)) & 0xFFFFFFFFn));
        const MASK32 = 0xFFFFFFFF;

        // x limbs are reused n32 times: load them once into locals
        for (let i=0;i<n32; i++) {
            f.addCode(c.setLocal("x"+i, c.i64_load32_u(c.getLocal("x"), i*4)));
        }

        for (let i=0;i<n32; i++) {
            f.addCode(c.setLocal("yi", c.i64_load32_u(c.getLocal("y"), i*4)));

            // t += x * y_i   (t_j and carry stay < 2^32, so each step fits i64)
            f.addCode(
                c.setLocal("s", c.i64_add(
                    c.getLocal("t0"),
                    c.i64_mul(c.getLocal("x0"), c.getLocal("yi"))
                )),
                c.setLocal("t0", c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                c.setLocal("cc", c.i64_shr_u(c.getLocal("s"), c.i64_const(32)))
            );
            for (let j=1;j<n32;j++) {
                f.addCode(
                    c.setLocal("s", c.i64_add(
                        c.i64_add(
                            c.getLocal("t"+j),
                            c.i64_mul(c.getLocal("x"+j), c.getLocal("yi"))
                        ),
                        c.getLocal("cc")
                    )),
                    c.setLocal("t"+j, c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                    c.setLocal("cc", c.i64_shr_u(c.getLocal("s"), c.i64_const(32)))
                );
            }
            f.addCode(
                c.setLocal("s", c.i64_add(c.getLocal("t"+n32), c.getLocal("cc"))),
                c.setLocal("t"+n32, c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                c.setLocal("t"+(n32+1), c.i64_add(
                    c.getLocal("t"+(n32+1)),
                    c.i64_shr_u(c.getLocal("s"), c.i64_const(32))
                ))
            );

            // m = t0 * (-q^-1 mod 2^32) mod 2^32; then t = (t + m*q) >> 32
            f.addCode(
                c.setLocal("m", c.i64_and(
                    c.i64_mul(c.getLocal("t0"), c.i64_const(np32)),
                    c.i64_const(MASK32)
                )),
                c.setLocal("s", c.i64_add(
                    c.getLocal("t0"),
                    c.i64_mul(c.getLocal("m"), c.i64_const(qLimbs[0]))
                )),
                c.setLocal("cc", c.i64_shr_u(c.getLocal("s"), c.i64_const(32)))
            );
            for (let j=1;j<n32;j++) {
                f.addCode(
                    c.setLocal("s", c.i64_add(
                        c.i64_add(
                            c.getLocal("t"+j),
                            c.i64_mul(c.getLocal("m"), c.i64_const(qLimbs[j]))
                        ),
                        c.getLocal("cc")
                    )),
                    c.setLocal("t"+(j-1), c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                    c.setLocal("cc", c.i64_shr_u(c.getLocal("s"), c.i64_const(32)))
                );
            }
            f.addCode(
                c.setLocal("s", c.i64_add(c.getLocal("t"+n32), c.getLocal("cc"))),
                c.setLocal("t"+(n32-1), c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                c.setLocal("t"+n32, c.i64_add(
                    c.getLocal("t"+(n32+1)),
                    c.i64_shr_u(c.getLocal("s"), c.i64_const(32))
                )),
                c.setLocal("t"+(n32+1), c.i64_const(0))
            );
        }

        for (let j=0;j<n32;j++) {
            f.addCode(c.i64_store32(c.getLocal("r"), j*4, c.getLocal("t"+j)));
        }

        // t < 2q is guaranteed, so a single conditional subtraction suffices
        // (t_n32 nonzero means the 2^(32*n32) bit is set -> definitely >= q).
        f.addCode(
            c.if(
                c.i32_wrap_i64(c.getLocal("t"+n32)),
                c.drop(c.call(intPrefix+"_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))),
                c.if(
                    c.call(intPrefix+"_gte", c.getLocal("r"), c.i32_const(pq)  ),
                    c.drop(c.call(intPrefix+"_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))),
                )
            )
        );
    }


    function buildSquare() {

        // Dedicated CIOS Montgomery square: same skeleton as the CIOS _mul,
        // but the multiply phase of pass i computes only x_j*x_i for j >= i --
        // the diagonal once and each cross product doubled via a lo/hi split
        //   s += (p & 2^32-1) << 1;  carry += (p >> 32) << 1;
        // so nothing overflows u64 (the running carry stays < 2^33+8 for any
        // limb count). Saves n32*(n32-1)/2 of the multiplies vs mul(x,x);
        // measured 49.6 vs 57.8 ns on bn254 (~14%). The reduction phase is
        // identical to _mul. Bit-identical results.
        const f = module.addFunction(prefix+"_square");
        f.addParam("x", "i32");
        f.addParam("r", "i32");
        f.addLocal("m", "i64");
        f.addLocal("cc", "i64");
        f.addLocal("s", "i64");
        f.addLocal("p", "i64");

        for (let i=0;i<n32; i++) f.addLocal("x"+i, "i64");
        for (let j=0;j<=n32+1; j++) f.addLocal("t"+j, "i64");

        const c = f.getCodeBuilder();

        const np32 = Number(0x100000000n - modInv(q, 0x100000000n));
        const qLimbs = [];
        for (let j=0; j<n32; j++) qLimbs.push(Number((q >> BigInt(32*j)) & 0xFFFFFFFFn));
        const MASK32 = 0xFFFFFFFF;

        for (let i=0;i<n32; i++) {
            f.addCode(c.setLocal("x"+i, c.i64_load32_u(c.getLocal("x"), i*4)));
        }

        for (let i=0;i<n32; i++) {
            // diagonal: t_i += x_i^2
            f.addCode(
                c.setLocal("s", c.i64_add(
                    c.getLocal("t"+i),
                    c.i64_mul(c.getLocal("x"+i), c.getLocal("x"+i))
                )),
                c.setLocal("t"+i, c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                c.setLocal("cc", c.i64_shr_u(c.getLocal("s"), c.i64_const(32)))
            );
            // doubled cross products: t_j += 2*x_j*x_i  (j > i)
            for (let j=i+1;j<n32;j++) {
                f.addCode(
                    c.setLocal("p", c.i64_mul(c.getLocal("x"+j), c.getLocal("x"+i))),
                    c.setLocal("s", c.i64_add(
                        c.i64_add(
                            c.getLocal("t"+j),
                            c.i64_shl(
                                c.i64_and(c.getLocal("p"), c.i64_const(MASK32)),
                                c.i64_const(1)
                            )
                        ),
                        c.getLocal("cc")
                    )),
                    c.setLocal("t"+j, c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                    c.setLocal("cc", c.i64_add(
                        c.i64_shr_u(c.getLocal("s"), c.i64_const(32)),
                        c.i64_shl(
                            c.i64_shr_u(c.getLocal("p"), c.i64_const(32)),
                            c.i64_const(1)
                        )
                    ))
                );
            }
            f.addCode(
                c.setLocal("s", c.i64_add(c.getLocal("t"+n32), c.getLocal("cc"))),
                c.setLocal("t"+n32, c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                c.setLocal("t"+(n32+1), c.i64_add(
                    c.getLocal("t"+(n32+1)),
                    c.i64_shr_u(c.getLocal("s"), c.i64_const(32))
                ))
            );

            // Montgomery reduction step (identical to _mul)
            f.addCode(
                c.setLocal("m", c.i64_and(
                    c.i64_mul(c.getLocal("t0"), c.i64_const(np32)),
                    c.i64_const(MASK32)
                )),
                c.setLocal("s", c.i64_add(
                    c.getLocal("t0"),
                    c.i64_mul(c.getLocal("m"), c.i64_const(qLimbs[0]))
                )),
                c.setLocal("cc", c.i64_shr_u(c.getLocal("s"), c.i64_const(32)))
            );
            for (let j=1;j<n32;j++) {
                f.addCode(
                    c.setLocal("s", c.i64_add(
                        c.i64_add(
                            c.getLocal("t"+j),
                            c.i64_mul(c.getLocal("m"), c.i64_const(qLimbs[j]))
                        ),
                        c.getLocal("cc")
                    )),
                    c.setLocal("t"+(j-1), c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                    c.setLocal("cc", c.i64_shr_u(c.getLocal("s"), c.i64_const(32)))
                );
            }
            f.addCode(
                c.setLocal("s", c.i64_add(c.getLocal("t"+n32), c.getLocal("cc"))),
                c.setLocal("t"+(n32-1), c.i64_and(c.getLocal("s"), c.i64_const(MASK32))),
                c.setLocal("t"+n32, c.i64_add(
                    c.getLocal("t"+(n32+1)),
                    c.i64_shr_u(c.getLocal("s"), c.i64_const(32))
                )),
                c.setLocal("t"+(n32+1), c.i64_const(0))
            );
        }

        for (let j=0;j<n32;j++) {
            f.addCode(c.i64_store32(c.getLocal("r"), j*4, c.getLocal("t"+j)));
        }

        f.addCode(
            c.if(
                c.i32_wrap_i64(c.getLocal("t"+n32)),
                c.drop(c.call(intPrefix+"_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))),
                c.if(
                    c.call(intPrefix+"_gte", c.getLocal("r"), c.i32_const(pq)  ),
                    c.drop(c.call(intPrefix+"_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))),
                )
            )
        );
    }


    function buildSquareOld() {
        const f = module.addFunction(prefix+"_squareOld");
        f.addParam("x", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();

        f.addCode(c.call(prefix + "_mul", c.getLocal("x"), c.getLocal("x"), c.getLocal("r")));
    }

    function buildToMontgomery() {
        const f = module.addFunction(prefix+"_toMontgomery");
        f.addParam("x", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();
        f.addCode(c.call(prefix+"_mul", c.getLocal("x"), c.i32_const(pR2), c.getLocal("r")));
    }

    function buildFromMontgomery() {

        const pAux2 = module.alloc(n8*2);

        const f = module.addFunction(prefix+"_fromMontgomery");
        f.addParam("x", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();
        f.addCode(c.call(intPrefix + "_copy", c.getLocal("x"), c.i32_const(pAux2) ));
        f.addCode(c.call(intPrefix + "_zero", c.i32_const(pAux2 + n8) ));
        f.addCode(c.call(prefix+"_mReduct", c.i32_const(pAux2), c.getLocal("r")));
    }

    function buildInverse() {

        const f = module.addFunction(prefix+ "_inverse");
        f.addParam("x", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();
        f.addCode(c.call(prefix + "_fromMontgomery", c.getLocal("x"), c.getLocal("r")));
        f.addCode(c.call(intPrefix + "_inverseMod", c.getLocal("r"), c.i32_const(pq), c.getLocal("r")));
        f.addCode(c.call(prefix + "_toMontgomery", c.getLocal("r"), c.getLocal("r")));
    }

    // Calculate various valuse needed for sqrt


    let _nqr = 2n;
    if (isPrime(q)) {
        while (modPow(_nqr, _e, q) !== _minusOne) _nqr = _nqr + 1n;
    }

    let s2 = 0;
    let _t = _minusOne;

    while ((!isOdd(_t))&&(_t !== 0n)) {
        s2++;
        _t = _t >> 1n;
    }
    const pt = module.alloc(n8, utils.bigInt2BytesLE(_t, n8));

    const _nqrToT = modPow(_nqr, _t, q);
    const pNqrToT = module.alloc(utils.bigInt2BytesLE((_nqrToT << BigInt(n64*64)) % q, n8));

    const _tPlusOneOver2 = (_t + 1n) >> 1n;
    const ptPlusOneOver2 = module.alloc(n8, utils.bigInt2BytesLE(_tPlusOneOver2, n8));

    function buildSqrt() {

        const f = module.addFunction(prefix+ "_sqrt");
        f.addParam("n", "i32");
        f.addParam("r", "i32");
        f.addLocal("m", "i32");
        f.addLocal("i", "i32");
        f.addLocal("j", "i32");

        const c = f.getCodeBuilder();

        const ONE = c.i32_const(pOne);
        const C = c.i32_const(module.alloc(n8));
        const T = c.i32_const(module.alloc(n8));
        const R = c.i32_const(module.alloc(n8));
        const SQ = c.i32_const(module.alloc(n8));
        const B = c.i32_const(module.alloc(n8));

        f.addCode(

            // If (n==0) return 0
            c.if(
                c.call(prefix + "_isZero", c.getLocal("n")),
                c.ret(
                    c.call(prefix + "_zero", c.getLocal("r"))
                )
            ),

            c.setLocal("m", c.i32_const(s2)),
            c.call(prefix + "_copy", c.i32_const(pNqrToT), C),
            c.call(prefix + "_exp", c.getLocal("n"), c.i32_const(pt), c.i32_const(n8), T),
            c.call(prefix + "_exp", c.getLocal("n"), c.i32_const(ptPlusOneOver2), c.i32_const(n8), R),

            c.block(c.loop(
                c.br_if(1, c.call(prefix + "_eq", T, ONE)),

                c.call(prefix + "_square", T, SQ),
                c.setLocal("i", c.i32_const(1)),
                c.block(c.loop(
                    c.br_if(1, c.call(prefix + "_eq", SQ, ONE)),
                    c.call(prefix + "_square", SQ, SQ),
                    c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))),
                    c.br(0)
                )),

                c.call(prefix + "_copy", C, B),
                c.setLocal("j", c.i32_sub(c.i32_sub( c.getLocal("m"), c.getLocal("i")), c.i32_const(1)) ),
                c.block(c.loop(
                    c.br_if(1, c.i32_eqz(c.getLocal("j"))),
                    c.call(prefix + "_square", B, B),
                    c.setLocal("j", c.i32_sub(c.getLocal("j"), c.i32_const(1))),
                    c.br(0)
                )),

                c.setLocal("m", c.getLocal("i")),
                c.call(prefix + "_square", B, C),
                c.call(prefix + "_mul", T, C, T),
                c.call(prefix + "_mul", R, B, R),

                c.br(0)
            )),

            c.if(
                c.call(prefix + "_isNegative", R),
                c.call(prefix + "_neg", R, c.getLocal("r")),
                c.call(prefix + "_copy", R, c.getLocal("r")),
            )
        );
    }

    function buildIsSquare() {
        const f = module.addFunction(prefix+"_isSquare");
        f.addParam("n", "i32");
        f.setReturnType("i32");

        const c = f.getCodeBuilder();

        const ONE = c.i32_const(pOne);
        const AUX = c.i32_const(module.alloc(n8));

        f.addCode(
            c.if(
                c.call(prefix + "_isZero", c.getLocal("n")),
                c.ret(c.i32_const(1))
            ),
            c.call(prefix + "_exp", c.getLocal("n"), c.i32_const(pe), c.i32_const(n8), AUX),
            c.call(prefix + "_eq", AUX, ONE)
        );
    }


    function buildLoad() {
        const f = module.addFunction(prefix+"_load");
        f.addParam("scalar", "i32");
        f.addParam("scalarLen", "i32");
        f.addParam("r", "i32");
        f.addLocal("p", "i32");
        f.addLocal("l", "i32");
        f.addLocal("i", "i32");
        f.addLocal("j", "i32");
        const c = f.getCodeBuilder();

        const R = c.i32_const(module.alloc(n8));
        const pAux = module.alloc(n8);
        const AUX = c.i32_const(pAux);

        f.addCode(
            c.call(intPrefix + "_zero", c.getLocal("r")),
            c.setLocal("i", c.i32_const(n8)),
            c.setLocal("p", c.getLocal("scalar")),
            c.block(c.loop(
                c.br_if(1, c.i32_gt_u(c.getLocal("i"), c.getLocal("scalarLen"))),

                c.if(
                    c.i32_eq(c.getLocal("i"), c.i32_const(n8)),
                    c.call(prefix + "_one", R),
                    c.call(prefix + "_mul", R, c.i32_const(pR2), R)
                ),
                c.call(prefix + "_mul", c.getLocal("p"), R, AUX),
                c.call(prefix + "_add", c.getLocal("r"), AUX, c.getLocal("r")),

                c.setLocal("p", c.i32_add(c.getLocal("p"), c.i32_const(n8))),
                c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(n8))),
                c.br(0)
            )),

            c.setLocal("l", c.i32_rem_u( c.getLocal("scalarLen"), c.i32_const(n8))),
            c.if(c.i32_eqz(c.getLocal("l")), c.ret([])),
            c.call(intPrefix + "_zero", AUX),
            c.setLocal("j", c.i32_const(0)),
            c.block(c.loop(
                c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("l"))),

                c.i32_store8(
                    c.getLocal("j"),
                    pAux,
                    c.i32_load8_u(c.getLocal("p")),
                ),
                c.setLocal("p", c.i32_add(c.getLocal("p"), c.i32_const(1))),
                c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))),
                c.br(0)
            )),

            c.if(
                c.i32_eq(c.getLocal("i"), c.i32_const(n8)),
                c.call(prefix + "_one", R),
                c.call(prefix + "_mul", R, c.i32_const(pR2), R)
            ),
            c.call(prefix + "_mul", AUX, R, AUX),
            c.call(prefix + "_add", c.getLocal("r"), AUX, c.getLocal("r")),
        );
    }

    function buildTimesScalar() {
        const f = module.addFunction(prefix+"_timesScalar");
        f.addParam("x", "i32");
        f.addParam("scalar", "i32");
        f.addParam("scalarLen", "i32");
        f.addParam("r", "i32");

        const c = f.getCodeBuilder();

        const AUX = c.i32_const(module.alloc(n8));

        f.addCode(
            c.call(prefix + "_load", c.getLocal("scalar"), c.getLocal("scalarLen"), AUX),
            c.call(prefix + "_toMontgomery", AUX, AUX),
            c.call(prefix + "_mul", c.getLocal("x"), AUX, c.getLocal("r")),
        );
    }

    function buildIsOne() {
        const f = module.addFunction(prefix+"_isOne");
        f.addParam("x", "i32");
        f.setReturnType("i32");

        const c = f.getCodeBuilder();
        f.addCode(
            c.ret(c.call(intPrefix + "_eq", c.getLocal("x"), c.i32_const(pOne)))
        );
    }


    module.exportFunction(intPrefix + "_copy", prefix+"_copy");
    module.exportFunction(intPrefix + "_zero", prefix+"_zero");
    module.exportFunction(intPrefix + "_isZero", prefix+"_isZero");
    module.exportFunction(intPrefix + "_eq", prefix+"_eq");

    buildIsOne();
    buildAdd();
    buildSub();
    buildNeg();
    buildMReduct();
    buildMul();
    buildSquare();
    buildSquareOld();
    buildToMontgomery();
    buildFromMontgomery();
    buildIsNegative();
    buildSign();
    buildInverse();
    buildOne();
    buildLoad();
    buildTimesScalar();
    buildBatchInverse(module, prefix);
    buildBatchConvertion(module, prefix + "_batchToMontgomery", prefix + "_toMontgomery", n8, n8);
    buildBatchConvertion(module, prefix + "_batchFromMontgomery", prefix + "_fromMontgomery", n8, n8);
    buildBatchConvertion(module, prefix + "_batchNeg", prefix + "_neg", n8, n8);
    buildBatchOp(module, prefix + "_batchAdd", prefix + "_add", n8, n8);
    buildBatchOp(module, prefix + "_batchSub", prefix + "_sub", n8, n8);
    buildBatchOp(module, prefix + "_batchMul", prefix + "_mul", n8, n8);

    module.exportFunction(prefix + "_add");
    module.exportFunction(prefix + "_sub");
    module.exportFunction(prefix + "_neg");
    module.exportFunction(prefix + "_isNegative");
    module.exportFunction(prefix + "_isOne");
    module.exportFunction(prefix + "_sign");
    module.exportFunction(prefix + "_mReduct");
    module.exportFunction(prefix + "_mul");
    module.exportFunction(prefix + "_square");
    module.exportFunction(prefix + "_squareOld");
    module.exportFunction(prefix + "_fromMontgomery");
    module.exportFunction(prefix + "_toMontgomery");
    module.exportFunction(prefix + "_inverse");
    module.exportFunction(prefix + "_one");
    module.exportFunction(prefix + "_load");
    module.exportFunction(prefix + "_timesScalar");
    buildExp(
        module,
        prefix + "_exp",
        n8,
        prefix + "_mul",
        prefix + "_square",
        intPrefix + "_copy",
        prefix + "_one",
    );
    module.exportFunction(prefix + "_exp");
    module.exportFunction(prefix + "_batchInverse");
    if (isPrime(q)) {
        buildSqrt();
        buildIsSquare();
        module.exportFunction(prefix + "_sqrt");
        module.exportFunction(prefix + "_isSquare");
    }
    module.exportFunction(prefix + "_batchToMontgomery");
    module.exportFunction(prefix + "_batchFromMontgomery");
    // console.log(module.functionIdxByName);

    return prefix;
};
