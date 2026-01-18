import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BetaOffer() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-slate-900 to-emerald-900 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Main Content */}
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-sm font-bold text-emerald-300 tracking-wide uppercase">Limited Time Beta Offer</span>
            </div>

            {/* Headline */}
            <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
              Join RSG Network During Beta and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Save Forever</span>
            </h2>

            {/* Subheadline */}
            <p className="mb-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Be a founding member of RSG Network - the exclusive community of professional drivers. Lock in beta pricing for life and get unlimited access to The Don Reservations platform.
            </p>

            {/* Pricing Cards */}
            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto mb-8">
              {/* Professional Plan */}
              <div className="rounded-2xl border border-purple-500/30 bg-white/5 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all">
                <div className="text-center">
                  <p className="text-sm text-purple-300 font-semibold mb-2">Professional Plan</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white line-through opacity-50">$15</span>
                    <span className="text-5xl font-bold text-emerald-400 ml-2">$12</span>
                    <span className="text-slate-300">/week</span>
                  </div>
                  <p className="text-sm text-slate-400">0% commission • Unlimited rides</p>
                </div>
              </div>

              {/* Elite Plan */}
              <div className="rounded-2xl border border-emerald-500/30 bg-white/5 p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all">
                <div className="text-center">
                  <p className="text-sm text-emerald-300 font-semibold mb-2">Elite Plan</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white line-through opacity-50">$35</span>
                    <span className="text-5xl font-bold text-emerald-400 ml-2">$28</span>
                    <span className="text-slate-300">/week</span>
                  </div>
                  <p className="text-sm text-slate-400">0% commission • Fleet features</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0L10 12.586l-2-2z" clipRule="evenodd" />
                </svg>
                <span>Lock in beta pricing FOREVER</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0L10 12.586l-2-2z" clipRule="evenodd" />
                </svg>
                <span>Unlimited rides</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0L10 12.586l-2-2z" clipRule="evenodd" />
                </svg>
                <span>0% commission</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 px-8 text-lg font-bold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all rounded-full w-full sm:w-auto"
              >
                <Link href="/beta">Join RSG Network & Lock Beta Pricing</Link>
              </Button>
              <a
                href="https://bookthedon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
              >
                Visit bookthedon.com →
              </a>
            </div>

            {/* Note */}
            <p className="mt-6 text-xs text-slate-400 max-w-2xl mx-auto">
              Beta pricing available only during beta period. Once beta ends, pricing will be $15/week for Professional and $35/week for Elite. 
              Beta Founding Members keep their locked pricing for life as long as account remains active.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}