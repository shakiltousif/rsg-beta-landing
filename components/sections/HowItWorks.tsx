export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-slate-50 py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Start Earning in <span className="text-emerald-500">3 Simple Steps</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Join the platform designed for commercial insurance drivers and keep 100% of your fares.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

          {/* Steps Grid */}
          <div className="grid gap-12 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative group">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-emerald-50 text-3xl font-bold text-emerald-500 shadow-xl transition-transform group-hover:scale-110 group-hover:border-emerald-100">
                1
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Sign Up on RSG
                </h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  Create your free account to access the driver reservation platform. Quick and simple registration process.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Enter your basic information</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Create your secure account</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Access the driver dashboard</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
             <div className="relative group">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-emerald-50 text-3xl font-bold text-emerald-500 shadow-xl transition-transform group-hover:scale-110 group-hover:border-emerald-100">
                2
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Apply for The Don Reservations
                </h3>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Commercial Insurance Drivers Only
                </div>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  Submit your application for The Don Reservations. Required for commercial vehicle operation.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                   <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Submit The Don application</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Provide commercial insurance proof</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Verify driver credentials</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
             <div className="relative group">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-emerald-50 text-3xl font-bold text-emerald-500 shadow-xl transition-transform group-hover:scale-110 group-hover:border-emerald-100">
                3
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Wait & Get Approved
                </h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  Our team reviews your application. Once approved, you'll have full access to start earning immediately.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                   <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Wait 24-48 hours for approval</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Receive approval notification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Start earning 100% of fares</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-xl font-medium text-slate-900">
              Ready to take control of your driving business?
            </p>
            <a
              href="/beta"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              Join the Beta Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

