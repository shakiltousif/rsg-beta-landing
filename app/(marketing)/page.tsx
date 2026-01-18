import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import BetaOffer from "@/components/sections/BetaOffer";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "NYC TLC Drivers Keep 100% of Fares",
  description:
    "Stop giving Uber 30%. The professional driver reservation tool. Book direct clients, set your rates, and keep every dollar. Start your free trial.",
};

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "RideshareGuides",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "15.00",
          "priceCurrency": "USD",
          "billingIncrement": "1 week"
        },
        "description": "A professional reservation tool for independent drivers to manage bookings and clients without commissions.",
        "featureList": "Direct Booking, Client Management, Rate Setting, Zero Commission",
        "screenshot": "https://rideshareguides.com/opengraph-image"
      },
      {
        "@type": "Organization",
        "name": "RideshareGuides",
        "url": "https://rideshareguides.com",
        "logo": "https://rideshareguides.com/icon.png",
        "sameAs": [
          "https://twitter.com/rideshareguides",
          "https://facebook.com/rideshareguides"
        ]
      },
      {
        "@type": "WebSite",
        "name": "RideshareGuides",
        "url": "https://rideshareguides.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://rideshareguides.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <BetaOffer />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

