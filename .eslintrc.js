module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: [
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  settings: {
    next: {
      rootDir: ['src/apps/*/'],
    },
  },
};
