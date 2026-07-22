import { Truck, HardHat, PackageCheck } from "lucide-react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServiceCard from "@/components/sections/ServiceCard";
import ServiceAreaTeaser from "@/components/sections/ServiceAreaTeaser";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Bluffton · Hilton Head · Savannah"
        title="Your Yard Should Look Like You Care. Not Like You've Given Up."
        subtitle="Southern Straw delivers and installs premium pine straw and wheat straw across the Low Country — so you can stop staring at bare beds and start enjoying your yard again."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "See Our Work", href: "/gallery" }}
      />

      <TrustBar />

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
              Bare Beds Are the One Thing That Makes a Nice Home Look
              Neglected
            </h2>
            <p className="mt-4 text-lg text-canopy-700">
              You&apos;ve put real time and money into your home. But every
              time you pull into the driveway, those patchy, faded beds
              remind you there&apos;s still something left undone. You know
              what it needs — you just don&apos;t have the weekend to deal
              with it. That&apos;s exactly why Southern Straw exists.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
              Pick the Level of Help That Fits Your Life
            </h2>
            <p className="mt-4 text-lg text-canopy-700">
              Whether you want to spread it yourself or never lift a finger,
              we&apos;ve got you covered.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Truck}
              title="Delivery"
              description="You spread it, we drop it. We deliver bulk pine or wheat straw exactly where you need it. Perfect if you like doing the work yourself but hate making a dozen trips to the garden center."
              href="/services"
            />
            <ServiceCard
              icon={HardHat}
              title="Installation"
              description="We handle everything. Our crew spreads, edges, and cleans up. You come home to a finished yard. No sweat — literally."
              href="/services"
            />
            <ServiceCard
              icon={PackageCheck}
              title="Full Service"
              description="Delivery and installation, start to finish. Our most popular option for busy households who want it done right without carving out a Saturday."
              href="/services"
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
              Getting a Better Yard Is Simpler Than You Think
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Tell us about your yard",
                description:
                  "Fill out our quick form — takes two minutes. Let us know your address, square footage, and what you're looking for.",
              },
              {
                number: "2",
                title: "Get a free quote",
                description:
                  "We'll reach out with a straightforward price. No surprise add-ons. No pressure.",
              },
              {
                number: "3",
                title: "Come home to a finished yard",
                description:
                  "We show up when we say we will, do the work, and leave your yard looking exactly the way it should.",
              },
            ].map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-canopy-900 font-display font-semibold text-fog-50">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-canopy-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-canopy-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ServiceAreaTeaser />

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
                The Craft, In Progress
              </h2>
              <p className="mt-4 text-lg text-canopy-700">
                We&apos;re building our photo gallery as we complete new projects.
              </p>
            </div>
            <LinkButton href="/gallery" variant="outline">
              View Gallery
            </LinkButton>
          </div>
          <div className="mt-10">
            <GalleryGrid items={[
              { label: "Fresh Pine Straw Install", tone: "straw" },
              { label: "Bed Edging & Cleanup", tone: "canopy" },
              { label: "Wheat Straw Delivery", tone: "bark" },
            ]} />
          </div>
        </Container>
      </section>

      <CTASection
        heading="Your Yard Is One Step Away From Looking Like It Should"
        subheading="Get a free, no-pressure quote in minutes."
        ctaLabel="Get a Free Quote"
        ctaHref="/contact"
      />
    </>
  );
}
