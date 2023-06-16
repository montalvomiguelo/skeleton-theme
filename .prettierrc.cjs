module.exports = {
  plugins: [
    require.resolve("@shopify/prettier-plugin-liquid/standalone"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.liquid",
      options: {
        parser: "liquid-html",
      },
    },
  ],
};
