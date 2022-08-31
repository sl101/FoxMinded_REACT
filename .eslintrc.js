module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'prettier',
    'react-app',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-one-expression-per-line': [0, { allow: ['none', 'literal', 'single-child'] }],

    'react/function-component-definition': [1,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],

    'react/destructuring-assignment': [1, 'never', { ignoreClassFields: true, destructureInSignature: 'ignore' }],

    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],

    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.spec.js'] }],

    'react/prop-types': 'off',

    'global-require': 0,

    'linebreak-style': ['error', 'windows'],

    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
