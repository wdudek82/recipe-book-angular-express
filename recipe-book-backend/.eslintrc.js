module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
    },
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    /* Best Practices */
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],

    // note you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "no-console": 1,

    /* ECMAScript 6 */
    "arrow-body-style": 0,
    "arrow-parens": ["error", "always"],
    "function-paren-newline": ["error", "consistent"],
    "no-confusing-arrow": 0,

    /* Stylistic */
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "space-before-function-paren": 0,
    quotes: ["error", "double", { avoidEscape: true }],
    "no-underscore-dangle": 0,
    "operator-linebreak": 0,
    "implicit-arrow-linebreak": 0,
    "object-curly-newline": ["error", { consistent: true }],
  },
};
