module.exports = {
  // parserに'vue-eslint-parser'を指定し、'@typescript-eslint/parser'はparserOptionsに指定する
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['database/**/*.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
