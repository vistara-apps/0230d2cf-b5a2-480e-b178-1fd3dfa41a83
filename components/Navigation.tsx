'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NAVIGATION } from '../lib/constants';
import { cn } from '../lib/utils';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-t border-surface">
      <div className="container">
        <div className="flex items-center justify-around h-16">
          {NAVIGATION.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 p-2 rounded-lg transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-textSecondary hover:text-textPrimary'
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
