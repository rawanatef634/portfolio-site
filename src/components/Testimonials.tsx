import Link from "next/link";
import { testimonials } from "@/data/testimonials";

function attributionText(item: (typeof testimonials)[number]) {
  if (item.role) {
    return `${item.role}, ${item.company}`;
  }
  return item.company;
}

function TestimonialCard({
  item,
  className = "",
}: {
  item: (typeof testimonials)[number];
  className?: string;
}) {
  return (
    <figure
      className={`flex w-[min(85vw,26rem)] shrink-0 flex-col border-t border-border/70 pt-7 sm:w-[28rem] sm:pt-8 ${className}`}
    >
      <blockquote className="flex-1">
        <p className="font-display text-xl leading-relaxed text-foreground sm:text-[1.35rem] sm:leading-relaxed">
          “{item.quote}”
        </p>
      </blockquote>
      <figcaption className="mt-7 sm:mt-8">
        <p className="text-[15px] font-medium text-foreground">{item.name}</p>
        <p className="mt-1 text-[14px] text-foreground-muted">
          {attributionText(item)}
        </p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <div>
      <ul className="sr-only">
        {testimonials.map((item) => (
          <li key={item.id}>
            <blockquote>
              <p>{item.quote}</p>
            </blockquote>
            <p>
              {item.name}
              {item.role ? `, ${item.role}` : null}
              {", "}
              {item.projectSlug ? (
                <Link href={`/projects/${item.projectSlug}`}>{item.company}</Link>
              ) : (
                item.company
              )}
            </p>
          </li>
        ))}
      </ul>

      <div className="testimonials-marquee group/marquee" aria-hidden="true">
        <div className="testimonials-marquee-track">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
          {testimonials.map((item) => (
            <TestimonialCard
              key={`${item.id}-clone`}
              item={item}
              className="testimonials-marquee-clone"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
