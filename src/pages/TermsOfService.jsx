import { Link } from 'react-router-dom'
import { ArrowLeft, Scale, Shield, FileCode, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSeo } from '../seo/useSeo'

function TermsOfService() {
  useSeo('/terms')
  return (
    <div className="min-h-screen bg-offwhite text-charcoal relative flex flex-col items-center">
      <Navbar />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-32 sm:pt-36 pb-16 sm:pb-24 flex-grow text-left">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-charcoal/60 hover:text-signal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </Link>
          <div className="flex gap-4 font-mono text-xs">
            <Link to="/privacy" className="text-charcoal/60 hover:text-signal transition-colors">Privacy Policy</Link>
            <span className="text-charcoal/30">/</span>
            <span className="text-signal font-bold border-b border-signal pb-0.5">Terms of Service</span>
          </div>
        </div>

        {/* Header Block */}
        <div className="flex flex-col gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold px-3 py-1 border border-signal/20 rounded-full bg-signal/10 w-fit">
            Operational Engagement Protocol
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-none">
            Terms of Service
          </h1>
        </div>

        {/* Metadata sub-bar */}
        <div className="font-mono text-xs text-charcoal/60 flex flex-wrap items-center gap-x-6 gap-y-2 pb-6 mb-10 border-b border-charcoal/10 uppercase tracking-wide">
          <span>Effective: September 2026</span>
          <span>•</span>
          <span>Last Updated: September 2026</span>
          <span>•</span>
          <span>Scope: keystonesolution.co & Operational Engagements</span>
        </div>

        {/* Core Principles Card */}
        <div className="brutalist-card p-6 md:p-8 bg-paper/20 rounded-3xl mb-12 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-signal/10 border border-signal/20 flex items-center justify-center flex-shrink-0 text-signal">
              <Scale className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-xl font-bold uppercase tracking-tight">
                Engineering Governance & Autonomy
              </h3>
              <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
                Keystone Solution operates on transparent engineering principles: we deliver production-grade custom agent systems for manufacturers without recurring per-seat SaaS lock-in. These Terms govern the use of our public website and outline the framework through which operational consultations are initiated.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">01.</span> Acceptance of Terms
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              By accessing, browsing, or utilizing <code className="font-mono text-xs bg-paper/50 px-1.5 py-0.5 rounded border border-charcoal/10">keystonesolution.co</code>, or by submitting information through our scheduling forms, you agree to be bound by these Terms of Service and our associated Privacy Policy. If you are entering into these terms on behalf of a company, organization, or manufacturing entity, you represent that you possess the authority to bind such entity.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">02.</span> Scope of Services & Engagements
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Keystone Solution provides process architecture advisory, operational opportunity audits, and custom forward-deployed engineering of autonomous agent workflows for manufacturing and industrial enterprises.
            </p>
            <div className="p-4 bg-paper/30 brutalist-border rounded-xl font-mono text-xs text-charcoal/80 leading-relaxed">
              <strong>Please Note:</strong> Initial discovery calls, schedule bookings, and website case studies provide general technical context and feasibility analysis. Binding commitments, detailed deliverables, timeline guarantees, and financial consideration are formalized exclusively through mutually executed Master Services Agreements (MSAs) or Statements of Work (SOWs).
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">03.</span> Intellectual Property & Full Code Ownership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-paper/30 brutalist-border rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-signal">
                  <FileCode className="w-4 h-4" /> Client Code Ownership
                </div>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  Unlike traditional SaaS vendors that retain proprietary hold on software layers, bespoke code, customized integrations, orchestration logic, and workflow pipelines built specifically for a client under a paid engagement are fully owned by the client upon completion and final payment.
                </p>
              </div>

              <div className="p-5 bg-paper/30 brutalist-border rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-signal">
                  <Shield className="w-4 h-4" /> Keystone Proprietary Assets
                </div>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  All website visuals, branding elements, typography combinations, architectural case summaries, methodology frameworks, and proprietary tooling created prior to or outside specific client SOWs remain the sole intellectual property of Keystone Solution.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">04.</span> Booking Inquiries & Acceptable Use
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              When utilizing our scheduling interface or submitting inquiry data, you agree:
            </p>
            <ul className="font-sans text-sm sm:text-base text-charcoal/80 list-disc list-inside flex flex-col gap-2 pl-2">
              <li>To provide accurate, legitimate corporate identification, including valid work email addresses and actual organization names.</li>
              <li>Not to submit automated, robotic, or spam queries through form endpoints.</li>
              <li>Not to attempt penetration testing, reverse engineering, or denial of service against website routing infrastructure.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">05.</span> Confidentiality & Non-Disclosure
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              We recognize that discussion of factory bottlenecks, production metrics, cycle times, and ERP schemas involves sensitive commercial intelligence. Keystone Solution maintains strict confidentiality regarding all information shared during discovery calls and reviews. For formal technical evaluations, bilateral Non-Disclosure Agreements are executed before in-depth technical telemetry or on-site shadowing commences.
            </p>
          </section>

          {/* Section 6 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">06.</span> Disclaimers & Limitation of Liability
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              The website and its materials are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis for informational purposes. While we strive to maintain high accuracy, case study metrics represent specific customer operating environments and do not constitute an explicit warranty of identical results for every enterprise stack.
            </p>
            <p className="font-sans text-xs sm:text-sm text-charcoal/60 leading-relaxed italic">
              In no event shall Keystone Solution or its architects be liable for indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use this website.
            </p>
          </section>

          {/* Section 7 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">07.</span> Contact & Legal Governance
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              These terms are governed by the laws of the United States. For questions concerning these Terms of Service or to initiate a formal vendor compliance review, please contact:
            </p>
            <div className="p-6 bg-offwhite brutalist-border rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
              <div>
                <span className="font-mono text-xs font-bold uppercase text-charcoal block">Keystone Solution — Legal & Architecture</span>
                <span className="font-sans text-sm text-charcoal/70">Forward Deployed Process Architecture</span>
              </div>
              <a
                href="mailto:Architect@Keystonesolution.co"
                className="brutalist-button inline-flex items-center gap-2 text-xs font-mono"
              >
                <Mail className="w-4 h-4" /> Architect@Keystonesolution.co
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TermsOfService
