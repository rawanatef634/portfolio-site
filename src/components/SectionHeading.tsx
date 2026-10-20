type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-subtle">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="font-display text-3xl text-foreground text-balance sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
