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

// export * as bn128_wasm from "./build/bn128_wasm.js";
// export * as bls12381_wasm from "./build/bls12381_wasm.js";
// export * as mnt6753_wasm from "./build/mnt6753_wasm.js";

export { default as buildBn128 } from "./src/bn128/build_bn128.js";
export { default as buildBls12381 } from "./src/bls12381/build_bls12381.js";
// export { default as buildMnt6753 } from "./src/mnt6753/build_mnt7.js";

export { default as buildF1m } from "./src/build_f1m.js";
