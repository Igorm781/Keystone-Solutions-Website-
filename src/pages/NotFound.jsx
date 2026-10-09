import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSeo } from '../seo/useSeo'

function NotFound() {
  useSeo('/404')

  return (
    <div className="min-h-screen bg-offwhite text-charcoal relative flex flex-col items-center">
      <Navbar />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-36 sm:pt-44 pb-20 sm:pb-32 flex-grow flex flex-col items-center justify-center text-center">
        <div className="brutalist-card rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 bg-offwhite w-full max-w-2xl flex flex-col items-center gap-6">
          <div className="p-4 bg-signal/10 rounded-2xl border border-signal/20 text-signal">
            <AlertTriangle className="w-10 h-10" />
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold">
            ERROR 404 · ROUTE UNRESOLVED
          </span>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-none">
            PAGE NOT FOUND
          </h1>

          <p className="font-sans text-charcoal/70 text-base sm:text-lg max-w-md leading-relaxed">
            The requested protocol or path does not exist on this system. Verify the URL or return to the main operational terminal.
          </p>

          <Link
            to="/"
            className="brutalist-button inline-flex items-center gap-2 mt-4 text-xs font-mono font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
