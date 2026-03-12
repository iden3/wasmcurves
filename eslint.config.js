import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: ["build/**", "tools/**"],
    },
    {
        ...js.configs.recommended,
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.node,
                ...globals.es2020,
                WebAssembly: "readonly",
            },
        },
        rules: {
            "indent": ["error", 4],
            "linebreak-style": ["error", "unix"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
        },
    },
    {
        files: ["test/**/*.js"],
        languageOptions: {
            globals: {
                describe: "readonly",
                it: "readonly",
                beforeAll: "readonly",
                afterAll: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
            },
        },
    },
];
