// https://vitejs.dev/config/
import { defineConfig } from "vite";
import viteImagemin from 'vite-plugin-imagemin'
import { serviceWorker } from "./sw-plugin";

export default defineConfig({
  build: {
    target: ['es2015', 'safari11', 'edge18', 'firefox60', 'chrome61', 'ios11'],
    outDir: 'dist',
    cssMinify: true,
    sourcemap: true,
    // to enable chunks comment it
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3100,
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 80,
        method: 4,

      }
    }),
    serviceWorker()
  ],
});
