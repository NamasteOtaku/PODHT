// vite.config.ts
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  plugins: [
    // Polyfill Node.js globals in the browser
    nodePolyfills({
      globals: { process: true, Buffer: true, global: true },
      exclude: ['fs', 'path'],
    }),
    // Serve /api/*.ts as serverless functions
    vercel(),
  ],
  define: {
    // Make sure any libraries referencing process.env.NODE_ENV still work
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
    // Polyfill global & process.browser
    'process.browser': 'true',
    global: 'window',
  },
  server: {
    // You can customize your dev port here
    port: 5173,
  },
});
