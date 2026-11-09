import { defineConfig } from 'astro/config';
import serviceWorker from './integrations/service-worker.mjs';

export default defineConfig({
  site: 'https://nicleinc.com',
  compressHTML: true,
  integrations: [serviceWorker()],
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
