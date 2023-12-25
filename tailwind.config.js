/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js}"],
  theme: {
    colors : {
      "dark-purple": "#502050",
      "light-purple": "#937b92",
      "white": "#fff",
      "pink": "#ee68a4",
    },
    backgroundColor : {
      "light-purple": "#f7f2f7",
      "dark-purple": "#502050",
    },
    backgroundImage: {
      "pattern-bottom":"url('../../images/svg-img/bg-pattern-bottom-desktop.svg')",
      "pattern-bottom-mobile":"url('../../images/svg-img/bg-pattern-bottom-mobile.svg')",
    },
    fontFamily:{
      'my-font':['my-font']
    },
    extend: {},
  },
  plugins: [],
}