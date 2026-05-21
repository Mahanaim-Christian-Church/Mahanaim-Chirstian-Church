import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahanaim-christian-church.github.io',
  base: '/Mahanaim-Chirstian-Church',
  integrations: [],
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false
    }
  }
});
