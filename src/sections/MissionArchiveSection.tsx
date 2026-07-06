import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/SectionHeader'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useLanguage } from '@/context/LanguageContext'

import type { Translation } from '@/i18n/types'

export function MissionArchiveSection() {
  const { t } = useLanguage()
  const { ref, visible } = useSectionReveal()

  return (
    <section
      id="log-02"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'section-hidden relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24',
        visible && 'section-visible'
      )}
    >
      <div className="max-w-5xl w-full">
        <SectionHeader eyebrow={t.mission.eyebrow} title={t.mission.title} />

        <div className="grid md:grid-cols-2 gap-5">
          {t.mission.missions.map(mission => (
            <MissionCard key={mission.code} mission={mission} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionCard({ mission, t }: { mission: Translation['mission']['missions'][number]; t: Translation }) {
  const isOperational = mission.status === 'OPERATIONAL'

  return (
    <article
      className="card-scan group transition-all duration-300 p-5 flex flex-col gap-4"
      style={{
        background: 'rgba(15,18,22,0.8)',
        border: '1px solid rgba(107,114,128,0.2)',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,122,41,0.5)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(107,114,128,0.2)'
      }}
    >
      {/* Card header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[9px] text-static-gray tracking-widest">{mission.code}</span>
            <span
              className="font-mono text-[8px] text-static-gray tracking-widest uppercase px-1.5 py-0.5"
              style={{ border: '1px solid rgba(107,114,128,0.3)' }}
            >
              {t.mission.classification} {mission.classification}
            </span>
          </div>
          <h3 className="font-serif text-xl text-signal-white group-hover:text-hazard-amber transition-colors duration-200">
            {mission.title}
          </h3>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
          <span
            className={cn(
              'w-[6px] h-[6px] rounded-full flex-shrink-0',
              isOperational ? 'bg-astrophage animate-pulse-glow' : 'bg-astrophage'
            )}
          />
          <span className="font-mono text-[9px] text-astrophage tracking-widest uppercase">
            {mission.status === 'COMPLETED' ? t.mission.completed : t.mission.operational}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-signal-white/65 text-sm leading-relaxed flex-1">
        {mission.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {mission.tech.map(t => (
          <span
            key={t}
            className="font-mono text-[9px] text-static-gray tracking-wider px-2 py-0.5"
            style={{ border: '1px solid rgba(107,114,128,0.25)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      {(mission.demo || mission.repo) && (
        <div className="flex gap-3 pt-1 border-t border-static-gray/10">
          {mission.demo && (
            <a
              href={mission.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[10px] text-hazard-amber tracking-wider uppercase hover:text-signal-white transition-colors"
            >
              <ExternalLink size={10} />
              {t.mission.viewDemo}
            </a>
          )}
          {mission.repo && (
            <a
              href={mission.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[10px] text-static-gray tracking-wider uppercase hover:text-signal-white transition-colors"
            >
              <Github size={10} />
              {t.mission.source}
            </a>
          )}
        </div>
      )}
    </article>
  )
}
