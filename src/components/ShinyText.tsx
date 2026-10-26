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
  speed = 3.5,
}: ShinyTextProps) => {
  return (
    <span
      className={`inline-block text-white opacity-100 font-black ${
        disabled ? '' : 'animate-shine-bright'
      } ${className}`}
      style={{
        opacity: 1,
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
