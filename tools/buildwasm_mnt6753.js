import { ModuleBuilder } from "wasmbuilder";
import buildMNT6753 from "../src/mnt6753/build_mnt6753.js";
import buildPedersenHash from "../src/build_pedersenhash.js";
import baseTables from "../build/pedersenparams_mnt6753.js";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

function buildWasm() {

    const moduleBuilder = new ModuleBuilder();
    moduleBuilder.setMemory(1000);

    buildMNT6753(moduleBuilder);
    buildPedersenHash(moduleBuilder, "g1m", "g1m", "f1m", 188, baseTables);

    const code = moduleBuilder.build();

    writeFileSync(
        join( __dirname, "..", "build", "mnt6753_wasm.js"),
        `export const code = "${Buffer.from(code).toString("base64")}";
export const pq = ${moduleBuilder.modules.mnt6753.pq};
export const pr = ${moduleBuilder.modules.mnt6753.pq};
export const pG1gen = ${moduleBuilder.modules.mnt6753.pG1gen};
export const pG1zero = ${moduleBuilder.modules.mnt6753.pG1zero};
export const pG2gen = ${moduleBuilder.modules.mnt6753.pG2gen};
export const pG2zero = ${moduleBuilder.modules.mnt6753.pG2zero};
export const pOneT = ${moduleBuilder.modules.mnt6753.pOneT};
export const prePSize = ${moduleBuilder.modules.mnt6753.prePSize};
export const preQSize = ${moduleBuilder.modules.mnt6753.preQSize};
`
    );
}

buildWasm();
