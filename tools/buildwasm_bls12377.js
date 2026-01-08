const ModuleBuilder = require("wasmbuilder").ModuleBuilder;
const buildBls12377 = require("../src/bls12377/build_bls12377.js");
const fs = require("fs");
const path = require("path");

function buildWasm() {
    const moduleBuilder = new ModuleBuilder();
    moduleBuilder.setMemory(25);
    buildBls12377(moduleBuilder);

    const code = moduleBuilder.build();

    fs.writeFileSync(
        path.join(__dirname, "..", "build", "bls12377_wasm.js"),
        `
            exports.code = "${Buffer.from(code).toString("base64")}";
            exports.pq = ${moduleBuilder.modules.f1m.pq};
            exports.pr = ${moduleBuilder.modules.frm.pq};
            exports.pG1gen = ${moduleBuilder.modules.bls12377.pG1gen};
            exports.pG1zero = ${moduleBuilder.modules.bls12377.pG1zero};
            exports.pG1b = ${moduleBuilder.modules.bls12377.pG1b};
            exports.pG2gen = ${moduleBuilder.modules.bls12377.pG2gen};
            exports.pG2zero = ${moduleBuilder.modules.bls12377.pG2zero};
            exports.pG2b = ${moduleBuilder.modules.bls12377.pG2b};
            exports.pOneT = ${moduleBuilder.modules.bls12377.pOneT};
            exports.prePSize = ${moduleBuilder.modules.bls12377.prePSize};
            exports.preQSize = ${moduleBuilder.modules.bls12377.preQSize};
            exports.n8q = 48;
            exports.n8r = 32;
            exports.q = "${moduleBuilder.modules.bls12377.q}";
            exports.r = "${moduleBuilder.modules.bls12377.r}";
        `
    );

    fs.writeFileSync(
        path.join(__dirname, "..", "build", "bls12377.wasm"),
        Buffer.from(code)
    );
}

buildWasm();

