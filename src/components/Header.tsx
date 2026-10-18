"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/#packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center p-3 sm:p-4">
      <div
        className={`pointer-events-auto flex items-center gap-0.5 rounded-full border px-1.5 py-1 transition-all duration-300 sm:gap-1 sm:px-2 sm:py-1.5 ${
          scrolled
            ? "border-border/80 bg-surface/90 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "border-border/50 bg-surface/70 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-55"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`mailto:${siteConfig.email}?subject=Project inquiry`}
          className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-ink-fg transition-transform duration-300 hover:-translate-y-px"
        >
          Hire me
          <ArrowUpRight className="size-3.5 opacity-70" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
