import { existsSync } from "node:fs";
import path from "node:path";
import { projects, type Project, type ProjectImage } from "@/data/projects";

export function getVisibleProjects(): Project[] {
  return projects.filter((project) => project.visible);
}

export function imageFileExists(src: string): boolean {
  const relative = src.startsWith("/") ? src.slice(1) : src;
  return existsSync(path.join(process.cwd(), "public", relative));
}

/** Gallery entries that have real files on disk (skips missing placeholders). */
export function getExistingGallery(project: Project): ProjectImage[] {
  return project.gallery.filter((image) => imageFileExists(image.src));
}

/**
 * Cover + gallery images that exist on disk, de-duplicated.
 * Keeps an even count (6 or 4, else 2) so case-study grids stay balanced.
 */
export function getProjectVisuals(project: Project): ProjectImage[] {
  const cover = imageFileExists(project.coverImage.src)
    ? [project.coverImage]
    : [];
  const rest = project.gallery.filter(
    (image) =>
      imageFileExists(image.src) && image.src !== project.coverImage.src,
  );
  const all = [...cover, ...rest];
  const target = all.length >= 6 ? 6 : all.length >= 4 ? 4 : all.length >= 2 ? 2 : all.length;
  return all.slice(0, target);
}

export function getFeaturedProjects(): Project[] {
  return getVisibleProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getVisibleProjects().find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getVisibleProjects().map((project) => project.slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const visible = getVisibleProjects();
  const index = visible.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? visible[index - 1] : null,
    next: index < visible.length - 1 ? visible[index + 1] : null,
  };
}
