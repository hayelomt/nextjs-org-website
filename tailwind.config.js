const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#402A74',
        red: '#E5322C',
        dark: '#261945',
        'gray-bg': '#F4F2F1',
        'light-text': '#777777',
        'dark-text': '#001234',
      },
      fontFamily: {
        karla: ['Karla', defaultTheme.fontFamily.sans],
        barlow: ['Barlow Condensed', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
