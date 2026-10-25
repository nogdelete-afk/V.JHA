import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const Dock = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`${className}`}
    >
      {React.Children.map(children, (child) => 
        React.isValidElement(child) ? React.cloneElement(child as any, { mouseX }) : child
      )}
    </motion.div>
  );
};

export const DockItem = ({ mouseX, children, className, ...props }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.25, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`relative flex items-center justify-center transition-all origin-bottom ${className || ''}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
