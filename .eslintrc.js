module.exports = {
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
