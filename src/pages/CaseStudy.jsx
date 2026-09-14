import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Server, CheckCircle, HelpCircle, DollarSign, Database, TrendingUp, AlertTriangle } from 'lucide-react'
import { caseStudy } from '../data/caseStudyData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CaseStudy() {
  return (
    <div className="min-h-screen bg-offwhite text-charcoal relative flex flex-col items-center">
      {/* Shared Nav */}
      <Navbar />

      <main className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-24 pt-36 pb-24 flex-grow text-left">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-charcoal/60 hover:text-signal transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </Link>

        {/* 1. Label + Title */}
        <div className="flex flex-col gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold px-3 py-1 border border-signal/20 rounded-full bg-signal/10 w-fit">
            {caseStudy.label}
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-none max-w-4xl">
            {caseStudy.title}
          </h1>
        </div>

        {/* 2. One-line Descriptor */}
        <p className="font-mono text-sm text-charcoal/60 border-b border-charcoal/10 pb-6 mb-12 uppercase tracking-wide">
          {caseStudy.descriptor}
        </p>

        {/* 3. Company Profile Block */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-5 bg-paper/20 rounded-2xl border border-charcoal/10 flex items-start gap-4">
            <DollarSign className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
            <div>
              <span className="font-mono text-[9px] uppercase text-charcoal/40 block">Annual Org Scale</span>
              <span className="font-sans font-bold text-base text-charcoal">{caseStudy.profile.revenue}</span>
            </div>
          </div>
          <div className="p-5 bg-paper/20 rounded-2xl border border-charcoal/10 flex items-start gap-4">
            <Clock className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
            <div>
              <span className="font-mono text-[9px] uppercase text-charcoal/40 block">Target Department Scope</span>
              <span className="font-sans font-bold text-base text-charcoal">{caseStudy.profile.teamSize}</span>
            </div>
          </div>
          <div className="p-5 bg-paper/20 rounded-2xl border border-charcoal/10 flex items-start gap-4">
            <Database className="w-6 h-6 text-signal mt-1 flex-shrink-0" />
            <div className="w-full">
              <span className="font-mono text-[9px] uppercase text-charcoal/40 block mb-2">Associated Tech Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {(Array.isArray(caseStudy.profile.techStack) ? caseStudy.profile.techStack : [caseStudy.profile.techStack]).map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-offwhite border border-charcoal/15 font-mono text-xs font-semibold text-charcoal shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Challenge Section */}
        <section className="mb-16">
          <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight border-b-2 border-charcoal pb-2 mb-6">
            The Operational Challenge
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                {caseStudy.challenge.description}
              </p>
            </div>
            
            {/* Metric Column */}
            <div className="w-full lg:w-80 flex flex-col gap-4">
              {caseStudy.challenge.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 bg-charcoal text-offwhite brutalist-border shadow-brutalist rounded-2xl flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-offwhite/60">{metric.label}</span>
                  <span className="font-sans text-2xl font-bold text-signal">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The Audit Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-charcoal pb-2 mb-6">
            <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight">
              The Mapping Audit
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold mt-2 sm:mt-0">
              Audit Duration: {caseStudy.audit.duration}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-6">
                {caseStudy.audit.description}
              </p>
            </div>
            
            {/* Findings List */}
            <div className="w-full lg:w-80 p-5 bg-paper/20 rounded-2xl border border-charcoal/10 flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase font-bold text-charcoal/50 block tracking-widest border-b border-charcoal/10 pb-2">
                Systemic Audit Findings
              </span>
              <ul className="flex flex-col gap-3 font-sans text-xs text-charcoal/70 leading-relaxed">
                {caseStudy.audit.findings.map((finding, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 bg-signal rounded-full mt-1.5 flex-shrink-0" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. The Agentic Architecture Section */}
        <section className="mb-16">
          <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight border-b-2 border-charcoal pb-2 mb-6">
            The Custom Operating Layer
          </h2>
          <p className="font-sans text-base text-charcoal/80 leading-relaxed mb-8">
            {caseStudy.architecture.description}
          </p>
          
          {/* Agent Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.architecture.agents.map((agent, idx) => (
              <div key={idx} className="brutalist-card bg-offwhite flex flex-col justify-between h-auto min-h-[220px]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-signal font-bold block mb-1">
                    AGENT 0{idx + 1}
                  </span>
                  <h4 className="font-sans text-lg font-bold uppercase tracking-tight mb-3">
                    {agent.name}
                  </h4>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">
                    {agent.role}
                  </p>
                </div>
                
                <div className="border-t border-charcoal/10 pt-3 mt-4">
                  <span className="font-mono text-[9px] text-charcoal/40 uppercase block">Telemetry capability</span>
                  <p className="font-mono text-[10px] text-charcoal font-bold mt-0.5">
                    {agent.capability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Implementation Timeline Section */}
        <section className="mb-16">
          <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight border-b-2 border-charcoal pb-2 mb-6">
            Deployment Timeline
          </h2>
          <div className="overflow-x-auto brutalist-border rounded-2xl bg-offwhite shadow-brutalist">
            <table className="w-full text-left font-sans border-collapse">
              <thead>
                <tr className="bg-charcoal text-offwhite border-b border-charcoal font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 w-28">Timeline</th>
                  <th className="p-4 w-44">Deployment Focus</th>
                  <th className="p-4">Key Results & Accuracy Ramp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10 text-sm">
                {caseStudy.timeline.map((item, idx) => (
                  <tr key={idx} className="hover:bg-paper/20 transition-colors">
                    <td className="p-4 font-mono font-bold text-signal">{item.month}</td>
                    <td className="p-4 font-bold uppercase tracking-tight">{item.focus}</td>
                    <td className="p-4 text-charcoal/70 leading-relaxed">{item.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. Results Metric Tiles Section */}
        <section className="mb-16">
          <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight border-b-2 border-charcoal pb-2 mb-6">
            Operational Results
          </h2>
          
          {/* 6 Results Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="brutalist-card flex flex-col justify-between h-44">
                <div>
                  <span className="font-mono text-[9px] text-charcoal/40 uppercase tracking-wider block">
                    {result.label}
                  </span>
                  <div className="flex flex-col gap-0.5 mt-2">
                    <span className="font-sans text-2xl sm:text-3xl font-bold text-signal">{result.after}</span>
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase">
                      Before: <span className="line-through">{result.before}</span>
                    </span>
                  </div>
                </div>
                <div className="font-mono text-[10px] text-charcoal/60 border-t border-charcoal/10 pt-2 uppercase">
                  {result.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. ROI Value & Drivers Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-charcoal pb-2 mb-6">
            <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight">
              Financial ROI & Math
            </h2>
            <div className="font-sans text-lg sm:text-2xl font-bold text-charcoal mt-2 sm:mt-0">
              Est. Year-One Savings: <span className="text-emerald-600">{caseStudy.roi.value}</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Drivers list table */}
            <div className="flex-1 overflow-hidden border-2 border-charcoal rounded-2xl bg-offwhite shadow-brutalist">
              <table className="w-full text-left font-sans border-collapse">
                <thead>
                  <tr className="bg-charcoal text-offwhite border-b border-charcoal font-mono text-[10px] uppercase tracking-wider">
                    <th className="p-3">Value Driver</th>
                    <th className="p-3 w-28">Amount</th>
                    <th className="p-3">Sourcing Math</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10 text-xs">
                  {caseStudy.roi.drivers.map((driver, idx) => (
                    <tr key={idx} className="hover:bg-paper/20 transition-colors">
                      <td className="p-3 font-bold uppercase tracking-tight">{driver.driver}</td>
                      <td className="p-3 font-mono font-bold text-emerald-600">{driver.amount}</td>
                      <td className="p-3 text-charcoal/70 leading-relaxed">{driver.method}</td>
                    </tr>
                  ))}
                  <tr className="bg-paper/40 font-mono text-[11px] border-t-2 border-charcoal/20">
                    <td className="p-3 font-bold uppercase">Gross Projected Savings</td>
                    <td className="p-3 font-bold text-charcoal">{caseStudy.roi.gross}</td>
                    <td className="p-3 text-charcoal/60">Sum of identified gross value drivers</td>
                  </tr>
                  <tr className="bg-amber-50/50 font-mono text-[11px] text-amber-900">
                    <td className="p-3 font-bold uppercase">15% Discount Buffer</td>
                    <td className="p-3 font-bold text-amber-700">{caseStudy.roi.discount}</td>
                    <td className="p-3 text-amber-800/70">Conservative variance buffer deducted</td>
                  </tr>
                  <tr className="bg-charcoal text-offwhite font-mono text-xs font-bold">
                    <td className="p-3 uppercase">Net Realized Savings</td>
                    <td className="p-3 text-emerald-400">{caseStudy.roi.value}</td>
                    <td className="p-3 text-offwhite/70">Conservative Year-One Value</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Assumptions explanation box */}
            <div className="w-full lg:w-80 p-5 bg-paper/20 rounded-2xl border border-charcoal/10 flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase font-bold text-charcoal/50 block tracking-widest border-b border-charcoal/10 pb-2">
                Stated Assumptions
              </span>
              <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                {caseStudy.roi.methodology}
              </p>
              <div className="flex items-start gap-2 text-amber-700 bg-amber-50 border border-amber-200 p-3 rounded-xl">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-mono text-[9px] uppercase leading-relaxed font-bold">
                  Under-claiming policy: we apply a strict 15% discount buffer.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Cross-Department Impact Section */}
        <section className="mb-20">
          <h2 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight border-b-2 border-charcoal pb-2 mb-6">
            Second-Order Effects
          </h2>
          <div className="p-6 bg-paper/20 rounded-2xl border border-charcoal/10 text-left">
            <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed">
              {caseStudy.crossImpact}
            </p>
          </div>
        </section>

        {/* 11. Final CTA Band */}
        <section className="w-full p-8 md:p-12 bg-charcoal text-offwhite rounded-[2.5rem] relative overflow-hidden brutalist-border shadow-brutalist">
          <div className="absolute inset-0 brutalist-grid-dark opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-4xl uppercase tracking-tighter leading-none">
              Deploy similar systems on your floor.
            </h3>
            <p className="font-sans text-sm text-offwhite/70 leading-relaxed">
              We audit operations, architecture bespoke agents, and synchronize legacy physical systems. Zero software lock-in, full code ownership.
            </p>
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="brutalist-button py-3 px-8 text-xs font-mono tracking-wider"
            >
              SCHEDULE AN AUDIT
            </Link>
          </div>
        </section>

      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  )
}

export default CaseStudy
