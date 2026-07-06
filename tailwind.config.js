/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'void-black':     '#05050A',
        'panel-charcoal': '#0F1216',
        'hazard-amber':   '#FF7A29',
        'astrophage':     '#39FF8A',
        'signal-white':   '#E9E7DE',
        'static-gray':    '#6B7280',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'Menlo', 'monospace'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 4px #39FF8A' },
          '50%':       { opacity: '0.4', boxShadow: '0 0 1px #39FF8A' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          to:   { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
      animation: {
        blink:          'blink 1s step-end infinite',
        'pulse-glow':   'pulse-glow 2s ease-in-out infinite',
        orbit:          'orbit 12s linear infinite',
        scanline:       'scanline 3s linear infinite',
        'fade-up':      'fade-up 0.6s ease-out both',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
