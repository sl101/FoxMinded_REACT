module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/some-other-config-you-use',
		'plugin:airbnb/hooks',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'jsx-a11y/rule-name': 2,
		'prettier/indent': 'error',
	},
};
