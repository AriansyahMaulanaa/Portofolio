import { useState, useEffect } from 'react';

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'education', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-10% 0px -60% 0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
}
