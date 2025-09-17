import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suite Quaroni - Luxury B&B in Palermo, Sicily",
    template: "%s | Suite Quaroni"
  },
  description: "Experience the charm of Palermo in our elegant B&B. Luxury accommodations in the heart of Sicily with personalized service and authentic Sicilian hospitality.",
  keywords: ["Palermo B&B", "Sicily accommodation", "luxury hotel Palermo", "Sicilian hospitality", "Suite Quaroni"],
  authors: [{ name: "Suite Quaroni" }],
  creator: "Suite Quaroni",
  publisher: "Suite Quaroni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suitequaroni.com",
    siteName: "Suite Quaroni",
    title: "Suite Quaroni - Luxury B&B in Palermo, Sicily",
    description: "Experience the charm of Palermo in our elegant B&B. Luxury accommodations in the heart of Sicily with personalized service and authentic Sicilian hospitality.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suite Quaroni - Luxury B&B in Palermo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suite Quaroni - Luxury B&B in Palermo, Sicily",
    description: "Experience the charm of Palermo in our elegant B&B. Luxury accommodations in the heart of Sicily with personalized service and authentic Sicilian hospitality.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <link rel="canonical" href="https://suitequaroni.com" />
        <meta name="theme-color" content="#19a1e6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased font-plus-jakarta-sans bg-slate-50 text-text-primary`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
