module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
    // parser: '@babel/eslint-parser',
    // requireConfigFile: false
  },
  extends: [
    '@nuxtjs'
    // 'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'vue/no-v-text-v-html-on-component': 1,
    'no-console': 1
  }
};
