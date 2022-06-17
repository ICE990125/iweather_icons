import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), '../assets')],
      symbolId: 'icon-[dir]-[name]',
      customDomId: '__svg__icons__',
    }),
  ],
  // https://cn.vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'lib',
      fileName: (format) => `lib.${format}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
