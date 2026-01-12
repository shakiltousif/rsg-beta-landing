import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 w-fit">
              <Image
                src="/logo.png"
                alt="RideshareGuides Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-white">RideshareGuides</span>
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
              © {new Date().getFullYear()} RideshareGuides.com. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 text-center md:text-right max-w-2xl">
              RideshareGuides.com is a technology platform connecting clients with independent 
              transportation service providers. We do not provide transportation services. All 
              drivers are independent businesses responsible for their own insurance, licensing, 
              and operations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

