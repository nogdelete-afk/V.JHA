import React from 'react';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  disabled?: boolean;
}

export const ShinyText = ({
  children,
  className = '',
  disabled = false,
  speed = 3,
}: ShinyTextProps) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block ${
        disabled ? '' : 'animate-shine hover:animate-none'
      } ${className}`}
      style={{
        WebkitMaskImage: disabled
          ? 'none'
          : 'linear-gradient(120deg, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.75) 60%)',
        WebkitMaskSize: '200% 100%',
        maskImage: disabled
          ? 'none'
          : 'linear-gradient(120deg, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.75) 60%)',
        maskSize: '200% 100%',
        animationDuration: animationDuration,
      }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
