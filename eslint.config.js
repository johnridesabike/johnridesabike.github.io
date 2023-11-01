let globals = require("globals");
let js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
