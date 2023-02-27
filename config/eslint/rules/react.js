module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },

  rules: {
    'react/no-children-prop': 'off',

    'react/prop-types': 'off',

    // issues mock components created in tests and with HOCs
    'react/display-name': 'off',

    // TODO: Try and fix the issue whenever we encounter one of these in the wild.
    'react/no-unescaped-entities': 'warn',
  },
}
