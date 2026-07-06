import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/SectionHeader'
import { useSectionReveal } from '@/hooks/useSectionReveal'

interface Skill {
  name: string
  items: string[]
  health: number
  icon: string
}

const SYSTEMS: Skill[] = [
  {
    name: 'BACKEND SYSTEMS',
    icon: '</>',
    health: 88,
    items: [
      'PHP & Laravel',
      'Java & Spring Boot',
      'REST API Design',
      'MySQL & PostgreSQL',
      'Authentication & RBAC',
      'MVC Architecture',
    ],
  },
  {
    name: 'FRONTEND INTERFACE',
    icon: '[]',
    health: 83,
    items: [
      'React & TypeScript',
      'Tailwind CSS',
      'HTML & CSS',
      'JavaScript (ES2022+)',
      'Responsive Design',
      'Component Architecture',
    ],
  },
  {
    name: 'TOOLS & INSTRUMENTS',
    icon: '>_',
    health: 91,
    items: [
      'Git & GitHub',
      'Figma',
      'Postman',
      'VS Code',
      'Arch Linux',
      'Docker (basic)',
    ],
  },
]

export function ShipSystemsSection() {
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
        <SectionHeader eyebrow="03 // SHIP SYSTEMS DIAGNOSTIC" title="Skills & Capabilities" />

        <div className="grid md:grid-cols-3 gap-5">
          {SYSTEMS.map(system => (
            <SystemCard key={system.name} system={system} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SystemCard({ system, visible }: { system: Skill; visible: boolean }) {
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
            SYSTEM HEALTH
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
