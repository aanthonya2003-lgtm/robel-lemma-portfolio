import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://robellemma.com"),
  title: {
    default: "Robel Lemma — Product Manager · Founder · Digital Strategist",
    template: "%s · Robel Lemma",
  },
  description:
    "PM, founder, and digital strategist in San Diego. UCSD Managerial Economics 2025. Founded Lemma Limited and PYR Studios. Built an audience of 10M+.",
  keywords: [
    "Robel Lemma",
    "Product Manager",
    "San Diego",
    "UC San Diego",
    "Lemma Limited",
    "PYR Studios",
    "Digital Strategist",
    "PM Portfolio",
  ],
  authors: [{ name: "Robel Lemma" }],
  creator: "Robel Lemma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robellemma.com",
    siteName: "Robel Lemma",
    title: "Robel Lemma — Product Manager · Founder · Digital Strategist",
    description:
      "PM, founder, and digital strategist in San Diego. Founded Lemma Limited and PYR Studios.",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/10e69f6e-93d5-4479-891a-3bd88075bd36/Untitled-169.jpg",
        width: 1200,
        height: 800,
        alt: "Robel Lemma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robel Lemma — Product Manager · Founder · Digital Strategist",
    description: "PM, founder, and digital strategist in San Diego.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/10e69f6e-93d5-4479-891a-3bd88075bd36/Untitled-169.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robel Lemma",
  jobTitle: "Product Manager",
  email: "mailto:robelblemma@gmail.com",
  telephone: "+1-858-342-0231",
  url: "https://robellemma.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of California, San Diego",
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "Lemma Limited",
      url: "https://lemmalimited.com",
    },
    {
      "@type": "Organization",
      name: "PYR Studios",
    },
  ],
  sameAs: ["https://lemmalimited.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <Nav />
        {children}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
