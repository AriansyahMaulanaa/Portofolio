import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'

export function ShipNavigation() {
  const { t } = useLanguage()
  const [active, setActive] = useState('log-00')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    t.nav.sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[9995] hidden lg:flex flex-col items-end gap-1"
      aria-label="Ship systems navigation"
      style={{
        padding: '12px 10px',
        background: 'rgba(15,18,22,0.8)',
        border: '1px solid rgba(255,122,41,0.12)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* Label */}
      <span className="font-mono text-[8px] text-static-gray tracking-[0.2em] uppercase mb-2 select-none">
        {t.boot.nav}
      </span>

      {t.nav.sections.map(({ id, label }) => {
        const isActive = active === id
        const isHovered = hoveredId === id
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`Navigate to ${label}`}
            className={cn(
              'flex items-center gap-2 group transition-all duration-200 outline-none',
              'focus-visible:ring-1 focus-visible:ring-hazard-amber rounded-sm px-1 py-0.5'
            )}
          >
            {/* Label on hover */}
            <span
              className={cn(
                'font-mono text-[9px] tracking-widest uppercase transition-all duration-200 select-none',
                isActive || isHovered ? 'opacity-100 text-hazard-amber' : 'opacity-0 text-static-gray'
              )}
            >
              {isActive ? '> ' + t.nav.access : label}
            </span>

            {/* Status dot */}
            <span
              className={cn(
                'inline-block w-[6px] h-[6px] rounded-full transition-all duration-300',
                isActive
                  ? 'bg-astrophage shadow-[0_0_6px_#39FF8A]'
                  : 'bg-static-gray'
              )}
            />
          </button>
        )
      })}
    </nav>
  )
}
