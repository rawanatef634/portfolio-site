export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  projectSlug?: string;
};

/**
 * Client testimonials shown on the homepage.
 * Prefer approved wording from clients when available.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Rawan delivered our platform with clear communication and steady progress. The admin tools and athlete-facing experience came together cleanly, and she was easy to work with throughout.",
    name: "Danielle Sullivan",
    role: "Founder",
    company: "Lockerroomors",
    projectSlug: "lockerroomors",
  },
  {
    quote:
      "She built a website that finally feels like our studio. Responsive, polished, and true to how we present our work. Handoff was smooth and professional.",
    name: "Mohamed Al Habsi",
    role: "Principal",
    company: "SM Studios",
    projectSlug: "sm-studios",
  },
];
