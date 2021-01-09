module.exports = {
  plugins: ['@typescript-eslint', 'react', 'testing-library', 'jest-dom'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  /*
    typescript에서 eslint-plugin-import를 사용하면 path, resolver, extensions 관련 에러가 발생함.
    설정이 겹치는 이슈로 보이는데 eslint-import-resolver-typescript 를 이용하면 해결가능.
    eslint-plugin-import는 airbnb에서 포함하고 있는 패키지임.
    향후 eslint-import-resolver-typescript가 deprecated 되거나 api가 바뀌었을 경우 유지보수가 어려울 수 있음.
  */
  // eslint-import-resolver-typescript 설정
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // eslint-import-resolver-typescript 설정
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.spec.tsx', '**/*.stories.tsx', 'test-utils.tsx', 'jest.config.js'],
      },
    ],
    'import/prefer-default-export': 'off',

    // eslint-import-resolver-typescript 설정
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'no-console': ['error', { allow: ['error'] }],
    'no-confusing-arrow': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
      },
    },
  ],
};
