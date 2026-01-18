import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 w-fit">
              <Image
                src="/logo.png"
                alt="The Don Reservations Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-white">The Don Reservations</span>
            </Link>
            <p className="text-sm text-slate-400">
              The reservation tool built by drivers, for drivers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-slate-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-slate-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-slate-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Mobile Apps</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://apps.apple.com/us/app/the-don-reservations/id6450987934" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-2.45 1.71-.98 2.45-2.45.97-2.45 1.71 0 3.46.97 4.65L16.36 22c-1.19 1.01-2.73.83-4.27-.17-1.54.83-2.47 2.45-2.47 1.71 0 3.05-1.16 3.05-2.54 0-2.11-1.51-3.93-3.63-1.55 2.07-2.69 4.47-2.69 1.48 0 2.73 1.36 3.61 1.36 3.33 0 6.06-1.36 6.06-3.03 0-1.48-1.32-2.69-2.79zm-2.69 2.79c.96 0 1.86-.25 2.65-.67 1.3-1.2 1.64-1.97.45-.94.9-1.86 1.35-2.79.38-.75.76-1.5 1.12-2.28-.15-.78-.3-1.57-.44-2.36-.14-.79-.28-1.6-.42-2.39l-.07-.3c-.16-.77-.3-1.55-.46-2.32-.15-.77-.31-1.54-.46-2.32-.16-.78-.31-1.57-.47-2.35-.15-.78-.3-1.57-.45-2.36-.15-.78-.3-1.57-.45-2.36zm-1.82 2.3c-.29.79-.74 1.58-1.04 2.38-.3.8-.63 1.59-1.04 2.38-.29.79-.74 1.59-1.03 2.38-.3.8-.63 1.59-1.03 2.38-.29.8-.74 1.6-1.04 2.39-.29.79-.74 1.59-1.04 2.39-.29.8-.74 1.59-1.03 2.39-.29.79-.74 1.59-1.03 2.38-.29.8-.74 1.59-1.04 2.38z"/>
                  </svg>
                  <span>App Store</span>
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.don.order&hl=en&gl=US" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.341c-1.22.642-2.66 1.088-3.896 1.596l.947-2.06c.535.372 1.246.922 2.057 1.665.587.382 1.547.967 2.287 1.665.622 1.247 1.031 2.427.937.74 1.393 1.553 2.29.428.74 1.05 1.533 1.804 2.226l-2.042 1.596c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23l-2.042 1.595c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23l-2.042 1.595c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23l-2.042 1.595c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23l-2.042 1.595c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23z"/>
                  </svg>
                  <span>Google Play - Rider</span>
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/the-don-reservations-driver/id6450992055" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-2.45 2.45 1.71-.98 2.45-2.45.97-2.45 1.71 0 3.46.97 4.65L16.36 22c-1.19 1.01-2.73.83-4.27-.17-1.54.83-2.47 2.45-2.47 1.71 0 3.05-1.16 3.05-2.54 0-2.11-1.51-3.93-3.63-1.55 2.07-2.69 4.47-2.69 1.48 0 2.73 1.36 3.61 1.36 3.33 0 6.06-1.36 6.06-3.03 0-1.48-1.32-2.69-2.79zm-2.69 2.79c.96 0 1.86-.25 2.65-.67 1.3-1.2 1.64-1.97.45-.94.9-1.86 1.35-2.79.38-.75.76-1.5 1.12-2.28-.15-.78-.3-1.57-.44-2.36-.07-.3c-.16-.77-.3-1.55-.46-2.32-.15-.77-.31-1.57-.47-2.35-.15-.78-.3-1.57-.45-2.36zm-1.82 2.3c-.29.79-.74 1.58-1.04 2.38-.3.8-.63 1.59-1.04 2.38-.29.79-.74 1.59-1.03 2.38-.3.8-.63 1.59-1.03 2.38-.29.8-.74 1.59-1.03 2.39-.29.8-.74 1.59-1.03 2.39-.29.8-.74 1.59-1.03 2.39-.29.8-.74 1.59-1.03 2.38-.29.8-.74 1.59-1.03 2.38z"/>
                  </svg>
                  <span>App Store - Driver</span>
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.don.driver&hl=en&gl=US" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.341c-1.22.642-2.66 1.088-3.896 1.596l.947-2.06c.535.372 1.246.922 2.057 1.665.587.382 1.547.967 2.287 1.665.622 1.247 1.031 2.427.937.74 1.393 1.553 2.29.428.74 1.05 1.533 1.804 2.226l-2.042 1.596c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23l-2.042 1.595c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23l-2.042 1.595c-.742.372-1.64.922-2.435 1.665-.586.382-1.246.967-2.283 1.665-.622.744-1.032 1.533-1.806 2.23z"/>
                  </svg>
                  <span>Google Play - Driver</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} The Don Reservations. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 text-center md:text-right max-w-2xl">
              The Don Reservations is a technology platform connecting clients with independent 
              transportation service providers. We do not provide transportation services. All 
              drivers are independent businesses responsible for their own insurance, licensing, 
              and operations. Visit <a href="https://bookthedon.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">bookthedon.com</a> to book rides.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

