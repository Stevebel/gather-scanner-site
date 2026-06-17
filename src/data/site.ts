// Central place for links, the launch state, and other values that get reused or
// tweaked often. Editing copy? Most lives in the components, but anything shared or
// likely-to-change (URLs, prices, the Coming Soon -> App Store swap) lives here.

export const site = {
  name: "Gather Scanner",
  domain: "gatherscanner.com",
  description:
    "Gather Scanner identifies your Magic: The Gathering cards anywhere — in your hand, in bad light, any set, foil or not — and helps you find them later. On-device, private, no account.",
  // App icon (real icon from the iOS app, transparent background).
  icon: "icon.png",
};

// Pre-launch state. When the app ships, flip `launched` to true and fill in
// `appStoreUrl`; the CTA buttons will swap from "Coming Soon" to the store badge.
export const launch = {
  launched: false,
  appStoreUrl: "", // e.g. "https://apps.apple.com/app/idXXXXXXXXX"
  platformNote: "iPhone · iOS 26+",
};

// External follow/launch channels. Fill these in once they exist.
export const links = {
  discord: "#", // Discord invite URL
  bluesky: "#", // Bluesky profile URL
  privacyPolicy: "/privacy",
  terms: "/terms",
  support: "mailto:support@gatherscanner.com",
};

export const pricing = {
  freeCap: "1,500 cards",
  introPrice: "$4.99",
  fullPrice: "$9.99",
};

export const requirements = [
  { icon: "smartphone", html: "<strong>iPhone</strong> running <strong>iOS 26</strong> or later." },
  {
    icon: "speed",
    html: "Recommended for <strong>iPhone 13 and newer</strong> for the best scanning performance.",
  },
];

// Top-nav anchor links.
export const nav = [
  { label: "Features", href: "#features" },
  { label: "Pull Lists", href: "#pull-lists" },
  { label: "Privacy", href: "#privacy" },
  { label: "Pricing", href: "#pricing" },
];

// Required legal disclaimer (Wizards of the Coast / Hasbro).
export const disclaimer =
  "Magic: The Gathering is a trademark of Wizards of the Coast LLC, a subsidiary of Hasbro, Inc. Gather Scanner is an independent application and is not produced, endorsed, supported, or affiliated with Wizards of the Coast or Hasbro.";
