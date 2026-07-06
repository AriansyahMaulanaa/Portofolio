import { useRef, useCallback, useEffect, useState } from 'react';

interface MagneticTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function MagneticText({ children, className = '', as: Tag = 'h2' }: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouch) return;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    charsRef.current.forEach((char) => {
      if (!char) return;
      const charRect = char.getBoundingClientRect();
      const charCenterX = charRect.left + charRect.width / 2 - rect.left;
      const charCenterY = charRect.top + charRect.height / 2 - rect.top;

      const dx = mouseRef.current.x - charCenterX;
      const dy = mouseRef.current.y - charCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150 && dist > 0) {
        const force = (150 - dist) / 150;
        const maxDisp = 12;
        const tx = (dx / dist) * force * maxDisp;
        const ty = (dy / dist) * force * maxDisp;

        char.style.transform = `translate(${tx}px, ${ty}px)`;
      } else {
        char.style.transform = 'translate(0px, 0px)';
      }
    });
  }, [isTouch]);

  const handleMouseLeave = useCallback(() => {
    charsRef.current.forEach((char) => {
      if (char) {
        char.style.transform = 'translate(0px, 0px)';
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const words = children.split(' ');
  let charIndex = 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Tag className={className}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split('').map((char) => {
              const idx = charIndex++;
              return (
                <span
                  key={idx}
                  ref={(el) => {
                    if (el) charsRef.current[idx] = el;
                  }}
                  className="inline-block will-change-transform transition-transform duration-150 ease-out"
                >
                  {char}
                </span>
              );
            })}
            {wi < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </Tag>
    </div>
  );
}
