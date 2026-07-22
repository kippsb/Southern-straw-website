import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { OG_IMAGE } from "@/lib/constants";

const TITLE = "Pine Straw Installation Gallery";
const DESCRIPTION =
  "See the clean beds, edges, and walkways Southern Straw aims for on every pine straw installation across the Low Country of South Carolina.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    url: "/gallery",
    title: `${TITLE} | Southern Straw`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    title: `${TITLE} | Southern Straw`,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="The Craft, In Progress."
        subtitle="A closer look at the kind of clean beds, edges, and walkways we aim for on every job, from foundation plantings to full-yard installs."
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
