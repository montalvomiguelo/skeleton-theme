/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#tailwind-global',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // We'll handle preflight manually in the component
  },
  darkMode: ['class', '[data-theme="dark"]'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  // Ensure all utility classes are available in the bundle
  safelist: [
    {
      pattern: /.*/,
    },
  ],
};
