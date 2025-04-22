const eslint = require('@eslint/js')
const tseslint = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const prettier = require('eslint-plugin-prettier')
const unusedImports = require('eslint-plugin-unused-imports')
const simpleImportSort = require('eslint-plugin-simple-import-sort')

module.exports = [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'public/',
      '**/*.config.js',
      '**/*.config.ts',
      '.lintstagedrc.js',
    ],
  },
  eslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: false,
          endOfLine: 'auto',
          semi: false,
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
    },
    settings: {
      next: {
        rootDir: true,
      },
    },
  },
]
