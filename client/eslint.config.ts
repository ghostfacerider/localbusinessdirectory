import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/**'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
      jest: jestPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },
  {
    // Specific configuration for `vite.config.ts`
    files: ['vite.config.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.vite.json', // Separate tsconfig for Vite configuration file
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Example: adjust specific rules for this file
    },
  },
];
