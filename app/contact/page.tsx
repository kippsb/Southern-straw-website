import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import QuoteForm from "@/components/forms/QuoteForm";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  BUSINESS_EMAIL,
  RESPONSE_TIME_NOTE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Quote | Southern Straw",
  description: "Request a free straw delivery or installation quote across the Low Country.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-moss-700">
            Contact
          </p>
          <h1 className="font-display text-4xl font-semibold text-canopy-900 md:text-5xl">
            Let&apos;s Bring Your Yard to Life.
          </h1>
          <p className="mt-4 text-lg text-canopy-700">
            Tell us about your space and we&apos;ll get back to you with a
            straightforward quote — usually within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 flex-none text-straw-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-canopy-900">Call or text</p>
                <a
                  href={`tel:${BUSINESS_PHONE_HREF}`}
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
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-none text-straw-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-canopy-900">Response time</p>
                <p className="text-sm text-canopy-700">{RESPONSE_TIME_NOTE}</p>
              </div>
            </div>
          </div>

          <div className="rounded border border-canopy-900/10 bg-fog-50/60 p-8 md:p-10">
            <QuoteForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
