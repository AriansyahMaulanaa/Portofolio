import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/SectionHeader'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useLanguage } from '@/context/LanguageContext'

const EQUIPMENT: string[] = [
  'PHP', 'Laravel', 'Java', 'JavaScript', 'TypeScript',
  'React', 'Tailwind CSS', 'MySQL', 'PostgreSQL',
  'Git', 'REST API', 'Figma',
]

export function PersonnelSection() {
  const { ref, visible } = useSectionReveal()
  const { t } = useLanguage()

  return (
    <section
      id="log-01"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'section-hidden relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24',
        visible && 'section-visible'
      )}
    >
      <div className="max-w-4xl">
        <SectionHeader eyebrow={t.personnel.eyebrow} title={t.personnel.title} />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-5">
            <p className="text-signal-white/75 leading-relaxed">
              {t.personnel.bio1}
            </p>
            <p className="text-signal-white/75 leading-relaxed">
              {t.personnel.bio2}
            </p>

            {/* Status indicators */}
            <div
              className="p-4 space-y-2 mt-6"
              style={{ border: '1px solid rgba(107,114,128,0.2)', background: 'rgba(15,18,22,0.7)' }}
            >
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-astrophage dot-glow-green flex-shrink-0" />
                <span className="font-mono text-[10px] text-static-gray tracking-wider uppercase">{t.personnel.status}</span>
                <span className="font-mono text-[10px] text-astrophage tracking-wider uppercase">{t.personnel.statusValue}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-hazard-amber dot-glow-amber flex-shrink-0" />
                <span className="font-mono text-[10px] text-static-gray tracking-wider uppercase">{t.personnel.availability}</span>
                <span className="font-mono text-[10px] text-signal-white tracking-wider uppercase">{t.personnel.availabilityValue}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-static-gray flex-shrink-0" />
                <span className="font-mono text-[10px] text-static-gray tracking-wider uppercase">{t.personnel.location}</span>
                <span className="font-mono text-[10px] text-signal-white tracking-wider uppercase">{t.personnel.locationValue}</span>
              </div>
            </div>
          </div>

          {/* Equipment Loadout */}
          <div>
            <p className="font-mono text-[10px] text-static-gray tracking-[0.2em] uppercase mb-4 select-none">
              {t.personnel.equipment}
            </p>
            <div className="flex flex-wrap gap-2">
              {EQUIPMENT.map(tech => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-signal-white/80 tracking-wider px-3 py-1.5 transition-colors duration-150 hover:text-hazard-amber"
                  style={{ border: '1px solid rgba(255,122,41,0.3)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
