'use client';

import { FEATURES } from '../lib/constants';
import { Card } from './ui/Card';
import { Crown } from 'lucide-react';

export function FeaturesGrid() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-textPrimary">
          Features
        </h2>
        <span className="text-sm text-textSecondary">
          Tap to explore
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          
          return (
            <Card
              key={feature.id}
              variant="interactive"
              className="relative group hover:scale-[1.02] transition-transform duration-200"
              onClick={() => {
                // Handle feature navigation
                console.log(`Navigate to ${feature.href}`);
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-textPrimary">
                      {feature.title}
                    </h3>
                    {feature.isPremium && (
                      <Crown className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {feature.isPremium && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                    Premium
                  </span>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
