interface Props {
  eyebrow: string
  title: string
}

export function SectionHeader({ eyebrow, title }: Props) {
  return (
    <div className="mb-12">
      <p className="font-mono text-[10px] text-hazard-amber tracking-[0.25em] uppercase mb-3 select-none">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl text-signal-white text-balance leading-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-16" style={{ background: 'rgba(255,122,41,0.4)' }} />
    </div>
  )
}
