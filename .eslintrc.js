module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['prettier'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 0,
    'react/prop-types': 0,
  },
};
