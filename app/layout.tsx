import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const metadataBase = process.env.NEXT_PUBLIC_URL
	? new URL(process.env.NEXT_PUBLIC_URL)
	: process.env.VERCEL_URL
		? new URL(`https://${process.env.VERCEL_URL}`)
		: new URL(`http://localhost:${process.env.PORT || 3000}`);

// Social platforms can cache OG/Twitter images aggressively. Changing this version
// changes the URL (cache-bust) without affecting the actual route.
const ogVersion = encodeURIComponent(
	process.env.VERCEL_GIT_COMMIT_SHA ||
		process.env.VERCEL_DEPLOYMENT_ID ||
		"dev"
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "RideshareGuides | The Reservation Tool for Professional Drivers",
    template: "%s | RideshareGuides",
  },
  description: "Stop paying 30% commission. The professional reservation system for TLC and private drivers. Accept direct bookings, set your own rates, and keep 100% of every fare.",
  applicationName: "RideshareGuides",
  authors: [{ name: "RideshareGuides Team", url: "https://rideshareguides.com" }],
  generator: "Next.js",
  keywords: [
    "TLC driver app",
    "NYC rideshare",
    "direct booking tool",
    "private driver software",
    "limo dispatch system",
    "chauffeur booking system",
    "keep 100% fares",
    "driver business tools",
    "uber alternative for drivers",
    "lyft alternative",
    "black car reservation system",
    "transportation business software"
  ],
  referrer: "origin-when-cross-origin",
  creator: "RideshareGuides",
  publisher: "RideshareGuides",
  category: "Business",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RideshareGuides | Keep 100% of Your Fares",
    description: "The professional reservation tool built by drivers, for drivers. Build your client base, set rates, and stop paying commissions.",
    url: "https://rideshareguides.com",
    siteName: "RideshareGuides",
    images: [{ url: `/opengraph-image?v=${ogVersion}`, width: 1200, height: 630, alt: "RideshareGuides Platform Preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RideshareGuides | Driver Reservation Tool",
    description: "Stop giving away 30% of your earnings. Accept direct bookings and keep 100%.",
    creator: "@rideshareguides",
    images: [`/twitter-image?v=${ogVersion}`],
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
  appleWebApp: {
    title: "RideshareGuides",
    statusBarStyle: "black-translucent",
    startupImage: [`/opengraph-image?v=${ogVersion}`],
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
