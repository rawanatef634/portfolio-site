"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > Math.min(window.innerHeight * 0.65, 560));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-4 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div
        className={`flex items-center gap-3 rounded-full border border-border/80 bg-surface/90 py-1.5 pl-4 pr-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <p className="hidden text-[13px] text-foreground-muted sm:block">
          Available for projects
        </p>
        <a
          href={`mailto:${siteConfig.email}?subject=Project inquiry`}
          tabIndex={visible ? 0 : -1}
          className="btn-primary inline-flex items-center gap-1 rounded-full bg-accent px-3.5 py-1.5 text-[13px] font-medium text-white transition-all hover:bg-accent-hover hover:-translate-y-px"
        >
          Discuss a project
          <ArrowUpRight className="size-3.5 opacity-80" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
