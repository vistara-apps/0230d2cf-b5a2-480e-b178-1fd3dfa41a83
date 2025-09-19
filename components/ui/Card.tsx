'use client';

import { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import type { CardProps } from '../../lib/types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className = '', children, onClick, ...props }, ref) => {
    const baseStyles = 'bg-surface rounded-lg shadow-card border border-surface/50';
    
    const variants = {
      default: 'p-6',
      interactive: 'p-6 cursor-pointer hover:bg-surface/80 hover:border-surface/70 transition-all duration-200 active:scale-[0.98]',
    };

    const Component = onClick ? 'button' : 'div';

    return (
      <Component
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';
