import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/projects";
import { imageFileExists } from "@/lib/projects";

type ProjectShowcaseProps = {
  projects: Project[];
  /** Landing: one lead + two-up grid. Archive: stacked editorial. */
  variant?: "featured" | "archive";
};

function ProjectMeta({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const comingSoon = Boolean(project.comingSoon);

  return (
    <div
      className={`flex gap-4 ${compact ? "flex-col" : "flex-wrap items-end justify-between"}`}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[13px] tabular-nums tracking-wide text-foreground-subtle">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`font-display text-foreground ${
              compact
                ? "text-2xl sm:text-3xl"
                : "text-3xl sm:text-4xl lg:text-[2.75rem]"
            }`}
          >
            {comingSoon ? (
              project.title
            ) : (
              <Link
                href={`/projects/${project.slug}`}
                className="transition-opacity hover:opacity-60"
              >
                {project.title}
              </Link>
            )}
          </h3>
        </div>
        <p className="mt-2 text-[14px] text-foreground-muted sm:text-[15px]">
          {comingSoon
            ? "Coming soon"
            : project.tags.slice(0, 2).join(" · ")}
        </p>
      </div>

      {!comingSoon ? (
        <div
          className={`flex flex-wrap items-center gap-4 text-[14px] ${compact ? "mt-1" : ""}`}
        >
          {project.website ? (
            <ExternalLink
              href={project.website}
              className="text-foreground-muted hover:text-foreground"
              showIcon
            >
              Live
            </ExternalLink>
          ) : null}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-opacity hover:opacity-60"
          >
            Case study
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function ProjectCover({
  project,
  priority = false,
  sizes,
}: {
  project: Project;
  priority?: boolean;
  sizes: string;
}) {
  const comingSoon = Boolean(project.comingSoon);
  const hasImage = imageFileExists(project.coverImage.src);

  if (!hasImage || comingSoon) {
    return (
      <div className="flex aspect-21/9 items-center justify-center rounded-3xl border border-dashed border-border/70 bg-surface/70">
        <p className="text-sm text-foreground-subtle">
          {comingSoon ? "Case study coming soon" : "Preview soon"}
        </p>
      </div>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="relative block overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-(--shadow-soft) transition-transform duration-500 ease-out hover:-translate-y-1"
    >
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        width={1910}
        height={860}
        quality={85}
        sizes={sizes}
        className="h-auto w-full"
        priority={priority}
      />
    </Link>
  );
}

export function ProjectShowcase({
  projects,
  variant = "archive",
}: ProjectShowcaseProps) {
  if (variant === "featured" && projects.length >= 3) {
    const [lead, ...rest] = projects;
    const pair = rest.slice(0, 2);

    return (
      <div className="flex flex-col gap-20 sm:gap-24">
        <Reveal as="article">
          <div className="mb-8 sm:mb-10">
            <ProjectMeta project={lead!} index={0} />
          </div>
          <ProjectCover
            project={lead!}
            priority
            sizes="(min-width: 1400px) 1200px, 92vw"
          />
          <p className="mx-auto mt-7 max-w-2xl text-center text-[15px] leading-relaxed text-foreground-muted sm:mt-8 sm:text-base">
            {lead!.summary}
          </p>
        </Reveal>

        <ul className="grid gap-12 sm:gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          {pair.map((project, index) => (
            <Reveal key={project.slug} as="li" delay={(index + 1) * 50}>
              <article className="flex h-full flex-col">
                <div className="mb-6">
                  <ProjectMeta project={project} index={index + 1} compact />
                </div>
                <ProjectCover
                  project={project}
                  sizes="(min-width: 1024px) 560px, 92vw"
                />
                <p className="mt-5 flex-1 text-[14px] leading-relaxed text-foreground-muted sm:text-[15px]">
                  {project.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-24 sm:gap-28">
      {projects.map((project, index) => (
        <Reveal key={project.slug} as="li" delay={index * 40}>
          <article>
            <div className="mb-8">
              <ProjectMeta project={project} index={index} />
            </div>
            <ProjectCover
              project={project}
              priority={index === 0}
              sizes="(min-width: 1400px) 1200px, 92vw"
            />
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground-muted sm:mt-7 sm:text-base">
              {project.summary}
            </p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
