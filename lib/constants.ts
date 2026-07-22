export const BUSINESS_NAME = "Southern Straw";

// Drives metadataBase, canonical URLs, the sitemap, robots.txt, and JSON-LD.
export const SITE_URL = "https://www.strawsouthern.com";

export const OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "A front walkway lined with fresh pine straw beds leading to a covered porch",
};

export const BUSINESS_PHONE_DISPLAY = "(843) 535-7227";
export const BUSINESS_PHONE_HREF = "+18435357227";
export const BUSINESS_SMS_HREF = "sms:+18435357227";
export const BUSINESS_EMAIL = "strawsouthern@gmail.com";

export const RESPONSE_TIME_NOTE = "We typically reply within one business day.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceArea = {
  name: string;
  blurb: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Bluffton",
    blurb:
      "Our home base. From May River to Old Town, we know Bluffton's yards, soil, and shade patterns block by block.",
  },
  {
    name: "Hilton Head Island",
    blurb:
      "Regular routes across the island for homeowners, HOAs, and rental properties who want their curb appeal guest-ready year-round.",
  },
  {
    name: "Savannah & the Extended Low Country",
    blurb:
      "We extend into Savannah and the surrounding Low Country for select projects. Reach out and we'll confirm coverage for your address.",
  },
];
