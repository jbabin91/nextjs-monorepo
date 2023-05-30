module.exports = {
  extends: ['next', 'turbo', 'eslint:recommended', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
