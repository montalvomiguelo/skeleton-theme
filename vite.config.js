import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify-snapshot';
import importMaps from 'vite-plugin-shopify-import-maps';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    shopify({
      snippetFile: 'vite.liquid',
      versionNumbers: true,
      tunnel: 'https://123abc.ngrok-free.app:3000',
    }),
    tailwindcss(),
    importMaps({ bareModules: true }),
  ],
  server: {
    cors: {
      origin: [
        /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/,
        'https://johns-apparel.myshopify.com', // Store URL
      ],
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
