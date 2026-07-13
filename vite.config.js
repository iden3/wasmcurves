import { defineConfig } from "vite";
import { builtinModules } from "module";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));
const external = [
    ...builtinModules,
    ...Object.keys(pkg.dependencies || {}),
];

export default defineConfig({
    build: {
        lib: {
            entry: "./index.js",
            formats: ["cjs"],
            fileName: () => "main.cjs",
        },
        outDir: "build",
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            external,
        },
    },
    test: {
        projects: [
            {
                test: {
                    globals: true,
                    testTimeout: 10000000,
                    include: ["test/**/*.js"],
                    // mnt6753 is a legacy curve unused by the iden3 stack; its
                    // pedersen-table / base64 build tooling needs a separate ESM
                    // pass. wasmcurves is a codegen library validated in Node, so
                    // there is no separate browser project (it would be redundant).
                    exclude: ["**/node_modules/**", "test/helpers/**", "test/mnt6753.js"],
                    name: "unit",
                    environment: "node",
                },
            },
        ],
    },
});
