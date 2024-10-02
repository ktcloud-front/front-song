/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@jaeheesong-ktc/eslint-config/index.js', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'dist'],
}
