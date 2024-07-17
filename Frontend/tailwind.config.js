/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gtaDescriptionText : ['Poppins'],
        gtaHeadingText1    : ['Pricedown']
      },
      colors :{
        "dblue"    : "var(--dblue)"  ,
        "whitish"  : "var(--whitish)",
        "blackish" : "var(--blackish)",
        "redish" : "var(--redish)",
      }
    },
    
  },
  plugins: [],
}

