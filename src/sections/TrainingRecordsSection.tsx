import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/SectionHeader'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { useLanguage } from '@/context/LanguageContext'

export function TrainingRecordsSection() {
  const { t } = useLanguage()
  const { ref, visible } = useSectionReveal()

  return (
    <section
      id="log-04"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'section-hidden relative px-6 md:px-16 lg:px-24 py-24',
        visible && 'section-visible'
      )}
    >
      <div className="max-w-3xl">
        <SectionHeader eyebrow={t.training.eyebrow} title={t.training.title} />

        <div
          className="p-6 md:p-8 transition-all duration-300"
          style={{
            background: 'rgba(15,18,22,0.8)',
            border: '1px solid rgba(107,114,128,0.2)',
          }}
        >
          {/* Institution */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-[9px] text-static-gray tracking-widest uppercase mb-1">
                {t.training.institution}
              </p>
              <h3 className="font-serif text-2xl text-signal-white leading-snug">
                Universitas Pamulang
              </h3>
              <p className="font-mono text-sm text-static-gray mt-1 tracking-wide">
                {t.training.major}
              </p>
            </div>

            {/* Status badge */}
            <div className="flex-shrink-0">
              <div
                className="flex items-center gap-2 px-3 py-1.5"
                style={{ border: '1px solid rgba(57,255,138,0.3)', background: 'rgba(57,255,138,0.06)' }}
              >
                <span className="w-2 h-2 rounded-full bg-astrophage animate-pulse-glow" />
                <span className="font-mono text-[10px] text-astrophage tracking-widest uppercase">
                  {t.training.inProgress}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-6" style={{ background: 'rgba(107,114,128,0.15)' }} />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat label={t.training.period} value={t.training.periodValue} />
            <Stat label={t.training.ipk} value={t.training.ipkValue} highlight />
            <Stat label={t.training.semester} value={t.training.semesterValue} />
            <Stat label={t.training.status} value={t.training.statusValue} highlight />
          </div>

          {/* Divider */}
          <div className="h-px my-6" style={{ background: 'rgba(107,114,128,0.15)' }} />

          {/* Notes */}
          <div>
            <p className="font-mono text-[9px] text-static-gray tracking-widest uppercase mb-3">
              {t.training.fieldNotes}
            </p>
            <p className="text-signal-white/65 text-sm leading-relaxed">
              {t.training.notes}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="font-mono text-[8px] text-static-gray tracking-widest uppercase mb-1">{label}</p>
      <p className={cn('font-mono text-sm tracking-wide', highlight ? 'text-hazard-amber' : 'text-signal-white')}>
        {value}
      </p>
    </div>
  )
}
