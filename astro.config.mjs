import { defineConfig } from 'astro/config';

// The live site's address, used for canonical and social-preview links. Change it if you add a custom domain.
export default defineConfig({
  site: 'https://danielchahine004.github.io',
  trailingSlash: 'ignore',
  // Astro 7 defaults to 'jsx', which can drop spaces between inline elements; keep the v6 output.
  compressHTML: true,
});
