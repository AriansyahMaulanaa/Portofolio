import { useActiveSection } from '@/hooks/useActiveSection';
import { getLenis } from '@/hooks/useLenis';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
];

export function OrbitalNav() {
  const activeSection = useActiveSection();

  const scrollTo = (id: string) => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(`#${id}`, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group relative flex items-center justify-end gap-3 w-[120px] h-6 cursor-pointer"
            aria-label={`Navigate to ${item.label}`}
          >
            <span
              className={`
                whitespace-nowrap
                text-[10px] font-medium tracking-[0.1em] uppercase
                transition-colors duration-200
                ${isActive ? 'text-magenta' : 'text-text-muted group-hover:text-text-primary'}
              `}
            >
              {item.label}
            </span>
            <span
              className={`
                w-2.5 h-2.5 rounded-full border-[1.5px] transition-all duration-200 flex-shrink-0
                ${isActive
                  ? 'bg-magenta border-magenta'
                  : 'border-text-muted bg-transparent group-hover:border-text-primary'
                }
              `}
            />
          </button>
        );
      })}
    </nav>
  );
}
