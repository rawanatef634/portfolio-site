import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/ProjectMedia";
import { Reveal } from "@/components/Reveal";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  layout?: "featured" | "index";
  delay?: number;
};

export function ProjectCard({
  project,
  priority = false,
  layout = "featured",
  delay = 0,
}: ProjectCardProps) {
  const isFeatured = layout === "featured";
  const comingSoon = Boolean(project.comingSoon);

  return (
    <Reveal as="article" delay={delay} className="group">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-offset-4"
      >
        <div className="relative">
          <ProjectMedia
            image={project.coverImage}
            title={project.title}
            category={project.category}
            priority={priority}
            sizes={
              isFeatured
                ? "(min-width: 1152px) 1152px, 100vw"
                : "(min-width: 1024px) 560px, 100vw"
            }
          />
          {comingSoon ? (
            <span className="absolute left-3 top-3 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground-muted backdrop-blur-sm">
              Coming soon
            </span>
          ) : null}
        </div>
        <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-2xl text-foreground transition-opacity duration-300 group-hover:opacity-70">
                {project.title}
              </h3>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-foreground-subtle">
                {comingSoon ? "Coming soon" : (project.tags[0] ?? "Project")}
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted sm:text-[0.95rem]">
              {project.summary}
            </p>
          </div>
          <p className="inline-flex shrink-0 items-center gap-1.5 pt-1 text-sm text-foreground-muted transition-colors group-hover:text-foreground">
            {comingSoon ? "View" : "Case study"}
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
