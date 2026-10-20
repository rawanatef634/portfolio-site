import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import type { ProjectImage } from "@/data/projects";

type ProjectMediaProps = {
  image: ProjectImage;
  title: string;
  category: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

function imageExists(src: string): boolean {
  const relative = src.startsWith("/") ? src.slice(1) : src;
  return existsSync(path.join(process.cwd(), "public", relative));
}

export function ProjectMedia({
  image,
  title,
  category,
  priority = false,
  className = "",
  sizes = "(min-width: 1152px) 1152px, 100vw",
}: ProjectMediaProps) {
  const hasImage = imageExists(image.src);
  const frameClass = `relative w-full overflow-hidden rounded-[1.25rem] border border-border/70 bg-surface shadow-[var(--shadow-soft)] ${className}`;

  if (!hasImage) {
    return (
      <div
        className={`${frameClass} flex min-h-[200px] flex-col justify-between bg-background-elevated p-6 sm:aspect-[21/9]`}
        role="img"
        aria-label={`${title} · ${category}`}
      >
        <p className="text-[11px] uppercase tracking-[0.14em] text-foreground-subtle">
          {category}
        </p>
        <p className="font-display text-2xl">{title}</p>
      </div>
    );
  }

  return (
    <figure className={frameClass}>
      <Image
        src={image.src}
        alt={image.alt}
        width={1920}
        height={870}
        quality={85}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full"
      />
    </figure>
  );
}
