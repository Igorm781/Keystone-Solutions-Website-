import { useState } from 'react'
import { Calendar, PhoneCall, Check, ArrowRight } from 'lucide-react'

function Booking() {
  const [formData, setFormData] = useState({ name: '', email: '', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="book" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="relative w-full p-8 md:p-12 bg-offwhite brutalist-border rounded-[3rem] shadow-brutalist overflow-hidden">
        
        {/* Grid helper */}
        <div className="absolute inset-0 brutalist-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Text Content Block */}
          <div className="flex-1 flex flex-col justify-between text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-signal rounded-full animate-ping" />
                Next Action
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl uppercase tracking-tighter mb-4 leading-none">
                BUILD A LIGHTER Stack.
              </h2>
              <p className="font-sans text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-md mb-8">
                Book a 30-minute operational audit call. We will examine your manual processes, document exceptions, and assess whether a custom agentic layer is viable for your organization.
              </p>
            </div>

            {/* Credibility Notes */}
            <div className="flex flex-col gap-3 border-t border-charcoal/10 pt-6">
              <div className="flex items-center gap-2.5 font-mono text-xs text-charcoal/60">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% technical call with an FDE</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono text-xs text-charcoal/60">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Zero sales pitch; technical viability focus</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono text-xs text-charcoal/60">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Confidential NDA-protected audit parameters</span>
              </div>
            </div>
          </div>

          {/* Cal.com Embed Placeholder / Form Card */}
          <div className="w-full lg:w-[450px] p-6 bg-paper/30 brutalist-border rounded-3xl flex flex-col justify-between relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3 mb-2">
                  <Calendar className="w-5 h-5 text-signal" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold">Schedule Operational Review</h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase font-bold text-charcoal/60">
                    Contact Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full px-4 py-2.5 rounded-xl brutalist-border font-sans text-sm focus:outline-none focus:ring-1 focus:ring-signal focus:bg-offwhite"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase font-bold text-charcoal/60">
                    Work Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. m.santos@factorycorp.com"
                    className="w-full px-4 py-2.5 rounded-xl brutalist-border font-sans text-sm focus:outline-none focus:ring-1 focus:ring-signal focus:bg-offwhite"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="note" className="font-mono text-[10px] uppercase font-bold text-charcoal/60">
                    Operational Bottleneck (Optional)
                  </label>
                  <textarea
                    id="note"
                    rows="3"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="e.g. ERP inventory updates delay cargo scheduling by 8 hours..."
                    className="w-full px-4 py-2.5 rounded-xl brutalist-border font-sans text-sm focus:outline-none focus:ring-1 focus:ring-signal focus:bg-offwhite resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="brutalist-button w-full mt-4 flex items-center justify-center gap-2"
                >
                  REQUEST SCHEDULE <ArrowRight className="w-4 h-4" />
                </button>
                
                <span className="font-mono text-[9px] text-charcoal/40 text-center block mt-1 uppercase">
                  or calendar redirects to: <a href="https://cal.com/keystone" target="_blank" rel="noreferrer" className="text-signal hover:underline">cal.com/keystone</a>
                </span>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 gap-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-500 text-emerald-600 shadow-brutalist">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h3 className="font-sans text-xl font-bold uppercase tracking-tight">Audit Requested</h3>
                <p className="font-sans text-sm text-charcoal/60 max-w-xs">
                  Thank you, {formData.name}. We will contact you within 2 business hours at <span className="font-mono text-xs font-bold text-charcoal">{formData.email}</span> to confirm your scheduling time.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="brutalist-button-secondary py-2 px-6 mt-4 text-xs font-mono"
                >
                  SCHEDULE ANOTHER
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Booking
