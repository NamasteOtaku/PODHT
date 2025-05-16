// vite.config.ts
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  plugins: [
    // Provide Node globals in browser context
    nodePolyfills({
      globals: { process: true, Buffer: true, global: true },
      exclude: ['fs', 'path'],
    }),
    // Bundle everything under /api as serverless functions
    vercel(),
  ],
  define: {
    // Ensure any code referencing process.env.NODE_ENV still works
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
    'process.browser': 'true',
    global: 'window',
  },
  server: {
    port: 5173,  // Matches your Axios base URL
  },
});
