/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    // 'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['tailwindcss']
}
