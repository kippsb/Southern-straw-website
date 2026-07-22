import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import { LANDING_PAGES, getLandingPage } from "@/lib/landing-pages";
import { OG_IMAGE } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      url: `/${page.slug}`,
      title: `${page.title} | Southern Straw`,
      description: page.description,
      images: [{ ...OG_IMAGE, url: page.imageUrl, alt: page.imageAlt }],
    },
    twitter: {
      title: `${page.title} | Southern Straw`,
      description: page.description,
      images: [page.imageUrl],
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero
        eyebrow={page.eyebrow}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "See Our Work", href: "/gallery" }}
        image={{ src: page.imageUrl, alt: page.imageAlt }}
      />

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-lg text-canopy-700">{page.intro}</p>
          </div>
        </Container>
      </section>

      <section className="bg-fog-50 py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
              {page.localNoteHeading}
            </h2>
            <p className="mt-4 text-lg text-canopy-700">{page.localNote}</p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-canopy-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-canopy-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Ready to Get Started?"
        subheading="Tell us about your yard and we'll follow up with a straightforward quote."
        ctaLabel="Get a Free Quote"
        ctaHref="/contact"
      />
    </>
  );
}
