import js from "@eslint/js";
import globals from "globals";

export default [
    { ignores: ["build/", "tools/"] },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.node,
                ...globals.mocha,
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
];
