import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE_HREF,
  BUSINESS_EMAIL,
  SITE_URL,
  OG_IMAGE,
} from "@/lib/constants";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const DEFAULT_TITLE =
  "Southern Straw | Pine Straw Delivery & Installation in Bluffton, SC";
const DEFAULT_DESCRIPTION =
  "Pine and wheat straw delivery and installation for homeowners and businesses in Bluffton, Hilton Head Island, and Savannah. Get a free quote today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Southern Straw",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "pine straw delivery",
    "pine straw installation",
    "wheat straw delivery",
    "straw mulch installation",
    "Bluffton SC landscaping",
    "Hilton Head Island landscaping",
    "Savannah GA landscaping",
    "Low Country landscaping",
  ],
  authors: [{ name: BUSINESS_NAME }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: BUSINESS_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: BUSINESS_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: BUSINESS_PHONE_HREF,
  email: BUSINESS_EMAIL,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  areaServed: [
    { "@type": "City", name: "Bluffton", addressRegion: "SC" },
    { "@type": "City", name: "Hilton Head Island", addressRegion: "SC" },
    { "@type": "City", name: "Savannah", addressRegion: "GA" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
