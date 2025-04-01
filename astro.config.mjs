// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Cargar variables de entorno
import dotenv from 'dotenv';
import process from 'process';
dotenv.config();

const BASE_URL = process.env.VITE_BASE_URL || '/';

export default defineConfig({
  base: BASE_URL,
  outDir: BASE_URL.replace(/^\//, ''), // Elimina la barra inicial para evitar problemas en la ruta de salida
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.BASE_URL': JSON.stringify(BASE_URL)
    }
  },
  integrations: [react()]
});
