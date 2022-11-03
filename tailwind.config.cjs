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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
