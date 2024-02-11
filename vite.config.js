import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  base: "/runway-reviews-fe",
  plugins: [
    vue(),
  ]
})
