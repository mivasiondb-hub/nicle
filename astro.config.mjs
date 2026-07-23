import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nicleinc.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
