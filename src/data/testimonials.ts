export type Testimonial = {
  /** Stable id for managing pending vs published entries */
  id: string;
  quote: string;
  name: string;
  /** Omit rather than invent a job title */
  role?: string;
  company: string;
  projectSlug?: string;
  /**
   * Only `approved: true` entries with non-empty quotes are published.
   * Never flip this without written client approval of the exact wording.
   */
  approved: boolean;
};

/**
 * Master list of client testimonials.
 *
 * HOW TO PUBLISH
 * 1. Confirm the client approved the exact quote and attribution.
 * 2. Set `approved: true` on that entry only.
 * 3. Leave empty quotes / unapproved entries as-is.
 *
 * The homepage only renders `testimonials` (approved + non-empty quote).
 * If that list is empty, the section is hidden.
 *
 * --- Status ---
 * Mohamed, John, and Danielle: client-provided wording published.
 */
export const testimonialEntries: Testimonial[] = [
  {
    id: "danielle-sullivan",
    quote:
      "Working with Rawan on the development of Locker Roomors has been a great experience. She listens carefully, communicates clearly, and adapts as ideas and priorities evolve. She delivers on time and consistently goes above and beyond to bring my vision to life. I highly recommend her to anyone looking for a reliable, thoughtful full stack developer.",
    name: "Danielle Sullivan",
    company: "Lockerroomors",
    projectSlug: "lockerroomors",
    approved: true,
  },
  {
    id: "mohamed-al-habsi",
    quote:
      "Rawan did a great job translating what we wanted for SM Studios into a website that represents our work professionally. She understood the direction we were going for, paid attention to the details, and made the whole process straightforward. We're very happy with the result.",
    name: "Mohamed Al Habsi",
    company: "SM Studios",
    projectSlug: "sm-studios",
    approved: true,
  },
  {
    id: "john-ncc",
    quote:
      "Working with Rawan has been a great experience. She takes the time to understand the requirements, asks the right questions, and approaches development with both the technical details and the end user in mind. She's reliable, communicates clearly, and is someone I'd be happy to work with again.",
    name: "John",
    role: "Product Manager",
    company: "NCC X-Calibur",
    projectSlug: "ncc",
    approved: true,
  },
];

/** Published testimonials only; empty list hides the homepage section. */
export const testimonials: Testimonial[] = testimonialEntries.filter(
  (entry) => entry.approved && entry.quote.trim().length > 0,
);
