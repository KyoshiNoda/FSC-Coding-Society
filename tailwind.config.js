/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      'hero': "url('./public/images/farmingdale-state-college.jpg')",
    },
  },
  plugins: [],
}
