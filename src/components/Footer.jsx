import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="w-full bg-charcoal text-offwhite border-t-2 border-charcoal rounded-t-[3rem] relative overflow-hidden pt-16 pb-8 px-6 sm:px-12 md:px-24">
      {/* Background grid texture overlay */}
      <div className="absolute inset-0 brutalist-grid-dark pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-offwhite/10">
          
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
                {/* Left Pillar */}
                <path d="M 2 12 L 4.5 12 L 4.5 19 L 2 19 Z" fill="currentColor" />
                {/* Left Voussoir 2 */}
                <path d="M 3.2 7.7 L 5.6 5 L 7 9.5 L 5 11.5 Z" fill="currentColor" />
                {/* Left Voussoir 1 */}
                <path d="M 6 4.5 L 9.5 3.3 L 10.3 8.3 L 7.3 9 Z" fill="currentColor" />
                
                {/* Right Pillar */}
                <path d="M 19.5 12 L 22 12 L 22 19 L 19.5 19 Z" fill="currentColor" />
                {/* Right Voussoir 2 */}
                <path d="M 18.4 5 L 20.8 7.7 L 19 11.5 L 17 9.5 Z" fill="currentColor" />
                {/* Right Voussoir 1 */}
                <path d="M 14.5 3.3 L 18 4.5 L 16.7 9 L 13.7 8.3 Z" fill="currentColor" />
                
                {/* Keystone (Central Red block) */}
                <path d="M 10 3 L 14 3 L 13.2 8 L 10.8 8 Z" fill="#E63B2E" />
              </svg>
              KEYSTONE <span className="hidden sm:inline font-sans font-light text-sm tracking-widest opacity-60">SOLUTION</span>
            </Link>
            <p className="font-sans text-sm text-offwhite/60 max-w-sm leading-relaxed">
              Process architect and forward-deployed engineering for production manufacturers. We build custom agentic systems that run operations end-to-end.
            </p>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-signal">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm">
              <Link to="/" onClick={handleScrollToTop} className="hover:text-signal transition-colors">Home</Link>
              <Link to="/case-study" className="hover:text-signal transition-colors">Case Study</Link>
              <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="hover:text-signal transition-colors">Process</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="hover:text-signal transition-colors">FAQ</a>
              <a href="#book" onClick={(e) => handleNavClick(e, 'book')} className="hover:text-signal transition-colors">Book a Call</a>
            </div>
          </div>
          
          {/* Column 3: Contact & Status */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-signal">System Status</h4>
            
            {/* Status indicator with pulsing green dot */}
            <div className="flex items-center gap-3 px-4 py-2 border border-offwhite/10 bg-offwhite/5 rounded-xl w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-bold tracking-wider text-emerald-400">SYSTEM OPERATIONAL</span>
            </div>
            
            <p className="font-mono text-xs text-offwhite/50 mt-2">
              Core Engine: React 19 + GSAP 3 + Tailwind CSS<br />
              Environment: Production Sandbox
            </p>
          </div>
          
        </div>
        
        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 font-mono text-xs text-offwhite/40">
          <div>
            © {currentYear} Keystone Solution. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-offwhite transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-offwhite transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
