// ============================================================
// TBOY site settings. Most everyday edits happen in this file.
// ============================================================

export const site = {
  brand: "TBOY",
  title: "TBOY — Developer & Digital Product Builder",
  description:
    "TBOY builds Android apps, web apps and backends, offers Android security assessments, and sells ready-made digital products.",
  tagline: "Building ideas into working products.",

  // Set NEXT_PUBLIC_SITE_URL in Vercel once you have your final address.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // ------------------------------------------------------------
  // AVAILABLE FOR WORK SWITCH
  // true  = people can start a project and contact you
  // false = "fully booked" (product inquiries stay open)
  // ------------------------------------------------------------
  available: true,

  links: {
    telegram: "https://t.me/Askoftboy",
    email: "tntbrandhq@gmail.com",
    youtube: "https://www.youtube.com/@Askoftboy",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // Update these numbers whenever they change.
  stats: [
    { value: "15.6K", label: "YouTube audience" },
    { value: "5.5K", label: "Telegram channel" },
    { value: "4", label: "Projects built" },
    { value: "2", label: "Products for sale" },
  ],

  // Technologies actually used in your projects.
  heroBadges: ["Kotlin", "Firebase", "Paystack", "Vercel"],

  // Shown inside the phone in the hero.
  heroProjects: [
    { name: "Zana", note: "Rental marketplace for a client" },
    { name: "TheftGuard", note: "Anti-theft app, for sale" },
    { name: "Trace", note: "Public-web search, for sale" },
  ],
};
