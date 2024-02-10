export default defineConfig({
  build: {
    outDir: 'dist',
  }
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
