/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
        'coba-blue': '#14213D',
        'coba-yellow': '#FCA311',
        'coba-gray': '#E5E5E5',
      },
    },
    fontFamily: {
      Poppins: ['Poppins,sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
