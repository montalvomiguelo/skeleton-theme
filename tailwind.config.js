/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/**/*.{liquid,json}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
