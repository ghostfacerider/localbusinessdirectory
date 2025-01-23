const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat();

module.exports = [
  ...compat.config({
    files: ['src/**/*.{ts/tsx}'],
    extends: ['./.eslintrc.cjs'],
  }),
];