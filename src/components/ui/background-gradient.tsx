import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      "relative rounded-2xl overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 via-[#9B59B6]/10 to-[#2ECC71]/10"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
