// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://stevebel.github.io",
  base: "/gather-scanner-site",
  integrations: [
    tailwind({
      // We supply our own base styles + @tailwind directives in src/styles/global.css.
      applyBaseStyles: false,
    }),
  ],
});
