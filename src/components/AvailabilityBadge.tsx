import { siteConfig } from "@/config/site";

export function AvailabilityBadge() {
  if (!siteConfig.availability.show) {
    return null;
  }

  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/70 px-3 py-1.5 text-[12px] text-foreground-muted backdrop-blur-sm">
      <span
        className="relative flex size-1.5"
        aria-hidden="true"
      >
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/30 opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
      </span>
      <span>{siteConfig.availability.message}</span>
    </p>
  );
}
