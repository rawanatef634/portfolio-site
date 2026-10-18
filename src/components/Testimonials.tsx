import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <ul className="grid gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
      {testimonials.map((item, index) => (
        <Reveal key={item.name} as="li" delay={index * 70}>
          <figure className="flex h-full flex-col border-t border-border/70 pt-8">
            <blockquote className="flex-1">
              <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl sm:leading-relaxed">
                “{item.quote}”
              </p>
            </blockquote>
            <figcaption className="mt-8">
              <p className="text-[15px] font-medium text-foreground">
                {item.name}
              </p>
              <p className="mt-1 text-[14px] text-foreground-muted">
                {item.role},{" "}
                {item.projectSlug ? (
                  <Link
                    href={`/projects/${item.projectSlug}`}
                    className="underline-grow text-foreground-muted hover:text-foreground"
                  >
                    {item.company}
                  </Link>
                ) : (
                  item.company
                )}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
