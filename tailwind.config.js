/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'home': `url('/HomeBanner.png')`,
        }
      },
    },
    plugins: [
      require('tailwindcss-motion'),
      require('tailwind-scrollbar')
    ], 
}