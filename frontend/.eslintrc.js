module.exports = {
  env: {
    'commonjs': true
  },
  // parserに'vue-eslint-parser'を指定し、'@typescript-eslint/parser'はparserOptionsに指定する
  parser:  'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    //'prettier/@typescript-eslint',
    //'plugin:prettier/recommended',
    "eslint:recommended",
  ],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "quotes": [2, "double"],
    "semi": [2, "never"],
    // https://qiita.com/yoshinbo/items/3436face1a1b02f2542f
    //"vue/max-attributes-per-line": "off",
    "vue/html-self-closing": 0,
    // タグの最後で改行しないで
    "vue/html-closing-bracket-newline": [2, {"multiline": "never"}],
    //"vue/html-self-closing": 0,
  }
}
