module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],

  globals: {
    fetch: 1,
    window: 1,
  },
}
