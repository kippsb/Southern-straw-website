import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Area | Southern Straw",
  description:
    "Southern Straw serves Bluffton, Hilton Head Island, Savannah, and the surrounding Low Country of South Carolina.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <Hero
        eyebrow="Service Area"
        title="Proudly Serving the Low Country."
        subtitle="From the Bluffton backroads to the Hilton Head shoreline and into Savannah, we know this land — and we treat every yard like our own."
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

      <CTASection
        heading="Not Sure If You're in Range?"
        subheading="Send us your address and we'll confirm coverage — usually within one business day."
        ctaLabel="Ask Us"
        ctaHref="/contact"
      />
    </>
  );
}
