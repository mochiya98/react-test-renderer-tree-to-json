module.exports = {
  extends: [
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["prettier", "jest", "react", "typescript-sort-keys"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "React" },
    ],
    "prettier/prettier": "error",
    "sort-keys": "error",
    "typescript-sort-keys/interface": "error",
  },
  settings: {
    react: { version: "detect" },
  },
};
