/** @type {import('postcss').Config} */
module.exports = {
  parser: 'sugarss',
  map: false,
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    postcssNesting: {},
    autoprefixer: {},
  },
};
