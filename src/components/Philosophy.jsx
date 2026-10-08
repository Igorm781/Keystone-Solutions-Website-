import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Philosophy() {
  const containerRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll triggered fade-up stagger
      gsap.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // when container top hits 80% viewport height
            toggleActions: 'play none none none',
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      <div className="relative w-full bg-charcoal text-offwhite py-16 sm:py-24 md:py-28 px-6 sm:px-12 overflow-hidden rounded-3xl sm:rounded-[3rem] brutalist-border shadow-brutalist">
        {/* Background industrial overlay texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/50" />
        <div className="absolute inset-0 brutalist-grid-dark pointer-events-none opacity-10" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-8 sm:gap-10 items-center text-center">
          
          {/* Label */}
          <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold px-3 py-1 border border-signal/20 rounded-full bg-signal/10">
            The Manifesto
          </span>

          {/* Contrasting Statements */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Neutral Statement */}
            <p
              ref={line1Ref}
              className="font-mono text-xs sm:text-sm md:text-base text-offwhite/60 uppercase tracking-widest leading-relaxed max-w-xl mx-auto"
            >
              The Edge Is No Longer Who Has The Intelligence. It Is Where, How, And Why They Use It.
            </p>

            {/* Core Philosophy Statement */}
            <h3
              ref={line2Ref}
              className="font-sans text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-none"
            >
              WE FOCUS ON
            </h3>

            {/* Payoff Drama Serif Italic Statement */}
            <p
              ref={line3Ref}
              className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-signal px-2 leading-tight text-center"
            >
              Structuring Entire Systems.
            </p>
          </div>

          {/* Line separator */}
          <div className="w-16 h-1 bg-signal/30 mt-2 sm:mt-4" />

        </div>
      </div>
    </section>
  )
}

export default Philosophy
