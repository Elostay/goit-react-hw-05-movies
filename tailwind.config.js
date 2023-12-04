/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkMy: '#1d1a39',
        purpleMy: '#451952',
        purplePaleMy: '#662549',
        pinkMy: '#ae445a',
        orangeMy: '#f39f5a',
        whiteMy: '#e8bcb9',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
