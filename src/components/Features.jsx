import { useState, useEffect } from 'react'
import { Terminal, Zap, TrendingUp } from 'lucide-react'

function Features() {
  // --- 1. Diagnostic Shuffler State ---
  const [shuffleItems, setShuffleItems] = useState([
    { id: 1, type: "MANUAL APPROVAL", val: "Invoice #9084 match threshold", action: "Bypassed & Auto-Approved", status: "RESOLVED" },
    { id: 2, type: "DATA ENTRY", val: "Syncing BoL-890 to SAP ERP ledger", action: "Auto-ingested via OCR agent", status: "RESOLVED" },
    { id: 3, type: "COORDINATION", val: "Carrier port dispatch exception", action: "Re-routed via Slack workflow", status: "RESOLVED" }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffleItems(prev => {
        const next = [...prev]
        const first = next.shift()
        next.push(first)
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // --- 2. Telemetry Typewriter State ---
  const logPool = [
    "[AUDIT] Scanning material ledger system...",
    "[ERP] Connecting to legacy SAP databases...",
    "[AUDIT] Surfaced 12 recurring invoice exception paths.",
    "[AGENT] Matching BoL-890 against PO-3442...",
    "[AGENT] Match complete. Delta 0.00%. Auto-cleared.",
    "[3PL] Syncing dispatch manifest with carrier DHL.",
    "[SLACK] Exception alert pushed to operations team.",
    "[SYSTEM] Optimization threshold: 97.4% accuracy reached."
  ]

  const [logs, setLogs] = useState([])
  const [currentText, setCurrentText] = useState("")
  const [logIndex, setLogIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    // Typewriting effect
    if (logIndex < logPool.length) {
      const currentLog = logPool[logIndex]
      if (charIndex < currentLog.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prev => prev + currentLog[charIndex])
          setCharIndex(prev => prev + 1)
        }, 30) // speed of writing characters
        return () => clearTimeout(timeout)
      } else {
        // Line complete, push to logs list after a small delay
        const timeout = setTimeout(() => {
          setLogs(prev => {
            const updated = [...prev, currentLog]
            // Keep only the last 4 log lines
            if (updated.length > 4) updated.shift()
            return updated
          })
          setCurrentText("")
          setCharIndex(0)
          setLogIndex(prev => (prev + 1) % logPool.length)
        }, 1000)
        return () => clearTimeout(timeout)
      }
    }
  }, [logIndex, charIndex])



  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-4 mb-16 text-left max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">CORE CAPABILITIES</span>
        <h2 className="font-sans text-4xl sm:text-5xl uppercase tracking-tighter">
          INTELLIGENT SYSTEMS, NOT POINT FIXES
        </h2>
        <p className="font-sans text-charcoal/60 text-lg">
          We construct tailored, automated workflows that adapt to your raw data, resolve exceptions, and synchronize your production schedule.
        </p>
      </div>

      {/* Grid of 3 Interactive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Diagnostic Shuffler */}
        <div className="brutalist-card flex flex-col justify-between h-[450px]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-signal" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold">Reduce Operational Overhead</h3>
            </div>
            <p className="font-sans text-sm text-charcoal/70 mb-8">
              AI agents remove manual coordination, approvals, and repetitive operational work across systems.
            </p>
          </div>
          
          {/* Deck Container */}
          <div className="relative h-56 w-full flex justify-center items-center">
            {shuffleItems.map((item, index) => {
              // Stack configuration
              let zIndex = 0
              let translateY = 0
              let scale = 1
              let opacity = 1

              if (index === 0) {
                zIndex = 30
                translateY = 0
                scale = 1
                opacity = 1
              } else if (index === 1) {
                zIndex = 20
                translateY = 16
                scale = 0.95
                opacity = 0.7
              } else {
                zIndex = 10
                translateY = 32
                scale = 0.9
                opacity = 0.4
              }

              return (
                <div
                  key={item.id}
                  style={{
                    zIndex,
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                  }}
                  className="absolute w-[90%] max-w-[280px] p-4 bg-offwhite brutalist-border shadow-brutalist rounded-2xl transition-all duration-500 ease-in-out flex flex-col justify-between h-36"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] bg-charcoal text-offwhite px-2 py-0.5 rounded font-bold">
                      {item.type}
                    </span>
                    <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded ${
                      item.status === 'RESOLVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="text-left mt-2">
                    <div className="font-sans text-xs font-bold truncate">{item.val}</div>
                    <div className="font-mono text-[10px] text-charcoal/60 mt-1">{item.action}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Card 2: Telemetry Typewriter */}
        <div className="brutalist-card flex flex-col justify-between h-[450px]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-signal" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold">Telemetry Live Feed</h3>
            </div>
            <p className="font-sans text-sm text-charcoal/70 mb-6">
              Continuous background audit logging. Directly traces raw physical ingestion files, processing states, and API triggers.
            </p>
          </div>

          {/* Terminal Box */}
          <div className="bg-charcoal text-emerald-400 p-4 rounded-2xl brutalist-border font-mono text-xs text-left h-64 flex flex-col justify-between relative overflow-hidden">
            {/* Topbar */}
            <div className="flex justify-between items-center pb-2 border-b border-emerald-500/20 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-wider">LIVE TELEMETRY</span>
              </div>
              <span className="text-[9px] text-emerald-400/40">NODE-04</span>
            </div>

            {/* Logs area */}
            <div className="flex-1 flex flex-col gap-1 justify-end font-mono">
              {logs.map((log, index) => (
                <div key={index} className="opacity-60 truncate">
                  {log}
                </div>
              ))}
              <div className="flex items-center text-emerald-300">
                <span>{currentText}</span>
                <span className="w-1.5 h-4 bg-emerald-400 ml-0.5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Scale Without Hiring */}
        <div className="brutalist-card flex flex-col justify-between h-[450px] relative">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-signal" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold">Scale Without Hiring</h3>
            </div>
            <p className="font-sans text-sm text-charcoal/70 mb-8">
              Operational output increases without adding headcount or new coordination layers.
            </p>
          </div>

          {/* Throughput Telemetry Container */}
          <div className="relative border border-charcoal/10 rounded-2xl bg-paper/30 p-6 flex flex-col justify-between h-56 overflow-hidden text-left">
            <div className="flex justify-between items-center border-b border-charcoal/10 pb-3 mb-2">
              <span className="font-mono text-[9px] uppercase text-charcoal/40 font-bold">Throughput Telemetry</span>
              <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-signal bg-signal/15 px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 bg-signal rounded-full animate-ping" />
                SCALE: 12.8x
              </div>
            </div>
            
            <div className="flex-grow flex flex-col justify-center gap-3">
              {/* Track 1 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[9px] font-mono text-charcoal/60">
                  <span>PIPELINE_ALPHA (Intake)</span>
                  <span className="text-charcoal font-bold">980 jobs/hr</span>
                </div>
                <div className="h-2 w-full bg-charcoal/5 border border-charcoal/10 rounded-full overflow-hidden">
                  <div className="h-full bg-signal w-4/5 animate-[scale-bar-1_4s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Track 2 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[9px] font-mono text-charcoal/60">
                  <span>PIPELINE_BETA (Routing)</span>
                  <span className="text-charcoal font-bold">1,420 jobs/hr</span>
                </div>
                <div className="h-2 w-full bg-charcoal/5 border border-charcoal/10 rounded-full overflow-hidden">
                  <div className="h-full bg-signal w-[90%] animate-[scale-bar-2_5s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Track 3 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[9px] font-mono text-charcoal/60">
                  <span>PIPELINE_GAMMA (Logistics)</span>
                  <span className="text-charcoal font-bold">2,100 jobs/hr</span>
                </div>
                <div className="h-2 w-full bg-charcoal/5 border border-charcoal/10 rounded-full overflow-hidden">
                  <div className="h-full bg-signal w-[75%] animate-[scale-bar-3_3s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>

            {/* Custom Animation Keyframes */}
            <style>{`
              @keyframes scale-bar-1 {
                0%, 100% { width: 40%; }
                50% { width: 95%; }
              }
              @keyframes scale-bar-2 {
                0%, 100% { width: 20%; }
                50% { width: 90%; }
              }
              @keyframes scale-bar-3 {
                0%, 100% { width: 50%; }
                50% { width: 85%; }
              }
            `}</style>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
