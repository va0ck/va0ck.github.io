/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'parallax': `url('../assets/images/HomeBanner.png')`,
        }
      },
    },
    plugins: [require('tailwindcss-motion')], 
}