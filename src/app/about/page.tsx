import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} · full-stack software engineer building SaaS products, internal tools, and commercial websites.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: `About ${siteConfig.name} · full-stack software engineer building SaaS products, internal tools, and commercial websites.`,
    url: `${siteConfig.url}/about`,
  },
};

const specializations = [
  "Full-stack web application development",
  "SaaS product architecture and MVP delivery",
  "Admin dashboards and internal tooling",
  "API integrations and feature development",
  "Responsive commercial websites",
] as const;

const experienceHighlights = [
  {
    title: "NebulaCV",
    detail:
      "Independently developing an AI-powered career SaaS platform for software engineers, covering product definition, full-stack implementation, and interconnected workflows.",
  },
  {
    title: "Lockerroomors",
    detail:
      "Web development for a SportsTech client platform, including administrative workflows and content-management functionality.",
  },
  {
    title: "SM Studios",
    detail:
      "Responsive website development for an architecture and interior design studio, with emphasis on portfolio presentation and visual identity.",
  },
  {
    title: "NCC X-Calibur",
    detail:
      "Commercial website work for an Egyptian construction-chemicals company, presenting products, projects, and company information at ncc.com.eg.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40">
        <Container className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
              About
            </p>
            <h1 className="mt-5 font-display text-4xl text-balance sm:text-5xl md:text-6xl">
              Full-stack engineer with a product orientation
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground-muted sm:text-lg">
              I help founders, businesses, and agencies turn ideas into
              reliable software.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/70 py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:col-span-4">
              How I work
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground-muted lg:col-span-7 lg:col-start-6">
              <p>
                I work across the stack on SaaS platforms, web applications,
                dashboards, and commercial websites · including client delivery
                and a SaaS product built end to end.
              </p>
              <p>
                I prefer clear problem framing, maintainable architecture, and
                interfaces people can actually use.
              </p>
              {siteConfig.location ? <p>Based in {siteConfig.location}.</p> : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
                Focus
              </p>
              <h2 className="mt-3 font-display text-3xl">
                Specializations
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
                key={item}
                className="flex items-baseline gap-5 py-7 sm:gap-8 sm:py-8"
              >
                <span className="w-8 text-[12px] text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl sm:text-2xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border/70 py-24 sm:py-32">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl">
            Selected products
          </h2>
          <ul className="mt-14">
            {experienceHighlights.map((item) => (
              <li
                key={item.title}
                className="grid gap-4 border-t border-border/80 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"
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

      <section className="ink-band py-28 sm:py-36">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-4xl text-ink-fg">
              Let&apos;s talk
            </h2>
            <p className="mt-4 text-base text-ink-fg/60">
              Looking for reliable engineering help? I&apos;d be glad to hear
              what you&apos;re working on.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                external
                className="!bg-ink-fg !text-ink hover:!bg-ink-fg/90"
              >
                Email me
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
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
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
