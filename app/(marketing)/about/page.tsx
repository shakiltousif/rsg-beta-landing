import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RideshareGuides - the reservation platform built by drivers, for drivers. Our mission is to help independent transportation professionals keep 100% of their earnings.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Built By Drivers,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                For Drivers
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We believe professional drivers deserve to keep what they earn. No middlemen. No commissions. Just you and your business.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  RideshareGuides was born from a simple frustration: watching skilled, professional drivers hand over 25-30% of every fare to platforms that, frankly, don't need it anymore.
                </p>
                <p>
                  In the early days, platforms like Uber and Lyft provided value—they built the marketplace, handled the technology, and connected drivers with riders. But now? The marketplace is established. The technology is simple. And drivers have their own client bases.
                </p>
                <p>
                  So why are drivers still paying 30% for every ride?
                </p>
                <p>
                  That's the question that led us to build RideshareGuides. We wanted to create a tool that gives drivers everything they need to run their own transportation business—without the commission fees.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-16 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 md:p-12">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">Our Mission</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                To empower independent drivers with professional tools that let them accept direct bookings, manage their business, and keep 100% of what they earn—all for a simple, flat weekly fee.
              </p>
            </div>

            {/* Our Values */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Values</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Driver-First</h3>
                  <p className="text-slate-400">
                    Every feature we build is designed with drivers in mind. We don't build for investors or shareholders—we build for you.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Transparent Pricing</h3>
                  <p className="text-slate-400">
                    $15/week, flat. No hidden fees, no commission cuts, no surprises. What you earn is yours to keep.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Simple & Fast</h3>
                  <p className="text-slate-400">
                    We don't overcomplicate things. Our platform is intuitive, fast, and gets out of your way so you can focus on driving.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                    <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Community</h3>
                  <p className="text-slate-400">
                    We're building a community of professional, independent drivers who support each other and grow together.
                  </p>
                </div>
              </div>
            </div>

            {/* Who It's For */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">Who We Serve</h2>
              <div className="space-y-6 text-lg text-slate-300">
                <p>
                  RideshareGuides is built for professional drivers who are ready to take control of their business:
                </p>
                <ul className="space-y-4 pl-6">
                  <li className="flex items-start">
                    <svg className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">NYC TLC drivers</strong> tired of giving 30% to Uber and Lyft</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Black car and limo drivers</strong> looking for a modern booking system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Private chauffeurs</strong> who want to manage their regulars professionally</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Airport specialists</strong> who have repeat clients but no good way to manage them</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Ready to Keep 100%?</h2>
              <p className="mb-8 text-lg text-slate-300">
                Join hundreds of professional drivers who've taken control of their earnings.
              </p>
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <Link href="/beta">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
