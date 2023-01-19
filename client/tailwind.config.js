/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,}"
  ],  // <---- Add folders that use tailwind in here

  theme: {
    extend: {},
    // screens: {
    //   sm: "390px",
    //   md: "820px",
    //   lg: "1024px",
    // },
    colors: {
      transparent: 'transparent',
      'navbar': '#334155',
      'text-primary': '#D9D9D9',
      'text-secondary': '#0f172a',
      'primary': '#152238', // primary background color
      'secondary': '#212D42', // more highlighted color for textareas, input fields etc.
      'tertiary': '#0e2835d8', // color for distinct elements like navbar
      'accent-primary': '#D9D9D9', // color for main buttons and links and text
      'accent-secondary': '#047857', // color for specific buttons
      'accent-tertiary': '#991b1b', // color for buttons like cancel, abort etc.
      'hover-primary': '#4b5563', // mouse hover color for accent-primary elements
      'hover-secondary': '#065f46', // mouse hover color for accent-secondary elements
      'hover-tertiary': '#7f1d1d', // mouse hover color for accent-tertiary elements
      'active': '#111827', // color when something got clicked on
      'grayed-out': '#6b7280', // for things grayed out or specific elements
      'orange-300': '#fdba74',
      'slate-700': '#334155',
      'slate-200': '#f1f5f9',
      'slate-800': '#1e293b',
      'slate-600': '#475569',
      'slate-300': '#cbd5e1'
    }
  },
  plugins: [],
};
