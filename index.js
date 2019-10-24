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

    // Imports.
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,

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
    'react/jsx-indent-props': [2, 'first']
  },

  // Add TS support
  overrides: [
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2019,
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      camelcase: 0,
      '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
      '@typescript-eslint/semi': [2, 'never'],
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/promise-function-async': 0,
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-non-null-assertion': 1,
      '@typescript-eslint/no-require-imports': 1,
      '@typescript-eslint/no-unnecessary-type-assertion': 2,
      '@typescript-eslint/prefer-for-of': 2,
      '@typescript-eslint/prefer-includes': 2,
      '@typescript-eslint/prefer-string-starts-ends-with': 2,
      '@typescript-eslint/member-delimiter-style': [
        2,
        {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'semi', requireLast: false }
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          varsIgnorePattern: '(^_|^IIFE|^\\$|h)',
          argsIgnorePattern: '(^_|)',
          args: 'after-used',
          ignoreRestSiblings: true
        }
      ]
    }
  ]
}
