import type { Metadata } from "next";
import { Truck, HardHat, PackageCheck, Building2 } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | Southern Straw",
  description:
    "Straw delivery, installation, or full-service packages for homeowners and businesses across the Low Country.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Delivery, Installation, or Both — Done Right."
        subtitle="Whether you're the kind of homeowner who likes to get your hands in the dirt or you'd rather hand it off to the pros, we make it simple."
        primaryCta={{ label: "Get a Quote for Your Project", href: "/contact" }}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Truck}
              title="Delivery"
              description="We source and deliver bulk pine straw or wheat straw directly to your property, staged where it's easiest for you to spread it yourself."
            />
            <ServiceCard
              icon={HardHat}
              title="Installation"
              description="Our crew handles placement, edging, and cleanup from start to finish — you come home to a finished yard."
            />
            <ServiceCard
              icon={PackageCheck}
              title="Full Service"
              description="Delivery and installation together — our most popular option, and the simplest way to get it done in one visit."
            />
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-lawn-900">
              Pine Straw or Wheat Straw?
            </h2>
            <p className="mt-4 text-charcoal-700">
              Both are popular ground covers in the Low Country, and we&apos;re
              happy to help you choose based on your beds, budget, and look
              you&apos;re going for.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lawn-900">Pine Straw</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                Long-lasting and slow to fade, pine straw locks together to
                stay put on slopes and holds its rich color well into the
                season. A classic choice across Southern yards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lawn-900">Wheat Straw</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                A lighter, golden look that breaks down into the soil faster —
                a good fit for fresh beds, new plantings, or a seasonal
                refresh.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-lawn-900 p-10 text-sand-100 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sand-50/10 text-wheat-400">
              <Building2 className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-sand-50">
                Commercial &amp; Property Management
              </h2>
              <p className="mt-2 max-w-xl text-sand-200/90">
                We also partner with business parks, HOAs, and property
                managers across the Low Country who need reliable, large-scale
                straw service on a schedule they can count on. Subcontractor
                and direct partnerships both welcome.
              </p>
            </div>
          </div>
          <LinkButton href="/contact" variant="primary" className="flex-none">
            Talk to Us
          </LinkButton>
        </Container>
      </section>

      <CTASection
        heading="Get a Quote for Your Project"
        subheading="Tell us about your yard and we'll follow up with straightforward pricing."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  );
}
