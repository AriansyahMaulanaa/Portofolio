import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/SectionHeader'
import { useSectionReveal } from '@/hooks/useSectionReveal'

const EQUIPMENT: string[] = [
  'PHP', 'Laravel', 'Java', 'JavaScript', 'TypeScript',
  'React', 'Tailwind CSS', 'MySQL', 'PostgreSQL',
  'Git', 'REST API', 'Figma',
]

export function PersonnelSection() {
  const { ref, visible } = useSectionReveal()

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
        <SectionHeader eyebrow="01 // PERSONNEL FILE" title="Field Notes" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-5">
            <p className="text-signal-white/75 leading-relaxed">
              Active-duty student, currently in my final year of Computer Science.
              I build things for the web — from backend APIs to the interfaces people
              actually touch. My approach: understand the problem first, then write
              the simplest code that solves it honestly.
            </p>
            <p className="text-signal-white/75 leading-relaxed">
              When not coding, I&apos;m usually reading about system design, tinkering
              with side projects, or convincing teammates that clear naming conventions
              are worth arguing about.
            </p>

            {/* Status indicators */}
            <div
              className="p-4 space-y-2 mt-6"
              style={{ border: '1px solid rgba(107,114,128,0.2)', background: 'rgba(15,18,22,0.7)' }}
            >
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-astrophage dot-glow-green flex-shrink-0" />
                <span className="font-mono text-[10px] text-static-gray tracking-wider uppercase">STATUS:</span>
                <span className="font-mono text-[10px] text-astrophage tracking-wider uppercase">ACTIVE STUDENT</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-hazard-amber dot-glow-amber flex-shrink-0" />
                <span className="font-mono text-[10px] text-static-gray tracking-wider uppercase">AVAILABILITY:</span>
                <span className="font-mono text-[10px] text-signal-white tracking-wider uppercase">OPEN TO WORK</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-static-gray flex-shrink-0" />
                <span className="font-mono text-[10px] text-static-gray tracking-wider uppercase">LOCATION:</span>
                <span className="font-mono text-[10px] text-signal-white tracking-wider uppercase">INDONESIA</span>
              </div>
            </div>
          </div>

          {/* Equipment Loadout */}
          <div>
            <p className="font-mono text-[10px] text-static-gray tracking-[0.2em] uppercase mb-4 select-none">
              EQUIPMENT LOADOUT
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
