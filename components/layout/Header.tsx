"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/image.png"
              alt="RideshareGuides"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Login
            </Link>
            <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600">
              <Link href="/beta">Join Beta</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 h-[calc(100vh-4rem)] w-full border-t border-slate-800 bg-slate-900 px-6 py-8 shadow-xl overflow-y-auto md:hidden">
          <nav className="flex flex-col space-y-6">
            <Link
              href="#features"
              className="block text-lg font-medium text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block text-lg font-medium text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="block text-lg font-medium text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="block text-lg font-medium text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <div className="pt-4">
              <Button asChild size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-lg h-12">
                <Link href="/beta" onClick={() => setIsMenuOpen(false)}>Join Beta</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

