import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Database, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSeo } from '../seo/useSeo'

function PrivacyPolicy() {
  useSeo('/privacy')
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
            <span className="text-signal font-bold border-b border-signal pb-0.5">Privacy Policy</span>
            <span className="text-charcoal/30">/</span>
            <Link to="/terms" className="text-charcoal/60 hover:text-signal transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Header Block */}
        <div className="flex flex-col gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold px-3 py-1 border border-signal/20 rounded-full bg-signal/10 w-fit">
            Legal & Data Protection Protocol
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-none">
            Privacy Policy
          </h1>
        </div>

        {/* Metadata sub-bar */}
        <div className="font-mono text-xs text-charcoal/60 flex flex-wrap items-center gap-x-6 gap-y-2 pb-6 mb-10 border-b border-charcoal/10 uppercase tracking-wide">
          <span>Effective: September 2026</span>
          <span>•</span>
          <span>Last Updated: September 2026</span>
          <span>•</span>
          <span>Scope: keystonesolution.co & Client Inquiries</span>
        </div>

        {/* Executive Summary Card */}
        <div className="brutalist-card p-6 md:p-8 bg-paper/20 rounded-3xl mb-12 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-signal/10 border border-signal/20 flex items-center justify-center flex-shrink-0 text-signal">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-xl font-bold uppercase tracking-tight">
                Our Commitment to Data Privacy
              </h3>
              <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
                Keystone Solution develops custom agentic software architectures for industrial manufacturing. We treat corporate and operational data with the same engineering rigor we apply to factory automation. We collect only what is strictly necessary to evaluate, scope, and deliver our services, and we <strong>never sell, broker, or monetize your personal or business data</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="flex flex-col gap-10">
          
          {/* Section 1 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">01.</span> Scope & Purpose
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              This Privacy Policy explains how Keystone Solution (&ldquo;Keystone&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, and protects personal and corporate information gathered through our public website (<code className="font-mono text-xs bg-paper/50 px-1.5 py-0.5 rounded border border-charcoal/10">keystonesolution.co</code>) and associated communication channels, specifically including our schedule request and operational review booking forms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">02.</span> Information We Collect
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed mb-2">
              We collect information in two principal ways: direct disclosures provided by you and standard technical telemetry generated through site interaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-5 bg-paper/30 brutalist-border rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-signal">
                  <Database className="w-4 h-4" /> Direct Form Submissions
                </div>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  When you submit an inquiry or request an operational review, we collect:
                </p>
                <ul className="font-mono text-xs text-charcoal/80 list-disc list-inside flex flex-col gap-1 pl-1">
                  <li>Full Name</li>
                  <li>Work / Corporate Email Address</li>
                  <li>Job Title or Functional Role</li>
                  <li>Company / Organization Name</li>
                  <li>Operational requirements or notes submitted</li>
                </ul>
              </div>

              <div className="p-5 bg-paper/30 brutalist-border rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-signal">
                  <Lock className="w-4 h-4" /> Automated Technical Data
                </div>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  For site security, DDoS mitigation, and diagnostic uptime monitoring:
                </p>
                <ul className="font-mono text-xs text-charcoal/80 list-disc list-inside flex flex-col gap-1 pl-1">
                  <li>Internet Protocol (IP) address</li>
                  <li>Browser type, engine, and version</li>
                  <li>Operating system and device classification</li>
                  <li>Timestamps and request routing metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">03.</span> How We Use Your Information
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              We process your information exclusively for legitimate commercial and engineering purposes:
            </p>
            <ul className="font-sans text-sm sm:text-base text-charcoal/80 list-disc list-inside flex flex-col gap-2 pl-2">
              <li><strong>Inquiry Assessment & Scheduling:</strong> To evaluate your operational stack, verify eligibility for an architectural audit, and route discovery appointments.</li>
              <li><strong>Client Communications:</strong> To send calendar confirmations, follow-up scopes, diagnostic summaries, and technical documentation related to your request.</li>
              <li><strong>Security & Systems Integrity:</strong> To prevent unauthorized automated form abuse, spam, and cyber threats to our infrastructure.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">04.</span> Data Sharing & Third-Party Processors
            </h2>
            <div className="p-4 bg-emerald-50 border border-emerald-500/30 rounded-xl font-mono text-xs text-emerald-800 flex items-center gap-2 mb-2">
              <EyeOff className="w-4 h-4 flex-shrink-0" />
              <span>We do not sell, rent, monetize, or disclose your corporate or personal data to advertising networks or data brokers.</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              We leverage trusted cloud infrastructure partners to deliver our online services under strict data security obligations:
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <div className="border-l-2 border-signal pl-4 py-1">
                <span className="font-mono text-xs font-bold uppercase text-charcoal block">Form Routing Infrastructure</span>
                <span className="font-sans text-xs sm:text-sm text-charcoal/70">Form submissions are transmitted via encrypted HTTPS endpoints (FormSubmit API) directly to our private corporate routing inbox (<code className="font-mono text-xs">Architect@Keystonesolution.co</code>).</span>
              </div>
              <div className="border-l-2 border-signal pl-4 py-1">
                <span className="font-mono text-xs font-bold uppercase text-charcoal block">Inquiry & Scheduling Communications</span>
                <span className="font-sans text-xs sm:text-sm text-charcoal/70">Client appointment scheduling and communication are conducted directly via secure encrypted corporate communications protocols.</span>
              </div>
              <div className="border-l-2 border-signal pl-4 py-1">
                <span className="font-mono text-xs font-bold uppercase text-charcoal block">Hosting & Content Delivery</span>
                <span className="font-sans text-xs sm:text-sm text-charcoal/70">Static assets and web applications are deployed via secure edge hosting networks with global SSL/TLS certificates.</span>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">05.</span> Proprietary Client Manufacturing Data
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              Website inquiries are distinct from client engagement data. Once an engagement progresses to an on-site audit or bespoke agent deployment:
            </p>
            <ul className="font-sans text-sm sm:text-base text-charcoal/80 list-disc list-inside flex flex-col gap-2 pl-2">
              <li>All client operational diagrams, ERP/CMMS schemas, machine logs, and production parameters are strictly covered by bilateral Non-Disclosure Agreements (NDAs).</li>
              <li>Agentic systems operate within your own private cloud or on-premise perimeter. We do not extract or centralize your proprietary plant data.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">06.</span> Data Retention & Your Rights
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              We retain inquiry information only as long as necessary to maintain correspondence and evaluate business engagements. You retain the right to:
            </p>
            <ul className="font-sans text-sm sm:text-base text-charcoal/80 list-disc list-inside flex flex-col gap-2 pl-2">
              <li>Request a copy of any personal or company information we have on file for you.</li>
              <li>Request immediate correction of inaccurate contact records.</li>
              <li>Request complete and permanent deletion of your inquiry data from our communication records.</li>
            </ul>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mt-2">
              To exercise any of these rights, contact us directly at <a href="mailto:Architect@Keystonesolution.co" className="text-signal font-mono font-bold hover:underline">Architect@Keystonesolution.co</a>. Requests are confirmed and fulfilled within 10 business days.
            </p>
          </section>

          {/* Section 7 */}
          <section className="flex flex-col gap-3">
            <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-tight flex items-center gap-2 border-b-2 border-charcoal/20 pb-2">
              <span className="font-mono text-sm text-signal font-bold">07.</span> Contact & Inquiries
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our operational data handling protocols, please reach out to our team:
            </p>
            <div className="p-6 bg-offwhite brutalist-border rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
              <div>
                <span className="font-mono text-xs font-bold uppercase text-charcoal block">Keystone Solution</span>
                <span className="font-sans text-sm text-charcoal/70">Process Architecture & Forward Deployed Engineering</span>
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

export default PrivacyPolicy
