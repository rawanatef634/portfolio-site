/**
 * Service packages shown on the homepage.
 * Prices are provisional starting figures for clearly scoped delivery.
 * Custom / larger product work is confirmed in writing before kickoff.
 *
 * Do not change prices or payment terms without Rawan's approval.
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
    tagline:
      "A professional marketing site for a studio or small business: who you are, what you offer, and how to inquire.",
    price: "$999",
    priceNote: "fixed once scoped",
    timeline: "2–3 weeks with complete content and assets",
    bestFor: "Studios, local businesses, and simple product landing pages",
    includes: [
      "Up to 4 standard pages on a responsive Next.js site",
      "Contact / inquiry flow to your inbox",
      "On-page SEO basics: metadata, sitemap, and share preview",
      "Deployment setup",
      "2 revision rounds + 14-day post-delivery fix window",
      "Source-code handoff on final payment (per contract)",
    ],
    excludes: [
      "CMS / blog",
      "Ecommerce or booking systems",
      "Custom backend work",
      "Brand identity or copy from scratch",
      "Domain and hosting fees",
      "Ongoing maintenance or content writing",
    ],
  },
  {
    id: "product-sprint",
    name: "Product Sprint",
    tagline:
      "One clearly defined product workflow or module: an admin feature, portal flow, or API-backed slice, not a complete SaaS or MVP.",
    price: "$2,900",
    priceNote: "fixed once scoped",
    timeline: "4–6 weeks after written scope",
    bestFor: "Ops tools, client portals, and narrowly scoped web apps",
    featured: true,
    includes: [
      "Written scope before kickoff (features in, features out)",
      "The agreed workflow only; auth and integrations when written into scope",
      "Clear UI with responsive layouts",
      "Deployed staging and production setup",
      "2 revision rounds + 30-day post-delivery fix window",
      "Repo access and handoff notes on final payment (per contract)",
    ],
    excludes: [
      "A complete SaaS product or open-ended MVP",
      "Open-ended discovery without a scope call",
      "Native mobile apps",
      "Features added mid-sprint without a change order",
      "Ongoing retainer (quoted separately)",
    ],
  },
  {
    id: "custom-build",
    name: "Custom Build",
    tagline:
      "A custom-scoped engagement or defined first development phase. The starting figure is a floor; the final quote depends on requirements.",
    price: "Starting from $5,900",
    priceNote: "quoted after a scope call",
    timeline: "typically 6–10+ weeks",
    bestFor: "Founders and teams with a defined need beyond a single sprint",
    includes: [
      "Scope workshop and a fixed quote before kickoff",
      "Core user journeys agreed in writing (not an open backlog)",
      "Auth, data model, and integrations called out in the quote",
      "Milestone reviews so you can steer as we build",
      "30-day post-delivery fix window on delivered scope",
      "Source ownership transfer on final payment (per contract)",
    ],
    excludes: [
      "Unlimited features for the starting price",
      "A complete marketplace or full SaaS assumed at $5,900",
      "Marketing campaign management",
      "Third-party SaaS subscription costs",
    ],
  },
];

export const packageFaqs = [
  {
    question: "Are these prices fixed?",
    answer:
      "Launch Site and Product Sprint are fixed once we write the scope down. Custom Build starts from the listed figure; the final price is a fixed quote after a short scope call, based on features, integrations, and timeline. A complete marketplace or SaaS is quoted separately, not assumed at the starting price.",
  },
  {
    question: "How do payments work?",
    answer:
      "Typically 40% to start and the balance on delivery milestones. Invoices in USD.",
  },
  {
    question: "What does the fix window cover?",
    answer:
      "Corrections to defects within the agreed, delivered scope. It does not cover new requirements, design changes outside scope, or issues caused by third-party services or later changes you make.",
  },
  {
    question: "When do I get the source code?",
    answer:
      "Source-code handoff and ownership transfer follow the signed contract and are completed after final payment.",
  },
  {
    question: "What if my project does not fit a package?",
    answer:
      "Email a short brief. If it does not fit, I will reply with a fixed quote, or say clearly when I am not the right fit.",
  },
];
