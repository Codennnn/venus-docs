module.exports = {
  extends: ['airbnb'],

  rules: {
    // override rules
    'vue/no-unused-components': 1,
    'vue/attribute-hyphenation': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'object-shorthand': ['error', 'always'],
    'no-unused-vars': 1,
    'no-unused-expressions': 0,
    'func-names': 0,
    'max-len': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    semi: ['error', 'never'],
    camelcase: "off",
    quotes: ['error', 'single']
  }
}
