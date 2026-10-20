import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { CreativeWorkJsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectVisuals } from "@/components/ProjectVisuals";
import { siteConfig } from "@/config/site";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectSlugs,
  getProjectVisuals,
} from "@/lib/projects";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

function CaseStudyFallback() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="h-4 w-28 animate-pulse rounded bg-border" />
      <div className="mt-8 h-10 w-2/3 max-w-md animate-pulse rounded bg-border" />
      <div className="mt-4 h-20 max-w-2xl animate-pulse rounded bg-border/70" />
      <div className="mt-10 aspect-[21/9] w-full animate-pulse rounded-2xl bg-border/60" />
    </Container>
  );
}

async function CaseStudyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  const visuals = getProjectVisuals(project);
  const sections = [
    { id: "overview", title: "Overview", body: project.caseStudy.overview },
    { id: "problem", title: "The problem", body: project.caseStudy.problem },
    { id: "solution", title: "The solution", body: project.caseStudy.solution },
    {
      id: "technical",
      title: "Technical approach",
      body: project.caseStudy.technicalApproach,
    },
    { id: "outcome", title: "Outcome", body: project.caseStudy.outcome },
  ] as const;

  return (
    <>
      <CreativeWorkJsonLd
        name={project.title}
        description={project.summary}
        url={`${siteConfig.url}/projects/${project.slug}`}
      />

      <article>
        <header className="border-b border-border/70 pt-24 sm:pt-28">
          <Container className="pb-12 sm:pb-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All projects
            </Link>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-foreground-subtle">
              {project.category}
            </p>
            <h1 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              {project.title}
            </h1>
            {project.comingSoon ? (
              <p
                className="mt-4 inline-flex rounded-full border border-border bg-background-elevated px-3 py-1.5 text-sm text-foreground-muted"
                role="status"
              >
                Case study placeholder · full details coming soon
              </p>
            ) : null}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted">
              {project.summary}
            </p>

            <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-foreground-subtle">
                  Role
                </dt>
                <dd className="mt-2 text-sm text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-foreground-subtle">
                  Project type
                </dt>
                <dd className="mt-2 text-sm text-foreground">
                  {project.category}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-foreground-subtle">
                  Website
                </dt>
                <dd className="mt-2 text-sm text-foreground">
                  {project.website ? (
                    <ExternalLink href={project.website}>
                      {project.website.replace(/^https?:\/\//, "")}
                    </ExternalLink>
                  ) : (
                    <span className="text-foreground-muted">Not listed</span>
                  )}
                </dd>
              </div>
            </dl>
          </Container>
        </header>

        <Container className="py-10 sm:py-12">
          {visuals.length > 0 ? (
            <ProjectVisuals
              images={visuals}
              projectTitle={project.title}
              projectCategory={project.category}
              priority
            />
          ) : null}
        </Container>

        <Container className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-2xl space-y-10">
            {sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2
                  id={section.id}
                  className="font-display text-2xl text-foreground"
                >
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground-muted sm:text-lg">
                  {section.body}
                </p>
              </section>
            ))}

            <section aria-labelledby="contributions">
              <h2
                id="contributions"
                className="font-display text-2xl text-foreground"
              >
                My contributions
              </h2>
              <ul className="mt-3 space-y-3">
                {project.caseStudy.contributions.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-accent/30 pl-4 text-base leading-relaxed text-foreground-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="focus">
              <h2
                id="focus"
                className="font-display text-2xl text-foreground"
              >
                Focus
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground-muted sm:text-lg">
                {project.focus}
              </p>
            </section>
          </div>

          <aside className="mt-14 max-w-xl rounded-2xl border border-border bg-surface px-6 py-8 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground-subtle">
              Next step
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">
              Need something in this direction?
            </h2>
            <p className="mt-3 text-base text-foreground-muted">
              Tell me what you are building. I will reply with a clear take on
              scope and fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`mailto:${siteConfig.email}?subject=Project inquiry`}
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Discuss a project
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
              >
                Contact details
              </Link>
            </div>
          </aside>

          <nav
            aria-label="Adjacent projects"
            className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="group rounded-xl border border-border bg-background-elevated p-4 transition-colors hover:border-border-strong"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-foreground-subtle">
                  <ArrowLeft className="size-3" aria-hidden="true" />
                  Previous
                </span>
                <span className="mt-2 block font-display text-lg text-foreground group-hover:text-accent">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group rounded-xl border border-border bg-background-elevated p-4 text-right transition-colors hover:border-border-strong sm:justify-self-end"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-foreground-subtle">
                  Next
                  <ArrowRight className="size-3" aria-hidden="true" />
                </span>
                <span className="mt-2 block font-display text-lg text-foreground group-hover:text-accent">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        </Container>
      </article>
    </>
  );
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<CaseStudyFallback />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}
