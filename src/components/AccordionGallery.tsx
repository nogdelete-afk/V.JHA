import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  image: string;
  metrics?: string;
  role?: string;
  isCustomUpload?: boolean;
}

const defaultGalleryItems: GalleryItem[] = [
  {
    id: 'design-ceasefire',
    title: '91 Culture - The Plastic War',
    subtitle: 'High-impact eco packaging & student campus beverage launch campaign.',
    category: 'Brand Campaign',
    tag: 'Sustainability & FMCG',
    image: '/assets/aistudio/We_Demand_A_Ceasefire._ba84fbbf.png',
    metrics: '92% Campus Recall • 3.2x Pre-orders',
    role: 'Creative Direction & Campaign Hook',
    isCustomUpload: true,
  },
  {
    id: 'design-pegasus',
    title: 'Pegasus Core Architecture',
    subtitle: 'Comprehensive 21+ module PropTech enterprise ecosystem visualization.',
    category: 'Enterprise Tech',
    tag: 'PropTech Blueprint',
    image: '/assets/aistudio/_FE987383-4F88-4D2D-A4B5-A26FA0517453__e7a1ecd2.png',
    metrics: '21+ Core Modules • One Central Console',
    role: 'Information Design & System Mapping',
    isCustomUpload: true,
  },
  {
    id: 'design-tech-tools',
    title: 'Tech Stack Disruption',
    subtitle: 'Aggressive hook visual engineered for viral creator CTR and community retention.',
    category: 'Performance Creative',
    tag: 'High-CTR Social',
    image: '/assets/aistudio/_BBF99EAF-1F59-41C6-B1D8-1F6DF57FB25F__adbcd898.png',
    metrics: '4.8% Average CTR • 120K+ Organic Reach',
    role: 'Creative Production & Hook Testing',
    isCustomUpload: true,
  },
  {
    id: 'design-luxury-estate',
    title: 'Skyline Residences - Mumbai',
    subtitle: 'Ultra-prime architectural identity and digital campaign for luxury penthouse suites.',
    category: 'Real Estate',
    tag: 'Luxury High-Rise',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    metrics: '₹40Cr+ Pipeline • 18 Private Showings',
    role: 'Full-Funnel Real Estate Branding',
    isCustomUpload: false,
  },
  {
    id: 'design-commercial-hub',
    title: 'Stallion Buildtech - Metro Park',
    subtitle: 'Targeted B2B commercial lease acquisition creatives and conversion funnels.',
    category: 'B2B & Commercial',
    tag: 'Commercial Launch',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metrics: '340+ Qualified Leads • ₹120 CPL',
    role: 'Paid Acquisition & Visual Strategy',
    isCustomUpload: false,
  },
  {
    id: 'design-veda-epic',
    title: 'Veda Epic Tales - Digital Universe',
    subtitle: 'Mythological narrative key art, teaser motion visuals, and digital community rollout.',
    category: 'Digital Media',
    tag: 'IP Storytelling',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    metrics: '550K+ Video Views • 45% Engagement',
    role: 'Art Direction & Storytelling',
    isCustomUpload: false,
  },
];

interface AccordionGalleryProps {
  id?: string;
  items?: GalleryItem[];
}

