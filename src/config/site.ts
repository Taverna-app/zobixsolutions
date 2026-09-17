export const siteConfig = {
  brand: "Zobix Solutions",
  brandDescription: "Software Engineering for Growing Businesses",
  tagline: "Software That Works Around Your Business.",
  founder: "Zohaib Rana",
  founderTitle: "Software Engineer",
  email: "ranadeveloperoffical@gmail.com",
  phoneDisplay: "+92 316 2380303",
  whatsapp: "+923162380303",
  secondaryWhatsapp: "+923308972805",
  secondaryWhatsappDisplay: "+92 330 8972805",
  location: "Karachi, Pakistan",
  url: "https://www.zobixsolutions.com",
  legalNotice: "Zobix Solutions is a software development studio based in Karachi, Pakistan, founded by Zohaib Rana.",
  social: {
    tiktok: "https://www.tiktok.com/@zobixsolutions",
    facebook: "https://www.facebook.com/profile.php?id=61589242775572",
    instagram: "https://www.instagram.com/zobixsolutions/",
    linkedin: "https://www.linkedin.com/in/zobix-solutions-12a5aa406/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
