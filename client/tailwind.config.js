/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Chat/*"
  ],  // <---- Add folders that use tailwind in here
  theme: {
    extend: {},
  },
  plugins: [],
}
