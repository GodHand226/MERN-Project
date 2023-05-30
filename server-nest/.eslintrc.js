module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
<<<<<<< HEAD
=======
    tsconfigRootDir: __dirname,
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
<<<<<<< HEAD
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
=======
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
<<<<<<< HEAD
=======
  ignorePatterns: ['.eslintrc.js'],
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
