import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    buildOptions: {
    // site: 'http://example.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    site: 'https://staykoding.com',
    sitemap: true,         // Generate sitemap (set to "false" to disable)
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
