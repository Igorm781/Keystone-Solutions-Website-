import { Link } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Philosophy from '../components/Philosophy'
import Protocol from '../components/Protocol'
import FAQ from '../components/FAQ'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-offwhite text-charcoal relative flex flex-col items-center">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full flex-grow flex flex-col items-center">
        {/* 1. Hero Shot */}
        <Hero />

        {/* 2. Process Protocol Roadmap */}
        <Protocol />

        {/* 3. Features interactive artifacts */}
        <Features />

        {/* 4. Philosophy Manifesto banner */}
        <Philosophy />

        {/* 5. Case Study Homepage Teaser Section */}
        <section id="proof" className="py-24 px-6 max-w-5xl mx-auto w-full text-left">
          <div className="flex flex-col gap-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">CASE STUDY IN-PROGRESS</span>
            <h2 className="font-sans text-4xl sm:text-5xl uppercase tracking-tighter">
              PROOF OF CONCEPT
            </h2>
            <p className="font-sans text-charcoal/60 text-lg max-w-xl">
              We focus on measurable outcomes. Here is how a custom agentic operating layer optimized operations for a heavy industrial manufacturer.
            </p>
          </div>

          {/* Teaser Box */}
          <div className="brutalist-card p-8 bg-offwhite relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8">
            <div className="absolute top-0 right-0 w-24 h-24 bg-signal/5 rounded-bl-full pointer-events-none" />
            
            {/* Core copy */}
            <div className="flex-1 flex flex-col justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-signal" />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold">Maintenance & Labor Overhaul</span>
                </div>
                
                <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4 text-left">
                  MAINTENANCE CLERK & PM ASSET TRACKING OVERHAUL
                </h3>
                
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-lg mb-6 text-left">
                  For a mid-market heavy production industrial manufacturer, we shadowed workflows and deployed custom agents to automate labor-to-asset tracking, handling <strong>more than 90% of the responsibilities</strong> of a Maintenance Clerk position.
                </p>
              </div>

              <Link
                to="/case-study"
                className="brutalist-button inline-flex items-center gap-2 mt-4 text-xs font-mono font-bold"
              >
                VIEW FULL ARCHITECTURE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Teaser Metric Tiles */}
            <div className="w-full md:w-[320px] flex flex-col gap-4 justify-center">
              
              {/* Tile 1 */}
              <div className="p-4 bg-paper/20 rounded-2xl border border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-charcoal/40 uppercase block">Clerk Tasks Automated</span>
                  <span className="font-sans text-xl font-bold text-charcoal">90%+</span>
                </div>
                <div className="text-right font-mono text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">
                  vs 0%
                </div>
              </div>

              {/* Tile 2 */}
              <div className="p-4 bg-paper/20 rounded-2xl border border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-charcoal/40 uppercase block">Workflow Steps</span>
                  <span className="font-sans text-xl font-bold text-charcoal">12 Steps</span>
                </div>
                <div className="text-right font-mono text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">
                  -40% vs 20
                </div>
              </div>

              {/* Tile 3 */}
              <div className="p-4 bg-paper/20 rounded-2xl border border-charcoal/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-charcoal/40 uppercase block">Labor Tracking Accuracy</span>
                  <span className="font-sans text-xl font-bold text-charcoal">99.8%</span>
                </div>
                <div className="text-right font-mono text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">
                  vs Faulty
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. FAQ Block */}
        <FAQ />

        {/* 7. Call Booking Schedule */}
        <Booking />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
