module.exports = {
  // Sets supported environments.
  env: {
    browser: true,
    node: true,
    es6: true
  },

  // Setup default parsers.
  parserOptions: {
    // Project must be defined by the user!
    // project: 'path to TS config',
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    // Enable prettier as Eslint rules.
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],

  rules: {
    // Update prettier config file.
    'prettier/prettier': ['error', require('./prettier.js')],

    // Warns when using console.log calls.
    'no-console': [1, { allow: ['warn', 'info', 'error'] }],

    // Disable fixed max-len (this rule cant be autofixed).
    'max-len': 0,

    // Disable returning consistent types.
    'consistent-return': 0,

    // Disables semi colons and comma dangles but allow underscores.
    semi: 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'semi-style': [2, 'first'],
    '@typescript-eslint/semi': [2, 'never'],

    // Prefer named exports over default ones.
    'import/prefer-default-export': 0,

    // Disable resolving modules, as this is done by TS.
    'import/no-unresolved': 0,

    // Allow curlys after arrow functions.
    'arrow-body-style': 0,

    // Require curlys whenever possible
    curly: 2,

    // Forces camelCase'd variables.
    camelcase: 0,
    '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],

    // Dont force new line for arrays & objects, but add spacing before brackets and parentheses.
    'object-curly-newline': 0,
    'space-in-parens': 0,
    'space-before-function-paren': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'array-bracket-spacing': [2, 'always'],
    'object-curly-spacing': [2, 'always'],

    // Setup best practices when working with TS.
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/restrict-plus-operands': 0,
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

    // Exceptions for unused variables.
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        varsIgnorePattern: '(^_|^IIFE|^\\$|h)',
        argsIgnorePattern: '(^_|)',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],

    // Disable react specific rules.
    'react/prop-types': 0,
    'react/jsx-no-undef': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-boolean-value': 0,
    'react/no-unknown-property': 0,

    // Force PascalCase for JSX components.
    'react/jsx-pascal-case': 2,

    // Allow multiple expressions per line.
    'react/jsx-one-expression-per-line': 0,

    // Disable strict a11y rules.
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/media-has-caption': 0,

    // Force spaces inbetween JSX props.
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-curly-spacing': [2, { when: 'always', spacing: { objectLiterals: 'never' } }],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-indent-props': [2, 'first']
  }
}
