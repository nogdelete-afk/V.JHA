import React, { useRef, useEffect } from 'react';

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function MagicCard({ children, className = '', ...props }: MagicCardProps) {
  return (
    <article
      {...props}
      className={`magic-card relative brutalist-card overflow-hidden group ${className}`}
    >
      {/* Glow effect on hover */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0 hidden sm:block"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />
      {/* Card Content wrapper to sit above background glow */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </article>
  );
}

interface MagicContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function MagicContainer({ children, className = '', ...props }: MagicContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.magic-card');
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const rect = card.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={`${className}`} {...props}>
      {children}
    </div>
  );
}
