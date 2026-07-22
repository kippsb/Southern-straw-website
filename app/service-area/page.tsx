import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { SERVICE_AREAS, OG_IMAGE } from "@/lib/constants";
import { LANDING_PAGES } from "@/lib/landing-pages";

const TITLE = "Service Area: Bluffton, Hilton Head Island & Savannah";
const DESCRIPTION =
  "Southern Straw delivers and installs pine straw across Bluffton, Hilton Head Island, Savannah, and the surrounding Low Country of South Carolina.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/service-area",
  },
  openGraph: {
    url: "/service-area",
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

export default function ServiceAreaPage() {
  return (
    <>
      <Hero
        eyebrow="Service Area"
        title="Proudly Serving the Low Country."
        subtitle="From the Bluffton backroads to the Hilton Head shoreline and into Savannah, we know this land and treat every yard like our own."
        primaryCta={{ label: "Ask If We Cover You", href: "/contact" }}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className="rounded border border-canopy-900/10 bg-fog-50 p-8"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-straw-100 text-straw-700">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-canopy-900">
                  {area.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-canopy-700">
                  {area.blurb}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-fog-50 py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
              Straw Services by Area
            </h2>
            <p className="mt-4 text-lg text-canopy-700">
              A closer look at what we offer in each part of the Low Country.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {LANDING_PAGES.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="group flex items-center justify-between gap-3 rounded border border-canopy-900/10 bg-loam-100 p-5 text-canopy-900 transition-colors hover:bg-loam-200"
                >
                  <span className="font-medium">{page.heroTitle}</span>
                  <ArrowRight
                    className="h-4 w-4 flex-none transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        heading="Not Sure If You're in Range?"
        subheading="Send us your address and we'll confirm coverage, usually within one business day."
        ctaLabel="Ask Us"
        ctaHref="/contact"
      />
    </>
  );
}
