/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shajarian" : "url('/src/images/Shajarian.jpg')"
      },
      height : {
        "200" : "200px",
        "1/2vh" : "50vh" ,
        "450":"450px"
      },
      width:{
        "500" : "500px",
      },
      margin : {
        "2.3" : "9px"
      }
    },
  },
  plugins: [],
}

