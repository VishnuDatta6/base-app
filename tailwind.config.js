/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'primary' : '#605bff',
        'gray-150' : '#F5F5F5',
        'gray-250' : '#EAEAEA',
      },
      spacing : {
        '1/10' : '10%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};