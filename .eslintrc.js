module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': [2, 'never'],
    'generator-star-spacing': 'off',
    'arrow-parens': 0,
    'one-var': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
