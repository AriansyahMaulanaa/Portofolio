import { useMissionClock } from '@/hooks/useMissionClock'
import { useLanguage } from '@/context/LanguageContext'

// Mission start date: today when the portfolio was first visited (stored in sessionStorage)
function getMissionStart(): Date {
  const stored = sessionStorage.getItem('mission_start')
  if (stored) return new Date(stored)
  const now = new Date().toISOString()
  sessionStorage.setItem('mission_start', now)
  return new Date(now)
}

const MISSION_START = getMissionStart()

export function HUDFrame() {
  const elapsed = useMissionClock(MISSION_START)
  const { lang, setLang, t } = useLanguage()

  return (
    <>
      {/* Top status bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[9999] hidden md:flex items-center justify-between px-8 py-2"
        style={{ borderBottom: '1px solid rgba(255,122,41,0.15)', background: 'rgba(5,5,10,0.85)', backdropFilter: 'blur(4px)' }}
      >
        {/* Left: sector coordinates */}
        <span className="font-mono text-[10px] text-static-gray tracking-widest uppercase select-none">
          {t.hud.sector}
        </span>

        {/* Center: mission clock */}
        <span className="font-mono text-[11px] text-hazard-amber tracking-widest select-none">
          {elapsed}
        </span>

        {/* Right: language toggle + signal indicator */}
        <div className="flex items-center gap-4 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang('id')}
              className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-150 ${
                lang === 'id' ? 'text-hazard-amber' : 'text-static-gray hover:text-signal-white'
              }`}
            >
              {t.hud.ind}
            </button>
            <span className="font-mono text-[10px] text-static-gray tracking-widest">//</span>
            <button
              onClick={() => setLang('en')}
              className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-150 ${
                lang === 'en' ? 'text-hazard-amber' : 'text-static-gray hover:text-signal-white'
              }`}
            >
              {t.hud.eng}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-[6px] h-[6px] rounded-full bg-astrophage animate-pulse-glow"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] text-static-gray tracking-widest uppercase">
              {t.hud.signal}
            </span>
          </div>
        </div>
      </div>

      {/* Corner brackets — top left */}
      <div className="fixed top-[44px] left-3 w-6 h-6 pointer-events-none z-[9999] hidden md:block" aria-hidden="true"
        style={{ borderTop: '1px solid rgba(255,122,41,0.4)', borderLeft: '1px solid rgba(255,122,41,0.4)' }}
      />
      {/* Corner brackets — top right */}
      <div className="fixed top-[44px] right-3 w-6 h-6 pointer-events-none z-[9999] hidden md:block" aria-hidden="true"
        style={{ borderTop: '1px solid rgba(255,122,41,0.4)', borderRight: '1px solid rgba(255,122,41,0.4)' }}
      />
      {/* Corner brackets — bottom left */}
      <div className="fixed bottom-3 left-3 w-6 h-6 pointer-events-none z-[9999] hidden md:block" aria-hidden="true"
        style={{ borderBottom: '1px solid rgba(255,122,41,0.4)', borderLeft: '1px solid rgba(255,122,41,0.4)' }}
      />
      {/* Corner brackets — bottom right */}
      <div className="fixed bottom-3 right-3 w-6 h-6 pointer-events-none z-[9999] hidden md:block" aria-hidden="true"
        style={{ borderBottom: '1px solid rgba(255,122,41,0.4)', borderRight: '1px solid rgba(255,122,41,0.4)' }}
      />

      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9997]"
        aria-hidden="true"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px)',
        }}
      />

      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[9996]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(5,5,10,0.65) 100%)' }}
      />
    </>
  )
}
