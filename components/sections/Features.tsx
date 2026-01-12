export default function Features() {
  return (
    <section id="features" className="bg-slate-950 py-24 text-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-20" />
       
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-white">
            Everything You Need to <span className="text-emerald-400">Scale</span>
          </h2>
          <p className="text-lg text-slate-400">
            Professional tools designed specifically for independent drivers who want to build a real business, not just drive for an app.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
          
          {/* Feature 1 - Large Span */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl group-hover:bg-emerald-500/30 transition-all" />
            
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Accept & Manage Bookings</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Receive direct booking requests from clients. Manage your schedule with a professional calendar interface. Accept or decline jobs with a single tap.
            </p>
          </div>

          {/* Feature 2 - Small Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Set Your Rates</h3>
            <p className="text-slate-400 text-sm">
              You're the boss. Set flat rates for airports or hourly pricing for events.
            </p>
          </div>

          {/* Feature 3 - Small Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Direct Payments</h3>
            <p className="text-slate-400 text-sm">
              Keep 100% of the fare. Clients pay you directly via Cash, Zelle, or Venmo.
            </p>
          </div>

          {/* Feature 4 - Large Span */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl group-hover:bg-emerald-500/30 transition-all" />
             
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Build Your Client Base</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Turn one-time riders into regulars. The platform helps you manage client details and preferences, so they always book you first.
            </p>
          </div>

          {/* Feature 5 - Medium Span */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Digital Business Card</h3>
            <p className="text-slate-400">
              Share your personal booking link or QR code. Riders scan, book, and you get the notification instantly.
            </p>
          </div>

           {/* Feature 6 - Medium Span */}
           <div className="md:col-span-3 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Trust & Safety</h3>
            <p className="text-slate-400">
              Your profile highlights your TLC license and insurance, giving high-value clients the confidence to book private rides.
            </p>
          </div>

        </div>

        {/* Bottom Feature Highlight */}
        <div className="mt-12 mx-auto max-w-3xl text-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 backdrop-blur-sm">
          <h3 className="mb-2 text-2xl font-bold text-emerald-400">Zero App Friction</h3>
          <p className="text-lg text-slate-300">
            Clients don't need to download an app. They book through a simple, beautiful web link that works on any phone.
          </p>
        </div>
      </div>
    </section>
  );
}

