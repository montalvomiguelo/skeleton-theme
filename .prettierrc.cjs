/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  plugins: [
    require.resolve('@shopify/prettier-plugin-liquid/standalone'),
    'prettier-plugin-tailwindcss',
  ],
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
