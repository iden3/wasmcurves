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
                    // wasmcurves is a codegen library validated in Node, so
                    // there is no separate browser project (it would be redundant).
                    exclude: ["**/node_modules/**", "test/helpers/**"],
                    name: "unit",
                    environment: "node",
                },
            },
        ],
    },
});
