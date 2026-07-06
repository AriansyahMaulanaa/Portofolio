import { MagneticText } from './MagneticText';

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <span className="text-xs font-medium tracking-[0.08em] uppercase text-magenta block mb-4">
        {label}
      </span>
      <MagneticText
        as="h2"
        className="font-serif text-5xl md:text-6xl font-normal leading-[1.15] tracking-[-0.02em] text-text-primary"
      >
        {title}
      </MagneticText>
    </div>
  );
}
