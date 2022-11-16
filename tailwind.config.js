/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['"Barlow"','sans'],
        'barlow-condensed': ['"Barlow Condensed"','sans'],
        'bellefair': ['"Bellefair"','sans'],
      },
      boxShadow: {
        '3xl': '0 0 0 35px rgba(162, 181, 187, 0.2)',
      },
      screens: {
        lg: "1440px",
      },
    },
  },
  plugins: [],
}
