interface SkillTagProps {
  label: string;
  variant?: 'default' | 'small';
}

export function SkillTag({ label, variant = 'default' }: SkillTagProps) {
  const sizeClasses = variant === 'small'
    ? 'px-3 py-1 text-[11px]'
    : 'px-4 py-2 text-xs';

  return (
    <span
      className={`
        inline-block rounded-full border border-[rgba(245,245,245,0.08)]
        font-medium tracking-[0.08em] uppercase text-text-secondary
        transition-all duration-200
        hover:border-[rgba(245,245,245,0.15)] hover:text-text-primary hover:bg-surface
        ${sizeClasses}
      `}
    >
      {label}
    </span>
  );
}
