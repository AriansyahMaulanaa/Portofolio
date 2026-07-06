export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(245,245,245,0.08)] py-12 px-6 md:px-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs font-medium tracking-[0.08em] uppercase text-text-muted">
          © 2025 ARIANSYAH MAULANA. ALL RIGHTS RESERVED.
        </span>
        <button
          onClick={scrollToTop}
          className="
            text-xs font-medium tracking-[0.08em] uppercase text-text-muted
            transition-colors duration-200 hover:text-text-primary
          "
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
