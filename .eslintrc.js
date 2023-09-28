const path = require('path');

module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
    'shared-node-browser': true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', '@emotion'],
  settings: { 'import/resolver': { typescript: {} }, react: { version: 'detect' } },
  rules: {
    'no-implicit-coercion': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/extensions': ['error', 'ignorePackages'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    '@emotion/pkg-renaming': 'error',

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css', 'tw'] }],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      excludedFiles: ['vite.config.ts', 'jest.setup.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          { format: ['camelCase', 'UPPER_CASE', 'PascalCase'], selector: 'variable', leadingUnderscore: 'allow' },
          { format: ['camelCase', 'PascalCase'], selector: 'function' },
          { format: ['PascalCase'], selector: 'interface' },
          { format: ['PascalCase'], selector: 'typeAlias' },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'public-static-field',
              'private-static-field',
              'public-instance-field',
              'private-instance-field',
              'public-constructor',
              'private-constructor',
              'public-instance-method',
              'private-instance-method',
            ],
          },
        ],
      },
    },
    {
      files: ['**/*.spec.ts?(x)', '**/*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    {
      files: ['packages/client-common/design/**/*.ts?(x)', 'packages/client-common/design/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-common/design/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/client-common/hooks/**/*.ts?(x)', 'packages/client-common/hooks/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-common/hooks/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/client-common/use-stop-watch/**/*.ts?(x)', 'packages/client-common/use-stop-watch/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-common/use-stop-watch/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/clock/client/**/*.ts?(x)', 'packages/clock/client/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/clock/client/tsconfig.json`),
          },
        },
      },
    },
  ],
};
