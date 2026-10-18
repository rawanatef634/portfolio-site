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
      "An AI-powered career platform for software engineers spanning resume analysis, job matching, assessments, interview prep, and application tracking.",
    description:
      "An AI-powered career platform for software engineers that brings together resume analysis, ATS-oriented feedback, job matching, career assessments, interview preparation, and application tracking.",
    category: "Founder-built SaaS / AI Career Platform",
    role: "Solo Founder & Full-Stack Developer",
    focus:
      "End-to-end product development, SaaS architecture, user experience, and AI-supported workflows.",
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
        "NebulaCV is an independently developed SaaS product built to help software engineers manage career workflows in one place. The platform connects resume analysis, ATS-oriented feedback, job matching, career assessments, interview preparation, and application tracking into a coherent product experience.",
      problem:
        "Career tools for engineers are often fragmented across resume checkers, job boards, assessment sites, and spreadsheets. That fragmentation makes it harder to get consistent feedback, track applications, and prepare for interviews in a single workflow.",
      solution:
        "NebulaCV unifies those steps into interconnected product flows: analyze and refine a resume, explore matching opportunities, complete career assessments, prepare for interviews, and track applications from one platform.",
      contributions: [
        "Defined product scope and prioritized interconnected career workflows",
        "Designed and built the full-stack SaaS application end to end",
        "Implemented AI-supported flows for resume analysis and career guidance",
        "Shaped UX across resume, matching, assessment, interview, and tracking surfaces",
      ],
      // TODO: document confirmed stack (frameworks, hosting, AI providers) when ready for public listing
      technicalApproach:
        "Built as a full-stack SaaS product with attention to modular feature areas, maintainable application structure, and workflows that share context across resume, matching, assessment, and tracking experiences.",
      outcome:
        "Shipped a live founder-built product at nebulacv.com that demonstrates end-to-end SaaS development, from product definition through implementation of AI-supported career workflows.",
    },
  },
  {
    slug: "lockerroomors",
    title: "Lockerroomors",
    summary:
      "A SportsTech platform helping athletes research clubs and leagues through player experiences and anonymous reviews.",
    description:
      "A platform helping athletes research clubs and leagues through player experiences and anonymous reviews.",
    category: "Client Project / SportsTech Platform",
    role: "Web Developer",
    focus:
      "Web application development, administrative workflows, and content-management functionality.",
    website: "https://lockerroomors.com",
    featured: true,
    visible: true,
    tags: ["Client", "SportsTech", "Web App"],
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
        "Lockerroomors is a commercial SportsTech platform that helps athletes evaluate clubs and leagues using firsthand player experiences and anonymous reviews. The engagement focused on reliable web application delivery for a client product.",
      problem:
        "Athletes often lack structured, peer-sourced information when evaluating clubs and leagues. Without a clear place for experiences and reviews, research stays informal and hard to compare.",
      solution:
        "The platform centralizes player experiences and anonymous reviews so athletes can research clubs and leagues more confidently, supported by administrative tooling for content and operations.",
      contributions: [
        "Developed web application features for the client platform",
        "Built and refined administrative workflows for day-to-day operations",
        "Implemented content-management functionality supporting reviews and platform content",
        "Delivered commercial client work aligned with product and stakeholder needs",
      ],
      // TODO: add confirmed technologies used on the engagement when cleared for public disclosure
      technicalApproach:
        "Focused on practical web application development with clear administrative surfaces and content-management flows suitable for an evolving client product.",
      outcome:
        "Supported delivery of a live client platform at lockerroomors.com with public athlete-facing experiences and administrative tooling for content and operations.",
    },
  },
  {
    slug: "sm-studios",
    title: "SM Studios",
    summary:
      "A professional web presence for an architecture and interior design studio in Oman, focused on portfolio presentation and responsive experience.",
    description:
      "A professional web presence for an architecture and interior design studio based in Oman, emphasizing portfolio presentation, visual identity, and responsive user experience.",
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
        "SM Studios needed a professional online presence that presented architecture and interior design work clearly, reflected the studio’s visual identity, and worked well across devices.",
      problem:
        "Design-led studios rely on presentation quality. A weak or inconsistent website makes it harder to communicate craft, project range, and professionalism to prospective clients.",
      solution:
        "Delivered a responsive marketing website centered on portfolio presentation, visual identity, and a clean browsing experience suited to an architecture and interior design practice.",
      contributions: [
        "Implemented the responsive website across key breakpoints",
        "Translated visual identity into a coherent interface",
        "Focused on clear portfolio presentation and navigation",
        "Delivered a polished commercial site for a design-focused business",
      ],
      // TODO: note confirmed implementation stack if desired
      technicalApproach:
        "Prioritized responsive layout, performance-conscious front-end implementation, and careful visual presentation so project imagery and studio identity remain the focus.",
      outcome:
        "Launched a live studio website at smstudios-om.com that presents the practice professionally with a responsive, portfolio-forward experience.",
    },
  },
  {
    slug: "ncc",
    title: "NCC X-Calibur",
    summary:
      "A commercial website for an Egyptian construction-chemicals company, presenting products, project work, and company information.",
    description:
      "Web presence for NCC X-Calibur (ncc.com.eg), a construction chemicals company based in New Cairo, Egypt, covering product solutions, project references, and company information for clients and partners.",
    category: "Client Project / Construction Chemicals",
    role: "Web Developer",
    focus:
      "Commercial website development, product-oriented content structure, and clear presentation of company offerings.",
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
        "NCC X-Calibur is a construction chemicals company specializing in concrete and building solutions such as waterproofing, flooring, repair systems, and protective coatings. The website at ncc.com.eg presents the company’s products, selected projects, and contact pathways for clients across Egypt.",
      problem:
        "Industrial and B2B product companies need a clear digital presence so buyers can understand offerings, review relevant project context, and reach the right contacts, without relying only on offline sales conversations.",
      solution:
        "A structured commercial website that organizes construction-chemical products and company information into an accessible public experience, with pathways to explore solutions and get in touch.",
      // TODO: refine contributions once your exact scope on the engagement is confirmed
      contributions: [
        "Supported development of the commercial website experience",
        "Helped structure product- and company-oriented content for clearer browsing",
        "Implemented interface work suited to an industrial B2B brand",
      ],
      // TODO: add confirmed stack when ready for public disclosure
      technicalApproach:
        "Focused on clear information architecture and responsive front-end presentation so product categories, project references, and contact details remain easy to find on desktop and mobile.",
      outcome:
        "A live company website at ncc.com.eg that presents NCC X-Calibur’s construction-chemical offerings and project context to prospective clients.",
    },
  },
  {
    slug: "fixora",
    title: "Fixora",
    summary:
      "Case study coming soon. Placeholder reserved for a product I’ll publish here once the site and write-up are ready.",
    description:
      "Fixora is a forthcoming project entry. Full case-study details, live URL, and screenshots will be added when the product is ready to share.",
    category: "Product · Coming Soon",
    role: "Builder",
    focus: "Details forthcoming.",
    // TODO: set website when Fixora has a public URL, e.g. "https://fixora.example"
    website: undefined,
    featured: false,
    visible: true,
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
