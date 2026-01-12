export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-slate-50 py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Get Started in <span className="text-emerald-500">3 Simple Steps</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We've made it easy for TLC drivers to start building their own book of business.
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
                  Sign Up & Verify
                </h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  Join the beta with your TLC license. We verify your credentials and insurance to ensure the highest quality network.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Upload TLC/commercial license</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Verify commercial insurance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Approval within 24 hours</span>
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
                  Set Up Your Profile
                </h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  Create your professional driver profile. Add your photo, vehicle details, and customize your service rates.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                   <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Add your photo and bio</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Set your service rates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Get your QR business card</span>
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
                  Start Earning
                </h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  Share your booking link, accept requests on your own terms, and get paid 100% of the fare directly.
                </p>
                <ul className="space-y-3 text-sm text-slate-500">
                   <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Share QR code with riders</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Receive booking notifications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                     <span>Get paid directly by clients</span>
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

