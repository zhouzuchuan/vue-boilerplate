module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'prettier/prettier': 2,
        'vue/multi-word-component-names': 0,
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
        'vue/first-attribute-linebreak': 0,
        'vue/no-multiple-template-root': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars':
            process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
}
