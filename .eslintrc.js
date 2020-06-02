module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ["eslint-plugin-import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      'warn',
      {
        // example configuration
        newlinesBetween: 'always',
        groups: [
          '/^dotenv/',
          '/^express/',
          'module',
          '/^@shared/',
          ['sibling','/module/', '/entity/' , '/controller/', '/service/'],
          [  'parent', 'index'],

        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
