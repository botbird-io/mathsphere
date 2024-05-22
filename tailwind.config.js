/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "--gradient1" : "ffecd2",
      "--gradient2" : "#fcb69f",
    },
  },
  daisyui:{
    themes:[
      {
        light : {
          ...require("daisyui/src/theming/themes")["halloween"],        
        }
      }
    ]
  },
  plugins: [require('daisyui')],
}