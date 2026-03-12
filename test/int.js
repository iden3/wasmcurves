import assert from "assert";
import { buildProtoboard } from "wasmbuilder";
import buildInt from "../src/build_int.js";
import { buildTest2 } from "../src/build_test.js";
import { genValues } from "./helpers/helpers.js";


describe("Basic tests for Int", () => {
    let pbInt;

    beforeAll(async () => {
        pbInt = await buildProtoboard((module) => {
            buildInt(module, 4);
            buildTest2(module, "int_mul");
        }, 32);
    });

    it("It should do a basic multiplication", async () => {
        let c;
        const pA = pbInt.alloc();
        const pB = pbInt.alloc();
        const pC = pbInt.alloc(64);

        const values = genValues(8, false);

        for (let i=0; i<values.length; i++) {
            for (let j=0; j<values.length; j++) {
                pbInt.set(pA, values[i]);
                pbInt.set(pB, values[j]);
                // console.log(values[i].toString(16));
                // console.log(values[j].toString(16));

                pbInt.int_mul(pA, pB, pC);
                c = pbInt.get(pC, 1, 64);

                // console.log("Result: " + c.toString(16));
                // console.log("Refere: " + (values[i] * values[j]).toString(16));
                assert.equal(c, values[i] * values[j]);

            }
        }
    });


    it("It should do a basic squaring", async () => {
        let c;
        const pA = pbInt.alloc();
        const pC = pbInt.alloc(64);

        const values = genValues(8, false);

        for (let i=0; i<values.length; i++) {
            pbInt.set(pA, values[i]);

            pbInt.int_square(pA, pC);
            c = pbInt.get(pC, 1, 64);

            assert.equal(c, values[i] * values[i]);

        }
    });

    it("It should profile int", async () => {

        const pA = pbInt.alloc();
        const pB = pbInt.alloc();
        const pC = pbInt.alloc(64);

        let start, end, time;

        const A = (1n << 256n) - 1n;
        const B = (1n << 256n) - 1n;

        pbInt.set(pA, A);
        pbInt.set(pB, B);

        start = new Date().getTime();
        pbInt.test_int_mul(pA, pB, pC, 50000000);
        end = new Date().getTime();
        time = end - start;

        const c1 = pbInt.get(pC, 1, 64);
        assert.equal(c1, A * B);

        console.log("Mul Time (ms): " + time);

        // start = new Date().getTime();
        // pbInt.test_int_mulOld(pA, pB, pC, 50000000);
        // end = new Date().getTime();
        // time = end - start;

        // const c2 = pbInt.get(pC, 1, 64);
        // assert(c2.equals(A.times(B)));

        // console.log("Mul Old Time (ms): " + time);

    });

});
