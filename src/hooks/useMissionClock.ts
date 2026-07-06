import { useState, useEffect } from 'react'

function formatMissionTime(startDate: Date): string {
  const now = new Date()
  const diff = now.getTime() - startDate.getTime()

  if (diff < 0) return 'T+ 0d 00:00:00'

  const totalSeconds = Math.floor(diff / 1000)
  const seconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)
  const minutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)
  const hours = totalHours % 24
  const days = Math.floor(totalHours / 24)

  const pad = (n: number) => String(n).padStart(2, '0')
  return `T+ ${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

export function useMissionClock(startDate: Date) {
  const [elapsed, setElapsed] = useState(() => formatMissionTime(startDate))

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(formatMissionTime(startDate))
    }, 1000)
    return () => clearInterval(id)
  }, [startDate])

  return elapsed
}
