import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface CardProps {
  index: number;
  totalCards: number;
  children: React.ReactNode;
  key?: React.Key;
}

const Card = ({ index, totalCards, children }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (totalCards - index) * 0.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div ref={cardRef} className="sticky top-24 w-full h-auto mb-16 flex justify-center items-start shadow-xl" style={{ zIndex: index }}>
      <motion.div style={{ scale, opacity }} className="w-full h-full transform-origin-top">
        {children}
      </motion.div>
    </div>
  );
};

export const ScrollStack = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="relative w-full">
      {React.Children.map(children, (child, index) => (
        <Card key={index} index={index} totalCards={React.Children.count(children)}>
          {child}
        </Card>
      ))}
    </div>
  );
};

export default ScrollStack;
