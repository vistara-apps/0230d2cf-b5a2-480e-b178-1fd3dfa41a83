'use client';

import { Shield, Menu } from 'lucide-react';
import { APP_CONFIG } from '../lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-surface">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-textPrimary">
                {APP_CONFIG.name}
              </h1>
              <p className="text-xs text-textSecondary">
                {APP_CONFIG.tagline}
              </p>
            </div>
          </div>
          
          <button className="p-2 text-textSecondary hover:text-textPrimary transition-colors">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
