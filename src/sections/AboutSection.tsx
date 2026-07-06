import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MagneticText } from '@/components/MagneticText';
import { SkillTag } from '@/components/SkillTag';

const SKILLS = [
  'LARAVEL', 'PHP', 'JAVA', 'MYSQL', 'VITE', 'TAILWIND CSS',
  'JAVASCRIPT', 'REST API', 'GIT',
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    gsap.set(left.children, { x: -40, opacity: 0 });
    gsap.set(right.children, { x: 40, opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(left.children, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
          });
          gsap.to(right.children, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
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
      id="about"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_55%] gap-[5%]">
          {/* Left Column */}
          <div ref={leftRef}>
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-magenta block mb-4">
              01 / ABOUT
            </span>
            <MagneticText
              as="h2"
              className="font-serif text-5xl md:text-6xl font-normal leading-[1.15] tracking-[-0.02em] text-text-primary"
            >
              Learning by Building
            </MagneticText>
          </div>

          {/* Right Column */}
          <div ref={rightRef} className="space-y-6">
            <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary">
              I'm a Computer Science undergraduate with a passion for turning
              complex problems into working systems. Over the past few years,
              I've been hands-on with real-world projects that go beyond
              classroom assignments.
            </p>
            <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary">
              My main focus is backend development with Laravel, but I enjoy
              working across the full stack — from database design to frontend
              interfaces with Vite and Tailwind. I believe in writing clean,
              maintainable code that scales.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {SKILLS.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
