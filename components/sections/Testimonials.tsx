export default function Testimonials() {
  const testimonials = [
    {
      name: "Mohammed K.",
      role: "TLC Driver, Queens",
      years: "8 years experience",
      quote: "I was giving Uber $800-1000 every week. Now I keep everything. My regulars book me directly and I make 40% more.",
      rating: 5,
    },
    {
      name: "Carlos R.",
      role: "Black Car Driver, Manhattan",
      years: "12 years experience",
      quote: "The RSG Digital Business QR code card is genius. I leave it in the car, riders scan it, and they book me as their personal driver with The Don Reservation using my personal driver ID #, and they book me next time. Built 50+ regular clients in 2 months.",
      rating: 5,
    },
    {
      name: "David L.",
      role: "TLC Driver, Brooklyn",
      years: "5 years experience",
      quote: "Finally, a platform that treats drivers like business owners, not employees. $12/week (beta pricing) is nothing compared to what I was losing to Uber/Lyft.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-50" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Trusted by <span className="text-emerald-500">Professional Drivers</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Join hundreds of professional drivers who are taking back control of their income and building their own clientele.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                {/* Rating */}
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-8 text-lg leading-relaxed text-slate-300">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                       <p className="text-sm text-emerald-400">{testimonial.role}</p>
                       <span className="hidden sm:inline text-slate-600">•</span>
                       <p className="text-xs text-slate-500">{testimonial.years}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid gap-8 rounded-3xl border border-white/5 bg-white/5 p-12 backdrop-blur-md md:grid-cols-3">
            <div className="text-center group">
              <p className="mb-2 text-5xl font-bold text-white group-hover:scale-110 transition-transform">100+</p>
              <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm">Beta Drivers</p>
            </div>
            <div className="text-center group">
              <p className="mb-2 text-5xl font-bold text-white group-hover:scale-110 transition-transform">4.9★</p>
              <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm">Average Rating</p>
            </div>
            <div className="text-center group">
              <p className="mb-2 text-5xl font-bold text-white group-hover:scale-110 transition-transform">$50K+</p>
              <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm">Booked This Month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

