export const siteConfig = {
  name: "Zohaib Rana",
  title: "Software Engineer",
  brand: "Zobix Solutions",
  brandDescription: "Custom Software & Digital Solutions",
  tagline: "Software That Solves Real Business Problems.",
  email: "ranadeveloperoffical@gmail.com",
  phone: "+923308972805",
  phoneDisplay: "+92 316 2380303",
  whatsapp: "+923308972805",
  secondaryWhatsapp: "+923308972805",
  location: "Karachi, Pakistan",
  // NOTE: zobixsolutions.com is not yet connected/resolving (DNS not found as of
  // this writing). Using the live Vercel URL so canonical/OG/sitemap tags point
  // somewhere real. Swap this back to the custom domain the moment it's live —
  // it's the only place this needs to change.
  url: "https://zobixsolutions.vercel.app",
  legalNotice:
    "Zobix Solutions is currently a software development brand/studio and is not a registered company.",
  social: {
    tiktok: "https://www.tiktok.com/@zobixsolutions",
    facebook: "https://www.facebook.com/profile.php?id=61589242775572",
    instagram: "https://www.instagram.com/zobixsolutions/",
    linkedin: "https://www.linkedin.com/in/zobix-solutions-12a5aa406/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
