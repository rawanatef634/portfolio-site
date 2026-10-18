import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

/** Infinite horizontal marquee. Pauses on hover. Honors reduced-motion via CSS. */
export function Marquee({ children, className = "" }: MarqueeProps) {
  return (
    <div className={`marquee group/marquee ${className}`} aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
