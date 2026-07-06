import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/SectionHeader'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useLanguage } from '@/context/LanguageContext'

import type { Translation } from '@/i18n/types'

export function ShipSystemsSection() {
  const { t } = useLanguage()
  const { ref, visible } = useSectionReveal()

  return (
    <section
      id="log-03"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'section-hidden relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24',
        visible && 'section-visible'
      )}
    >
      <div className="max-w-5xl w-full">
        <SectionHeader eyebrow={t.shipSystems.eyebrow} title={t.shipSystems.title} />

        <div className="grid md:grid-cols-3 gap-5">
          {t.shipSystems.systems.map(system => (
            <SystemCard key={system.name} system={system} visible={visible} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SystemCard({ system, visible, t }: { system: Translation['shipSystems']['systems'][number]; visible: boolean; t: Translation }) {
  return (
    <div
      className="p-5 flex flex-col gap-4 transition-all duration-300"
      style={{
        background: 'rgba(15,18,22,0.8)',
        border: '1px solid rgba(107,114,128,0.2)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-base text-hazard-amber" aria-hidden="true">
          {system.icon}
        </span>
        <span className="font-mono text-[10px] text-signal-white tracking-[0.15em] uppercase">
          {system.name}
        </span>
      </div>

      {/* Health bar (decorative) */}
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[8px] text-static-gray tracking-widest uppercase">
            {t.shipSystems.systemHealth}
          </span>
          <span className="font-mono text-[8px] text-astrophage tracking-wider">
            {system.health}%
          </span>
        </div>
        <div className="h-[2px] w-full" style={{ background: 'rgba(107,114,128,0.2)' }}>
          <div
            className="h-full bg-astrophage transition-all duration-1000 ease-out"
            style={{
              width: visible ? `${system.health}%` : '0%',
              boxShadow: '0 0 6px #39FF8A',
            }}
          />
        </div>
      </div>

      {/* Skill items */}
      <ul className="space-y-2 flex-1">
        {system.items.map(item => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-hazard-amber text-xs" aria-hidden="true">—</span>
            <span className="text-signal-white/70 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
