// vite.config.ts
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import vercel from 'vite-plugin-vercel';
import { getEntriesFromFs } from 'vite-plugin-vercel/utils';

export default defineConfig({
  plugins: [
    nodePolyfills({
      globals: { process: true, Buffer: true, global: true },
      exclude: ['fs', 'path'],
    }),
    vercel({
      // Tell the plugin to also bundle functions in src/api
      entries: [
        // Async IIFE so we can await getEntriesFromFs
        ...(await getEntriesFromFs('src/api', {
          // Files under src/api → served at /api/<name>
          destination: 'api',
        })),
      ],
    }),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.browser': 'true',
    global: 'window',
  },
  server: {
    port: 5173,
  },
});

