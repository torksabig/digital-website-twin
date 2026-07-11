import type { Metadata } from "next";
import { PT_Serif, Source_Sans_3 } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Qorina | Safer Automation for Physical Systems",
    template: "%s | Aether Applied",
  },
  description:
    "Qorina helps physical systems decide when to act, wait, or call a human. Safer automation for buildings, grids, and fleets. Helsinki-based deep tech.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${ptSerif.variable}`}>
      <body className="bg-black font-sans text-white antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
