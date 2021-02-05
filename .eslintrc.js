module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        extraFileExtensions: ['.json'],
    },
    ignorePatterns: ['.eslintrc.js'],
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'no-undef': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-unused-vars-experimental': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
                pathGroups: [
                    {
                        pattern: '@strategies/*',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@decorators/*',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@guards/*',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@interceptors/*',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@validators/*',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@utils*',
                        group: 'index',
                        position: 'after',
                    },
                ],
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: 'tsconfig.json',
            },
        },
    },
};
