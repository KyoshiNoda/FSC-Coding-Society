/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./imgs/hero.png')",
        'social': "url('./imgs/farmingdale-state-college.jpg')",
      }
    },
  },
  plugins: [],
}
