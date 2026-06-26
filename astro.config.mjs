// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Custom apex domain served via GitHub Pages (public/CNAME holds `sirous.uk`).
  // No `base` is set: the site lives at the domain root, not a /repo subpath.
  site: 'https://sirous.uk',
});
