/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-img': "url('/src/assets/images/imgbackgroundhome.png')",
      }
    },
  },
  plugins: [],
}

