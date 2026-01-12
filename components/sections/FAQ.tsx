"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a TLC license to join?",
      answer:
        "Yes, you need either a NYC TLC license, Black Car/Livery license, or county-level commercial license (Florida, California, etc.). We verify all licenses during signup to ensure rider safety and legal compliance.",
    },
    {
      question: "Is commercial insurance required?",
      answer:
        "Absolutely. All drivers must have active commercial auto insurance with minimum $1M liability coverage. This is non-negotiable and protects both you and your clients. We verify insurance during the approval process.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Clients pay you directly using their preferred method: cash, Venmo, Zelle, CashApp, or any payment method you accept. RideshareGuides never touches your money - you keep 100% of every fare.",
    },
    {
      question: "What's the difference between this and Uber?",
      answer:
        "Uber takes 25-30% commission and controls pricing. RideshareGuides charges a flat $15/week subscription with 0% commission. You set your own rates, build direct client relationships, and keep 100% of what you earn. We're a tool for your business, not your employer.",
    },
    {
      question: "Can I use this alongside Uber/Lyft?",
      answer:
        "Absolutely! Many drivers use RideshareGuides to build their own client base while still taking app rides during slow times. The goal is to gradually replace app income with direct bookings where you keep 100%.",
    },
    {
      question: "How does the digital business card work?",
      answer:
        "You get a free QR code business card that riders can scan to save your booking link. Leave it in your car, and satisfied riders can book you directly next time instead of using Uber. It's a simple way to convert one-time riders into repeat clients.",
    },
    {
      question: "What happens after the 30-day free trial?",
      answer:
        "After 30 days, you'll be charged $15/week (or $10/week if you're a Founding Member). You can cancel anytime with no penalties. If you cancel, you simply lose access to the booking platform, but you keep all client contact information you've collected.",
    },
    {
      question: "Is RideshareGuides a rideshare company?",
      answer:
        "No. We're a B2B software platform that provides booking tools for independent transportation providers. We don't provide rides, employ drivers, or take commission. You're an independent business owner using our software to manage your bookings.",
    },
    {
      question: "How many bookings do I need to break even?",
      answer:
        "At $15/week, you break even with just ONE direct booking instead of an Uber ride. Example: A $50 Uber ride where you'd keep $35 (after 30% fee) vs. keeping the full $50 direct. That $15 difference covers your weekly subscription. Every booking after that is pure profit.",
    },
    {
      question: "Can riders book me without downloading an app?",
      answer:
        "Yes! Riders book through a simple web link - no app download required. They just click your link, enter pickup/dropoff details, and submit. You get a notification and can accept or decline. It's friction-free for both sides.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-950 py-24 relative overflow-x-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
       
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Frequently Asked <span className="text-emerald-500">Questions</span>
            </h2>
            <p className="text-lg text-slate-400">
              Everything you need to know about getting started.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-slate-800 transition-all duration-300 ${openIndex === index ? 'pb-6' : 'pb-0'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className={`pr-4 text-lg font-medium transition-colors ${openIndex === index ? 'text-emerald-400' : 'text-slate-200 group-hover:text-emerald-400'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-400 leading-relaxed pr-12">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            <p className="mb-4 text-slate-300 text-lg">Still have questions?</p>
            <a
              href="mailto:support@rideshareguides.com"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Contact our support team 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

