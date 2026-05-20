import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mahanaim-church.org',
  base: '/',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});
