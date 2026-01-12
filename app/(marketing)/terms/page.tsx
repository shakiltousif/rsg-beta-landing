import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "RideshareGuides Terms of Service. Read our terms and conditions for using the platform.",
};

export default function TermsPage() {
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
              Terms of Service
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
                Welcome to RideshareGuides. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By creating an account, accessing, or using RideshareGuides ("the Platform"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Platform.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              RideshareGuides is a technology platform that provides independent transportation service providers ("Drivers") with tools to:
            </p>
            <ul>
              <li>Receive and manage direct booking requests from clients</li>
              <li>Maintain a professional booking calendar</li>
              <li>Communicate with clients</li>
              <li>Share booking links and QR codes</li>
              <li>Manage client databases</li>
            </ul>
            <p>
              <strong>Important:</strong> RideshareGuides is a technology platform only. We do not provide transportation services, and we are not a transportation carrier. All transportation services are provided by independent drivers.
            </p>

            <h2>3. Eligibility</h2>
            <p>
              To use RideshareGuides, you must:
            </p>
            <ul>
              <li>Be at least 18 years of age</li>
              <li>Hold a valid driver's license and any required professional driving licenses (such as TLC license in NYC)</li>
              <li>Maintain valid vehicle registration and appropriate insurance coverage</li>
              <li>Have the legal right to provide transportation services in your jurisdiction</li>
              <li>Provide accurate, current, and complete information during registration</li>
            </ul>

            <h2>4. Driver Responsibilities</h2>

            <h3>4.1 Independent Contractor Status</h3>
            <p>
              You acknowledge and agree that:
            </p>
            <ul>
              <li>You are an independent contractor, not an employee of RideshareGuides</li>
              <li>You are solely responsible for your own business operations</li>
              <li>You maintain full control over your rates, schedule, and which bookings you accept</li>
              <li>You are responsible for all applicable taxes, licenses, and insurance</li>
            </ul>

            <h3>4.2 Compliance with Laws</h3>
            <p>
              You agree to:
            </p>
            <ul>
              <li>Comply with all applicable local, state, and federal laws and regulations</li>
              <li>Maintain all required licenses, permits, and insurance</li>
              <li>Follow all traffic laws and safety regulations</li>
              <li>Report any accidents or incidents as required by law</li>
            </ul>

            <h3>4.3 Insurance Requirements</h3>
            <p>
              You must maintain adequate insurance coverage for commercial transportation services, including:
            </p>
            <ul>
              <li>Commercial auto liability insurance</li>
              <li>Any additional coverage required by your jurisdiction</li>
              <li>Coverage amounts that meet or exceed local requirements</li>
            </ul>

            <h3>4.4 Vehicle and Safety Standards</h3>
            <p>
              You are responsible for ensuring:
            </p>
            <ul>
              <li>Your vehicle meets all safety and inspection requirements</li>
              <li>Your vehicle is clean, properly maintained, and in good working condition</li>
              <li>You provide safe and professional transportation services</li>
            </ul>

            <h2>5. Account and Security</h2>
            <p>
              You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Providing accurate and up-to-date account information</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
            </p>

            <h2>6. Fees and Payment</h2>

            <h3>6.1 Subscription Fees</h3>
            <p>
              RideshareGuides charges a flat weekly subscription fee of $15 (the "Subscription Fee"). By subscribing, you agree to:
            </p>
            <ul>
              <li>Pay the Subscription Fee on a recurring weekly basis</li>
              <li>Authorize automatic payment from your designated payment method</li>
              <li>Accept that fees are non-refundable except as required by law</li>
            </ul>

            <h3>6.2 Free Trial</h3>
            <p>
              We may offer a 30-day free trial period. During the trial:
            </p>
            <ul>
              <li>You will not be charged the Subscription Fee</li>
              <li>You may cancel at any time before the trial ends</li>
              <li>If you do not cancel, you will be automatically charged at the end of the trial</li>
            </ul>

            <h3>6.3 No Commission on Bookings</h3>
            <p>
              RideshareGuides does not take any commission or percentage of your booking earnings. You keep 100% of all fares charged to your clients. Payment for rides is handled directly between you and your clients.
            </p>

            <h3>6.4 Price Changes</h3>
            <p>
              We reserve the right to change our Subscription Fee with 30 days' advance notice. Continued use of the Platform after a price change constitutes acceptance of the new pricing.
            </p>

            <h2>7. Cancellation and Termination</h2>

            <h3>7.1 Your Right to Cancel</h3>
            <p>
              You may cancel your subscription at any time through your account settings. Upon cancellation:
            </p>
            <ul>
              <li>You will retain access until the end of your current billing period</li>
              <li>No refunds will be provided for partial billing periods</li>
              <li>You may re-subscribe at any time</li>
            </ul>

            <h3>7.2 Our Right to Terminate</h3>
            <p>
              We may suspend or terminate your account if you:
            </p>
            <ul>
              <li>Violate these Terms of Service</li>
              <li>Engage in fraudulent or illegal activity</li>
              <li>Fail to pay subscription fees</li>
              <li>Misuse the Platform or harm other users</li>
              <li>Provide false or misleading information</li>
            </ul>

            <h2>8. Prohibited Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use the Platform for any illegal purpose</li>
              <li>Violate any local, state, federal, or international laws</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm other users or clients</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to the Platform</li>
              <li>Scrape, copy, or misuse Platform data</li>
              <li>Interfere with the proper functioning of the Platform</li>
              <li>Use the Platform to compete with RideshareGuides</li>
            </ul>

            <h2>9. Intellectual Property</h2>
            <p>
              The Platform, including all content, features, and functionality, is owned by RideshareGuides and is protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul>
              <li>Copy, modify, or create derivative works of the Platform</li>
              <li>Reverse engineer or decompile any part of the Platform</li>
              <li>Remove or alter any copyright notices or trademarks</li>
              <li>Use our trademarks or branding without permission</li>
            </ul>

            <h2>10. Client Relationships</h2>
            <p>
              You acknowledge that:
            </p>
            <ul>
              <li>All client relationships are between you and your clients</li>
              <li>RideshareGuides is not a party to any transportation agreements</li>
              <li>You are solely responsible for disputes with clients</li>
              <li>You set your own rates and terms with clients</li>
            </ul>

            <h2>11. Disclaimers and Limitations of Liability</h2>

            <h3>11.1 Platform Provided "As Is"</h3>
            <p>
              The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h3>11.2 No Guarantee of Results</h3>
            <p>
              We do not guarantee that:
            </p>
            <ul>
              <li>The Platform will meet your business needs</li>
              <li>You will receive any specific number of bookings</li>
              <li>The Platform will be uninterrupted, secure, or error-free</li>
              <li>Any defects will be corrected</li>
            </ul>

            <h3>11.3 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, RideshareGuides shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Personal injury or property damage arising from your use of the Platform</li>
              <li>Any issues related to transportation services you provide</li>
            </ul>
            <p>
              Our total liability to you for any claim shall not exceed the amount you paid us in subscription fees during the 12 months preceding the claim.
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless RideshareGuides, its affiliates, officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Platform</li>
              <li>Your provision of transportation services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or regulation</li>
              <li>Claims made by your clients or third parties</li>
            </ul>

            <h2>13. Dispute Resolution</h2>

            <h3>13.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
            </p>

            <h3>13.2 Arbitration</h3>
            <p>
              Any dispute arising from these Terms or your use of the Platform shall be resolved through binding arbitration, except:
            </p>
            <ul>
              <li>You may assert claims in small claims court if they qualify</li>
              <li>Either party may seek injunctive relief in court</li>
            </ul>
            <p>
              Arbitration will be conducted by a single arbitrator in accordance with the rules of the American Arbitration Association. The arbitrator's decision will be final and binding.
            </p>

            <h3>13.3 Class Action Waiver</h3>
            <p>
              You agree to resolve disputes with us on an individual basis only. You waive any right to participate in class actions, class arbitrations, or representative actions.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. When we make material changes, we will:
            </p>
            <ul>
              <li>Post the updated Terms on our website</li>
              <li>Update the "Last Updated" date</li>
              <li>Notify you via email for significant changes</li>
            </ul>
            <p>
              Your continued use of the Platform after changes constitutes acceptance of the modified Terms.
            </p>

            <h2>15. General Provisions</h2>

            <h3>15.1 Entire Agreement</h3>
            <p>
              These Terms constitute the entire agreement between you and RideshareGuides regarding the Platform and supersede all prior agreements.
            </p>

            <h3>15.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h3>15.3 Waiver</h3>
            <p>
              Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.
            </p>

            <h3>15.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.
            </p>

            <h2>16. Contact Information</h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> legal@rideshareguides.com</li>
              <li><strong>Support:</strong> support@rideshareguides.com</li>
            </ul>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 mt-12 not-prose">
              <p className="text-sm text-slate-400">
                <strong className="text-white">Acknowledgment:</strong> By using RideshareGuides, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
