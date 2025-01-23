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
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.app.json',
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
      jest: jestPlugin,
    },
    rules: {  // Airbnb base rules for TypeScript
      ...tsPlugin.configs.recommended.rules,
      // Jest recommended rules
      ...jestPlugin.configs.recommended.rules,
      // React plugin rules
      ...reactPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  }
];

