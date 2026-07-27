/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4B3E',
          light: '#1A7A62',
          dark: '#062E26',
        },
        accent: {
          DEFAULT: '#E8B84B',
          hover: '#D4A030',
        },
        surface: {
          DEFAULT: '#F5F5F0',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display:['"Playfair Display"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}

