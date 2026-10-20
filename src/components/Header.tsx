"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/projects", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col items-center p-3 sm:p-4">
      <div
        className={`pointer-events-auto flex w-full max-w-fit items-center gap-0.5 rounded-full border px-1.5 py-1 transition-all duration-300 sm:gap-1 sm:px-2 sm:py-1.5 ${
          scrolled
            ? "border-border/80 bg-surface/90 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "border-border/50 bg-surface/70 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-55"
          onClick={() => setMenuOpen(false)}
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

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-full text-foreground sm:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="size-4" aria-hidden="true" />
          ) : (
            <Menu className="size-4" aria-hidden="true" />
          )}
        </button>

        <a
          href={`mailto:${siteConfig.email}?subject=Project inquiry`}
          className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-ink-fg transition-transform duration-300 hover:-translate-y-px"
        >
          Discuss
          <ArrowUpRight className="size-3.5 opacity-70" aria-hidden="true" />
        </a>
      </div>

      {menuOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="pointer-events-auto mt-2 w-[min(100%,20rem)] rounded-2xl border border-border/80 bg-surface/95 p-2 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground-muted transition-colors hover:bg-background hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
