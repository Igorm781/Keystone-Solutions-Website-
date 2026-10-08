import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, PhoneCall, ArrowRight } from 'lucide-react'

function Booking() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', company: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.role && formData.company) {
      setIsSubmitting(true)
      setError('')
      fetch("https://formsubmit.co/ajax/architect@keystonesolution.co", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Role: formData.role,
          Company: formData.company,
          _subject: "New Schedule Request - Keystone Solution",
          _replyto: formData.email,
          _captcha: "false"
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit form')
        }
        return response.json()
      })
      .then((data) => {
        if (data && (data.success === 'false' || data.success === false)) {
          throw new Error(data.message || 'Failed to submit form')
        }
        setSubmitted(true)
      })
      .catch((err) => {
        setError(err.message && err.message !== 'Failed to submit form' ? err.message : 'Something went wrong. Please try again or contact us directly.')
        console.error(err)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
    }
  }

  return (
    <section id="book" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full">
      <div className="relative w-full p-6 sm:p-8 md:p-12 bg-offwhite brutalist-border rounded-3xl sm:rounded-[3rem] shadow-brutalist overflow-hidden">
        
        {/* Grid helper */}
        <div className="absolute inset-0 brutalist-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Text Content Block */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-signal rounded-full animate-ping" />
                Next Action
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter mb-4 leading-none">
                BUILD A LIGHTER Stack.
              </h2>
              <p className="font-sans text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-md">
                Please fill in relevant information that will allow us to route your call appropriately.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="w-full lg:w-[440px] p-5 sm:p-6 bg-paper/30 brutalist-border rounded-2xl sm:rounded-3xl flex flex-col justify-between relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-2 border-b border-charcoal/10 pb-3 mb-2">
                  <Calendar className="w-5 h-5 text-signal" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold">Schedule Operational Review</h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase font-bold text-charcoal/60">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl brutalist-border font-sans text-sm focus:outline-none focus:ring-1 focus:ring-signal focus:bg-offwhite"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase font-bold text-charcoal/60">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl brutalist-border font-sans text-sm focus:outline-none focus:ring-1 focus:ring-signal focus:bg-offwhite"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="font-mono text-[10px] uppercase font-bold text-charcoal/60">
                    Your Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    autoComplete="organization-title"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl brutalist-border font-sans text-sm focus:outline-none focus:ring-1 focus:ring-signal focus:bg-offwhite"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="font-mono text-[10px] uppercase font-bold text-charcoal/60">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl brutalist-border font-sans text-sm focus:outline-none focus:ring-1 focus:ring-signal focus:bg-offwhite"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brutalist-button w-full mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'REQUEST SCHEDULE'} 
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
                {error && (
                  <p className="text-red-600 font-mono text-[10px] uppercase text-center mt-2 font-bold">
                    {error}
                  </p>
                )}

                <div className="text-center mt-3 pt-3 border-t border-charcoal/10 font-mono text-[10px] sm:text-[11px] text-charcoal/60 uppercase">
                  <span>Direct Inquiries: <a href="mailto:Architect@Keystonesolution.co" className="text-signal hover:underline font-bold">Architect@Keystonesolution.co</a></span>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 gap-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-500 text-emerald-600 shadow-brutalist">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h3 className="font-sans text-xl font-bold uppercase tracking-tight">Audit Requested</h3>
                <p className="font-sans text-sm text-charcoal/60 max-w-xs">
                  Thank you, {formData.name}. We will contact you within 2 business hours at <span className="font-mono text-xs font-bold text-charcoal">{formData.email}</span> to confirm your scheduling time. You can also reach our team directly at <a href="mailto:Architect@Keystonesolution.co" className="text-signal font-mono font-bold hover:underline">Architect@Keystonesolution.co</a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', role: '', company: '' })
                  }}
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
