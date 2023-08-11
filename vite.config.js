// https://vitejs.dev/config/
import { defineConfig } from "vite";
// import { resolve } from "path";

export default defineConfig({
  build: {
    target: ['es2015', 'safari11', 'edge18', 'firefox60', 'chrome61', 'ios11'],
    outDir: 'dist',
    cssMinify: true,
    sourcemap: true,
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
});
