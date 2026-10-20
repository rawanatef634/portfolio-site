import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { packageFaqs, servicePackages } from "@/data/packages";

function orderMailto(packageName: string) {
  const subject = encodeURIComponent(`Package inquiry · ${packageName}`);
  const body = encodeURIComponent(
    `Hi Rawan,\n\nI'm interested in the ${packageName} package.\n\nBrief:\n- What I'm building:\n- Timeline:\n- Links / references:\n\nThanks.`,
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ServicePackages() {
  return (
    <div>
      <ul className="grid gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6">
        {servicePackages.map((pkg, index) => (
          <Reveal
            key={pkg.id}
            as="li"
            delay={index * 60}
            className={`flex flex-col rounded-3xl border p-7 sm:p-8 ${
              pkg.featured
                ? "border-foreground/20 bg-surface shadow-(--shadow-soft)"
                : "border-border/70 bg-surface/60"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-[12px] tracking-[0.14em] text-foreground-subtle">
                {String(index + 1).padStart(2, "0")}
              </p>
              {pkg.featured ? (
                <span className="rounded-full bg-ink px-2.5 py-1 text-[11px] font-medium tracking-wide text-ink-fg">
                  Often a good fit
                </span>
              ) : null}
            </div>

            <h3 className="mt-5 font-display text-2xl sm:text-[1.75rem]">
              {pkg.name}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground-muted">
              {pkg.tagline}
            </p>

            <div className="mt-8 border-t border-border/60 pt-6">
              <p className="font-display text-3xl tracking-tight text-foreground">
                {pkg.price}
              </p>
              <p className="mt-1.5 text-[13px] text-foreground-subtle">
                {pkg.priceNote} · {pkg.timeline}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-foreground-muted">
                Best for {pkg.bestFor}
              </p>
            </div>

            <ul className="mt-7 flex flex-1 flex-col gap-2.5">
              {pkg.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[14px] leading-snug text-foreground-muted"
                >
                  <Check
                    className="mt-0.5 size-3.5 shrink-0 text-foreground"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[12px] leading-relaxed text-foreground-subtle">
              Not included: {pkg.excludes.join(" · ")}
            </p>

            <div className="mt-8">
              <ButtonLink
                href={orderMailto(pkg.name)}
                variant={pkg.featured ? "primary" : "secondary"}
                className="w-full"
              >
                Inquire about {pkg.name}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-16 grid gap-8 border-t border-border/60 pt-12 sm:mt-20 sm:grid-cols-2 sm:gap-10 sm:pt-14 lg:grid-cols-3">
        {packageFaqs.map((faq, index) => (
          <Reveal key={faq.question} as="div" delay={index * 40}>
            <h4 className="text-[15px] font-medium text-foreground">
              {faq.question}
            </h4>
            <p className="mt-3 text-[14px] leading-relaxed text-foreground-muted">
              {faq.answer}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
