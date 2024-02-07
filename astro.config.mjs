import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://dtalay.github.io',
  integrations: [react(), mdx()]
});