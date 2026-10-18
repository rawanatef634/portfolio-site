import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-ink-fg hover:bg-accent-hover border border-transparent shadow-[0_8px_24px_-12px_rgba(10,10,10,0.5)] hover:-translate-y-px",
  secondary:
    "bg-surface/70 text-foreground border border-border/80 hover:border-foreground/20 backdrop-blur-sm hover:-translate-y-px",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:opacity-60 px-0",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ease-out ${variants[variant]} ${className}`;

  if (external) {
    const isWebLink = href.startsWith("http://") || href.startsWith("https://");

    return (
      <a
        href={href}
        className={classes}
        {...(isWebLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
