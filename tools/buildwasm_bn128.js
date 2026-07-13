import { ModuleBuilder } from "wasmbuilder";
import buildBn128 from "../src/bn128/build_bn128.js";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

async function buildWasm() {
    const moduleBuilder = new ModuleBuilder();
    moduleBuilder.setMemory(25);
    buildBn128(moduleBuilder);

    const code = moduleBuilder.build();

    writeFileSync(
        join( __dirname, "..", "build", "bn128_wasm.js"),
        `export const code = "${Buffer.from(code).toString("base64")}";
export const pq = ${moduleBuilder.modules.f1m.pq};
export const pr = ${moduleBuilder.modules.frm.pq};
export const pG1gen = ${moduleBuilder.modules.bn128.pG1gen};
export const pG1zero = ${moduleBuilder.modules.bn128.pG1zero};
export const pG1b = ${moduleBuilder.modules.bn128.pG1b};
export const pG2gen = ${moduleBuilder.modules.bn128.pG2gen};
export const pG2zero = ${moduleBuilder.modules.bn128.pG2zero};
export const pG2b = ${moduleBuilder.modules.bn128.pG2b};
export const pOneT = ${moduleBuilder.modules.bn128.pOneT};
export const prePSize = ${moduleBuilder.modules.bn128.prePSize};
export const preQSize = ${moduleBuilder.modules.bn128.preQSize};
export const n8q = 32;
export const n8r = 32;
export const q = "${moduleBuilder.modules.bn128.q}";
export const r = "${moduleBuilder.modules.bn128.r}";
`
    );

    const codeBlob = new Blob([code]);

    console.log(await codeBlob.stream());

    const codeStream = codeBlob.stream();
    const compressedReadableStream = codeStream.pipeThrough(
        new CompressionStream("gzip"),
    );
    const compressedCode = await new Response(compressedReadableStream).bytes();

    writeFileSync(
        join( __dirname, "..", "build", "bn128_wasm_gzip.js"),
        `export const gzipCode = "${Buffer.from(compressedCode).toString("base64")}";
export const pq = ${moduleBuilder.modules.f1m.pq};
export const pr = ${moduleBuilder.modules.frm.pq};
export const pG1gen = ${moduleBuilder.modules.bn128.pG1gen};
export const pG1zero = ${moduleBuilder.modules.bn128.pG1zero};
export const pG1b = ${moduleBuilder.modules.bn128.pG1b};
export const pG2gen = ${moduleBuilder.modules.bn128.pG2gen};
export const pG2zero = ${moduleBuilder.modules.bn128.pG2zero};
export const pG2b = ${moduleBuilder.modules.bn128.pG2b};
export const pOneT = ${moduleBuilder.modules.bn128.pOneT};
export const prePSize = ${moduleBuilder.modules.bn128.prePSize};
export const preQSize = ${moduleBuilder.modules.bn128.preQSize};
export const n8q = 32;
export const n8r = 32;
export const q = "${moduleBuilder.modules.bn128.q}";
export const r = "${moduleBuilder.modules.bn128.r}";
`
    );

    writeFileSync(
        join( __dirname, "..", "build", "bn128.wasm"),
        Buffer.from(code)
    );
}

buildWasm();
