module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // ...
      borderRadius: ['hover', 'focus'],
      boxShadow: {
        xs: '5px 5px 10px rgba(0, 0, 0, 0.25)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      }
    }
  },
  plugins: [],
}
