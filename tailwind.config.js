/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#e6f5fc",
          100: "#b3e0f7",
          200: "#80cbf1",
          300: "#4db5ec",
          400: "#1e98d5",
          500: "#1a7eb3",
          600: "#156491",
          700: "#104a6e",
          800: "#0b314c",
          900: "#061829",
        },
      },
      backgroundColor: {
        "main": "#030712",       /* gray-950 equivalent */
      },
      backgroundImage: {
        "digital": "url('/src/images/digital-goods.jpg')",
        "clothes": "url('/src/images/clothes.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Lexend", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
