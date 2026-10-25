import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ text, className = '', delay = 0 }: SplitTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className={className} style={{ display: "inline-flex", overflow: "hidden" }}>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 400,
          delay: delay,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

export default SplitText;
