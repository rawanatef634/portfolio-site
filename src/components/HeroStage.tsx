import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { siteConfig } from "@/config/site";
import type { Project } from "@/data/projects";
import { imageFileExists } from "@/lib/projects";

type HeroStageProps = {
  featured: Project | null;
};

export function HeroStage({ featured }: HeroStageProps) {
  const hasImage =
    featured !== null && imageFileExists(featured.coverImage.src);

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(250,249,246,0.95),transparent_55%),radial-gradient(ellipse_50%_40%_at_50%_80%,rgba(10,10,10,0.03),transparent_55%)]"
        aria-hidden
      />

      <Container width="wide" className="relative pb-24 sm:pb-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            {siteConfig.availability.show ? (
              <p className="fade-up inline-flex items-center gap-2.5 text-[13px] text-foreground-muted">
                <span
                  className="size-1.5 rounded-full bg-foreground"
                  aria-hidden
                />
                {siteConfig.availability.message}
              </p>
            ) : null}

            <p className="fade-up fade-up-1 mt-8 font-display text-[2.75rem] leading-[1.1] text-foreground sm:text-6xl lg:text-[3.75rem]">
              {siteConfig.name}
            </p>

            <h1 className="fade-up fade-up-2 mt-6 text-xl font-medium tracking-[-0.01em] text-foreground sm:text-2xl lg:text-[1.65rem] lg:leading-snug">
              I build web applications that make businesses easier to run.
            </h1>

            <p className="fade-up fade-up-3 mt-6 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
              SaaS products, internal tools, dashboards, and business websites
              for founders and teams who need software that is clear to use and
              practical to maintain. I take time to understand the problem,
              then build what actually helps.
            </p>

            <div className="fade-up fade-up-4 mt-10 flex flex-wrap items-center gap-3.5">
              <ButtonLink
                href={`mailto:${siteConfig.email}?subject=Project inquiry`}
              >
                Discuss a project
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#work" variant="secondary">
                View selected work
              </ButtonLink>
            </div>

            <p className="fade-up fade-up-4 mt-9 text-[13px] leading-relaxed text-foreground-subtle">
              Founder-built SaaS · Live client projects · Remote-friendly
            </p>
          </div>

          <div className="fade-up fade-up-2 relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            {hasImage && featured ? (
              <a
                href={`/projects/${featured.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-(--shadow-float) transition-transform duration-500 hover:-translate-y-1"
              >
                <Image
                  src={featured.coverImage.src}
                  alt={featured.coverImage.alt}
                  width={1910}
                  height={860}
                  quality={85}
                  priority
                  sizes="(min-width: 1024px) 560px, 92vw"
                  className="h-auto w-full"
                />
                <div className="flex items-center justify-between gap-4 border-t border-border/60 px-5 py-4 sm:px-6 sm:py-5">
                  <div className="min-w-0">
                    <p className="text-[15px] font-medium text-foreground">
                      {featured.title}
                    </p>
                    <p className="mt-0.5 truncate text-[13px] text-foreground-subtle">
                      Featured · {featured.tags[0] ?? "Product"}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] text-foreground-muted transition-colors group-hover:text-foreground">
                    Case study
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </span>
                </div>
              </a>
            ) : (
              <div className="flex aspect-21/9 items-center justify-center rounded-3xl border border-dashed border-border bg-surface/60 text-sm text-foreground-subtle">
                Featured work
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
