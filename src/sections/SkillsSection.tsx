import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SectionHeader } from '@/components/SectionHeader';
import { Code2, LayoutGrid, Terminal } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: <Code2 size={24} className="text-magenta" />,
    title: 'Backend',
    skills: [
      'Laravel / PHP',
      'Java (Swing & Console)',
      'RESTful API Design',
      'MySQL Database',
      'Authentication & Authorization',
    ],
  },
  {
    icon: <LayoutGrid size={24} className="text-magenta" />,
    title: 'Frontend',
    skills: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Vite Build Tool',
      'Responsive Design',
    ],
  },
  {
    icon: <Terminal size={24} className="text-magenta" />,
    title: 'Tools & Methods',
    skills: [
      'Git Version Control',
      'Postman API Testing',
      'VS Code',
      'Agile / Scrum',
      'Problem Solving',
    ],
  },
];

function SkillCard({ icon, title, skills }: SkillCategory) {
  return (
    <div
      className="
        border border-[rgba(245,245,245,0.08)] rounded-lg p-8 bg-void
        transition-all duration-300 ease-out
        hover:border-[rgba(197,90,26,0.3)] hover:bg-surface
      "
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-medium leading-[1.3] tracking-[-0.01em] text-text-primary mb-6">
        {title}
      </h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-text-muted flex-shrink-0" />
            <span className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    gsap.set(cards.children, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(cards.children, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="03 / SKILLS" title="Tech Stack" />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
