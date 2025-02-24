/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main" : "#010211",
        "Blue" : "#1e98d5"
      },
      textColor: {
        "Blue" : "#1e98d5"
      },
      backgroundImage: {
        "digital" : "url('/src/images/digital-goods.jpg')",
        "clothes" : "url('/src/images/clothes.jpg')"
      },
      height : {
        "200" : "200px",
        "1/2vh" : "50vh" ,
        "400":"400px" ,
        "450" : "450px",
      },
      width:{
        "500" : "500px",
        "46" : "46%",
      },
      margin : {
        "2.3" : "9px"
      }
    },
  },
  plugins: [],
}

