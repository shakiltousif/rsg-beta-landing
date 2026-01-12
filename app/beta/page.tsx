"use client";

import { useEffect } from "react";

export default function BetaPage() {
  useEffect(() => {
    // Redirect to rideshareguides.com driver signup - based on the site's "Become a Driver" section
    window.location.href = "https://www.rideshareguides.com/";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
        <p className="text-slate-300">Joining the beta program...</p>
        <p className="text-slate-400 text-sm mt-2">Redirecting to driver signup</p>
      </div>
    </div>
  );
}