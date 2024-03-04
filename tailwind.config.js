/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "merriweather": ["Merriweather", "serif"],
        "poppins":[ "Poppins", "sans-serif"],
      },
      width:{
        "26": "100px"
      },
      height:{
        "18": "70px"
      },
      colors:{
        "orange1": "#FC6C4C",
        "review-box" : "rgba(229, 231, 235, 0.5)"
      },
      screens: {
        "mid0": "1300px",
        "mid" : "1440px",
        'customs': { 'raw': '(min-height: 800px)' },
        "large": "1530px",
        "2xl": "1550px",
        "3xl": "1685px",
        'customs2': { 'raw': '(min-height: 1024px)' },
        'customs3': { 'raw': '(max-height: 700px)' },
      }
     
    },
  },
  plugins: [],
}

