/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/*.{liquid,js,mjs}',
    '!./assets/*.min.{js,mjs}',
    './config/*.json',
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
