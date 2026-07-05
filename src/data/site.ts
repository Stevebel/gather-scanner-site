// Central place for links, the launch state, and other values that get reused or
// tweaked often. Editing copy? Most lives in the components, but anything shared or
// likely-to-change (URLs, prices, the Coming Soon -> App Store swap) lives here.

// Prefix an absolute path with the deploy base (e.g. /gather-scanner-site on GitHub
// Pages). Use this for any internal link or asset referenced with a leading slash.
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export const site = {
  name: "Gather Scanner",
  domain: "gatherscanner.com",
  description:
    "Gather Scanner identifies your Magic: The Gathering cards anywhere (in your hand, in bad light, any set, foil or not) and helps you find them later. On-device, private, no account.",
  // App icon (real icon from the iOS app, transparent background).
  icon: withBase("/icon.png"),
};

// Pre-launch state. When the app ships, flip `launched` to true and fill in
// `appStoreUrl`; the CTA buttons will swap from "Coming Soon" to the store badge.
export const launch = {
  launched: true,
  appStoreUrl: "https://google.com", // e.g. "https://apps.apple.com/app/idXXXXXXXXX"
  platformNote: "iPhone · iOS 26+",
};

// External follow/launch channels. Fill these in once they exist.
export const links = {
  discord: "https://discord.gg/xehFk3tdrD", // Discord invite URL
  bluesky: "https://bsky.app/profile/gatherscanner.bsky.social",
  privacyPolicy: withBase("/privacy"),
  terms: withBase("/terms"),
  support: "mailto:support@gatherscanner.com",
};

export const pricing = {
  freeCap: "1,000 cards",
  introPrice: "$6.99",
  fullPrice: "$13.99",
};

export const requirements = [
  { icon: "smartphone", html: "<strong>iPhone</strong> running <strong>iOS 26</strong> or later." },
  {
    icon: "speed",
    html: "<strong>iPhone 13 or newer</strong> recommended for the best scanning performance.",
  },
];

// Top-nav anchor links.
export const nav = [
  { label: "Lists", href: "#lists" },
  { label: "Collection", href: "#collection" },
  { label: "Privacy", href: "#privacy" },
  { label: "Pricing", href: "#pricing" },
];

// Required legal disclaimer (Wizards of the Coast / Hasbro), following the notice
// format from the WotC Fan Content Policy.
export const disclaimer =
  "Gather Scanner is unofficial Fan Content permitted under the Wizards of the Coast Fan Content Policy. It is not approved or endorsed by Wizards of the Coast and is not affiliated with Wizards of the Coast or Hasbro, Inc. Portions of the materials used, including card names and card images, are property of Wizards of the Coast LLC. ©Wizards of the Coast LLC. Magic: The Gathering® is a trademark of Wizards of the Coast LLC. For more information about Wizards of the Coast and its trademarks, visit company.wizards.com.";
