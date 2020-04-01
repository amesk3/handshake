module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    "jest/globals": true
  },
  extends: ["airbnb-base", "plugin:jest/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    ApiError: false,
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-describe": "off",
    "jest/valid-expect": "error",
    "max-len": [2, { code: 120, tabWidth: 2, ignoreUrls: true, "ignoreTemplateLiterals": true, "ignoreStrings": true }],
    "no-use-before-define": "off",
    "no-console": "off",
    "class-methods-use-this": "off",
    "object-curly-newline": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": ["error", { "singleQuote": true }],
    "import/order": "off",
    "no-useless-escape": "off",
    "no-case-declarations": "off",
    "no-plusplus": "off",
    "no-await-in-loop": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "no-fallthrough": "off",
    "no-restricted-globals": "warn",
  },
  plugins: ["jest", "prettier"]
};
