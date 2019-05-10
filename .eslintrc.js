module.exports = {
  extends: [
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  plugins: ["prettier", "jest", "react", "typescript-sort-keys"],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "prettier/prettier": "error",
    "sort-keys": "error",
    "typescript-sort-keys/interface": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "React" }
    ]
  },
  settings: {
    react: { version: "detect" }
  }
};
