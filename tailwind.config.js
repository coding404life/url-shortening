module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'cayn': '#2ACFCF',
        'violet': '#3b3054'
      },
      backgroundImage: theme => ({
        'hero': "url('../src/assets/images/illustration-working.svg')",
        'shorten': "url('../src/assets/images/bg-boost-desktop.svg')",
      })
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}