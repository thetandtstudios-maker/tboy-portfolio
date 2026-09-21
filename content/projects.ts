// ============================================================
// TBOY projects. To add a project, copy one block below,
// change the words, and save. Nothing else needs editing.
//
// SCREENSHOTS: upload images to  public/images/<slug>/
// then list them, for example:
//   screenshots: [
//     { src: "/images/zana/1.png", alt: "Zana search screen" },
//   ],
// ============================================================

export type Shot = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: string; // shown as a small tag, e.g. "Live", "Built", "Client project"
  forSale: boolean; // true = shows "Request Details" and appears in the buy section
  hook: string;
  overview: string;
  features: string[];
  tech: string[];
  built: string[];
  story?: string[]; // "Why I built it" paragraphs
  shows?: string; // "What it shows I can build"
  screenshots: Shot[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "zana",
    name: "Zana",
    category: "Android app",
    status: "Client project",
    forSale: false,
    hook: "Where landlords and tenants find each other.",
    overview:
      "Zana connects people looking for a home with people renting one out. Tenants search and filter listings. Landlords post properties with photos, prices and details.",
    features: [
      "Separate sign-up for tenants and landlords, with email or Google",
      "Search, filters and favorites for tenants",
      "Landlord dashboard to add and edit listings with photos",
      "Pay-to-connect: contact details unlock after a secure Paystack payment",
      "Ratings and written reviews",
      "Report button for trust and safety",
      "In-app inbox and a notice banner the owner can update anytime",
      "Terms and Conditions accepted at sign-up",
    ],
    tech: ["Kotlin", "Firebase", "Cloudinary", "Paystack", "Vercel"],
    built: [
      "Native Android in Kotlin",
      "Firebase for accounts and data",
      "Cloudinary for listing photos",
      "Paystack payments checked on a private server on Vercel, so contact details unlock only after a confirmed payment",
      "A separate web admin dashboard, so the owner can change fees, edit notices and manage listings with no technical skill",
    ],
    shows:
      "Marketplaces, listing and directory apps, pay-to-connect or booking apps, and simple admin tools that non-technical owners can run themselves.",
    screenshots: [],
  },
  {
    slug: "theftguard",
    name: "TheftGuard",
    category: "Android app",
    status: "Built",
    forSale: true,
    hook: "When someone grabs your phone, TheftGuard takes over.",
    overview:
      "Arm it once, and it sounds the alarm, alerts your contacts and shows you where your phone is.",
    features: [
      "Fingerprint or face to arm and disarm",
      "Live GPS tracking from another device",
      "Loud alarm with a spoken warning",
      "Silent photo of whoever is holding the phone",
      "Emergency SMS with a map link",
      "Fake “powering off” screen while it keeps running",
      "Restarts itself after a reboot",
      "Uninstall and settings protection",
    ],
    tech: ["Kotlin", "Firebase", "Cloudinary"],
    built: [
      "Native Android in Kotlin",
      "Firebase for sign-in, live location and syncing across devices",
      "Cloudinary for storing the photos",
      "Works offline and uploads when signal returns",
    ],
    story: [
      "Phone theft is common where I live, and I wanted a real answer to it. TheftGuard is recent, and I haven't launched it fully yet, because a proper launch needs a budget I'm not putting in for now. I'm introducing it to my audience first and seeing how it goes.",
      "It's up for sale. If you can move fast and have the resources to take it to market, you can buy it outright, and I'm open to other arrangements too. If it stays available, I may put my own focus behind launching it myself. I believe it can be very effective in my part of the world.",
    ],
    screenshots: [
      {
        src: "/images/theftguard/1.webp",
        alt: "TheftGuard home screen showing the system status, the arm button and emergency contact settings",
      },
    ],
  },
  {
    slug: "trace",
    name: "Trace",
    category: "Web app",
    status: "Live",
    forSale: true,
    hook: "One search box for the public web.",
    overview:
      "Trace is a mobile-first web app that searches publicly available web results by image, full name, username, phone number, email or domain. It has no accounts, no saved history and no database.",
    features: [
      "Six search modes in one place",
      "Dark, futuristic design made for phones",
      "Privacy-first: nothing about a visitor's searches is stored",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Vercel", "Tavily", "SerpAPI"],
    built: [
      "Plain HTML, CSS and JavaScript front end, so it loads fast",
      "Hosted on Vercel, deployed from GitHub",
      "Web results through Tavily and image results through SerpAPI, with both keys kept private on the server",
    ],
    liveUrl: "https://trace-three-wheat.vercel.app",
    screenshots: [],
  },
];
