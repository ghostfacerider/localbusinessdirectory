import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      'package-lock.json',
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.app.json',
      },
    },
    // plugins: {
    //   react: reactPlugin,
    //   prettier: prettierPlugin,
    //   '@typescript-eslint': tsPlugin,
    //   jest: jestPlugin,
    // },
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['vite.config.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.vite.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];

