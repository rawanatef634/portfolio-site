import Link from "next/link";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="flex flex-col gap-8 py-14 sm:flex-row sm:items-center sm:justify-between sm:py-16">
        <div>
          <p className="font-display text-xl text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-foreground-muted">
            {siteConfig.title}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
            <li>
              <Link href="/projects" className="hover:text-foreground">
                Work
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#packages" className="hover:text-foreground">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <ExternalLink
                href={`mailto:${siteConfig.email}`}
                className="text-foreground-muted"
                showIcon={false}
              >
                Email
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={siteConfig.whatsAppUrl}
                className="text-foreground-muted"
                showIcon={false}
              >
                WhatsApp
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={siteConfig.linkedIn}
                className="text-foreground-muted"
              >
                LinkedIn
              </ExternalLink>
            </li>
          </ul>
        </nav>
      </Container>

      <Container className="border-t border-border/50 py-6">
        <p className="text-[12px] text-foreground-subtle">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
