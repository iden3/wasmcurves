// Compiles the AssemblyScript batch-affine MSM module (src/as/msm_batch.ts)
// to build/msm_batch.wasm. The module is curve-independent: it imports the
// base-field/group ops and shares the main module's linear memory, so the
// same binary serves bn128 and bls12381 (G1 and G2).
const { execFileSync } = require("child_process");
const path = require("path");

const asc = path.join(__dirname, "..", "node_modules", ".bin", "asc");
const src = path.join(__dirname, "..", "src", "as", "msm_batch.ts");
const out = path.join(__dirname, "..", "build", "msm_batch.wasm");

execFileSync(asc, [
    src, "-o", out,
    "--importMemory", "--initialMemory", "25",
    "--runtime", "stub", "--noAssert", "-O3",
], { stdio: "inherit" });
console.log("wrote", out);
