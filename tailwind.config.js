module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'cayn': '#2ACFCF'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}