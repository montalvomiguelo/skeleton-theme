/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  plugins: [require('@shopify/prettier-plugin-liquid/standalone'), require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.liquid',
      options: {
        parser: 'liquid-html',
        singleQuote: false,
      },
    },
  ],
};
