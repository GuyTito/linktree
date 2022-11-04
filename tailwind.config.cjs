/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inter", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "primary": "rgba(132, 202, 255, 1)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
