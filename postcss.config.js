// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  mode: 'jit',
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,react}',
  ],
}
