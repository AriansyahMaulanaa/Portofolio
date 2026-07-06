import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MagneticText } from '@/components/MagneticText';

const SOCIAL_LINKS = [
  { label: 'GITHUB', href: 'https://github.com/AriansyahMaulanaa' },
  { label: 'LINKEDIN', href: 'https://lingkedin.com/in/Ariansyah_mlln' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/AriansyahMaulana' },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    gsap.set(content.children, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(content.children, {
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
      id="contact"
      ref={sectionRef}
      className="pt-[160px] pb-[120px] px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto text-center" ref={contentRef}>
        <span className="text-xs font-medium tracking-[0.08em] uppercase text-magenta block mb-4">
          05 / CONTACT
        </span>

        <MagneticText
          as="h2"
          className="font-serif text-5xl md:text-6xl font-normal leading-[1.15] tracking-[-0.02em] text-text-primary max-w-[600px] mx-auto mb-6"
        >
          Let's Build Something Together
        </MagneticText>

        <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary max-w-[480px] mx-auto mb-10">
          I'm currently open for internships, freelance projects, and
          collaboration opportunities. If you have an idea or project in mind,
          let's connect.
        </p>

        <a
          href="mailto:arianyah17@gmail.com"
          className="
            font-serif text-3xl md:text-4xl font-normal text-text-primary
            transition-colors duration-300 hover:text-magenta
            inline-block
          "
        >
          arianyah17@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6 mt-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-xs font-medium tracking-[0.08em] uppercase text-text-muted
                transition-colors duration-200 hover:text-text-primary
              "
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
