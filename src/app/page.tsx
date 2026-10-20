import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { HeroStage } from "@/components/HeroStage";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Reveal } from "@/components/Reveal";
import { ServicePackages } from "@/components/ServicePackages";
import { Testimonials } from "@/components/Testimonials";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/testimonials";
import { getFeaturedProjects, getVisibleProjects } from "@/lib/projects";

const services = [
  {
    title: "SaaS & product development",
    description:
      "Build the core features of a product, improve existing workflows, and leave a foundation your team can extend.",
  },
  {
    title: "Dashboards & internal tools",
    description:
      "Replace cumbersome spreadsheets and manual processes with clearer tools for managing data and day-to-day operations.",
  },
  {
    title: "Business websites",
    description:
      "Present a company professionally so visitors understand what you offer and how to get in touch.",
  },
  {
    title: "Improvements & integrations",
    description:
      "Strengthen an existing React or Next.js app, connect APIs, and refine the pieces that slow your team down, without an unnecessary rewrite.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Clarify the problem, constraints, and what a useful outcome looks like before writing code.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Ship in reviewable milestones so you can steer the work as it takes shape.",
  },
  {
    step: "03",
    title: "Handoff",
    description:
      "Leave clean structure and notes so you or your team can keep building confidently.",
  },
] as const;

export default function HomePage() {
  const featured = getFeaturedProjects().filter((p) => !p.comingSoon);
  const liveProjects = getVisibleProjects().filter(
    (project) => project.website && !project.comingSoon,
  );
  const heroFeatured = featured[0] ?? null;
  const showTestimonials = testimonials.length > 0;

  return (
    <>
      <HeroStage featured={heroFeatured} />

      <section
        aria-label="Live products"
        className="border-y border-border/60"
      >
        <Container
          width="wide"
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-8 sm:py-9"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
            Live
          </span>
          {liveProjects.map((project) => (
            <ExternalLink
              key={project.slug}
              href={project.website!}
              className="text-[15px] text-foreground-muted hover:text-foreground"
              showIcon={false}
            >
              <span className="underline-grow">{project.title}</span>
            </ExternalLink>
          ))}
        </Container>
      </section>

      <section
        id="work"
        aria-labelledby="work-heading"
        className="py-28 sm:py-36"
      >
        <Container width="wide">
          <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
              Work
            </p>
            <h2
              id="work-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem]"
            >
              Selected projects
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted sm:text-base">
              Live products and client work, with enough detail to understand
              the problem and what was built. More on{" "}
              <Link
                href="/projects"
                className="underline-grow text-foreground"
              >
                Projects
              </Link>
              .
            </p>
          </div>

          <ProjectShowcase projects={featured} variant="featured" />

          <div className="mt-16 flex justify-center sm:mt-20">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-55"
            >
              View all projects
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section
        id="services"
        aria-labelledby="services-heading"
        className="border-t border-border/60 py-28 sm:py-36"
      >
        <Container width="wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem]"
            >
              What I can help you with
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted sm:text-base">
              Focused on practical software for businesses and founders, not a
              laundry list of every framework.
            </p>
          </div>

          <ul className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:gap-x-14">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                as="li"
                delay={index * 50}
                className="text-left"
              >
                <p className="text-[12px] tracking-[0.14em] text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl sm:text-[1.65rem]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground-muted">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {showTestimonials ? (
        <section
          aria-labelledby="testimonials-heading"
          className="border-t border-border/60 py-28 sm:py-36"
        >
          <Container width="wide">
            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
                Clients
              </p>
              <h2
                id="testimonials-heading"
                className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem]"
              >
                What clients say
              </h2>
            </div>
          </Container>

          <div className="mt-2">
            <Testimonials />
          </div>
        </section>
      ) : null}

      <section
        aria-labelledby="process-heading"
        className="ink-band py-28 sm:py-36"
      >
        <Container width="wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-fg/40">
              Process
            </p>
            <h2
              id="process-heading"
              className="mt-3 font-display text-3xl text-ink-fg sm:text-4xl lg:text-[2.85rem]"
            >
              How engagements usually run
            </h2>
          </div>

          <ol className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-14">
            {processSteps.map((item, index) => (
              <Reveal
                key={item.step}
                as="li"
                delay={index * 70}
                className="text-center"
              >
                <p className="text-[12px] tracking-[0.14em] text-ink-fg/35">
                  {item.step}
                </p>
                <h3 className="mt-5 font-display text-2xl text-ink-fg sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-[15px] leading-relaxed text-ink-fg/55">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="packages"
        aria-labelledby="packages-heading"
        className="py-28 sm:py-36"
      >
        <Container width="wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
              Ways to start
            </p>
            <h2
              id="packages-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem]"
            >
              Clear packages for common projects
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted sm:text-base">
              Fixed prices apply to a written scope, not an open backlog.
              Custom Build starts from the listed figure and is quoted after we
              define what is in and out. It is a first phase or custom
              engagement, not a full SaaS price. If none of these fit, email a
              short brief for a fixed quote or a clear no.
            </p>
          </div>

          <div className="mt-14 sm:mt-16">
            <ServicePackages />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="about-heading"
        className="border-t border-border/60 py-28 sm:py-36"
      >
        <Container width="wide">
          <div className="mx-auto grid max-w-4xl gap-10 text-center lg:grid-cols-2 lg:items-start lg:gap-16 lg:text-left">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
                About
              </p>
              <h2
                id="about-heading"
                className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem]"
              >
                How I work with clients
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-foreground-muted sm:text-[1.05rem]">
                I start from what the software needs to do for your business,
                ask the questions that surface constraints early, and make
                technical choices that stay maintainable. Whether that is a
                SaaS feature set, an internal dashboard, or a business website,
                the aim is the same: something your team can use and keep
                improving without unnecessary rewrites.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-55"
              >
                More about how I work
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="ink-band py-28 sm:py-36"
      >
        <Container width="wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-fg/40">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-3xl text-ink-fg sm:text-4xl lg:text-[2.85rem]"
            >
              Tell me what you are building
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-fg/55">
              A short note about the project, timeline, and any links is enough.
              I will reply with a clear view on fit, timing, and next steps.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <ButtonLink
                href={`mailto:${siteConfig.email}?subject=Project inquiry`}
                className="!bg-ink-fg !text-ink hover:!bg-ink-fg/90"
              >
                Discuss a project
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsAppUrl}
                variant="secondary"
                external
                className="!border-ink-fg/25 !bg-transparent !text-ink-fg hover:!border-ink-fg/55"
              >
                WhatsApp
              </ButtonLink>
              <ButtonLink
                href={siteConfig.linkedIn}
                variant="secondary"
                external
                className="!border-ink-fg/25 !bg-transparent !text-ink-fg hover:!border-ink-fg/55"
              >
                LinkedIn
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm text-ink-fg/40">
              {siteConfig.email}
              <span className="mx-2 text-ink-fg/25" aria-hidden>
                ·
              </span>
              <a
                href={siteConfig.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-fg/40 transition-colors hover:text-ink-fg"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
