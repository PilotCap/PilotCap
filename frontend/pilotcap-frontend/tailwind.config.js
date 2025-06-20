/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        primary: '#3f51b5',
        accent: '#ff4081',
        card: '#1e1e1e',
      }
    },
  },
  plugins: [],
}
