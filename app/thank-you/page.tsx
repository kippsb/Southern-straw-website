import type { Metadata } from "next";
import { Phone, MessageCircle, Mail } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Container from "@/components/ui/Container";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  BUSINESS_SMS_HREF,
  BUSINESS_EMAIL,
  RESPONSE_TIME_NOTE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your quote request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Hero
        eyebrow="Thank You"
        title="Thanks, We've Got Your Request."
        subtitle={RESPONSE_TIME_NOTE}
        primaryCta={{ label: "Browse the Gallery", href: "/gallery" }}
        secondaryCta={{ label: "Back to Home", href: "/" }}
      />

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-canopy-900">
              Need Us Sooner?
            </h2>
            <p className="mt-3 text-canopy-700">
              Call, text, or email us directly and we&apos;ll get you sorted.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 flex-none text-straw-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-canopy-900">Call</p>
                <a
                  href={`tel:${BUSINESS_PHONE_HREF}`}
                  className="text-sm text-canopy-700 hover:text-canopy-900"
                >
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 flex-none text-straw-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-canopy-900">Text</p>
                <a
                  href={BUSINESS_SMS_HREF}
                  className="text-sm text-canopy-700 hover:text-canopy-900"
                >
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 flex-none text-straw-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-canopy-900">Email</p>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-sm text-canopy-700 hover:text-canopy-900"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
