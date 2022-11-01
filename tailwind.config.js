/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://blogs.farmingdale.edu/sites/rambassadors/wp-content/themes/rambassadors/rambassadors-header.jpg')",
        // 'hero-shadow': "url('src/imgs/rambassadors-header.png')",
      }
    },
  },
  plugins: [],
}
