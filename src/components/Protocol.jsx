import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, index) => {
        // If there's a next card, shrink and fade this card when the next one stacks over it
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(6px)',
            scrollTrigger: {
              trigger: cards[index + 1],
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
            }
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="process"
      className="py-24 px-6 max-w-5xl mx-auto w-full flex flex-col gap-12 text-left"
    >
      <div className="flex flex-col gap-4 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">OPERATIONAL METHODOLOGY</span>
        <h2 className="font-sans text-4xl sm:text-5xl uppercase tracking-tighter">
          THE ROADMAP TO AUTONOMY
        </h2>
        <p className="font-sans text-charcoal/60 text-lg max-w-xl">
          The goal isn't to automate your tasks, it's to transform your processes. Implemented in phases to eliminate risk, maintain complete business continuity, and ensure positive return on investment. Turning business ideas into architected software solutions.
        </p>
      </div>

      {/* Sticky Stacking Grid */}
      <div className="relative flex flex-col gap-24">

        {/* Card 1: Stage 01 Audit */}
        <div className="protocol-card sticky top-28 w-full p-8 bg-offwhite brutalist-border rounded-[2.5rem] shadow-brutalist flex flex-col md:flex-row justify-between items-center gap-8 h-auto md:h-[400px]">
          <div className="flex-1 flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">STAGE 01</span>
              <h3 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight mt-1 mb-4">
                The AI Opportunity Audit
              </h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-md">
                We embed with multiple team members side-by-side to observe their operations & map their workflows. The more precise the audit, the more precise the solution, allowing us to isolate structural anomalies, capture undocumented knowledge, and design high-ROI system integration plans.
              </p>
            </div>
            <div className="font-mono text-[11px] text-charcoal/40 mt-6 md:mt-0 uppercase">
              // Deliverable: Opportunity Map & Bottleneck Report
            </div>
          </div>

          {/* SVG Animation: Rotating Brutalist Gear */}
          <div className="w-48 h-48 flex items-center justify-center bg-paper/20 rounded-2xl brutalist-border relative overflow-hidden flex-shrink-0">
            <svg
              className="w-32 h-32 text-signal animate-[spin_12s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              {/* Outer Gear Ring */}
              <circle cx="50" cy="50" r="30" strokeDasharray="6 4" />
              {/* Inner Gear Ring */}
              <circle cx="50" cy="50" r="20" />
              {/* Center Connection */}
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              {/* Gear Teeth Lines */}
              <line x1="50" y1="10" x2="50" y2="90" strokeWidth="3" />
              <line x1="10" y1="50" x2="90" y2="50" strokeWidth="3" />
              <line x1="22" y1="22" x2="78" y2="78" strokeWidth="3" />
              <line x1="22" y1="78" x2="78" y2="22" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Card 2: Stage 02 Design & Architecture */}
        <div className="protocol-card sticky top-28 w-full p-8 bg-offwhite brutalist-border rounded-[2.5rem] shadow-brutalist flex flex-col md:flex-row justify-between items-center gap-8 h-auto md:h-[400px]">
          <div className="flex-1 flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">STAGE 02</span>
              <h3 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight mt-1 mb-4">
                Architecture & System Build
              </h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-md">
                We design and program a lightweight, model-agnostic operating layer. We interface directly with your database and physical schedule trackers. Zero switching cost, zero legacy system migration.
              </p>
            </div>
            <div className="font-mono text-[11px] text-charcoal/40 mt-6 md:mt-0 uppercase">
              // Deliverable: Sandbox Environment & Custom Agents
            </div>
          </div>

          {/* SVG Animation: Scanning Laser Grid */}
          <div className="w-48 h-48 flex items-center justify-center bg-paper/20 rounded-2xl brutalist-border relative overflow-hidden flex-shrink-0">
            {/* Grid background */}
            <div className="absolute inset-0 brutalist-grid opacity-30" />

            {/* Red Laser Line */}
            <div className="absolute left-0 w-full h-[3px] bg-signal/80 shadow-[0_0_8px_#E63B2E] animate-[scan-line_3s_ease-in-out_infinite]" />

            {/* Central Node Illustration */}
            <svg
              className="w-24 h-24 text-charcoal z-10"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect x="35" y="35" width="30" height="30" strokeDasharray="4 2" />
              <line x1="50" y1="10" x2="50" y2="35" />
              <line x1="50" y1="65" x2="50" y2="90" />
              <line x1="10" y1="50" x2="35" y2="50" />
              <line x1="65" y1="50" x2="90" y2="50" />
              <circle cx="50" cy="10" r="4" fill="currentColor" />
              <circle cx="50" cy="90" r="4" fill="currentColor" />
              <circle cx="10" cy="50" r="4" fill="currentColor" />
              <circle cx="90" cy="50" r="4" fill="currentColor" />
            </svg>

            {/* Custom Scan Line Keyframe Styling */}
            <style>{`
              @keyframes scan-line {
                0% { top: 10%; }
                50% { top: 90%; }
                100% { top: 10%; }
              }
            `}</style>
          </div>
        </div>

        {/* Card 3: Stage 03 Live Deploy */}
        <div className="protocol-card sticky top-28 w-full p-8 bg-offwhite brutalist-border rounded-[2.5rem] shadow-brutalist flex flex-col md:flex-row justify-between items-center gap-8 h-auto md:h-[400px]">
          <div className="flex-1 flex flex-col justify-between h-full py-4 text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">STAGE 03</span>
              <h3 className="font-sans text-2xl sm:text-3xl uppercase tracking-tight mt-1 mb-4">
                Deployment & Autonomous Scale
              </h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-md">
                We launch custom agents into your enterprise, building on top of your existing software. We log exceptions in real-time, scale up pipeline throughput, and optimize agent triggers.
              </p>
            </div>
            <div className="font-mono text-[11px] text-charcoal/40 mt-6 md:mt-0 uppercase">
              // Deliverable: Production Operations Dashboard & Retainer
            </div>
          </div>

          {/* SVG Animation: EKG Waveform */}
          <div className="w-48 h-48 flex items-center justify-center bg-paper/20 rounded-2xl brutalist-border relative overflow-hidden flex-shrink-0">
            <svg
              className="w-40 h-24 text-signal"
              viewBox="0 0 100 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Grid lines */}
              <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(17,17,17,0.1)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Pulsing EKG path */}
              <path
                d="M 0 20 L 25 20 L 30 10 L 35 30 L 40 20 L 55 20 L 60 5 L 65 35 L 70 20 L 100 20"
                strokeDasharray="200"
                strokeDashoffset="200"
                className="animate-[pulse-ekg_3s_linear_infinite]"
              />
            </svg>

            {/* EKG pulse keyframe styling */}
            <style>{`
              @keyframes pulse-ekg {
                to { stroke-dashoffset: -200; }
              }
            `}</style>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Protocol
