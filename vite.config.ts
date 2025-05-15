// vite.config.ts
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vercelApi from 'vite-plugin-vercel';

export default defineConfig({
  plugins: [
    nodePolyfills({
      globals: {
        process: true,
        Buffer: true,
        global: true,
      },
      exclude: ['fs', 'path'],
    }),
    vercelApi(), // Ensure this is a separate entry
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.browser': 'true',
    global: 'window',
  },
});