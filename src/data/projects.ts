export type ProjectImage = {
  /** Path under /public, e.g. /projects/nebulacv-cover.png */
  src: string;
  alt: string;
  /** Optional caption shown on case-study pages */
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  role: string;
  focus: string;
  website?: string;
  featured: boolean;
  /** When false, project is excluded from listings and routes */
  visible: boolean;
  /** Shows a coming-soon treatment until the case study is ready */
  comingSoon?: boolean;
  tags: string[];
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    contributions: string[];
    technicalApproach: string;
    outcome: string;
  };
};

/**
 * Typed project catalogue.
 *
 * - Set `visible: false` to hide a project (e.g. Fixora until ready).
 * - Keep case-study copy factual; mark unverified details as // TODO in comments,
 *   not as claims on the live site.
 */
export const projects: Project[] = [
  {
    slug: "nebulacv",
    title: "NebulaCV",
    summary:
      "A career SaaS product for software engineers that brings resume analysis, job matching, assessments, interview prep, and application tracking into one workflow.",
    description:
      "A career platform for software engineers that connects resume analysis, ATS-oriented feedback, job matching, career assessments, interview preparation, and application tracking.",
    category: "Founder-built SaaS / Career Platform",
    role: "Solo Founder & Full-Stack Developer",
    focus:
      "Product definition, full-stack implementation, and interconnected career workflows.",
    website: "https://nebulacv.com",
    featured: true,
    visible: true,
    tags: ["SaaS", "AI", "Product"],
    coverImage: {
      src: "/projects/nebulacv-cover.png",
      alt: "NebulaCV product cover",
    },
    gallery: [
      {
        src: "/projects/nebulacv-dashboard.png",
        alt: "NebulaCV home dashboard with active learning path",
        caption: "App dashboard · goal, stage, and today’s task",
      },
      {
        src: "/projects/nebulacv-path.png",
        alt: "NebulaCV phased learning path",
        caption: "My Path · phased capability progression",
      },
      {
        src: "/projects/nebulacv-resume.png",
        alt: "NebulaCV resume guidance screen",
        caption: "Resume flows grounded in proof",
      },
      {
        src: "/projects/nebulacv-detail-1.png",
        alt: "NebulaCV landing page feature sections",
        caption: "Marketing site · resume and job matching narrative",
      },
      {
        src: "/projects/nebulacv-detail-2.png",
        alt: "NebulaCV clarity over clutter section",
        caption: "Positioning · clarity over clutter",
      },
      {
        src: "/projects/nebulacv-journey.png",
        alt: "NebulaCV four-phase journey section",
        caption: "Four-phase product journey",
      },
      {
        src: "/projects/nebulacv-pricing.png",
        alt: "NebulaCV pricing plans",
        caption: "Pricing · Free, Pro, and Premium",
      },
    ],
    caseStudy: {
      overview:
        "NebulaCV is my independently built SaaS product for software engineers. It brings resume analysis, ATS-oriented feedback, job matching, career assessments, interview preparation, and application tracking into one product instead of a pile of disconnected tools.",
      problem:
        "Engineers usually juggle a resume checker, a job board, assessment sites, interview notes, and a spreadsheet for applications. Feedback and progress do not carry from one tool to the next, so preparation stays fragmented.",
      solution:
        "NebulaCV ties those steps into shared flows: refine a resume with grounded feedback, follow a phased capability path, explore matching opportunities, prepare for interviews, and track applications in one place.",
      contributions: [
        "Defined the product scope and the career workflows that needed to connect",
        "Designed and built the full-stack application as solo founder",
        "Implemented AI-supported resume analysis and career guidance flows",
        "Shaped UX across dashboard, learning path, resume, matching, and tracking surfaces",
      ],
      // TODO: document confirmed stack (frameworks, hosting, AI providers) when ready for public listing
      technicalApproach:
        "Structured as a full-stack SaaS app with modular feature areas so resume, matching, assessment, and tracking can share context without becoming one fragile monolith.",
      outcome:
        "A live product at nebulacv.com that demonstrates end-to-end SaaS ownership: product decisions, implementation, and a coherent career workflow for engineers.",
    },
  },
  {
    slug: "lockerroomors",
    title: "Lockerroomors",
    summary:
      "A sports platform where athletes research clubs and leagues through player experiences and anonymous reviews. Built by substantially reworking an existing frontend and backend codebase, plus admin tools for day-to-day operations.",
    description:
      "A platform helping athletes research clubs and leagues through player experiences and anonymous reviews.",
    category: "Client Project / Sports Platform",
    role: "Full-Stack Developer",
    focus:
      "Frontend, backend, administrative workflows, and substantial rework of an existing codebase.",
    website: "https://lockerroomors.com",
    featured: true,
    visible: true,
    tags: ["Client", "Sports", "Web App", "Full-Stack"],
    coverImage: {
      src: "/projects/lockerroomors-cover.png",
      alt: "Lockerroomors platform cover",
    },
    gallery: [
      {
        src: "/projects/lockerroomors-dashboard.png",
        alt: "Lockerroomors home dashboard with reviews and rankings",
        caption: "Home dashboard · reviews, rankings, and CTAs",
      },
      {
        src: "/projects/lockerroomors-detail-1.png",
        alt: "Lockerroomors explore teams page",
        caption: "Explore Teams",
      },
      {
        src: "/projects/lockerroomors-admin.png",
        alt: "Lockerroomors teams browse with filters",
        caption: "Teams browse with filters and review actions",
      },
      {
        src: "/projects/lockerroomors-leagues.png",
        alt: "Lockerroomors explore leagues page",
        caption: "Explore Leagues",
      },
      {
        src: "/projects/lockerroomors-review-flow.png",
        alt: "Lockerroomors multi-step review submission flow",
        caption: "Review submission flow",
      },
      {
        src: "/projects/lockerroomors-rewards.png",
        alt: "Lockerroomors athlete referral rewards page",
        caption: "Athlete referral rewards",
      },
      {
        src: "/projects/lockerroomors-how-it-works.png",
        alt: "Lockerroomors how it works onboarding steps",
        caption: "How it works",
      },
      {
        src: "/projects/lockerroomors-about.png",
        alt: "Lockerroomors about page",
        caption: "About page",
      },
    ],
    caseStudy: {
      overview:
        "Lockerroomors is a sports platform where athletes research clubs and leagues through player experiences and anonymous reviews. I joined an existing codebase and rebuilt most of it (frontend and backend) into the live product athletes and admins use today.",
      problem:
        "Choosing a club or league often depends on word of mouth. Without structured, peer-sourced reviews, athletes have little comparable information, and the team behind the product needs reliable tools to manage content and operations.",
      solution:
        "The live product lets athletes browse teams and leagues, submit multi-step reviews, and explore related flows such as referral rewards, while admin tooling supports day-to-day content and operations, backed by application logic I reworked on the server side as well as the client.",
      contributions: [
        "Took over an existing codebase and reworked most of the application end to end",
        "Built and extended backend logic supporting core platform workflows",
        "Built and refined athlete-facing web application features",
        "Developed administrative workflows used for day-to-day operations",
        "Implemented content-management functionality supporting reviews and platform content",
      ],
      // TODO: list confirmed technologies if cleared for public disclosure
      technicalApproach:
        "Full-stack work on a client-owned codebase: reshaping frontend flows and backend behavior so athlete research, reviews, and admin operations share a coherent, maintainable foundation rather than patching around the original structure.",
      outcome:
        "A live platform at lockerroomors.com shaped largely through a deep rewrite of the prior codebase, spanning frontend, backend, and admin tooling. Not a greenfield build claimed as sole authorship of every historical decision.",
    },
  },
  {
    slug: "sm-studios",
    title: "SM Studios",
    summary:
      "A website for an architecture and interior design studio in Oman, built to present the practice and its work clearly across devices.",
    description:
      "A professional web presence for an architecture and interior design studio based in Oman, emphasizing portfolio presentation, visual identity, and responsive browsing.",
    category: "Client Project / Architecture & Interior Design",
    role: "Web Developer",
    focus:
      "Responsive website development, interface implementation, and visual presentation.",
    website: "https://smstudios-om.com",
    featured: true,
    visible: true,
    tags: ["Client", "Website", "Design Studio"],
    coverImage: {
      src: "/projects/smstudios-cover.png",
      alt: "SM Studios website cover",
    },
    gallery: [
      {
        src: "/projects/smstudios-detail-1.png",
        alt: "SM Studios expertise section with service categories",
        caption: "Expertise · interior, architecture, fit-outs",
      },
      {
        src: "/projects/smstudios-detail-2.png",
        alt: "SM Studios portfolio showcase carousel",
        caption: "Portfolio showcase",
      },
      {
        src: "/projects/smstudios-detail-3.png",
        alt: "SM Studios interior design service section",
        caption: "Service detail · Interior Design",
      },
      {
        src: "/projects/smstudios-detail-4.png",
        alt: "SM Studios latest projects grid",
        caption: "Latest projects",
      },
      {
        src: "/projects/smstudios-cta.png",
        alt: "SM Studios contact CTA and footer",
        caption: "Contact CTA and footer",
      },
    ],
    caseStudy: {
      overview:
        "SM Studios is an architecture and interior design practice in Oman. They needed a website that presented the studio and its projects clearly, matched how they want to be seen, and worked well on phone and desktop.",
      problem:
        "Prospective clients judge a design studio partly by how its work is shown online. A generic or inconsistent site undercuts the portfolio and makes it harder to understand services such as interior design, architecture, and fit-outs.",
      solution:
        "A responsive marketing site organized around expertise areas, project imagery, and a straightforward path to contact, with layout and presentation tuned to the studio’s visual identity.",
      contributions: [
        "Implemented the responsive website across key breakpoints",
        "Translated the studio’s visual identity into a coherent interface",
        "Structured portfolio and service sections so projects and expertise are easy to browse",
      ],
      // TODO: note confirmed implementation stack if desired
      technicalApproach:
        "Prioritized responsive layout, careful typography, and image-led presentation so the work stays front and center rather than the chrome around it.",
      outcome:
        "A live studio site at smstudios-om.com that presents SM Studios and its projects clearly on desktop and mobile.",
    },
  },
  {
    slug: "ncc",
    title: "NCC X-Calibur",
    summary:
      "Commercial website work for NCC X-Calibur, an Egyptian construction-chemicals company, helping present products, project references, and company information to buyers and partners.",
    description:
      "Web presence for NCC X-Calibur (ncc.com.eg), a construction chemicals company based in New Cairo, Egypt, covering product solutions, project references, and company information for clients and partners.",
    category: "Client Project / Construction Chemicals",
    role: "Web Developer (contributing)",
    focus:
      "Commercial website contribution: product-oriented content structure and clear presentation of company offerings.",
    website: "https://ncc.com.eg",
    featured: false,
    visible: true,
    tags: ["Client", "Website", "Industrial"],
    coverImage: {
      src: "/projects/ncc-cover.png",
      alt: "NCC X-Calibur website cover",
    },
    gallery: [
      {
        src: "/projects/ncc-detail-1.png",
        alt: "NCC X-Calibur homepage product categories",
        caption: "Homepage · product category entry points",
      },
      {
        src: "/projects/ncc-products.png",
        alt: "NCC X-Calibur products landing page",
        caption: "Products landing",
      },
      {
        src: "/projects/ncc-product-detail.png",
        alt: "NCC X-Calibur product detail page for X-Mix HPF11",
        caption: "Product detail · X-Mix HPF11",
      },
      {
        src: "/projects/ncc-detail-2.png",
        alt: "NCC X-Calibur featured projects page",
        caption: "Featured projects",
      },
      {
        src: "/projects/ncc-contact.png",
        alt: "NCC X-Calibur contact page",
        caption: "Contact page",
      },
      {
        src: "/projects/ncc-blog.png",
        alt: "NCC X-Calibur insights and blog section",
        caption: "Insights & updates",
      },
    ],
    caseStudy: {
      overview:
        "NCC X-Calibur is a construction-chemicals company in Egypt offering concrete and building solutions such as waterproofing, flooring, repair systems, and protective coatings. I contributed as a web developer on the commercial site at ncc.com.eg; this case study describes the live product and my documented contribution, not sole ownership of the entire website.",
      problem:
        "B2B buyers need to understand product categories, see relevant project context, and find a contact path without depending only on offline sales conversations.",
      solution:
        "The live site organizes product categories, product detail pages, featured projects, insights, and contact information into a public commercial experience.",
      // TODO: confirm exact pages/features you owned with John (PM) before stronger ownership claims
      contributions: [
        "Contributed web development on the commercial website",
        "Helped structure product- and company-oriented content for clearer browsing",
        "Implemented interface work suited to an industrial B2B brand",
      ],
      // TODO: add confirmed stack when ready for public disclosure
      technicalApproach:
        "Focused on clear information architecture and responsive front-end presentation so product categories, project references, and contact details stay easy to find.",
      outcome:
        "A live company website at ncc.com.eg. Visitors can explore construction-chemical offerings and project context; my role was contributing development work on that experience, not building every part independently.",
    },
  },
  {
    slug: "fixora",
    title: "Fixora",
    summary:
      "A home-services product in development. Case study reserved until the product is ready to share.",
    description:
      "Fixora is a forthcoming project entry. Full case-study details, live URL, and screenshots will be added when the product is ready to share.",
    category: "Product · Coming Soon",
    role: "Builder",
    focus: "Details forthcoming.",
    // TODO: set website when Fixora has a public URL
    website: undefined,
    featured: false,
    visible: false,
    comingSoon: true,
    tags: ["Coming Soon"],
    coverImage: {
      src: "/projects/fixora-cover.png",
      alt: "Fixora project placeholder",
    },
    gallery: [],
    caseStudy: {
      // TODO: Replace this placeholder case study before treating Fixora as a finished entry.
      // Do not claim launch or revenue until verified.
      overview:
        "Fixora is reserved as a placeholder on this portfolio. The full overview, problem, solution, and outcome will be published when the project is ready.",
      problem: "Case study details coming soon.",
      solution: "Case study details coming soon.",
      contributions: [
        "Project details will be added when Fixora is ready to publish",
      ],
      technicalApproach: "Technical details will be shared with the full case study.",
      outcome: "Placeholder only · not yet presented as a launched product.",
    },
  },
];
