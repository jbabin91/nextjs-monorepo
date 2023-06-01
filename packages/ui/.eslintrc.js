/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['custom', 'plugin:tailwindcss/recommended'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'off',
  },
};
