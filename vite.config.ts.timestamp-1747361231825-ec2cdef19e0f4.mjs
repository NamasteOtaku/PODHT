// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///home/project/node_modules/vite-plugin-node-polyfills/dist/index.js";
import vercel from "file:///home/project/node_modules/vite-plugin-vercel/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    // Polyfill Node.js globals in the browser
    nodePolyfills({
      globals: { process: true, Buffer: true, global: true },
      exclude: ["fs", "path"]
    }),
    // Serve /api/*.ts as serverless functions
    vercel()
  ],
  define: {
    // Make sure any libraries referencing process.env.NODE_ENV still work
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
    // Polyfill global & process.browser
    "process.browser": "true",
    global: "window"
  },
  server: {
    // You can customize your dev port here
    port: 5173
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy50c1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnO1xuaW1wb3J0IHZlcmNlbCBmcm9tICd2aXRlLXBsdWdpbi12ZXJjZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLy8gUG9seWZpbGwgTm9kZS5qcyBnbG9iYWxzIGluIHRoZSBicm93c2VyXG4gICAgbm9kZVBvbHlmaWxscyh7XG4gICAgICBnbG9iYWxzOiB7IHByb2Nlc3M6IHRydWUsIEJ1ZmZlcjogdHJ1ZSwgZ2xvYmFsOiB0cnVlIH0sXG4gICAgICBleGNsdWRlOiBbJ2ZzJywgJ3BhdGgnXSxcbiAgICB9KSxcbiAgICAvLyBTZXJ2ZSAvYXBpLyoudHMgYXMgc2VydmVybGVzcyBmdW5jdGlvbnNcbiAgICB2ZXJjZWwoKSxcbiAgXSxcbiAgZGVmaW5lOiB7XG4gICAgLy8gTWFrZSBzdXJlIGFueSBsaWJyYXJpZXMgcmVmZXJlbmNpbmcgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgc3RpbGwgd29ya1xuICAgICdwcm9jZXNzLmVudi5OT0RFX0VOVic6IEpTT04uc3RyaW5naWZ5KFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50J1xuICAgICksXG4gICAgLy8gUG9seWZpbGwgZ2xvYmFsICYgcHJvY2Vzcy5icm93c2VyXG4gICAgJ3Byb2Nlc3MuYnJvd3Nlcic6ICd0cnVlJyxcbiAgICBnbG9iYWw6ICd3aW5kb3cnLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBZb3UgY2FuIGN1c3RvbWl6ZSB5b3VyIGRldiBwb3J0IGhlcmVcbiAgICBwb3J0OiA1MTczLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxZQUFZO0FBRW5CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQTtBQUFBLElBRVAsY0FBYztBQUFBLE1BQ1osU0FBUyxFQUFFLFNBQVMsTUFBTSxRQUFRLE1BQU0sUUFBUSxLQUFLO0FBQUEsTUFDckQsU0FBUyxDQUFDLE1BQU0sTUFBTTtBQUFBLElBQ3hCLENBQUM7QUFBQTtBQUFBLElBRUQsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sd0JBQXdCLEtBQUs7QUFBQSxNQUMzQixRQUFRLElBQUksWUFBWTtBQUFBLElBQzFCO0FBQUE7QUFBQSxJQUVBLG1CQUFtQjtBQUFBLElBQ25CLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
