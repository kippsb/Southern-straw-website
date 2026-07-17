import Link from "next/link";
import { Wheat, Phone, Mail } from "lucide-react";
import {
  NAV_LINKS,
  BUSINESS_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
  BUSINESS_EMAIL,
  SERVICE_AREAS,
} from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-lawn-900/10 bg-lawn-900 text-sand-100">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-sand-50">
            <Wheat className="h-5 w-5 text-wheat-400" aria-hidden />
            {BUSINESS_NAME}
          </div>
          <p className="mt-3 max-w-xs text-sm text-sand-200/80">
            Straw delivery and installation for homeowners and businesses
            across the Low Country of South Carolina.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-wheat-400">
            Explore
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-sand-200/90 hover:text-sand-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-wheat-400">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-200/90">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-wheat-400" aria-hidden />
              <a href={`tel:${BUSINESS_PHONE_HREF}`} className="hover:text-sand-50">
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-wheat-400" aria-hidden />
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-sand-50">
                {BUSINESS_EMAIL}
              </a>
            </li>
            <li className="pt-2 text-sand-200/70">
              Serving {SERVICE_AREAS.map((a) => a.name).join(" · ")}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-sand-50/10 py-6">
        <Container>
          <p className="text-xs text-sand-200/60">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
