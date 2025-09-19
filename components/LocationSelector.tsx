'use client';

import { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Loader2 } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import type { Location } from '../lib/types';
import { formatLocation } from '../lib/utils';

export function LocationSelector() {
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showManualInput, setShowManualInput] = useState(false);

  const getCurrentLocation = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser');
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        });
      });

      const { latitude, longitude } = position.coords;
      
      // In a real app, you would reverse geocode these coordinates
      // For now, we'll simulate the location data
      const mockLocation: Location = {
        latitude,
        longitude,
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
      };

      setLocation(mockLocation);
    } catch (err) {
      console.error('Geolocation error:', err);
      setError('Unable to get your location. Please select manually.');
      setShowManualInput(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualLocationSelect = (city: string, state: string) => {
    const manualLocation: Location = {
      latitude: 0,
      longitude: 0,
      city,
      state,
      country: 'United States',
    };
    setLocation(manualLocation);
    setShowManualInput(false);
  };

  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
          <MapPin className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold text-textPrimary">Your Location</h3>
          <p className="text-sm text-textSecondary">
            Get rights specific to your area
          </p>
        </div>
      </div>

      {location ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-medium text-textPrimary">
                {formatLocation(location.city, location.state)}
              </span>
            </div>
            <button
              onClick={() => setLocation(null)}
              className="text-xs text-textSecondary hover:text-textPrimary"
            >
              Change
            </button>
          </div>
          
          <p className="text-sm text-textSecondary">
            Legal information will be tailored to {location.state} laws and regulations.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="primary"
              onClick={getCurrentLocation}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Getting Location...
                </>
              ) : (
                <>
                  <MapPin className="h-4 w-4" />
                  Use Current Location
                </>
              )}
            </Button>
            
            <Button
              variant="secondary"
              onClick={() => setShowManualInput(!showManualInput)}
            >
              <ChevronDown className={`h-4 w-4 transition-transform ${showManualInput ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {showManualInput && (
            <div className="space-y-3 p-4 bg-surface/50 rounded-lg border border-surface">
              <h4 className="font-medium text-textPrimary">Select Your Location</h4>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { city: 'Los Angeles', state: 'California' },
                  { city: 'New York', state: 'New York' },
                  { city: 'Chicago', state: 'Illinois' },
                  { city: 'Houston', state: 'Texas' },
                  { city: 'Phoenix', state: 'Arizona' },
                ].map((loc) => (
                  <button
                    key={`${loc.city}-${loc.state}`}
                    onClick={() => handleManualLocationSelect(loc.city, loc.state)}
                    className="text-left p-2 rounded-md hover:bg-surface transition-colors text-textSecondary hover:text-textPrimary"
                  >
                    {formatLocation(loc.city, loc.state)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
