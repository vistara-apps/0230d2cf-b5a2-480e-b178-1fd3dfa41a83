'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="container">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <AlertTriangle className="h-16 w-16 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-textPrimary mb-2">
              Something went wrong!
            </h2>
            <p className="text-textSecondary">
              We encountered an error while loading PocketLawyer AI.
            </p>
          </div>
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
