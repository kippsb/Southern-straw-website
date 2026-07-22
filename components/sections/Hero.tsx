import HeroPattern from "@/components/sections/HeroPattern";
import { LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type Cta = { label: string; href: string };

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className="relative overflow-hidden">
      <HeroPattern />
      <Container className="relative py-24 md:py-32">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-moss-700">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl font-semibold leading-tight text-canopy-900 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-canopy-800 md:text-xl">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <LinkButton href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </LinkButton>
            {secondaryCta ? (
              <LinkButton href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </LinkButton>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
