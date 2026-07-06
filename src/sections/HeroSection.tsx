import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center bg-transparent"
    >

      <div className="relative z-10 text-center max-w-[800px] px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-xs font-medium tracking-[0.08em] uppercase text-text-secondary block mb-6"
        >
          COMPUTER SCIENCE STUDENT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="font-serif text-6xl sm:text-7xl md:text-[80px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
        >
          Ariansyah
          <br />
          Maulana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="text-base font-normal leading-relaxed tracking-[0.01em] text-text-secondary max-w-[480px] mx-auto mb-10"
        >
          Building systems that work. From POS management to payroll automation,
          I craft solutions that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="
              px-7 py-3 rounded-full border border-[rgba(245,245,245,0.08)]
              text-xs font-medium tracking-[0.08em] uppercase text-text-primary
              transition-all duration-250
              hover:bg-surface hover:border-[rgba(245,245,245,0.15)] hover:scale-[1.02]
            "
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="
              px-7 py-3 rounded-full
              text-xs font-medium tracking-[0.08em] uppercase text-magenta
              transition-colors duration-200
              hover:text-magenta-hover
            "
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-text-muted relative overflow-hidden">
          <div className="w-1 h-1 rounded-full bg-text-primary absolute left-1/2 -translate-x-1/2 animate-scroll-bounce" />
        </div>
      </motion.div>

      {/* Fade in keyframe */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
