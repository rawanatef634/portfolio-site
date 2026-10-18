import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start pt-32 pb-24 sm:pt-40 sm:pb-32">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground-subtle">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-foreground-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </Container>
  );
}
