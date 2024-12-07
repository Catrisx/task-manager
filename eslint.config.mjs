import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];

export default [
    {
        // Позначає як кореневий файл конфігурації
        root: true,

        // Налаштування середовища
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            // Версія ECMAScript
            ecmaVersion: 'latest',
            // Джерело коду
            sourceType: 'module',
        },

        // Базові рекомендовані правила
        ...pluginJs.configs.recommended,

        // Додаткові налаштування правил
        rules: {
            // Власні правила або перевизначення
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },

        // Ігнорування файлів
        ignores: ['dist/', 'node_modules/', '.eslintrc.js'],
    },
];
