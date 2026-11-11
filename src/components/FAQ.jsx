import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "What happens on the discovery call?",
      a: "We discuss your current production bottlenecks. No high-pressure sales pitch—just mapping out whether custom agentic architecture is a fit for your factory scale. If there's an opportunity, we map out what a paid audit would look like."
    },
    {
      q: "How long does a full deployment take?",
      a: "A typical engagement runs 8 to 12 weeks from initial audit to full production rollout, depending on the complexity of your systems in place. We target shipping your first pilot agent in Month 2 to prove value early before expanding to full multi-agent deployment in Month 3."
    },
    {
      q: "How much of our team's time is required?",
      a: "We embed with minimal disruption. We shadow your team while they work, so it costs them very little time; we ask for ~4 hours of dedicated SME interviews plus short weekly reviews. We write the code; you keep running the plant."
    },
    {
      q: "Who owns the code and the agents?",
      a: "You do. Unlike enterprise SaaS platforms that lock you into monthly licenses, you own the code, the custom integrations, the prompts and the agent configurations. If our contract ends, your systems continue to run exactly as they are without interruption."
    },
    {
      q: "How does pricing work?",
      a: "Pricing is scoped to the work and to each company. Our services vary in price, but are scoped and presented once the initial meeting has occurred. If you proceed with the build, we quote a fixed price for implementation. Ongoing support is available as an optional monthly retainer. We don't charge per-agent licenses or seat fees."
    }
  ]

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full text-left">
      <div className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-16 text-left">
        <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">REASSURANCE PROTOCOLS</span>
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter">
          FREQUENTLY RAISED OBJECTIONS
        </h2>
        <p className="font-sans text-charcoal/60 text-base sm:text-lg max-w-xl">
          We answer our clients' questions honestly. No hidden software fees, no vendor lock-in.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className="brutalist-card rounded-2xl p-0 overflow-hidden bg-offwhite transition-all duration-300"
            >
              {/* Question Clickable Area */}
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-sans text-base sm:text-lg font-bold text-charcoal">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 ml-4 p-1 rounded-full border border-charcoal/10 bg-paper/30">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-signal" />
                  ) : (
                    <Plus className="w-4 h-4 text-charcoal" />
                  )}
                </span>
              </button>

              {/* Answer Area */}
              <div
                className={`grid transition-all duration-300 ease-in-out border-t border-charcoal/10 bg-paper/20 ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
