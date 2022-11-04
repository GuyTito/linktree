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
      },
      backgroundImage: {
        'check': `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='blue' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
