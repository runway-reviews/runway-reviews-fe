import { defineConfig } from 'vite'
import { vue } from 'vue'


export default defineConfig({
  build: {
    outDir: 'dist',
  },
  base: "/runway-reviews-fe",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
