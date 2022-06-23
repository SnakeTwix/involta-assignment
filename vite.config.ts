import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  publicDir: resolve(__dirname, 'client', 'public'),
  root: resolve(__dirname, 'client'),
  plugins: [vue()],
  resolve: {
    alias: {
      // @ts-ignore
      '@': fileURLToPath(new URL('client', import.meta.url)),
    },
  },

  build: {
    minify: true,
    rollupOptions: {
      treeshake: true,
    },
  },
});
