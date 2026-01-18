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
            Choose the plan that fits your driving business. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto items-start">
          
          {/* FREE Tier */}
          <div className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">FREE</h3>
              <p className="mt-2 text-slate-500 text-sm">Perfect for part-time drivers</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-slate-900">$0</span>
              <span className="text-slate-500 font-medium">/ month</span>
            </div>

            <div className="mb-6 rounded-lg bg-slate-100 p-3">
              <p className="text-sm text-slate-600 font-medium">12% commission per ride</p>
            </div>

            <ul className="mb-8 space-y-4">
              {[
                "Up to 10 rides per month",
                "Basic booking system",
                "Client management",
                "Payment processing",
                "Digital business card"
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
              <Link href="/beta">Get Started Free</Link>
            </Button>
          </div>

          {/* PROFESSIONAL Tier (Most Popular) */}
          <div className="relative rounded-3xl bg-slate-900 p-6 md:p-8 shadow-2xl shadow-emerald-500/20 border border-slate-800 transform md:-translate-y-4 z-10">
             {/* Gradient Border Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-3xl opacity-10 blur-xl" />
            
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <span className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg flex items-center gap-1">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="mt-4 text-2xl font-bold text-white">PROFESSIONAL</h3>
              <p className="mt-2 text-slate-400 text-sm">For serious income builders</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">$15</span>
              <span className="text-slate-400 font-medium">/ week</span>
              <span className="text-slate-500 text-sm">($55/month)</span>
            </div>

            <div className="mb-6 rounded-lg bg-emerald-500/20 p-3">
              <p className="text-sm text-emerald-400 font-bold">0% commission • 100% of fares</p>
            </div>

            <ul className="mb-8 space-y-4">
               {[
                "UNLIMITED rides",
                "Keep 100% of every fare",
                "Advanced scheduling",
                "Automated reminders",
                "Marketing tools",
                "Analytics dashboard",
                "Priority support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 h-12 rounded-xl text-base font-bold transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40">
              <Link href="/beta">Start Professional Plan</Link>
            </Button>
          </div>

          {/* ELITE Tier */}
          <div className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-6">
               <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-600">
                Fleet & Teams
               </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">ELITE</h3>
              <p className="mt-2 text-slate-500 text-sm">For transportation companies</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-slate-900">$35</span>
              <span className="text-slate-500 font-medium">/ week</span>
              <span className="text-slate-500 text-sm">($140/month)</span>
            </div>

            <div className="mb-6 rounded-lg bg-purple-100 p-3">
              <p className="text-sm text-purple-600 font-bold">Everything in Professional</p>
            </div>

            <ul className="mb-8 space-y-4">
              {[
                "Multi-vehicle management",
                "Fleet tools for multiple drivers",
                "White-label booking page",
                "Custom branding",
                "API access",
                "Dedicated account manager"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild variant="outline" className="w-full border-purple-200 hover:bg-purple-50 hover:text-purple-700 h-12 rounded-xl text-base font-semibold transition-all">
              <Link href="/beta">Contact for Elite</Link>
            </Button>
          </div>

        </div>

        {/* Beta Founding Member Special */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <svg className="h-8 w-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <h3 className="text-2xl md:text-3xl font-bold">Beta Founding Member Special</h3>
              </div>
              
              <p className="text-center text-lg text-white/90 mb-8">
                Join during beta, lock in special pricing for <span className="font-bold text-yellow-300">LIFE</span>
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white line-through opacity-60">$15</p>
                      <p className="text-4xl font-bold text-emerald-300">$12</p>
                      <p className="text-sm text-white/70">/ week</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">Professional Plan</h4>
                      <p className="text-sm text-white/70">Save $156/year</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white line-through opacity-60">$35</p>
                      <p className="text-4xl font-bold text-emerald-300">$28</p>
                      <p className="text-sm text-white/70">/ week</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">Elite Plan</h4>
                      <p className="text-sm text-white/70">Save $364/year</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-white/80 mb-4">
                  This rate never increases as long as you remain active. Beta participants only.
                </p>
                <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700 h-12 rounded-xl text-base font-bold transition-all shadow-lg">
                  <Link href="/beta">Lock in Beta Pricing Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rider Booking Fee */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-100 p-6 md:p-8 border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">$1.00 Rider Booking Fee</h4>
                <p className="text-slate-600 mb-4">
                  Every ride booked through RSG includes a $1.00 booking fee charged to the rider (not you). 
                  This covers platform maintenance, payment processing infrastructure, customer support, and technology improvements.
                </p>
                <div className="rounded-lg bg-white p-4 inline-block">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">You set your rate</span> • We add $1 to rider's total • <span className="font-semibold text-emerald-600">You keep 100% of YOUR rate</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}