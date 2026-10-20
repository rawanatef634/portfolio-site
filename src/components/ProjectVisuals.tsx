"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

type ProjectVisualsProps = {
  images: ProjectImage[];
  projectTitle: string;
  projectCategory: string;
  priority?: boolean;
};

export function ProjectVisuals({
  images,
  projectTitle,
  projectCategory,
  priority = false,
}: ProjectVisualsProps) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;
  const current = active !== null ? images[active] : null;
  const [cover, ...rest] = images;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? i : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  if (!cover) return null;

  const paired = rest.reduce<ProjectImage[][]>((rows, image, index) => {
    if (index % 2 === 0) rows.push([image]);
    else rows[rows.length - 1]?.push(image);
    return rows;
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setActive(0)}
        className="group/media relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-border/70 bg-surface text-left shadow-(--shadow-soft) focus-visible:outline-offset-4"
        aria-label={`View larger: ${cover.alt}`}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          width={1920}
          height={870}
          quality={85}
          priority={priority}
          sizes="(min-width: 1280px) 1120px, 100vw"
          className="h-auto w-full transition-transform duration-700 ease-out group-hover/media:scale-[1.01]"
        />
        <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1.5 text-xs font-medium text-background backdrop-blur-sm">
          <Expand className="size-3.5" aria-hidden />
          Enlarge
        </span>
      </button>

      {paired.length > 0 ? (
        <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8">
          {paired.map((row) => {
            const fullWidth = row.length === 1;
            return (
              <div
                key={row.map((image) => image.src).join("-")}
                className={
                  fullWidth ? "grid grid-cols-1" : "grid gap-6 sm:gap-8 lg:grid-cols-2"
                }
              >
                {row.map((image) => {
                  const absoluteIndex = images.indexOf(image);
                  return (
                    <figure key={image.src + image.alt}>
                      <button
                        type="button"
                        onClick={() => setActive(absoluteIndex)}
                        className="group/thumb relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-border/70 bg-surface text-left shadow-(--shadow-soft) focus-visible:outline-offset-4"
                        aria-label={`View larger: ${image.alt}`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1920}
                          height={870}
                          quality={75}
                          sizes={
                            fullWidth
                              ? "(min-width: 1280px) 1120px, 100vw"
                              : "(min-width: 1024px) 560px, 100vw"
                          }
                          className="h-auto w-full transition-transform duration-700 ease-out group-hover/thumb:scale-[1.015]"
                        />
                      </button>
                      {image.caption ? (
                        <figcaption className="mt-3 text-sm text-foreground-subtle">
                          {image.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}

      {isOpen && current ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-background/15 p-2 text-background transition-colors hover:bg-background/25 sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/15 p-2.5 text-background transition-colors hover:bg-background/25 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/15 p-2.5 text-background transition-colors hover:bg-background/25 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          ) : null}

          <div
            className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] overflow-auto">
              <Image
                src={current.src}
                alt={current.alt}
                width={1920}
                height={870}
                quality={85}
                sizes="90vw"
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="border-t border-border bg-background-elevated px-5 py-3">
              <p className="text-sm font-medium text-foreground">
                {current.caption ?? current.alt}
              </p>
              <p className="mt-0.5 text-xs text-foreground-subtle">
                {projectTitle} · {projectCategory}
                {images.length > 1
                  ? ` · ${(active ?? 0) + 1} / ${images.length}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
