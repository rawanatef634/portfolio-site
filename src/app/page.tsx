import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { HeroStage } from "@/components/HeroStage";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Reveal } from "@/components/Reveal";
import { ServicePackages } from "@/components/ServicePackages";
import { siteConfig } from "@/config/site";
import { getFeaturedProjects, getVisibleProjects } from "@/lib/projects";

const reasons = [
  {
    title: "End-to-end ownership",
    description:
      "From product definition to shipped UI and handoff notes — not just tickets in isolation.",
  },
  {
    title: "Live products, real constraints",
    description:
      "Founder-built SaaS and commercial client sites that are online and used today.",
  },
  {
    title: "Clear working rhythm",
    description:
      "Scoped milestones, visible progress, and decisions you can review before the next step.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Scope",
    description: "Clarify goals, constraints, and what done looks like.",
  },
  {
    step: "02",
    title: "Build",
    description: "Ship in milestones you can review and adjust.",
  },
  {
    step: "03",
    title: "Handoff",
    description: "Clean structure and notes so your team keeps moving.",
  },
] as const;

export default function HomePage() {
  const featured = getFeaturedProjects().filter((p) => !p.comingSoon);
  const liveProjects = getVisibleProjects().filter(
    (project) => project.website && !project.comingSoon,
  );
  const heroFeatured = featured[0] ?? null;

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
              A focused look at live products — the full archive is on{" "}
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
        aria-labelledby="why-heading"
        className="border-t border-border/60 py-28 sm:py-36"
      >
        <Container width="wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
              Why hire me
            </p>
            <h2
              id="why-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem]"
            >
              Built to reduce risk on the build
            </h2>
          </div>

          <ul className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {reasons.map((reason, index) => (
              <Reveal
                key={reason.title}
                as="li"
                delay={index * 60}
                className="text-center sm:text-left"
              >
                <p className="text-[12px] tracking-[0.14em] text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl sm:text-[1.65rem]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground-muted">
                  {reason.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

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
              Clear from first call to handoff
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
              Packages
            </p>
            <h2
              id="packages-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem]"
            >
              Fixed-price ways to start
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted sm:text-base">
              Pick a package, email to order. Scope stays written — no surprise
              invoices mid-build.
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
                Product-minded engineering
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-foreground-muted sm:text-[1.05rem]">
                I work across SaaS platforms, client web apps, and internal
                tools · including commercial delivery and a product I built end
                to end. I care about maintainable systems and decisions
                grounded in real needs.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-55"
              >
                More about me
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
              Ready when you are
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-fg/55">
              Share what you&apos;re building. I&apos;ll reply with a clear take
              on fit, timing, and next steps — no fluff.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <ButtonLink
                href={`mailto:${siteConfig.email}?subject=Project inquiry`}
                className="!bg-ink-fg !text-ink hover:!bg-ink-fg/90"
              >
                Email me
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
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
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
