"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";

type AnimatedTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** Split by word (default) or line breaks */
  mode?: "words" | "lines";
  delay?: number;
};

/**
 * Staggered reveal for headlines. Reduced-motion users see static text via CSS.
 */
export function AnimatedText({
  text,
  as = "h1",
  className = "",
  mode = "words",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Tag = as as ElementType;
  const parts =
    mode === "lines"
      ? text.split("\n").filter(Boolean)
      : text.split(" ").filter(Boolean);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`anim-text ${visible ? "anim-text-visible" : ""} ${className}`}
      style={{ "--anim-delay": `${delay}ms` } as CSSProperties}
    >
      {parts.map((part, index) => (
        <span
          key={`${part}-${index}`}
          className="anim-text-unit"
          style={{ "--i": index } as CSSProperties}
        >
          {part}
          {mode === "words" && index < parts.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </Tag>
  );
}
