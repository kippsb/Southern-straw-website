import type { Metadata } from "next";
import { Hammer, Clock, MapPinned, HandCoins } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "About | Southern Straw",
  description: "Southern Straw's story, crew, and values — Low Country straw delivery and installation done right.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="Rooted in the Low Country."
        subtitle="Southern Straw was built on a simple idea: yard work should look effortless, even when it isn't."
        primaryCta={{ label: "Work With Us", href: "/contact" }}
      />

      <section className="py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="flex aspect-square items-center justify-center rounded border-2 border-dashed border-canopy-900/15 bg-gradient-to-br from-straw-100 via-loam-100 to-canopy-100">
            <Logo className="h-24 w-24 text-canopy-900" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-canopy-900">
              Our Story
            </h2>
            <p className="mt-4 text-canopy-700">
              Southern Straw started the way a lot of good Low Country
              businesses do — with a truck, a reputation for showing up, and
              neighbors asking for help getting their yards ready for the
              season. We&apos;ve spent years delivering and installing straw as a
              trusted subcontractor for landscapers across Bluffton, Hilton
              Head, and Savannah, and we&apos;re proud to now offer that same
              craftsmanship directly to homeowners.
            </p>
            <p className="mt-4 text-canopy-700">
              We still run it like a local crew should: small enough to care
              about every yard we touch, experienced enough to get it right
              the first time.
            </p>
          </div>
        </Container>
      </section>

      <ValueProps
        heading="What We Value"
        items={[
          {
            icon: Hammer,
            title: "Craftsmanship",
            description: "Clean edges, even coverage, and a finish we'd be proud to put our name on.",
          },
          {
            icon: Clock,
            title: "Reliability",
            description: "We show up on schedule, because your weekend plans shouldn't wait on us.",
          },
          {
            icon: MapPinned,
            title: "Local expertise",
            description: "Years of hands-on experience with Low Country soil, sun, and seasons.",
          },
          {
            icon: HandCoins,
            title: "Honest pricing",
            description: "A clear quote up front, and no surprises when the job's done.",
          },
        ]}
      />

      <CTASection
        heading="Work With Us"
        subheading="Whether you're a homeowner or a property manager, we'd love to hear about your project."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
