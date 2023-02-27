module.exports = {
  plugins: ['react-hooks'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['plugin:react-hooks/recommended'],

  rules: {
    // TODO: Get this to "error" ASAP
    'react-hooks/rules-of-hooks': 'warn',

    // TODO: Get this to "error" ASAP
    'react-hooks/exhaustive-deps': 'warn',
  },
}
