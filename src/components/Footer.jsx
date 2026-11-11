import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `/#${targetId}`)
      }
    } else {
      e.preventDefault()
      navigate(`/#${targetId}`)
    }
  }

  return (
    <footer className="w-full bg-charcoal text-offwhite border-t-2 border-charcoal rounded-t-3xl sm:rounded-t-[3rem] relative overflow-hidden pt-14 sm:pt-16 pb-8 px-4 sm:px-6 md:px-8">
      {/* Background grid texture overlay */}
      <div className="absolute inset-0 brutalist-grid-dark pointer-events-none opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pb-12 border-b border-offwhite/10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={handleScrollToTop}
              className="font-mono text-2xl font-bold tracking-tighter uppercase flex items-center gap-2 group"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Top Bar */}
                <path d="M 9.9 2.8 L 14.1 2.8 L 14.1 3.5 L 9.9 3.5 Z" fill="currentColor" />
                {/* Keystone (Central block) */}
                <path d="M 10.3 4.75 L 13.7 4.75 L 12.99 8.33 L 11.01 8.33 Z" fill="currentColor" />
                {/* Left Voussoir 1 */}
                <path d="M 9.28 5.98 L 10.15 9.5 L 8.36 10.3 L 6.2 7.4 Z" fill="currentColor" />
                {/* Left Voussoir 2 */}
                <path d="M 5.46 8.14 L 7.68 10.92 L 6.44 12.4 L 3.23 10.8 Z" fill="currentColor" />
                {/* Left Voussoir 3 */}
                <path d="M 2.8 11.72 L 6.07 13.27 L 5.64 15.12 L 2.0 15.06 Z" fill="currentColor" />
                {/* Left Pillar */}
                <path d="M 2.25 16.41 L 5.46 16.41 L 5.46 20.98 L 2.25 20.98 Z" fill="currentColor" />
                
                {/* Right Voussoir 1 */}
                <path d="M 14.72 5.98 L 17.8 7.4 L 15.64 10.3 L 13.85 9.5 Z" fill="currentColor" />
                {/* Right Voussoir 2 */}
                <path d="M 18.54 8.14 L 20.77 10.8 L 17.56 12.4 L 16.32 10.92 Z" fill="currentColor" />
                {/* Right Voussoir 3 */}
                <path d="M 21.2 11.72 L 22.0 15.06 L 18.36 15.12 L 17.93 13.27 Z" fill="currentColor" />
                {/* Right Pillar */}
                <path d="M 18.54 16.41 L 21.75 16.41 L 21.75 20.98 L 18.54 20.98 Z" fill="currentColor" />
              </svg>
              KEYSTONE <span className="hidden sm:inline font-sans font-light text-sm tracking-widest opacity-60">SOLUTION</span>
            </Link>
            <p className="font-sans text-sm text-offwhite/60 max-w-sm leading-relaxed">
              AI integration & architecture for production manufacturers. We build custom agentic systems that run operations end-to-end.
            </p>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-signal">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm">
              <Link to="/" onClick={handleScrollToTop} className="hover:text-signal transition-colors">Home</Link>
              <Link to="/case-study" className="hover:text-signal transition-colors">Case Study</Link>
              <a href="/#process" onClick={(e) => handleNavClick(e, 'process')} className="hover:text-signal transition-colors">Process</a>
              <a href="/#faq" onClick={(e) => handleNavClick(e, 'faq')} className="hover:text-signal transition-colors">FAQ</a>
              <a href="/#book" onClick={(e) => handleNavClick(e, 'book')} className="hover:text-signal transition-colors">Book a Call</a>
            </div>
          </div>
          
          {/* Column 3: Contact & Status */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-signal">Contact & Operations</h4>
            
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-offwhite/50 uppercase">Direct Architecture Inquiries</span>
              <a 
                href="mailto:Architect@Keystonesolution.co" 
                className="font-mono text-sm text-offwhite hover:text-signal transition-colors font-bold tracking-tight inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-signal" />
                Architect@Keystonesolution.co
              </a>
            </div>

            {/* Status indicator with pulsing green dot */}
            <div className="flex items-center gap-3 px-4 py-2 border border-offwhite/10 bg-offwhite/5 rounded-xl w-fit mt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-bold tracking-wider text-emerald-400">SYSTEM OPERATIONAL</span>
            </div>
            
            <p className="font-mono text-xs text-offwhite/50">
              AI Integration & Architecture for Manufacturers<br />
              Zero migrations • Full code ownership
            </p>
          </div>
          
        </div>
        
        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 font-mono text-xs text-offwhite/40">
          <div>
            © {currentYear} Keystone Solution. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-offwhite transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-offwhite transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
