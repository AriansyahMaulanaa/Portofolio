import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SectionHeader } from '@/components/SectionHeader';

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    gsap.set(card, { opacity: 0, y: 60 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
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
      id="education"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="04 / EDUCATION" title="Academic Journey" />

        <div
          ref={cardRef}
          className="border border-[rgba(245,245,245,0.08)] rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          {/* Content Side */}
          <div className="flex-1 md:w-[70%]">
            <h3 className="text-xl font-medium leading-[1.3] tracking-[-0.01em] text-text-primary mb-2">
              Universitas Pamulang
            </h3>
            <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary mb-2">
              Bachelor of Computer Science (S1 Teknik Informatika)
            </p>
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-text-muted block mb-4">
              2023 — PRESENT
            </span>
            <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary mb-6">
              Currently pursuing a Bachelor's degree in Computer Science.
              Coursework includes Data Structures, Algorithms, Database Systems,
              Software Engineering, and Web Programming. Active in coding
              communities and hackathon events.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-surface text-xs font-medium tracking-[0.08em] uppercase text-text-secondary">
                GPA: 3.75/4.00
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-surface text-xs font-medium tracking-[0.08em] uppercase text-text-secondary">
                Active Student
              </span>
            </div>
          </div>

          {/* Status Side */}
          <div className="md:w-[30%] flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <span className="w-3 h-3 rounded-full bg-magenta block relative z-10" />
              <span className="absolute inset-0 w-3 h-3 rounded-full bg-magenta animate-pulse-ring" />
            </div>
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-magenta">
              IN PROGRESS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
