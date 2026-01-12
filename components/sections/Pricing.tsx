import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Simple, Transparent <span className="text-emerald-500">Pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            No hidden fees. No commission. Just a flat weekly subscription that pays for itself in one ride.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto items-start">
          
          {/* Beta Plan */}
          <div className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600">
                Limited Time
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Beta Access</h3>
              <p className="mt-2 text-slate-500 text-sm">Perfect for testing the waters.</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-slate-900">Free</span>
              <span className="text-slate-500 font-medium">/ 30 days</span>
            </div>

            <ul className="mb-8 space-y-4">
              {[
                "30-day free trial",
                "All professional features",
                "No credit card required",
                "Cancel anytime",
                "Only 73 spots left"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 h-12 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl">
              <Link href="/beta">Claim Your Spot</Link>
            </Button>
          </div>

          {/* Founding Member Plan (Highlighted) */}
          <div className="relative rounded-3xl bg-slate-900 p-6 md:p-8 shadow-2xl shadow-purple-500/20 border border-slate-800 transform md:-translate-y-4 z-10">
             {/* Gradient Border Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-3xl opacity-10 blur-xl" />
            
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="mt-4 text-2xl font-bold text-white">Founding Member</h3>
              <p className="mt-2 text-slate-400 text-sm">Lock in this price forever.</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">$10</span>
              <span className="text-slate-400 font-medium">/ week</span>
            </div>

            <ul className="mb-8 space-y-4">
               {[
                "Everything in Beta",
                "$10/week locked forever",
                "Founding Member badge",
                "Priority 24/7 support",
                "First 500 drivers only"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`text-sm ${i === 1 ? 'text-white font-semibold' : 'text-slate-300'}`}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-12 rounded-xl text-base font-bold transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
              <Link href="/beta">Become a Founder</Link>
            </Button>
          </div>

          {/* Professional Plan */}
          <div className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-6">
               <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                Standard
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Professional</h3>
              <p className="mt-2 text-slate-500 text-sm">For established drivers.</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-slate-900">$15</span>
              <span className="text-slate-500 font-medium">/ week</span>
            </div>

            <ul className="mb-8 space-y-4">
              {[
                "Accept unlimited bookings",
                "Keep 100% of fares",
                "Digital business card",
                "Client management tools",
                "Standard email support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild variant="outline" className="w-full border-slate-200 hover:bg-slate-50 hover:text-slate-900 h-12 rounded-xl text-base font-semibold transition-all">
              <Link href="/beta">Start Free Trial</Link>
            </Button>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            All plans include 0% commission. You keep 100% of every fare, directly from the client.
          </p>
        </div>
      </div>
    </section>
  );
}