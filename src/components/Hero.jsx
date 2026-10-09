import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'

function Hero() {
  const heroRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger entrance of text parts
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } })
      
      tl.fromTo(title1Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, 0.2)
        .fromTo(title2Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, 0.4)
        .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0.6)
        .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0.8)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleScrollToProcess = (e) => {
    e.preventDefault()
    const processElement = document.getElementById('process')
    if (processElement) {
      processElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center bg-charcoal text-offwhite overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24"
    >
      {/* Background Image with Brutalist Industrial Texture & heavy gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920')`
        }}
      />
      
      {/* Dark overlay gradients (top shadow & heavy bottom/side shadow) */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />

      {/* Grid line helper overlay */}
      <div className="absolute inset-0 brutalist-grid-dark pointer-events-none opacity-10" />

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-5 sm:gap-6 items-start">
        <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-signal font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-signal rounded-full animate-pulse" />
          Forward Deployed Engineering
        </div>
        
        {/* Massive H1 Contrast */}
        <h1 className="leading-[1.05] max-w-4xl text-left select-none">
          <span
            ref={title1Ref}
            className="block font-sans font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter"
          >
            Orchestrate the
          </span>
          <span
            ref={title2Ref}
            className="block font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] text-signal mt-1 sm:mt-3 pl-1 sm:pl-3 leading-[0.95]"
          >
            Manufacturing Process.
          </span>
        </h1>

        {/* Subhead descriptor */}
        <p
          ref={subRef}
          className="font-sans text-sm sm:text-base md:text-lg text-offwhite/75 max-w-xl leading-relaxed text-left mt-1 sm:mt-2"
        >
          Custom agentic implementations tailored to your business. Architecting and automating your workflows from end-to-end. You own the code.
        </p>

        {/* CTA triggers */}
        <div
          ref={ctaRef}
          className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4 w-full"
        >
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="brutalist-button"
          >
            Book a Call
          </a>
          <a
            href="#process"
            onClick={handleScrollToProcess}
            className="brutalist-button-secondary inline-flex items-center gap-2"
          >
            Our Process <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero
