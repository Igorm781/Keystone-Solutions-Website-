import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (location.pathname !== '/') {
      navigate('/')
      // Delay slightly to allow navigation to complete before scrolling
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

  const isCaseStudyPage = location.pathname === '/case-study'

  return (
    <header className="w-full">
      {/* Navbar Container */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl px-6 py-3 rounded-full border transition-all duration-300 ${
          isScrolled || isCaseStudyPage
            ? 'bg-offwhite/90 backdrop-blur-md border-charcoal shadow-brutalist text-charcoal'
            : 'bg-transparent border-white/20 text-offwhite'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-xl font-bold tracking-tighter uppercase flex items-center gap-2 group"
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

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm font-bold uppercase">
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className="hover:text-signal transition-colors duration-200 py-1"
            >
              Process
            </a>
            <Link
              to="/case-study"
              className={`hover:text-signal transition-colors duration-200 py-1 ${
                isCaseStudyPage ? 'text-signal border-b border-signal' : ''
              }`}
            >
              Case Study
            </Link>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="hover:text-signal transition-colors duration-200 py-1"
            >
              FAQ
            </a>
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:block">
            <a
              href="#book"
              onClick={(e) => handleNavClick(e, 'book')}
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full border font-mono text-xs font-bold uppercase transition-all duration-300 scale-100 hover:scale-103 ${
                isScrolled || isCaseStudyPage
                  ? 'bg-signal text-offwhite border-charcoal hover:bg-charcoal hover:text-offwhite hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]'
                  : 'bg-offwhite text-charcoal border-transparent hover:bg-signal hover:text-offwhite'
              }`}
            >
              Book a Call <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || isCaseStudyPage ? 'text-charcoal' : 'text-offwhite'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/90 backdrop-blur-sm md:hidden flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6 text-center font-sans text-2xl font-bold uppercase tracking-wide">
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className="text-offwhite hover:text-signal transition-colors"
            >
              Process
            </a>
            <Link
              to="/case-study"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-offwhite hover:text-signal transition-colors"
            >
              Case Study
            </Link>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="text-offwhite hover:text-signal transition-colors"
            >
              FAQ
            </a>
            <a
              href="#book"
              onClick={(e) => handleNavClick(e, 'book')}
              className="mt-4 px-8 py-3 bg-signal text-offwhite border border-offwhite font-mono text-sm font-bold uppercase hover:bg-offwhite hover:text-charcoal transition-all"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
