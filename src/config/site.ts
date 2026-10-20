/**
 * Site-wide configuration.
 * Update these values before deploying · they drive SEO, contact links, and availability.
 */

/** Primary public origin (no trailing slash). */
export const PRODUCTION_SITE_URL = "https://rawanatef.me";

export const siteConfig = {
  /** Display name shown in the header and metadata */
  name: "Rawan Atef",

  /** Short professional title used in SEO and structured data */
  title: "Full-Stack Developer",

  /** Primary email for contact CTAs */
  email: "atefrawan012@gmail.com",

  /** WhatsApp / mobile (E.164 without + for wa.me) */
  phone: "+201095584304",
  whatsAppUrl: "https://wa.me/201095584304",

  /** Full LinkedIn profile URL */
  linkedIn: "https://www.linkedin.com/in/rawanatef/",

  /**
   * Canonical site origin (no trailing slash).
   * Prefer NEXT_PUBLIC_SITE_URL everywhere; production falls back to rawanatef.me.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_ENV === "production"
      ? PRODUCTION_SITE_URL
      : "http://localhost:3000"),

  /** Default Open Graph / social description */
  description:
    "Full-stack developer building SaaS products, internal tools, dashboards, and business websites for founders and growing companies.",

  /**
   * Availability indicator on the homepage.
   * Set `show` to true only when you want the line visible.
   */
  availability: {
    show: true,
    message: "Available for freelance projects",
  },

  /** Optional location string for structured data / about copy */
  location: "", // TODO: optional · e.g. "Remote" or "Muscat, Oman"
} as const;

export type SiteConfig = typeof siteConfig;
