import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "RideshareGuides Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const lastUpdated = "January 12, 2026";

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-400">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl prose prose-invert prose-slate prose-headings:text-white prose-p:text-slate-300 prose-a:text-emerald-400 prose-strong:text-white prose-ul:text-slate-300 prose-li:text-slate-300">

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 mb-12 not-prose">
              <p className="text-slate-300 text-base leading-relaxed">
                At RideshareGuides, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </div>

            <h2>1. Information We Collect</h2>

            <h3>1.1 Information You Provide</h3>
            <p>
              When you sign up for RideshareGuides, we collect information that you voluntarily provide, including:
            </p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>TLC license number and driver credentials</li>
              <li>Vehicle information (make, model, license plate)</li>
              <li>Payment information for subscription processing</li>
              <li>Profile information and preferences</li>
            </ul>

            <h3>1.2 Information We Collect Automatically</h3>
            <p>
              When you use our platform, we automatically collect certain information, including:
            </p>
            <ul>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Location data (if you enable location services)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3>1.3 Information from Bookings</h3>
            <p>
              When you receive and manage bookings through our platform, we collect:
            </p>
            <ul>
              <li>Client contact information provided for bookings</li>
              <li>Pickup and drop-off locations</li>
              <li>Booking dates, times, and details</li>
              <li>Communication between you and your clients</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul>
              <li><strong>Platform Services:</strong> To provide, maintain, and improve our booking management platform</li>
              <li><strong>Account Management:</strong> To create and manage your driver account</li>
              <li><strong>Payments:</strong> To process your subscription payments and maintain billing records</li>
              <li><strong>Communication:</strong> To send you service updates, technical notices, and support messages</li>
              <li><strong>Analytics:</strong> To understand how our platform is used and improve user experience</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3>3.1 With Your Clients</h3>
            <p>
              When you accept a booking, relevant information (name, vehicle details, contact information) is shared with the client who booked the ride.
            </p>

            <h3>3.2 Service Providers</h3>
            <p>
              We may share information with third-party service providers who perform services on our behalf, including:
            </p>
            <ul>
              <li>Payment processors (Stripe) for subscription billing</li>
              <li>Cloud hosting providers for data storage</li>
              <li>Analytics services to improve our platform</li>
              <li>Email service providers for communications</li>
            </ul>

            <h3>3.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order, or to:
            </p>
            <ul>
              <li>Comply with legal processes</li>
              <li>Protect our rights, property, or safety</li>
              <li>Enforce our Terms of Service</li>
              <li>Respond to claims of violation of third-party rights</li>
            </ul>

            <h3>3.4 Business Transfers</h3>
            <p>
              If RideshareGuides is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure payment processing through PCI-compliant providers</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>

            <h2>5. Your Rights and Choices</h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Access:</strong> You can access and review your personal information in your account settings</li>
              <li><strong>Correction:</strong> You can update or correct your information at any time</li>
              <li><strong>Deletion:</strong> You can request deletion of your account and associated data</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> You can opt out of marketing communications at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at support@rideshareguides.com.
            </p>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to:
            </p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our platform</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our platform.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to:
            </p>
            <ul>
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p>
              When you close your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it for legal or regulatory purposes.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              RideshareGuides is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending you an email notification for significant changes</li>
            </ul>
            <p>
              Your continued use of our platform after changes constitutes acceptance of the updated Privacy Policy.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from your country. By using our platform, you consent to such transfers.
            </p>

            <h2>11. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul>
              <li>The right to know what personal information we collect and how it's used</li>
              <li>The right to delete your personal information</li>
              <li>The right to opt-out of the sale of your personal information (we do not sell personal information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> privacy@rideshareguides.com</li>
              <li><strong>Support:</strong> support@rideshareguides.com</li>
            </ul>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 mt-12 not-prose">
              <p className="text-sm text-slate-400">
                <strong className="text-white">Note:</strong> This privacy policy is designed to comply with general data protection principles. If you have specific concerns about how your data is handled, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
