# Gather Scanner — Marketing Site

Static landing page for [gatherscanner.com](https://gatherscanner.com), built with
[Astro](https://astro.build) + Tailwind CSS. Mobile-first, ships zero JavaScript, outputs
plain static HTML/CSS.

Source copy lives in [`../landing-page-content.md`](../landing-page-content.md); the
original design mockup is [`../mockup.html`](../mockup.html).

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build -> ./dist
npm run preview  # serve the built ./dist locally
```

## Structure

```
src/
  data/site.ts          Shared config: links, prices, launch state, nav, disclaimer.
  layouts/BaseLayout    <head>, fonts, SEO/OG meta, <body> shell.
  styles/global.css     Tailwind directives + custom utilities (amber-glow, bg-pattern).
  components/
    TopNav            Sticky nav + CTA.
    Hero              §1  headline + hero demo video slot.
    Features          §2  on-device / foil / printing (3-up grid).
    PullLists         §3  decklist -> find-it guide, with the resolved-list visual.
    CollectionSection §4-7 organize / borrow-from-deck / value / settings.
    Privacy           §8  no accounts, opt-in corrections.
    Pricing           §9  free vs. one-time unlock.
    About             §10 built-by-one-person note.
    FinalCta          §11-12 follow channels + requirements.
    Footer            §13 links + legal disclaimer.
    CtaButton         Coming Soon -> App Store swap (driven by data/site.ts).
    Icon, CheckList, FeatureCard, MediaPlaceholder   shared primitives.
  pages/index.astro     Composes the sections in order.
public/                 Static assets (icon.svg; drop screenshots/video/og-image here).
tailwind.config.mjs     Theme ported from the mockup (colors, fonts, spacing).
```

## Editing notes

- **Links & prices:** edit `src/data/site.ts` (Discord, Bluesky, App Store URL, intro price).
- **Launch swap:** set `launch.launched = true` and `launch.appStoreUrl` in `src/data/site.ts`
  to turn every "Coming Soon" button into a real App Store link.
- **Assets:** `MediaPlaceholder` marks every spot that needs a screenshot or the hero
  video (see the asset checklist in the content spec). Replace with `<img>`/`<video>` as
  assets land, dropping files in `public/`.
- **Still TODO:** real `/privacy` and `/terms` pages, an `og-image.png` in `public/`, and
  the captured screenshots + hero video.

## Deploy

`npm run build` emits a fully static `./dist`. Drop it on Netlify, Cloudflare Pages, or
GitHub Pages — no server required.
