import { defineConfig } from "vite";
import { builtinModules } from "module";
import { readFileSync } from "fs";
import { playwright } from "@vitest/browser-playwright";

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
                    exclude: ["**/node_modules/**", "test/helpers/**"],
                    name: "unit",
                    environment: "node",
                },
            },
            {
                test: {
                    globals: true,
                    testTimeout: 10000000,
                    include: ["test/**/*.js"],
                    exclude: ["**/node_modules/**", "test/helpers/**"],
                    name: "browser",
                    browser: {
                        enabled: true,
                        provider: playwright(),
                        instances: [
                            { browser: "chromium" },
                        ],
                    },
                },
            },
        ],
    },
});
