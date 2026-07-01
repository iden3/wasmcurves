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

// Multi-scalar multiplication (Pippenger bucket method) with SIGNED-DIGIT
// windowing. Each scalar is recoded so every c-bit window digit lies in
// [-2^(c-1), 2^(c-1)-1] (with carry propagation). Because point negation is
// free on the curve, a digit -m is handled by subtracting the base, so only
// 2^(c-1) buckets are needed per window instead of 2^c-1 -- halving the
// bucket-reduction cost and the bucket memory.
module.exports = function buildMultiexp(module, prefix, fnName, opAdd, opSub, n8b) {

    const n64g = module.modules[prefix].n64;
    const n8g = n64g*8;

    // Scratch used by the running-sum reduction and the per-window result.
    const accReduce = module.alloc(n8g);
    const aux = module.alloc(n8g);

    // Extract the raw (unsigned) c-bit window starting at `startBit`.
    function buildGetChunk() {
        const f = module.addFunction(fnName + "_getChunk");
        f.addParam("pScalar", "i32");
        f.addParam("scalarSize", "i32");  // Number of bytes of the scalar
        f.addParam("startBit", "i32");  // Bit to start extract
        f.addParam("chunkSize", "i32");  // Chunk size in bits
        f.addLocal("bitsToEnd", "i32");
        f.addLocal("mask", "i32");
        f.setReturnType("i32");

        const c = f.getCodeBuilder();

        f.addCode(
            c.setLocal("bitsToEnd",
                c.i32_sub(
                    c.i32_mul(
                        c.getLocal("scalarSize"),
                        c.i32_const(8)
                    ),
                    c.getLocal("startBit")
                )
            ),
            c.if(
                c.i32_gt_s(
                    c.getLocal("chunkSize"),
                    c.getLocal("bitsToEnd")
                ),
                c.setLocal(
                    "mask",
                    c.i32_sub(
                        c.i32_shl(
                            c.i32_const(1),
                            c.getLocal("bitsToEnd")
                        ),
                        c.i32_const(1)
                    )
                ),
                c.setLocal(
                    "mask",
                    c.i32_sub(
                        c.i32_shl(
                            c.i32_const(1),
                            c.getLocal("chunkSize")
                        ),
                        c.i32_const(1)
                    )
                )
            ),
            c.i32_and(
                c.i32_shr_u(
                    c.i32_load(
                        c.i32_add(
                            c.getLocal("pScalar"),
                            c.i32_shr_u(
                                c.getLocal("startBit"),
                                c.i32_const(3)
                            )
                        ),
                        0,  // offset
                        0   // align to byte.
                    ),
                    c.i32_and(
                        c.getLocal("startBit"),
                        c.i32_const(0x7)
                    )
                ),
                c.getLocal("mask")
            )
        );
    }

    // Recode pass: for every scalar, compute the signed-digit carry that flows
    // INTO each window (LSB->MSB) and store it as one byte per (window, point),
    // column-major: pCarry[windowIdx*n + pointIdx]. Storing only the 1-bit carry
    // (not the full digit) keeps the scratch buffer tiny; the actual signed
    // digit is reconstructed in _chunk from raw-window + carry. There are
    // (nChunks+1) windows: the extra top window absorbs the final carry so
    // arbitrary scalarSize-byte scalars (not just sub-group elements) work.
    function buildRecode() {
        const f = module.addFunction(fnName + "_recode");
        f.addParam("pScalars", "i32");
        f.addParam("scalarSize", "i32");
        f.addParam("n", "i32");
        f.addParam("chunkSize", "i32");   // c
        f.addParam("nChunks", "i32");     // number of "real" windows
        f.addParam("pCarry", "i32");      // output buffer (1 byte/window/point)
        f.addLocal("i", "i32");
        f.addLocal("j", "i32");
        f.addLocal("nWin", "i32");        // nChunks + 1
        f.addLocal("itScalar", "i32");
        f.addLocal("carry", "i32");
        f.addLocal("raw", "i32");
        f.addLocal("half", "i32");        // 2^(c-1)
        f.addLocal("scalarBits", "i32");
        f.addLocal("startBit", "i32");

        const c = f.getCodeBuilder();

        f.addCode(
            c.setLocal("half", c.i32_shl(c.i32_const(1), c.i32_sub(c.getLocal("chunkSize"), c.i32_const(1)))),
            c.setLocal("scalarBits", c.i32_shl(c.getLocal("scalarSize"), c.i32_const(3))),
            c.setLocal("nWin", c.i32_add(c.getLocal("nChunks"), c.i32_const(1))),
            c.setLocal("itScalar", c.getLocal("pScalars")),

            c.setLocal("i", c.i32_const(0)),
            c.block(c.loop(
                c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))),

                c.setLocal("carry", c.i32_const(0)),
                c.setLocal("j", c.i32_const(0)),
                c.block(c.loop(
                    c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("nWin"))),

                    // store carry-INTO-window j (before updating it)
                    c.i32_store8(
                        c.i32_add(
                            c.getLocal("pCarry"),
                            c.i32_add(
                                c.i32_mul(c.getLocal("j"), c.getLocal("n")),
                                c.getLocal("i")
                            )
                        ),
                        c.getLocal("carry")
                    ),

                    c.setLocal("startBit", c.i32_mul(c.getLocal("j"), c.getLocal("chunkSize"))),
                    c.if(
                        c.i32_lt_s(c.getLocal("startBit"), c.getLocal("scalarBits")),
                        c.setLocal("raw",
                            c.call(fnName + "_getChunk",
                                c.getLocal("itScalar"),
                                c.getLocal("scalarSize"),
                                c.getLocal("startBit"),
                                c.getLocal("chunkSize")
                            )
                        ),
                        c.setLocal("raw", c.i32_const(0))
                    ),
                    // carry_out = (raw + carry) >= 2^(c-1) ? 1 : 0
                    c.if(
                        c.i32_ge_s(
                            c.i32_add(c.getLocal("raw"), c.getLocal("carry")),
                            c.getLocal("half")
                        ),
                        c.setLocal("carry", c.i32_const(1)),
                        c.setLocal("carry", c.i32_const(0))
                    ),

                    c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))),
                    c.br(0)
                )),

                c.setLocal("itScalar", c.i32_add(c.getLocal("itScalar"), c.getLocal("scalarSize"))),
                c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))),
                c.br(0)
            ))
        );
    }

    // Process one window: reconstruct each point's signed digit from its raw
    // window value plus the stored carry, distribute into 2^(c-1) signed
    // buckets (subtracting for negative digits), then reduce with the
    // running-sum trick into pr.
    function buildMutiexpChunk() {
        const f = module.addFunction(fnName + "_chunk");
        f.addParam("pBases", "i32");
        f.addParam("pScalars", "i32");
        f.addParam("scalarSize", "i32");
        f.addParam("pCarry", "i32");
        f.addParam("n", "i32");           // Number of points
        f.addParam("windowIdx", "i32");   // which window
        f.addParam("chunkSize", "i32");   // c
        f.addParam("pr", "i32");
        f.addLocal("itBase", "i32");
        f.addLocal("itScalar", "i32");
        f.addLocal("itCarry", "i32");
        f.addLocal("i", "i32");
        f.addLocal("j", "i32");
        f.addLocal("nTable", "i32");      // 2^(c-1)  (also == half)
        f.addLocal("full", "i32");        // 2^c
        f.addLocal("scalarBits", "i32");
        f.addLocal("startBit", "i32");
        f.addLocal("pTable", "i32");
        f.addLocal("raw", "i32");
        f.addLocal("d", "i32");
        f.addLocal("pIdxTable", "i32");
        f.addLocal("itB", "i32");

        const c = f.getCodeBuilder();

        f.addCode(
            c.if(
                c.i32_eqz(c.getLocal("n")),
                [
                    ...c.call(prefix + "_zero", c.getLocal("pr")),
                    ...c.ret([])
                ]
            ),

            // nTable = half = 2^(chunkSize-1) ; full = 2^chunkSize
            c.setLocal(
                "nTable",
                c.i32_shl(c.i32_const(1), c.i32_sub(c.getLocal("chunkSize"), c.i32_const(1)))
            ),
            c.setLocal("full", c.i32_shl(c.i32_const(1), c.getLocal("chunkSize"))),
            c.setLocal("scalarBits", c.i32_shl(c.getLocal("scalarSize"), c.i32_const(3))),
            c.setLocal("startBit", c.i32_mul(c.getLocal("windowIdx"), c.getLocal("chunkSize"))),

            // Allocate bucket table from the bump allocator
            c.setLocal("pTable", c.i32_load( c.i32_const(0) )),
            c.i32_store(
                c.i32_const(0),
                c.i32_add(
                    c.getLocal("pTable"),
                    c.i32_mul(c.getLocal("nTable"), c.i32_const(n8g))
                )
            ),

            // Reset Table
            c.setLocal("j", c.i32_const(0)),
            c.block(c.loop(
                c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("nTable"))),
                c.call(
                    prefix + "_zero",
                    c.i32_add(
                        c.getLocal("pTable"),
                        c.i32_mul(c.getLocal("j"), c.i32_const(n8g))
                    )
                ),
                c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))),
                c.br(0)
            )),

            // Distribute points into signed buckets
            c.setLocal("itBase", c.getLocal("pBases")),
            c.setLocal("itScalar", c.getLocal("pScalars")),
            // itCarry = pCarry + windowIdx*n
            c.setLocal(
                "itCarry",
                c.i32_add(
                    c.getLocal("pCarry"),
                    c.i32_mul(c.getLocal("windowIdx"), c.getLocal("n"))
                )
            ),
            c.setLocal("i", c.i32_const(0)),
            c.block(c.loop(
                c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))),

                // raw window (0 beyond the scalar bits, e.g. the guard window)
                c.if(
                    c.i32_lt_s(c.getLocal("startBit"), c.getLocal("scalarBits")),
                    c.setLocal("raw",
                        c.call(fnName + "_getChunk",
                            c.getLocal("itScalar"),
                            c.getLocal("scalarSize"),
                            c.getLocal("startBit"),
                            c.getLocal("chunkSize")
                        )
                    ),
                    c.setLocal("raw", c.i32_const(0))
                ),
                // d = raw + carry ; if d >= 2^(c-1): d -= 2^c
                c.setLocal("d", c.i32_add(c.getLocal("raw"), c.i32_load8_u(c.getLocal("itCarry")))),
                c.if(
                    c.i32_ge_s(c.getLocal("d"), c.getLocal("nTable")),
                    c.setLocal("d", c.i32_sub(c.getLocal("d"), c.getLocal("full")))
                ),

                c.if(
                    c.i32_gt_s(c.getLocal("d"), c.i32_const(0)),
                    // positive digit m=d -> bucket[d-1] += base
                    [
                        ...c.setLocal(
                            "pIdxTable",
                            c.i32_add(
                                c.getLocal("pTable"),
                                c.i32_mul(
                                    c.i32_sub(c.getLocal("d"), c.i32_const(1)),
                                    c.i32_const(n8g)
                                )
                            )
                        ),
                        ...c.call(opAdd, c.getLocal("pIdxTable"), c.getLocal("itBase"), c.getLocal("pIdxTable"))
                    ],
                    // else if d < 0 -> bucket[-d-1] -= base
                    c.if(
                        c.i32_lt_s(c.getLocal("d"), c.i32_const(0)),
                        [
                            ...c.setLocal(
                                "pIdxTable",
                                c.i32_add(
                                    c.getLocal("pTable"),
                                    c.i32_mul(
                                        // -d-1  ==  (-1) - d
                                        c.i32_sub(c.i32_const(-1), c.getLocal("d")),
                                        c.i32_const(n8g)
                                    )
                                )
                            ),
                            ...c.call(opSub, c.getLocal("pIdxTable"), c.getLocal("itBase"), c.getLocal("pIdxTable"))
                        ]
                    )
                ),

                c.setLocal("itScalar", c.i32_add(c.getLocal("itScalar"), c.getLocal("scalarSize"))),
                c.setLocal("itCarry", c.i32_add(c.getLocal("itCarry"), c.i32_const(1))),
                c.setLocal("itBase", c.i32_add(c.getLocal("itBase"), c.i32_const(n8b))),
                c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))),
                c.br(0)
            )),

            // Running-sum reduction over all 2^(c-1) buckets:
            //   pr = sum_{m=1}^{nTable} m * bucket[m-1]
            // itB walks from bucket[nTable-1] down. pr and accReduce start at the top.
            c.setLocal(
                "itB",
                c.i32_add(
                    c.getLocal("pTable"),
                    c.i32_mul(
                        c.i32_sub(c.getLocal("nTable"), c.i32_const(1)),
                        c.i32_const(n8g)
                    )
                )
            ),
            c.call(prefix + "_copy", c.getLocal("itB"), c.getLocal("pr")),
            c.call(prefix + "_copy", c.getLocal("itB"), c.i32_const(accReduce)),
            c.setLocal("itB", c.i32_sub(c.getLocal("itB"), c.i32_const(n8g))),
            c.block(c.loop(
                c.br_if(1, c.i32_lt_u(c.getLocal("itB"), c.getLocal("pTable"))),
                c.call(prefix + "_add", c.i32_const(accReduce), c.getLocal("itB"), c.i32_const(accReduce)),
                c.call(prefix + "_add", c.getLocal("pr"), c.i32_const(accReduce), c.getLocal("pr")),
                c.setLocal("itB", c.i32_sub(c.getLocal("itB"), c.i32_const(n8g))),
                c.br(0)
            )),

            // Free bucket table
            c.i32_store(c.i32_const(0), c.getLocal("pTable"))
        );
    }

    function buildMultiexp() {
        const f = module.addFunction(fnName);
        f.addParam("pBases", "i32");
        f.addParam("pScalars", "i32");
        f.addParam("scalarSize", "i32");
        f.addParam("n", "i32");  // Number of points
        f.addParam("pr", "i32");
        f.addLocal("chunkSize", "i32");
        f.addLocal("nChunks", "i32");
        f.addLocal("nWin", "i32");
        f.addLocal("pCarry", "i32");
        f.addLocal("savedFree", "i32");
        f.addLocal("windowIdx", "i32");
        f.addLocal("j", "i32");

        const c = f.getCodeBuilder();

        const pTSizes = module.alloc([
            17, 17, 17, 17,   17, 17, 17, 17,
            17, 17, 16, 16,   15, 14, 13, 13,
            12, 11, 10,  9,    8,  7,  7,  6,
            5 ,  4,  3,  2,    1,  1,  1,  1
        ]);

        f.addCode(
            c.call(prefix + "_zero", c.getLocal("pr")),
            c.if(
                c.i32_eqz(c.getLocal("n")),
                c.ret([])
            ),
            c.setLocal("chunkSize", c.i32_load8_u( c.i32_clz(c.getLocal("n")),  pTSizes )),
            // Signed windowing needs c >= 2: at c=1 the digit range [-2^(c-1), 2^(c-1)-1]
            // collapses to {-1, 0}, which cannot represent positive scalars.
            c.if(
                c.i32_lt_s(c.getLocal("chunkSize"), c.i32_const(2)),
                c.setLocal("chunkSize", c.i32_const(2))
            ),
            c.setLocal(
                "nChunks",
                c.i32_add(
                    c.i32_div_u(
                        c.i32_sub(
                            c.i32_shl(
                                c.getLocal("scalarSize"),
                                c.i32_const(3)
                            ),
                            c.i32_const(1)
                        ),
                        c.getLocal("chunkSize")
                    ),
                    c.i32_const(1)
                )
            ),
            c.setLocal("nWin", c.i32_add(c.getLocal("nChunks"), c.i32_const(1))),

            // Allocate the carry buffer: nWin * n bytes (1 byte per window/point).
            // Bump up to a 4-byte boundary so later point allocations stay aligned.
            c.setLocal("savedFree", c.i32_load(c.i32_const(0))),
            c.setLocal("pCarry", c.getLocal("savedFree")),
            c.i32_store(
                c.i32_const(0),
                c.i32_and(
                    c.i32_add(
                        c.i32_add(
                            c.getLocal("savedFree"),
                            c.i32_mul(c.getLocal("nWin"), c.getLocal("n"))
                        ),
                        c.i32_const(3)
                    ),
                    c.i32_const(-4)
                )
            ),

            c.call(fnName + "_recode",
                c.getLocal("pScalars"),
                c.getLocal("scalarSize"),
                c.getLocal("n"),
                c.getLocal("chunkSize"),
                c.getLocal("nChunks"),
                c.getLocal("pCarry")
            ),

            // Horner over windows, highest (the carry-guard window) first.
            c.setLocal("windowIdx", c.getLocal("nChunks")),
            c.block(c.loop(
                c.br_if(1, c.i32_lt_s(c.getLocal("windowIdx"), c.i32_const(0))),

                // Double pr chunkSize times (skip while pr is still zero)
                c.if(
                    c.i32_eqz(c.call(prefix + "_isZero", c.getLocal("pr"))),
                    [
                        ...c.setLocal("j", c.i32_const(0)),
                        ...c.block(c.loop(
                            c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("chunkSize"))),
                            c.call(prefix + "_double", c.getLocal("pr"), c.getLocal("pr")),
                            c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))),
                            c.br(0)
                        ))
                    ]
                ),

                c.call(
                    fnName + "_chunk",
                    c.getLocal("pBases"),
                    c.getLocal("pScalars"),
                    c.getLocal("scalarSize"),
                    c.getLocal("pCarry"),
                    c.getLocal("n"),
                    c.getLocal("windowIdx"),
                    c.getLocal("chunkSize"),
                    c.i32_const(aux)
                ),
                c.call(
                    prefix + "_add",
                    c.getLocal("pr"),
                    c.i32_const(aux),
                    c.getLocal("pr")
                ),

                c.setLocal("windowIdx", c.i32_sub(c.getLocal("windowIdx"), c.i32_const(1))),
                c.br(0)
            )),

            // Free the digit buffer
            c.i32_store(c.i32_const(0), c.getLocal("savedFree"))
        );
    }

    buildGetChunk();
    buildRecode();
    buildMutiexpChunk();
    buildMultiexp();

    module.exportFunction(fnName);
    module.exportFunction(fnName +"_chunk");


};
