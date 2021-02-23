module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': [ 'Poppins', 'sans-serif' ]
      },
      colors: {
        'cayn': '#2ACFCF',
        'light-cayn': '#9be2e3',
        'violet': '#3b3054',
        'dark-violet': '#232127'
      },
      backgroundImage: theme => ({
        'hero': "url('../src/assets/images/illustration-working.svg')",
        'shorten': "url('../src/assets/images/bg-boost-desktop.svg')",
      })
    },

  },
  variants: {
    extend: {
      opacity: [ 'disabled' ]
    },
  },
  plugins: [],
}