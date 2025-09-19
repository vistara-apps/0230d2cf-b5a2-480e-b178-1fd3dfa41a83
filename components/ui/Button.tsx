'use client';

import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { ButtonProps } from '../../lib/types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    disabled = false,
    loading = false,
    onClick,
    children,
    className = '',
    ...props
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-sm hover:shadow-md',
      secondary: 'bg-surface text-textPrimary border border-surface hover:bg-surface/80 hover:border-surface/60',
      icon: 'bg-transparent text-textSecondary hover:text-textPrimary hover:bg-surface/50 rounded-full',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isDisabled}
        onClick={onClick}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
