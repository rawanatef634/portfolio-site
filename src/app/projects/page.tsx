import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { siteConfig } from "@/config/site";
import { getVisibleProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected software projects by ${siteConfig.name} · SaaS products, client platforms, and commercial websites.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects · ${siteConfig.name}`,
    description: `Selected software projects by ${siteConfig.name} · SaaS products, client platforms, and commercial websites.`,
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  const projects = getVisibleProjects();

  return (
    <>
      <section className="pt-32 sm:pt-40">
        <Container width="wide" className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
              Work
            </p>
            <h1 className="mt-5 font-display text-4xl text-balance sm:text-5xl md:text-6xl">
              Work for real products and businesses
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-foreground-muted">
              Founder-built SaaS and client projects that are live, with case
              studies focused on the problem and what was actually built.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-28 sm:pb-36" aria-label="Project list">
        <Container width="wide">
          <ProjectShowcase projects={projects} />
        </Container>
      </section>
    </>
  );
}
