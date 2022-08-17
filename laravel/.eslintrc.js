module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        "no-use-before-define": "off",
        "comma-dangle": "off",
        "react/prop-types": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        indent: 'off',
        quotes: 'off',
        camelcase: "off",
        semi: [2, "always"]

    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
