'use client';

import { forwardRef, KeyboardEvent } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { SearchBarProps } from '../../lib/types';

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ 
    placeholder = 'Search legal rights and scripts...', 
    value, 
    onChange, 
    onSubmit,
    className = '',
    ...props 
  }, ref) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSubmit) {
        onSubmit(value);
      }
    };

    const handleClear = () => {
      onChange('');
    };

    return (
      <div className={cn('relative', className)}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-textSecondary" />
        </div>
        
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="search-input pl-10 pr-10"
          {...props}
        />
        
        {value && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-textSecondary hover:text-textPrimary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
