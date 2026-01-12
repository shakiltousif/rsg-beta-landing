import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the RideshareGuides team. We're here to help you succeed as an independent driver.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Get In{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Have a question? Need support? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 mb-16">
              {/* Email Support */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20">
                  <svg className="h-7 w-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-2xl font-bold">Email Support</h2>
                <p className="mb-4 text-slate-400">
                  For general inquiries, technical support, or partnership opportunities.
                </p>
                <a
                  href="mailto:support@rideshareguides.com"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  support@rideshareguides.com
                </a>
              </div>

              {/* Beta Access */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20">
                  <svg className="h-7 w-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-2xl font-bold">Join Beta Access</h2>
                <p className="mb-4 text-slate-400">
                  Ready to start keeping 100% of your fares? Sign up for early access.
                </p>
                <a
                  href="/beta"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Request Beta Access →
                </a>
              </div>
            </div>

            {/* FAQ Reference */}
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 md:p-12 text-center">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-500/20">
                <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-emerald-400">Quick Questions?</h2>
              <p className="mb-6 text-lg text-slate-300">
                Check out our FAQ section for answers to common questions about pricing, features, and getting started.
              </p>
              <a
                href="/#faq"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium text-lg"
              >
                View FAQ
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Response Time */}
            <div className="mt-16 text-center">
              <p className="text-slate-400">
                We typically respond within <span className="text-white font-semibold">24 hours</span> during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="border-t border-slate-800 py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">What You Can Contact Us About</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                  <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Technical Support</h3>
                <p className="text-sm text-slate-400">
                  Issues with bookings, payments, or account access
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                  <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">General Questions</h3>
                <p className="text-sm text-slate-400">
                  Questions about features, pricing, or how it works
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Partnerships</h3>
                <p className="text-sm text-slate-400">
                  Business inquiries, fleet integrations, or collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
