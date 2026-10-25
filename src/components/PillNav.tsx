import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

import { Dock, DockItem } from './Dock';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const items: NavItem[] = [
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'results', label: 'Results', href: '#results' },
  { id: 'work', label: 'Gallery', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
];

export const PillNav = () => {
  const [activeTab, setActiveTab] = useState(items[0].id);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Dock className="hidden md:flex items-center gap-2 p-1 border-2 border-ink rounded-full bg-bg origin-bottom">
      {items.map((item) => (
        <DockItem key={item.id}>
          <a
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            onMouseEnter={() => setHoveredTab(item.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`relative px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-colors z-10 w-full h-full flex items-center justify-center ${
              activeTab === item.id || hoveredTab === item.id
                ? 'text-bg'
                : 'text-ink'
            }`}
          >
            {hoveredTab === item.id && (
              <motion.div
                layoutId="pill-hover"
                className="absolute inset-0 bg-ink/30 rounded-full"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
              />
            )}
            {activeTab === item.id && (
              <motion.div
                layoutId="pill-active"
                className="absolute inset-0 bg-ink rounded-full"
                style={{ zIndex: -2 }}
                transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
              />
            )}
            {item.label}
          </a>
        </DockItem>
      ))}
    </Dock>
  );
};

export default PillNav;
