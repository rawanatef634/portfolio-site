/**
 * Site-wide configuration.
 * Update these values before deploying · they drive SEO, contact links, and availability.
 */
export const siteConfig = {
  /** Display name shown in the header and metadata */
  name: "Rawan Atef",

  /** Short professional title used in SEO and structured data */
  title: "Full-Stack Software Engineer",

  /** Primary email for contact CTAs */
  email: "atefrawan012@gmail.com",

  /** Full LinkedIn profile URL */
  linkedIn: "https://www.linkedin.com/in/rawanatef/",

  /**
   * Canonical site origin (no trailing slash).
   * Prefer NEXT_PUBLIC_SITE_URL in production; this is the local fallback.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",

  /** Default Open Graph / social description */
  description:
    "Full-stack software engineer building SaaS products, internal tools, dashboards, and commercial websites for founders and businesses.",

  /**
   * Availability indicator on the homepage.
   * Set `show` to true only when you want the line visible.
   */
  availability: {
    show: true,
    message: "Open to freelance & contract projects",
  },

  /** Optional location string for structured data / about copy */
  location: "", // TODO: optional · e.g. "Remote" or "Muscat, Oman"
} as const;

export type SiteConfig = typeof siteConfig;
