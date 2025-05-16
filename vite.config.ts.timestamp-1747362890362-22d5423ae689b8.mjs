// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///home/project/node_modules/vite-plugin-node-polyfills/dist/index.js";
import vercel from "file:///home/project/node_modules/vite-plugin-vercel/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    // Provide Node globals in browser context
    nodePolyfills({
      globals: { process: true, Buffer: true, global: true },
      exclude: ["fs", "path"]
    }),
    // Bundle everything under /api as serverless functions
    vercel()
  ],
  define: {
    // Ensure any code referencing process.env.NODE_ENV still works
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
    "process.browser": "true",
    global: "window"
  },
  server: {
    port: 5173
    // Matches your Axios base URL
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy50c1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnO1xuaW1wb3J0IHZlcmNlbCBmcm9tICd2aXRlLXBsdWdpbi12ZXJjZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLy8gUHJvdmlkZSBOb2RlIGdsb2JhbHMgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgbm9kZVBvbHlmaWxscyh7XG4gICAgICBnbG9iYWxzOiB7IHByb2Nlc3M6IHRydWUsIEJ1ZmZlcjogdHJ1ZSwgZ2xvYmFsOiB0cnVlIH0sXG4gICAgICBleGNsdWRlOiBbJ2ZzJywgJ3BhdGgnXSxcbiAgICB9KSxcbiAgICAvLyBCdW5kbGUgZXZlcnl0aGluZyB1bmRlciAvYXBpIGFzIHNlcnZlcmxlc3MgZnVuY3Rpb25zXG4gICAgdmVyY2VsKCksXG4gIF0sXG4gIGRlZmluZToge1xuICAgIC8vIEVuc3VyZSBhbnkgY29kZSByZWZlcmVuY2luZyBwcm9jZXNzLmVudi5OT0RFX0VOViBzdGlsbCB3b3Jrc1xuICAgICdwcm9jZXNzLmVudi5OT0RFX0VOVic6IEpTT04uc3RyaW5naWZ5KFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J1xuICAgICksXG4gICAgJ3Byb2Nlc3MuYnJvd3Nlcic6ICd0cnVlJyxcbiAgICBnbG9iYWw6ICd3aW5kb3cnLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MTczLCAgLy8gTWF0Y2hlcyB5b3VyIEF4aW9zIGJhc2UgVVJMXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFlBQVk7QUFFbkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUEsSUFFUCxjQUFjO0FBQUEsTUFDWixTQUFTLEVBQUUsU0FBUyxNQUFNLFFBQVEsTUFBTSxRQUFRLEtBQUs7QUFBQSxNQUNyRCxTQUFTLENBQUMsTUFBTSxNQUFNO0FBQUEsSUFDeEIsQ0FBQztBQUFBO0FBQUEsSUFFRCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUEsSUFFTix3QkFBd0IsS0FBSztBQUFBLE1BQzNCLFFBQVEsSUFBSSxZQUFZO0FBQUEsSUFDMUI7QUFBQSxJQUNBLG1CQUFtQjtBQUFBLElBQ25CLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
