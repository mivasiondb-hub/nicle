import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nicleinc.com',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
  build: {
    inlineStylesheets: 'always',
    assets: '_assets',
  },
  vite: {
    build: {
      cssMinify: true,
      assetsInlineLimit: 2048,
    },
  },
});
