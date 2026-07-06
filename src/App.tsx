import { useLenis } from '@/hooks/useLenis';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { OrbitalNav } from '@/components/OrbitalNav';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { EducationSection } from '@/sections/EducationSection';
import { ContactSection } from '@/sections/ContactSection';
import { FooterSection } from '@/sections/FooterSection';

function App() {
  useLenis();

  return (
    <div className="bg-void min-h-screen relative">
      <ParticleCanvas />
      <div className="relative z-10">
        <OrbitalNav />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
