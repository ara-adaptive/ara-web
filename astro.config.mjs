import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ara-adaptive.github.io',
  base: '/ara-web',
  vite: {
    plugins: [tailwindcss()]
  }
});
