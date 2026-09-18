import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: { port: 5900, strictPort: true },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    // Site multi-pages : la landing et les mentions légales sont deux vraies
    // pages, chacune avec son URL et son propre HTML indexable.
    rollupOptions: {
      input: {
        main: resolve(dirname(fileURLToPath(import.meta.url)), 'index.html'),
        mentionsLegales: resolve(dirname(fileURLToPath(import.meta.url)), 'mentions-legales.html'),
      },
    },
  },
  optimizeDeps: { exclude: ['lucide-react'] },
});
