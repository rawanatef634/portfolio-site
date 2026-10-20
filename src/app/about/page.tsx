import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} · full-stack developer building SaaS products, internal tools, and business websites.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: `About ${siteConfig.name} · full-stack developer building SaaS products, internal tools, and business websites.`,
    url: `${siteConfig.url}/about`,
  },
};

const specializations = [
  {
    title: "SaaS & product development",
    detail:
      "Turn requirements into usable features and leave a foundation that can grow with the product.",
  },
  {
    title: "Dashboards & internal tools",
    detail:
      "Simplify complicated workflows so teams spend less time wrestling with spreadsheets and manual process.",
  },
  {
    title: "Business websites",
    detail:
      "Present a company clearly, show the work that matters, and make contact straightforward.",
  },
  {
    title: "App improvements & integrations",
    detail:
      "Improve existing React or Next.js applications and connect the APIs your operations depend on.",
  },
] as const;

const experienceHighlights = [
  {
    title: "NebulaCV",
    detail:
      "Independently building a career SaaS product for software engineers, from product definition through full-stack implementation of interconnected workflows.",
  },
  {
    title: "Lockerroomors",
    detail:
      "Full-stack work on a sports platform: reworked most of an existing codebase across frontend, backend, athlete-facing features, and admin workflows.",
  },
  {
    title: "SM Studios",
    detail:
      "Responsive website for an architecture and interior design studio in Oman, focused on clear portfolio presentation.",
  },
  {
    title: "NCC X-Calibur",
    detail:
      "Commercial website work for a construction-chemicals company in Egypt, organizing products, projects, and company information.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32">
        <Container className="pb-14 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
              About
            </p>
            <h1 className="mt-5 font-display text-4xl text-balance sm:text-5xl md:text-6xl">
              A developer who starts from what your business needs to work
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground-muted sm:text-lg">
              I help founders and business owners turn real requirements into
              SaaS features, dashboards, and websites they can use, maintain,
              and extend.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/70 py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:col-span-4">
              How I approach client work
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground-muted lg:col-span-7 lg:col-start-6">
              <p>
                Good software starts with a clear problem. I ask questions that
                surface constraints early, translate requirements into a
                realistic plan, and make technical decisions with maintenance in
                mind, not just the first demo.
              </p>
              <p>
                That usually means shipping polished, responsive interfaces,
                simplifying workflows that get in people&apos;s way, and
                improving existing applications when a full rewrite is not the
                responsible choice.
              </p>
              {siteConfig.location ? (
                <p>Based in {siteConfig.location}.</p>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mb-8 flex flex-col gap-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
                Focus
              </p>
              <h2 className="mt-3 font-display text-3xl">
                Where I am most useful
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground"
            >
              See the work
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
          <ul className="divide-y divide-border/80 border-y border-border/80">
            {specializations.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-8 sm:py-8"
              >
                <span className="w-8 text-[12px] text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border/70 py-14 sm:py-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl">
            Selected work
          </h2>
          <ul className="mt-8 sm:mt-10">
            {experienceHighlights.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 border-t border-border/80 py-7 sm:gap-4 sm:py-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"
              >
                <h3 className="font-display text-2xl sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="ink-band py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-4xl text-ink-fg">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-4 text-base text-ink-fg/60">
              If you need a thoughtful development partner for a SaaS product,
              internal tool, or business website, I would be glad to hear what
              you are working on.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
                className="!border-ink-fg/20 !bg-transparent !text-ink-fg hover:!border-ink-fg/50"
              >
                WhatsApp
              </ButtonLink>
              <ButtonLink
                href={siteConfig.linkedIn}
                variant="secondary"
                external
                className="!border-ink-fg/20 !bg-transparent !text-ink-fg hover:!border-ink-fg/50"
              >
                LinkedIn
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-ink-fg/40">
              <ExternalLink
                href={`mailto:${siteConfig.email}`}
                className="text-ink-fg/40 hover:text-ink-fg"
                showIcon={false}
              >
                {siteConfig.email}
              </ExternalLink>
              <span className="mx-2 text-ink-fg/25" aria-hidden>
                ·
              </span>
              <ExternalLink
                href={siteConfig.whatsAppUrl}
                className="text-ink-fg/40 hover:text-ink-fg"
                showIcon={false}
              >
                {siteConfig.phone}
              </ExternalLink>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
