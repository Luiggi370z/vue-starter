module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/recommended', '@vue/prettier'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-closing-bracket-newline': 'error',
    'vue/no-use-v-if-with-v-for': 'warning',
    'vue/prop-name-casing': 'error'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}
