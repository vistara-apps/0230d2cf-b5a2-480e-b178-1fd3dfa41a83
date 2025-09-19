'use client';

import { Shield, Zap } from 'lucide-react';
import { APP_CONFIG } from '../lib/constants';

export function WelcomeSection() {
  return (
    <section className="text-center space-y-4 py-8">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-card">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-accent rounded-full">
            <Zap className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-textPrimary">
          {APP_CONFIG.name}
        </h1>
        <p className="text-xl text-accent font-semibold">
          {APP_CONFIG.tagline}
        </p>
        <p className="text-textSecondary max-w-md mx-auto leading-relaxed">
          Get immediate access to location-specific legal rights information and AI-powered scenario guidance for law enforcement encounters.
        </p>
      </div>
    </section>
  );
}
