import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import { fileURLToPath, URL } from 'url';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    react(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',

      /**
       * custom insert position
       * @default: body-last
       */
      inject: 'body-last',

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/_variables.scss";
        @import "@/styles/mixins/_breakpoint.scss";
        @import "@/styles/_functions.scss";
        @import "@/styles/mixins/_helpers.scss";
    `
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
