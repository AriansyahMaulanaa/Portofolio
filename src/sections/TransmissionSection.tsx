import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/SectionHeader'
import { useSectionReveal } from '@/hooks/useSectionReveal'

const SOCIALS = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/ariansyahMaulanaa' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ariansyahmaulana' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/ariansyah_mlln' },
]

const EMAIL = 'arianyah17@gmail.com'

export function TransmissionSection() {
  const { ref, visible } = useSectionReveal()

  return (
    <section
      id="log-05"
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'section-hidden relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24',
        visible && 'section-visible'
      )}
    >
      <div className="max-w-2xl">
        <SectionHeader eyebrow="05 // OPEN CHANNEL" title="Let&apos;s Build Something Together" />

        <p className="text-signal-white/65 leading-relaxed mb-10 text-base">
          Whether you have a project in mind, want to collaborate, or just want to
          say hello — I&apos;m reachable. Response time: usually within 24 hours.
        </p>

        {/* Email block */}
        <div
          className="p-5 mb-8 flex flex-col gap-2"
          style={{ border: '1px solid rgba(107,114,128,0.2)', background: 'rgba(15,18,22,0.7)' }}
        >
          <p className="font-mono text-[9px] text-static-gray tracking-widest uppercase">
            TRANSMITTING ON: EMAIL_FREQ
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-base text-hazard-amber tracking-wide hover:text-signal-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hazard-amber"
          >
            {EMAIL}
          </a>
        </div>

        {/* Social channels */}
        <div className="flex flex-wrap gap-3 mb-16">
          {SOCIALS.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group flex items-center gap-2.5 px-4 py-2.5 transition-all duration-200',
                'font-mono text-[11px] text-static-gray tracking-widest uppercase',
                'hover:text-signal-white',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hazard-amber'
              )}
              style={{ border: '1px solid rgba(107,114,128,0.25)' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,122,41,0.4)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(107,114,128,0.25)'
              }}
            >
              <Icon size={12} className="group-hover:text-hazard-amber transition-colors" />
              {label}
              {/* Signal blip */}
              <span
                className="w-[3px] h-[3px] rounded-full bg-hazard-amber opacity-0 group-hover:opacity-100 transition-opacity animate-blink"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          style={{ borderTop: '1px solid rgba(107,114,128,0.15)' }}
        >
          <p className="font-mono text-[10px] text-static-gray tracking-widest">
            &copy; {new Date().getFullYear()} ARIANSYAH MAULANA. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[10px] text-static-gray tracking-widest">
            SYSTEM BUILD v2.0
          </p>
        </div>
      </div>
    </section>
  )
}
