import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';

const racine = dirname(fileURLToPath(import.meta.url));

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
        main: resolve(racine, 'index.html'),
        mentionsLegales: resolve(racine, 'mentions-legales.html'),
        nl: resolve(racine, 'nl/index.html'),
        nlJuridisch: resolve(racine, 'nl/juridische-vermeldingen.html'),
      },
    },
  },
  optimizeDeps: { exclude: ['lucide-react'] },
});
