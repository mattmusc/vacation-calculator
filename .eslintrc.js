module.exports = {
	env: {
		"browser": true,
		"es6": true
	},
	extends: [
		"plugin:react/recommended",
		"airbnb"
	],
	globals: {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			"jsx": true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		'import/extensions': "off",
		'react/jsx-filename-extension': "off",
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['./src']
			}
		}
	},
};
