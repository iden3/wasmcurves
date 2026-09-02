import { ModuleBuilder } from "wasmbuilder";
import buildBls12381 from "../src/bls12381/build_bls12381.js";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

function buildWasm() {
    const moduleBuilder = new ModuleBuilder();
    moduleBuilder.setMemory(25);
    buildBls12381(moduleBuilder);

    const code = moduleBuilder.build();

    writeFileSync(
        join( __dirname, "..", "build", "bls12381_wasm.js"),
        `export const code = "${Buffer.from(code).toString("base64")}";
// .pq is wasmbuilder's generic per-field-module property, "pointer to this
// module's prime" -- so f1m.pq points at q and frm.pq points at r. The
// frm.pq on the pr line below is therefore correct, not a typo.
export const pq = ${moduleBuilder.modules.f1m.pq};
export const pr = ${moduleBuilder.modules.frm.pq};
export const pG1gen = ${moduleBuilder.modules.bls12381.pG1gen};
export const pG1zero = ${moduleBuilder.modules.bls12381.pG1zero};
export const pG1b = ${moduleBuilder.modules.bls12381.pG1b};
export const pG2gen = ${moduleBuilder.modules.bls12381.pG2gen};
export const pG2zero = ${moduleBuilder.modules.bls12381.pG2zero};
export const pG2b = ${moduleBuilder.modules.bls12381.pG2b};
export const pOneT = ${moduleBuilder.modules.bls12381.pOneT};
export const prePSize = ${moduleBuilder.modules.bls12381.prePSize};
export const preQSize = ${moduleBuilder.modules.bls12381.preQSize};
export const n8q = 48;
export const n8r = 32;
export const q = "${moduleBuilder.modules.bls12381.q}";
export const r = "${moduleBuilder.modules.bls12381.r}";
`
    );

    writeFileSync(
        join( __dirname, "..", "build", "bls12381.wasm"),
        Buffer.from(code)
    );
}

buildWasm();
