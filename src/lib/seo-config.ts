export const SEO_CONFIG = {
  baseUrl: import.meta.env.VITE_BASE_URL || "https://retrodevs.com",
  siteName: "RetroDevs",
  defaultTitle: "RetroDevs",
  defaultDescription:
    "RetroDevs design, develop, and manage exceptional websites using a perfect blend of timeless creativity and cutting-edge technology. Where World-Class Design Meets Elite Development.",
  defaultKeywords:
    "web development, web design, product design, app development, AI development, content development, automation systems, digital agency, custom websites, React development, TypeScript development, full-stack development, UI/UX design, elite developers, premium digital experiences",
  defaultOgImage: "/assets/retrodevslogo.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterHandle: "@retrodevs",
  twitterCreator: "@retrodevs",
  locale: "en_US",
  organization: {
    name: "RetroDevs",
    url: "https://retrodevs.com",
    logo: "https://retrodevs.com/assets/retrodevslogo.png",
    email: "hello@retrodevs.com",
    phone: "+234 (080) 520 26709",
    address: {
      addressCountry: "NG",
      addressLocality: "Nigeria",
    },
    sameAs: [
      // Add social media URLs here when available
      "https://x.com/RetroDevsTech",
      "https://www.linkedin.com/in/retro-devs-storage-5b28123a3/",
      "https://github.com/RetroDevs-technology",
    ],
  },
  verification: {
    google: "", // Add Google Search Console verification code
    bing: "", // Add Bing Webmaster verification code
  },
  themeColor: "#4A3880", // Purple theme color
} as const
