/** @type {import('eslint').Linter.Config} */
const config = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        // Adicione suas regras personalizadas aqui
    }
};

module.exports = config;
