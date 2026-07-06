import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  ox: number  // original x
  oy: number  // original y
  r: number
  baseR: number
  phase: number
  speed: number
  twinkleSpeed: number
  vx: number  // drift velocity
  vy: number
  hue: number // slight color variation
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = window.innerWidth
    let h = window.innerHeight

    const STAR_COUNT = 260
    const MOUSE_RADIUS = 140
    const REPEL_STRENGTH = 0.18
    const RETURN_EASE = 0.055

    function makeStars(): Star[] {
      return Array.from({ length: STAR_COUNT }, () => {
        const x = Math.random() * w
        const y = Math.random() * h
        // slight warm/cool tint variation
        const hue = Math.random() < 0.15 ? 200 + Math.random() * 30 : 40 + Math.random() * 20
        return {
          x,
          y,
          ox: x,
          oy: y,
          r: 0,
          baseR: Math.random() * 1.4 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.008 + 0.004,
          twinkleSpeed: Math.random() * 0.012 + 0.003,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
          hue,
        }
      })
    }

    canvas.width = w
    canvas.height = h

    let stars = makeStars()

    const mouse = mouseRef.current

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      stars.forEach(s => {
        // twinkle
        s.phase += s.twinkleSpeed
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(s.phase))

        // mouse repulsion — push away from cursor
        const dx = s.x - mouse.x
        const dy = s.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * REPEL_STRENGTH
          s.vx += (dx / dist) * force
          s.vy += (dy / dist) * force
        }

        // spring back toward origin
        s.vx += (s.ox - s.x) * RETURN_EASE
        s.vy += (s.oy - s.y) * RETURN_EASE

        // dampen
        s.vx *= 0.82
        s.vy *= 0.82

        s.x += s.vx
        s.y += s.vy

        // drift origin slowly so stars wander over time
        s.ox += (Math.random() - 0.5) * 0.015
        s.oy += (Math.random() - 0.5) * 0.015
        s.ox = Math.max(0, Math.min(w, s.ox))
        s.oy = Math.max(0, Math.min(h, s.oy))

        // size pulse on hover
        const hoverScale = dist < MOUSE_RADIUS
          ? 1 + (1 - dist / MOUSE_RADIUS) * 2.2
          : 1
        s.r = s.baseR * twinkle * hoverScale

        const alpha = twinkle * (dist < MOUSE_RADIUS ? Math.min(1, 0.7 + (1 - dist / MOUSE_RADIUS) * 0.5) : 0.75)

        // draw glow for larger stars
        if (s.r > 1.1) {
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3.5)
          grd.addColorStop(0, `hsla(${s.hue}, 60%, 90%, ${alpha * 0.55})`)
          grd.addColorStop(1, `hsla(${s.hue}, 60%, 90%, 0)`)
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        // core star
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue}, 50%, 92%, ${alpha})`
        ctx.fill()
      })

      // draw connection lines between nearby stars when mouse is close
      const nearbyStars = stars.filter(s => {
        const dx = s.x - mouse.x
        const dy = s.y - mouse.y
        return Math.sqrt(dx * dx + dy * dy) < MOUSE_RADIUS * 1.6
      })
      for (let i = 0; i < nearbyStars.length; i++) {
        for (let j = i + 1; j < nearbyStars.length; j++) {
          const a = nearbyStars[i]
          const b = nearbyStars[j]
          const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
          if (d < 80) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(220,200,160,${(1 - d / 80) * 0.18})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    const handleResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
      stars = makeStars()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{ zIndex: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
