import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify-snapshot';
import importMaps from 'vite-plugin-shopify-import-maps';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    shopify({ snippetFile: 'vite.liquid', versionNumbers: true, tunnel: true }),
    importMaps({ bareModules: true }),
  ],
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
