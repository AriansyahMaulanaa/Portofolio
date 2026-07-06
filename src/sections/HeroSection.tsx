import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  visible: boolean
}

export function HeroSection({ visible }: Props) {
  const sectionRef = useRef<HTMLElement>(null)

  // Orbit element for ambient animation
  const orbitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (visible) {
      el.classList.add('section-visible')
      el.classList.remove('section-hidden')
    }
  }, [visible])

  return (
    <section
      id="log-00"
      ref={sectionRef}
      className={cn('section-hidden relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24', 'pt-16 md:pt-20')}
    >
      {/* Orbit ambient element */}
      <div
        className="absolute right-[10%] top-[20%] hidden lg:block pointer-events-none"
        aria-hidden="true"
        style={{ width: 260, height: 260 }}
      >
        {/* Ellipse orbit path */}
        <svg
          width="260"
          height="260"
          viewBox="0 0 260 260"
          fill="none"
          className="absolute inset-0 opacity-20"
        >
          <ellipse cx="130" cy="130" rx="120" ry="60" stroke="rgba(255,122,41,0.5)" strokeWidth="0.5" />
        </svg>
        {/* Orbiting dot */}
        <div
          ref={orbitRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformOrigin: 'center' }}
        >
          <div
            className="w-2 h-2 rounded-full bg-hazard-amber shadow-[0_0_8px_#FF7A29]"
            style={{
              animation: 'orbit 14s linear infinite',
              transformOrigin: '130px 130px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-4px',
              marginLeft: '-4px',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <p className="font-mono text-[10px] text-hazard-amber tracking-[0.25em] uppercase mb-6 select-none">
          MAIN CONSOLE // ONLINE
        </p>

        {/* Name */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-signal-white leading-[1.05] text-balance mb-3">
          Ariansyah
          <br />
          Maulana
        </h1>

        {/* Commander label */}
        <p className="font-mono text-sm text-static-gray tracking-[0.2em] uppercase mb-8">
          COMMANDER // COMPUTER SCIENCE
        </p>

        {/* Tagline */}
        <p className="text-signal-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-10">
          Building systems from the ground up — full-stack web developer with a
          bias toward clean architecture and honest code. Currently navigating
          the final year of Computer Science studies while shipping real products.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#log-02"
            onClick={e => { e.preventDefault(); document.getElementById('log-02')?.scrollIntoView({ behavior: 'smooth' }) }}
            className={cn(
              'font-mono text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200',
              'bg-hazard-amber text-void-black font-medium',
              'hover:bg-hazard-amber/90',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hazard-amber'
            )}
          >
            ACCESS MISSION ARCHIVE
          </a>
          <a
            href="#log-05"
            onClick={e => { e.preventDefault(); document.getElementById('log-05')?.scrollIntoView({ behavior: 'smooth' }) }}
            className={cn(
              'font-mono text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200',
              'bg-transparent text-hazard-amber',
              'hover:bg-hazard-amber/10',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hazard-amber'
            )}
            style={{ border: '1px solid rgba(255,122,41,0.4)' }}
          >
            OPEN CHANNEL
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none" aria-hidden="true">
        <span className="font-mono text-[9px] text-static-gray tracking-widest uppercase">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-hazard-amber/60 to-transparent" />
      </div>
    </section>
  )
}
