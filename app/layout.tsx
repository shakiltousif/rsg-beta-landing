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
    default: "RideshareGuides.com | Keep 100% of Your Fares",
    template: "%s | RideshareGuides.com",
  },
  description: "Professional reservation tool for TLC and licensed drivers. Build your own client base, set your own rates, keep 100% of every fare. $15/week, 0% commission.",
  keywords: ["TLC driver", "NYC rideshare", "direct booking", "keep 100% fares", "driver platform", "reservation tool"],
  authors: [{ name: "RideshareGuides" }],
  openGraph: {
    title: "RideshareGuides.com | Keep 100% of Your Fares",
    description: "The reservation tool built by drivers, for drivers.",
    url: "https://rideshareguides.com",
    siteName: "RideshareGuides",
		images: [{ url: `/opengraph-image?v=${ogVersion}`, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RideshareGuides.com",
    description: "Keep 100% of your fares. $15/week.",
		images: [`/twitter-image?v=${ogVersion}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
