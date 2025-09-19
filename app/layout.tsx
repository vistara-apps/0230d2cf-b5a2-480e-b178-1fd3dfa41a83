import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PocketLawyer AI - Know Your Rights. Instantly.',
  description: 'Provides individuals with immediate, location-specific legal rights information and action scripts for encounters with law enforcement.',
  keywords: 'legal rights, law enforcement, know your rights, legal advice, AI lawyer',
  authors: [{ name: 'PocketLawyer AI' }],
  openGraph: {
    title: 'PocketLawyer AI - Know Your Rights. Instantly.',
    description: 'Immediate, location-specific legal rights information and AI-powered scenario simulation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PocketLawyer AI',
    description: 'Know Your Rights. Instantly.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
