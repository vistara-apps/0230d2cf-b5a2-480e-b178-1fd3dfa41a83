'use client';

import { ReactNode } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="container py-6 pb-20">
        {children}
      </main>
      <Navigation />
    </div>
  );
}
