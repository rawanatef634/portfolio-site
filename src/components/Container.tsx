import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "main" | "nav";
  id?: string;
  width?: "default" | "narrow" | "wide" | "full";
};

const widths = {
  default: "max-w-6xl",
  narrow: "max-w-xl",
  wide: "max-w-7xl",
  full: "max-w-none",
} as const;

export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
  width = "default",
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full ${widths[width]} px-6 sm:px-10 lg:px-12 ${className}`}
    >
      {children}
    </Tag>
  );
}
