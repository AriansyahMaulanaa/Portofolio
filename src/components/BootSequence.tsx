import { useState, useEffect, useCallback } from 'react'

const LINES = [
  { text: 'HAIL MARY ONBOARD SYSTEM v2.0', delay: 0, color: 'text-hazard-amber' },
  { text: 'INITIALIZING MAIN CONSOLE...', delay: 220 },
  { text: 'CHECKING LIFE SUPPORT: NOMINAL', delay: 440, color: 'text-astrophage' },
  { text: 'CREW MANIFEST: 1/1 — COMMANDER ARIANSYAH', delay: 660 },
  { text: 'PROPULSION: ASTROPHAGE DRIVE ONLINE', delay: 880, color: 'text-astrophage' },
  { text: 'NAVIGATION: LOCKED ON TARGET', delay: 1060 },
  { text: 'MISSION CLOCK: SYNCHRONIZED', delay: 1200 },
  { text: '—————————————————————————————', delay: 1360, color: 'text-static-gray' },
  { text: 'WELCOME BACK, COMMANDER ARIANSYAH.', delay: 1520, color: 'text-signal-white' },
]

interface Props {
  onComplete: () => void
}

export function BootSequence({ onComplete }: Props) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [done, setDone] = useState(false)

  const finish = useCallback(() => {
    setDone(true)
    setTimeout(onComplete, 300)
  }, [onComplete])

  useEffect(() => {
    // Skip if reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish()
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []

    LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1)
        }, LINES[i].delay)
      )
    })

    // Complete 300ms after last line
    const lastDelay = LINES[LINES.length - 1].delay + 500
    timers.push(setTimeout(finish, lastDelay))

    return () => timers.forEach(clearTimeout)
  }, [finish])

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center cursor-pointer"
      style={{ background: '#05050A' }}
      onClick={finish}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') finish() }}
      role="button"
      tabIndex={0}
      aria-label="Skip boot sequence"
    >
      <div className="w-full max-w-xl px-6">
        {/* Terminal header */}
        <div
          className="mb-4 px-3 py-1.5 flex items-center gap-2"
          style={{ border: '1px solid rgba(255,122,41,0.25)', background: 'rgba(15,18,22,0.9)' }}
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-hazard-amber opacity-80" />
          <span className="font-mono text-[10px] text-static-gray tracking-widest uppercase">
            MAIN CONSOLE — TERMINAL
          </span>
        </div>

        {/* Boot lines */}
        <div
          className="px-4 py-5 space-y-1.5"
          style={{ border: '1px solid rgba(107,114,128,0.2)', background: 'rgba(15,18,22,0.6)' }}
        >
          {LINES.slice(0, visibleLines).map((line, i) => (
            <p
              key={i}
              className={`font-mono text-xs tracking-wide leading-5 ${line.color ?? 'text-static-gray'}`}
            >
              {i < visibleLines - 1 || done ? line.text : (
                <>
                  {line.text}
                  <span className="animate-blink ml-0.5">_</span>
                </>
              )}
            </p>
          ))}
        </div>

        <p className="font-mono text-[9px] text-static-gray text-center mt-3 tracking-widest opacity-60 select-none">
          CLICK OR PRESS ANY KEY TO SKIP
        </p>
      </div>
    </div>
  )
}
