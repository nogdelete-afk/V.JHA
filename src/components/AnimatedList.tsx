import React from 'react';
import { motion } from 'motion/react';

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
}

export const AnimatedList = React.memo(({ className, children }: AnimatedListProps) => {
  const childrenArray = React.Children.toArray(children);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.96 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 22,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`flex flex-col gap-6 w-full ${className || ''}`}
    >
      {childrenArray.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="w-full"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
});

AnimatedList.displayName = 'AnimatedList';


