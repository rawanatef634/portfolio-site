import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function ExternalLink({
  href,
  children,
  className = "",
  showIcon = true,
}: ExternalLinkProps) {
  const isWebLink = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      {...(isWebLink
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`inline-flex items-center gap-1 transition-colors duration-200 hover:text-accent ${className}`}
    >
      {children}
      {showIcon && isWebLink ? (
        <ArrowUpRight
          className="size-3.5 shrink-0 opacity-70"
          aria-hidden="true"
        />
      ) : null}
      {isWebLink ? (
        <span className="sr-only">(opens in a new tab)</span>
      ) : null}
    </a>
  );
}
