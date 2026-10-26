import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number; // strictly 0 for straight only
  blurStrength?: number;
  containerClassName?: string;
  className?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  start?: string;
  as?: React.ElementType;
}

/**
 * Recursively splits text strings into individual animatable words while preserving
 * whitespace and nested React elements (such as styling spans, line breaks, etc.).
 */
function processChildren(node: React.ReactNode, keyPrefix = 'sr'): React.ReactNode {
  if (typeof node === 'string' || typeof node === 'number') {
    const text = String(node);
    const tokens = text.split(/(\s+)/);
    return tokens.map((token, i) => {
      if (!token) return null;
      if (token.match(/^\s+$/)) {
        return <span key={`${keyPrefix}-space-${i}`}> </span>;
      }
      return (
        <span
          key={`${keyPrefix}-w-${i}`}
          className="scroll-reveal-word inline-block will-change-[opacity,filter]"
        >
          {token}
        </span>
      );
    });
  }

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode; [key: string]: any };
    if (props && props.children) {
      return React.cloneElement(node, {
        ...props,
        children: React.Children.map(props.children, (child, idx) =>
          processChildren(child, `${keyPrefix}-${idx}`)
        ),
      });
    }
    return node;
  }

  if (Array.isArray(node)) {
    return React.Children.map(node, (child, idx) =>
      processChildren(child, `${keyPrefix}-${idx}`)
    );
  }

  return node;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.15,
  baseRotation = 0, // Default 0: straight only as requested
  blurStrength = 4,
  containerClassName = '',
  className = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom 60%',
  start = 'top bottom-=15%',
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  const splitContent = useMemo(() => {
    return processChildren(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion for accessibility
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const wordElements = el.querySelectorAll<HTMLElement>('.scroll-reveal-word');
    if (wordElements.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(wordElements, { opacity: 1, filter: 'none' });
      return;
    }

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Optional rotation if ever specified; by default baseRotation is 0 ("straight only")
    let rotationTrigger: ScrollTrigger | null = null;
    if (baseRotation !== 0) {
      const rotAnim = gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true,
          },
        }
      );
      rotationTrigger = rotAnim.scrollTrigger || null;
    }

    // Set initial state for all word elements
    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      willChange: 'opacity, filter',
    });

    // Create scrubbed word reveal timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start,
        end: wordAnimationEnd,
        scrub: 1,
      },
    });

    tl.to(wordElements, {
      opacity: 1,
      filter: enableBlur ? 'blur(0px)' : 'none',
      stagger: 0.05,
      ease: 'power2.out',
    });

    return () => {
      if (rotationTrigger) {
        rotationTrigger.kill();
      }
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [
    children,
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
    start,
  ]);

  const combinedClass = [containerClassName, className].filter(Boolean).join(' ');

  return React.createElement(
    Component,
    {
      ref: containerRef,
      className: combinedClass || undefined,
    },
    textClassName ? (
      <span className={textClassName}>{splitContent}</span>
    ) : (
      splitContent
    )
  );
};

export default ScrollReveal;
