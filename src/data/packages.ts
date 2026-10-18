/**
 * Fixed-price packages shown on the homepage.
 * Prices are starting figures for clearly scoped delivery. Custom / SaaS work
 * is confirmed in writing before kickoff.
 */
export type ServicePackage = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  timeline: string;
  bestFor: string;
  featured?: boolean;
  includes: string[];
  excludes: string[];
};

export const servicePackages: ServicePackage[] = [
  {
    id: "launch-site",
    name: "Launch Site",
    tagline: "A polished marketing site that looks credible and converts.",
    price: "$999",
    priceNote: "fixed",
    timeline: "2–3 weeks",
    bestFor: "Studios, local businesses, and product landing pages",
    includes: [
      "Up to 6 pages · responsive Next.js build",
      "Contact / inquiry flow wired to your inbox",
      "SEO basics · metadata, sitemap, share image",
      "Analytics setup (GA4)",
      "2 revision rounds + 14-day fix window",
      "Source handoff on final payment",
    ],
    excludes: [
      "Custom illustrations or brand identity from scratch",
      "CMS / blog (available as an add-on)",
      "Domain and hosting fees",
    ],
  },
  {
    id: "product-sprint",
    name: "Product Sprint",
    tagline: "A focused web app, dashboard, or internal tool you can use.",
    price: "$2,900",
    priceNote: "fixed",
    timeline: "4–6 weeks",
    bestFor: "Ops tools, client portals, and feature-ready web apps",
    featured: true,
    includes: [
      "Scoped feature set agreed in writing first",
      "Auth + core CRUD flows where needed",
      "Clean UI with responsive layouts",
      "Deployed staging + production setup",
      "2 revision rounds + 30-day fix window",
      "Repo access and handoff notes",
    ],
    excludes: [
      "Open-ended product discovery without a scope call",
      "Native mobile apps",
      "Ongoing retainer (quoted separately)",
    ],
  },
  {
    id: "saas-mvp",
    name: "SaaS MVP",
    tagline: "A production-minded MVP foundation for early users.",
    price: "From $5,900",
    priceNote: "quoted after scope",
    timeline: "6–10 weeks",
    bestFor: "Founders validating a multi-user product",
    includes: [
      "Core user journeys + admin surface",
      "Auth, data model, and billing hooks if needed",
      "Ship-ready deploy pipeline",
      "Milestone reviews you can steer",
      "30-day post-launch fix window",
      "Full source ownership",
    ],
    excludes: [
      "Unbounded feature lists (scoped before kickoff)",
      "Marketing campaign management",
      "Third-party SaaS subscription costs",
    ],
  },
];

export const packageFaqs = [
  {
    question: "Is the price really fixed?",
    answer:
      "Yes for Launch Site and Product Sprint once scope is written. SaaS MVP starts from the listed figure and locks a fixed quote after a short scope call.",
  },
  {
    question: "How do payments work?",
    answer:
      "Typically 40% to start and the balance on delivery milestones. Invoices in USD via bank transfer, Wise, or similar.",
  },
  {
    question: "What if I need something custom?",
    answer:
      "Email me a short brief. If it doesn’t fit a package, I’ll reply with a fixed quote, or say clearly when I’m not the right fit.",
  },
];
