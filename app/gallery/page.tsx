import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gallery | Southern Straw",
  description: "A look at Southern Straw's delivery and installation work across the Low Country.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="The Craft, In Progress."
        subtitle="We're building our photo gallery as we complete new projects — check back soon, or better yet, be one of our first features."
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
      />

      <section className="py-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>

      <CTASection
        heading="Want to See Your Yard Featured Here?"
        subheading="Get a quote and let's start your project."
        ctaLabel="Get a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