export default function AccordionGallery({
  id = 'gallery',
  items = defaultGalleryItems,
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);

  // Keyboard navigation for active item and lightbox modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (modalItem) {
        if (e.key === 'Escape') {
          setModalItem(null);
        } else if (e.key === 'ArrowRight') {
          const currentIndex = items.findIndex((i) => i.id === modalItem.id);
          const nextIndex = (currentIndex + 1) % items.length;
          setModalItem(items[nextIndex]);
        } else if (e.key === 'ArrowLeft') {
          const currentIndex = items.findIndex((i) => i.id === modalItem.id);
          const prevIndex = (currentIndex - 1 + items.length) % items.length;
          setModalItem(items[prevIndex]);
        }
      }
    },
    [modalItem, items]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const activeItem = items[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-8 py-24 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-white font-mono text-xs uppercase tracking-widest brutalist-border">
            <Sparkles className="w-3.5 h-3.5" /> Featured Work &amp; Visuals
          </div>
          <ScrollReveal
            as="h2"
            className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter"
          >
            ACCORDION <span className="text-accent underline decoration-8 underline-offset-8">GALLERY</span>
          </ScrollReveal>
          <ScrollReveal as="p" className="text-lg md:text-xl font-medium text-white/80">
            Click or hover through selected brand campaigns, PropTech architecture blueprints, and high-converting visual assets.
          </ScrollReveal>
        </div>

        {/* Desktop Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-[#111] brutalist-border text-xs font-mono text-white/70">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
          </div>
          <button
            onClick={handlePrev}
            aria-label="Previous design"
            className="w-12 h-12 bg-bg brutalist-border text-white hover:bg-accent hover:border-accent flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next design"
            className="w-12 h-12 bg-bg brutalist-border text-white hover:bg-accent hover:border-accent flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="relative w-full brutalist-border bg-black p-2 md:p-3 overflow-hidden">
        {/* Accordion Panels - Responsive Desktop Horizontal & Mobile Vertical */}
        <div className="flex flex-col md:flex-row w-full h-[580px] md:h-[680px] lg:h-[760px] gap-2 md:gap-3 transition-all duration-500 ease-out">
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  if (isActive) {
                    setModalItem(item);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className={`relative overflow-hidden cursor-pointer brutalist-border transition-[flex,height] duration-500 ease-out select-none ${
                  isActive
                    ? 'md:flex-[8] lg:flex-[9] h-[500px] md:h-full border-accent bg-[#050505] shadow-2xl'
                    : 'md:flex-[0.6] lg:flex-[0.5] h-[54px] md:h-full bg-[#0a0a0a] border-white/20 hover:border-white/60'
                }`}
              >
                {/* Full-size Image Display - Completely unobstructed without any text, badges, or overlays */}
                <div className="relative w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className={`w-full h-full transition-all duration-500 ease-out ${
                      isActive
                        ? 'object-contain scale-100 opacity-100'
                        : 'object-cover scale-105 opacity-40 hover:opacity-75'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Thumbnail Strip (Direct Navigation without Text) */}
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {items.map((item, idx) => (
              <button
                key={`thumb-${item.id}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show image ${idx + 1}`}
                className={`relative h-12 w-12 sm:h-14 sm:w-16 overflow-hidden brutalist-border transition-all cursor-pointer shrink-0 bg-[#111] ${
                  activeIndex === idx
                    ? 'border-accent shadow-[2px_2px_0px_#E11D48] scale-105 opacity-100'
                    : 'border-white/20 opacity-40 hover:opacity-100 hover:border-white/50'
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setModalItem(activeItem)}
              className="p-2.5 bg-[#111] hover:bg-accent text-white brutalist-border text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Open full image"
              aria-label="Open full image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Full Size Inspection */}
      <AnimatePresence>
        {modalItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md">
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0"
              onClick={() => setModalItem(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 max-w-6xl w-full max-h-[95vh] bg-[#0A0A0A] brutalist-border border-white flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-end gap-2 p-3 border-b border-white/20 bg-bg">
                <button
                  onClick={() => {
                    const cur = items.findIndex((i) => i.id === modalItem.id);
                    setModalItem(items[(cur - 1 + items.length) % items.length]);
                  }}
                  className="p-2 bg-[#111] text-white hover:bg-accent brutalist-border cursor-pointer transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    const cur = items.findIndex((i) => i.id === modalItem.id);
                    setModalItem(items[(cur + 1) % items.length]);
                  }}
                  className="p-2 bg-[#111] text-white hover:bg-accent brutalist-border cursor-pointer transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setModalItem(null)}
                  className="p-2 bg-accent text-white hover:bg-white hover:text-black brutalist-border cursor-pointer transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body - Full image view */}
              <div className="relative flex-1 overflow-auto p-2 sm:p-6 bg-black flex items-center justify-center min-h-[350px]">
                <img
                  src={modalItem.image}
                  alt=""
                  className="max-h-[82vh] w-auto max-w-full object-contain brutalist-border border-white/20 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
