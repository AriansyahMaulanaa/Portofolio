import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillTag } from '@/components/SkillTag';

interface ProjectCardProps {
  label: string;
  title: string;
  description: string;
  techStack: string[];
  galaxy: { from: string; via: string; to: string; star: string };
  mirrored?: boolean;
}

function GalaxyPlaceholder({ galaxy }: { galaxy: ProjectCardProps['galaxy'] }) {
  return (
    <div
      className="h-full min-h-[200px] rounded-lg overflow-hidden relative transition-transform duration-500 group-hover:scale-105"
      style={{
        background: `radial-gradient(ellipse at 30% 40%, ${galaxy.via}44 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, ${galaxy.star}33 0%, transparent 40%), linear-gradient(135deg, ${galaxy.from}, ${galaxy.via}, ${galaxy.to})`,
      }}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.3,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 30%, ${galaxy.from}66 100%)`,
        }}
      />
    </div>
  );
}

const galaxies = [
  { from: '#0f172a', via: '#1e3a5f', to: '#0c1220', star: '#60a5fa' },
  { from: '#0f172a', via: '#1e40af', to: '#0c1220', star: '#93c5fd' },
  { from: '#0f172a', via: '#2563eb', to: '#0c1220', star: '#60a5fa' },
  { from: '#0f172a', via: '#1e3a5f', to: '#0c1220', star: '#60a5fa' },
  { from: '#0f172a', via: '#1e40af', to: '#0c1220', star: '#93c5fd' },
];

function ProjectCard({
  label,
  title,
  description,
  techStack,
  galaxy,
  mirrored = false,
}: ProjectCardProps) {
  return (
    <div
      className={`
        group border border-[rgba(245,245,245,0.08)] rounded-lg
        transition-all duration-300 ease-out
        hover:border-[rgba(245,245,245,0.15)] hover:-translate-y-1
        overflow-hidden
        ${mirrored ? 'md:flex-row-reverse' : ''}
        flex flex-col md:flex-row
      `}
    >
      <div className="flex-1 md:w-[60%] p-8 flex flex-col justify-center">
        <span className="text-xs font-medium tracking-[0.08em] uppercase text-text-muted block mb-3">
          {label}
        </span>
        <h3 className="text-xl font-medium leading-[1.3] tracking-[-0.01em] text-text-primary mb-4">
          {title}
        </h3>
        <p className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <SkillTag key={tech} label={tech} variant="small" />
          ))}
        </div>
      </div>

      <div className="md:w-[40%] p-4">
        <GalaxyPlaceholder galaxy={galaxy} />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    gsap.set(cards.children, { opacity: 0, y: 60 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(cards.children, {
            y: 0,
            opacity: 1,
            duration: 1,
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
      id="projects"
      ref={sectionRef}
      className="py-[120px] px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="02 / PROJECTS" title="Featured Work" />

        <div ref={cardsRef} className="flex flex-col gap-8">
          <ProjectCard
            label="FULLSTACK WEB APPLICATION"
            title="POS & HRIS Management System"
            description="A web-based business management system that integrates Point of Sale (POS) and Human Resource Information System (HRIS) into a single platform. Built to streamline daily business operations by managing sales transactions, employee data, attendance, user roles, inventory, and reporting."
            techStack={['LARAVEL', 'PHP', 'MYSQL', 'BOOTSTRAP', 'REST API']}
            galaxy={galaxies[0]}
          />

          <ProjectCard
            label="DESKTOP APPLICATION"
            title="Parking Management System"
            description="A desktop application developed using Java Swing and MySQL to manage parking operations efficiently. Handles vehicle entry and exit, calculates parking fees automatically, stores transaction history, and generates reports."
            techStack={['JAVA SWING', 'JAVA', 'MYSQL']}
            galaxy={galaxies[1]}
            mirrored
          />

          <ProjectCard
            label="CLOUD DEPLOYMENT"
            title="Cloud-Based CRUD Application"
            description="A CRUD web application deployed on Google Cloud Platform Compute Engine. Focuses on cloud deployment, server configuration, and database integration for scalable web applications in production environments."
            techStack={['PHP', 'MYSQL', 'GCP', 'APACHE']}
            galaxy={galaxies[2]}
          />

          <ProjectCard
            label="IOT PROJECT"
            title="Smart Plant Watering System"
            description="An IoT-based smart irrigation system that enables users to control plant watering remotely through a smartphone. Designed to improve watering efficiency and support future sensor-based automation."
            techStack={['ESP32', 'IOT', 'MOBILE CONTROL']}
            galaxy={galaxies[4]}
          />

          <ProjectCard
            label="DATA MINING"
            title="Retail Customer Segmentation"
            description="A data mining project that performs customer segmentation using clustering algorithms to identify purchasing behavior and support data-driven business decisions."
            techStack={['RAPIDMINER', 'DATA MINING']}
            galaxy={galaxies[5]}
            mirrored
          />
        </div>
      </div>
    </section>
  );
}
