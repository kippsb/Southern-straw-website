import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function CTASection({
  heading,
  subheading,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-wheat-100 px-8 py-14 text-center md:px-16">
          <h2 className="font-display text-3xl font-semibold text-lawn-900 md:text-4xl">
            {heading}
          </h2>
          {subheading ? (
            <p className="mx-auto mt-4 max-w-xl text-lg text-charcoal-800">
              {subheading}
            </p>
          ) : null}
          <div className="mt-8 flex justify-center">
            <LinkButton href={ctaHref} variant="secondary">
              {ctaLabel}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
