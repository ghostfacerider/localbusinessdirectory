import { FlatConfig } from "eslint";

const config = [
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply to TypeScript files
    ignores: ["node_modules/**"], // Optional: exclude directories
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      prettier: require("eslint-plugin-prettier"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      jest: require("eslint-plugin-jest"),
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.test.{ts,tsx,js,jsx}"], // Specific Jest rules for test files
    plugins: {
      jest: require("eslint-plugin-jest"),
    },
    rules: {
      ...require("eslint-plugin-jest").configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      ...require("@typescript-eslint/eslint-plugin").configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: require("eslint-plugin-react"),
    },
    rules: {
      ...require("eslint-plugin-react").configs.recommended.rules,
    },
  },
];

export default config;


// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )
