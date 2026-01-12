import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 pb-20 lg:pt-32 lg:pb-40">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />

      <div className="container relative mx-auto px-4 text-center">
        {/* Beta Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-8 backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-400 tracking-wide">
            Beta Access: Only 73 Spots Remaining
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto mb-8 max-w-5xl text-4xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          The Reservation Tool
          <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Drivers Built for Drivers
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300 md:text-2xl leading-relaxed">
          Stop giving 30% to Uber. Accept direct bookings, set your rates, and{" "}
          <span className="text-white font-medium underline decoration-emerald-500/50 underline-offset-4">
            keep 100% of every fare
          </span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] rounded-full"
          >
            <Link href="/beta">Join the Beta Access</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 px-8 text-lg text-white border-slate-700 hover:bg-slate-800 hover:text-white rounded-full transition-all"
          >
            <Link href="#how-it-works">See How It Works</Link>
          </Button>
        </div>

        {/* Stats - Floating Cards Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-slate-900/80">
            <div className="text-4xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">$0</div>
            <div className="text-slate-400 font-medium">Platform Commission</div>
          </div>
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-slate-900/80">
            <div className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">$15</div>
            <div className="text-slate-400 font-medium">Flat Weekly Rate</div>
          </div>
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-slate-900/80">
            <div className="text-4xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-slate-400 font-medium">Keep Your Fares</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Credit Card Required</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>30-Day Free Trial</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

