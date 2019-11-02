module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },

  parser: 'babel-eslint',

  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended'
  ],

  rules: {
    'no-console': [1, { allow: ['warn', 'info', 'error'] }],
    'max-len': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'camelcase': 0,
    'semi': 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'semi-style': [2, 'first'],
    'curly': 2,
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'space-in-parens': 0,
    'space-before-function-paren': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'array-bracket-spacing': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    'no-useless-constructor': 0,
    'lines-between-class-members': 0,

    // Imports.
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,

    // Promises.
    'prefer-promise-reject-errors': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/promise-function-async': 0,

    // React.
    'react/prop-types': 0,
    'react/jsx-no-undef': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-boolean-value': 0,
    'react/no-unknown-property': 0,
    'react/jsx-pascal-case': 2,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-curly-spacing': [2, { when: 'always', spacing: { objectLiterals: 'never' } }],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-indent-props': [2, 'first'],

    // Typescript
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'semi', requireLast: false }
      }
    ],
    'camelcase': 0,
    '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        varsIgnorePattern: '(^_|^IIFE|^\\$|h)',
        argsIgnorePattern: '(^_|)',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ]
  },

  // Add TS support and rules that require type support.
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: 'module',
        ecmaVersion: 2019,
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        '@typescript-eslint/prefer-includes': 2,
        '@typescript-eslint/no-unnecessary-type-assertion': 2,
        '@typescript-eslint/no-unnecessary-type-arguments': 2,
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        '@typescript-eslint/ban-types': [
          2,
          {
            types: {
              "Array": {
                "message": "Use <T>[] instead",
                "fixWith": "<unknown>[]"
              },
              "Object": {
                "message": "Use Record instead",
                "fixWith": "Record<string, unknown>"
              },
              "String": {
                "message": "Use string instead",
                "fixWith": "string"
              },
              "Boolean": {
                "message": "Use boolean instead",
                "fixWith": "boolean"
              },
              "Number": {
                "message": "Use number instead",
                "fixWith": "number"
              }
            }
          }
        ]
      }
    }
  ]
}
