/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1100px",
    },
    extend: {
      colors: {
        OrangeH: 'hsl(26, 100%, 55%)',
        PaleOrangeH: 'hsl(25, 100%, 94%)',
        DarkGrayishBlueH: 'hsl(219, 9%, 45%)',
        GrayishBlueH: 'hsl(220, 14%, 75%)',
        LightGrayishblueH: 'hsl(223, 64%, 98%)',
        WhiteH: 'hsl(0, 0%, 100%)',
        BlackH:' hsl(0, 75%, 0%)',
        blacklow: 'rgba(0, 0, 0, 0.9)',
        whitelow: 'rgba(255, 255, 255, 0.562)',
      }
    },
  },
  plugins: [],
}

