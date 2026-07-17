"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Wheat } from "lucide-react";
import { NAV_LINKS, BUSINESS_NAME, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_HREF } from "@/lib/constants";
import { LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lawn-900/10 bg-sand-100/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold text-lawn-900"
          onClick={() => setOpen(false)}
        >
          <Wheat className="h-6 w-6 text-wheat-600" aria-hidden />
          {BUSINESS_NAME}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-lawn-900 ${
                  isActive ? "text-lawn-900" : "text-charcoal-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a
            href={`tel:${BUSINESS_PHONE_HREF}`}
            className="hidden whitespace-nowrap text-sm font-medium text-charcoal-700 hover:text-lawn-900 xl:inline"
          >
            {BUSINESS_PHONE_DISPLAY}
          </a>
          <LinkButton href="/contact" variant="primary" className="whitespace-nowrap">
            Get a Free Quote
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-lawn-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-lawn-900/10 bg-sand-100 lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-charcoal-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_PHONE_HREF}`}
              className="text-base font-medium text-charcoal-800"
            >
              {BUSINESS_PHONE_DISPLAY}
            </a>
            <LinkButton href="/contact" variant="primary" className="w-full">
              Get a Free Quote
            </LinkButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
