import type { Metadata } from "next";
import { Cormorant_Garamond, Urbanist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://gauranitaitech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gaura Nitai Technologies | Engineering Excellence",
    template: "%s | Gaura Nitai Technologies",
  },
  description:
    "Product engineering, electronics manufacturing, IoT, AI vision and cloud applications, delivered with precision from Bengaluru to the world.",
  applicationName: "Gaura Nitai Technologies",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Gaura Nitai Technologies",
    title: "Gaura Nitai Technologies | Engineering Excellence",
    description:
      "Engineering excellence for tomorrow’s technology. Product engineering, electronics manufacturing, IoT and cloud solutions.",
    images: [{ url: "/gaura_logo.webp", width: 640, height: 320, alt: "Gaura Nitai Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaura Nitai Technologies | Engineering Excellence",
    description: "Engineering excellence for tomorrow’s technology.",
    images: ["/gaura_logo.webp"],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gaura Nitai Technologies Private Limited",
  url: siteUrl,
  image: `${siteUrl}/gaura_logo.webp`,
  email: "info@gauranitaitech.com",
  telephone: "+91 755 023 8142",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, INFINIX STRUCTURES, 41, Adugodi Main Rd, Koramangala 8th Block, Adugodi",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560095",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9410701, longitude: 77.6191046 },
  hasMap: "https://maps.google.com/?q=12.9410701,77.6191046",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${urbanist.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
