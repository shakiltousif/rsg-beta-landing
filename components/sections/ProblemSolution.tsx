export default function ProblemSolution() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-500/10 blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[100px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Stop Losing 30% of <span className="text-red-500">Every Ride</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            The math is simple. See how much more you keep when you own the client relationship.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Uber Column */}
          <div className="group relative rounded-3xl border border-red-500/20 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-red-500/40">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">With Apps</h3>
              <span className="rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">
                30% Commission
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">High Fees</p>
                  <p className="text-sm text-slate-400">You lose 25-30% on every single trip.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">No Control</p>
                  <p className="text-sm text-slate-400">The algorithm controls your schedule and pay.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Zero Client Data</p>
                  <p className="text-sm text-slate-400">You can't re-market to passengers.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-red-500/10 border border-red-500/20 p-6 text-center">
              <p className="text-sm text-red-300 mb-1">Example $100 Ride</p>
              <p className="text-3xl font-bold text-white">You Keep $70</p>
            </div>
          </div>

          {/* RideshareGuides Column */}
          <div className="group relative rounded-3xl border border-emerald-500/30 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-slate-900/80 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
             <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl pointer-events-none" />
            
            <div className="mb-8 flex items-center justify-between relative">
              <h3 className="text-2xl font-bold text-white">With RSG</h3>
              <span className="rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20">
                0% Commission
              </span>
            </div>

            <div className="space-y-6 relative">
              <div className="flex items-start gap-4">
                 <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Keep 100%</p>
                  <p className="text-sm text-slate-400">Flat weekly fee. No hidden cuts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Own Your Clients</p>
                  <p className="text-sm text-slate-400">Build a list of regulars who book you directly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Set Your Rates</p>
                  <p className="text-sm text-slate-400">Charge what you're actually worth.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-emerald-500 text-white p-6 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-50" />
               <div className="relative z-10">
                <p className="text-sm text-emerald-100 mb-1">Example $100 Ride</p>
                <p className="text-3xl font-bold">You Keep $100</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

