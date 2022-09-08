/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  daisyui: {
    themes: ["emerald", "dark"],
  },
  theme: {
    fontFamily: {
      display: ["Vazir"],
      body: ["Vazir"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      hd: "1920px",
      fhd: "2048px",
      fourk: "4096px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        varyDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [require("daisyui")],
}
