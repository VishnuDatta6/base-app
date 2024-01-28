/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily : {
      'nunito' : ['Nunito', 'sans-serif'],
      'figtree' : ['Figtree', 'sans-serif']
    },
    extend: {
      colors : {
        'primary' : '#605bff',
        'gray-150' : '#F5F5F5',
        'gray-250' : '#EAEAEA',
        'gray-350' : '#9A9AA9'
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
