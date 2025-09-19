import { Shield, MessageSquare, Brain, Bookmark, MapPin, Search } from 'lucide-react';
import type { Feature, NavigationItem } from './types';

// App Configuration
export const APP_CONFIG = {
  name: 'PocketLawyer AI',
  tagline: 'Know Your Rights. Instantly.',
  description: 'Provides individuals with immediate, location-specific legal rights information and action scripts for encounters with law enforcement.',
  version: '1.0.0',
} as const;

// Feature Definitions
export const FEATURES: Feature[] = [
  {
    id: 'rights-database',
    title: 'Legal Rights Database',
    description: 'Access location-specific legal rights and relevant laws tailored to your jurisdiction.',
    icon: Shield,
    href: '/rights',
    isPremium: false,
  },
  {
    id: 'action-scripts',
    title: 'Action Scripts',
    description: 'Get pre-written, actionable scripts for common law enforcement encounters.',
    icon: MessageSquare,
    href: '/scripts',
    isPremium: false,
  },
  {
    id: 'ai-preview',
    title: 'AI Scenario Preview',
    description: 'Practice interactions with AI-powered scenario simulation and guided responses.',
    icon: Brain,
    href: '/ai-preview',
    isPremium: true,
  },
  {
    id: 'saved-items',
    title: 'Saved Rights & Scripts',
    description: 'Bookmark important information and share with trusted contacts.',
    icon: Bookmark,
    href: '/saved',
    isPremium: false,
  },
] as const;

// Navigation Items
export const NAVIGATION: NavigationItem[] = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
    icon: Shield,
  },
  {
    id: 'search',
    title: 'Search',
    href: '/search',
    icon: Search,
  },
  {
    id: 'location',
    title: 'Location',
    href: '/location',
    icon: MapPin,
  },
  {
    id: 'saved',
    title: 'Saved',
    href: '/saved',
    icon: Bookmark,
  },
] as const;

// Legal Categories
export const LEGAL_CATEGORIES = [
  { id: 'traffic', label: 'Traffic Stops', color: 'hsl(220 70% 60%)' },
  { id: 'search', label: 'Search & Seizure', color: 'hsl(30 95% 55%)' },
  { id: 'arrest', label: 'Arrest Procedures', color: 'hsl(0 70% 60%)' },
  { id: 'questioning', label: 'Police Questioning', color: 'hsl(120 70% 50%)' },
  { id: 'general', label: 'General Rights', color: 'hsl(280 70% 60%)' },
] as const;

// Sample Data for Development
export const SAMPLE_RIGHTS = [
  {
    rightId: '1',
    title: 'Right to Remain Silent',
    description: 'You have the constitutional right to remain silent during police questioning. You cannot be punished for refusing to answer questions.',
    category: 'questioning' as const,
    jurisdictionId: 'us-general',
    relatedScripts: ['silence-script-1'],
    isPremium: false,
  },
  {
    rightId: '2',
    title: 'Right to Refuse Consent to Search',
    description: 'You have the right to refuse consent to search your person, belongings, car, or home unless police have a warrant.',
    category: 'search' as const,
    jurisdictionId: 'us-general',
    relatedScripts: ['search-refusal-1'],
    isPremium: false,
  },
  {
    rightId: '3',
    title: 'Right to an Attorney',
    description: 'You have the right to have an attorney present during questioning and to have one appointed if you cannot afford one.',
    category: 'questioning' as const,
    jurisdictionId: 'us-general',
    relatedScripts: ['attorney-request-1'],
    isPremium: false,
  },
] as const;

export const SAMPLE_SCRIPTS = [
  {
    scriptId: 'silence-script-1',
    scenario: 'Police Questioning',
    scriptText: '"I am exercising my right to remain silent. I would like to speak with an attorney before answering any questions."',
    category: 'questioning' as const,
    jurisdictionId: 'us-general',
    relatedRights: ['1', '3'],
    isPremium: false,
  },
  {
    scriptId: 'search-refusal-1',
    scenario: 'Search Request',
    scriptText: '"I do not consent to any search of my person, belongings, or vehicle. I am exercising my Fourth Amendment rights."',
    category: 'search' as const,
    jurisdictionId: 'us-general',
    relatedRights: ['2'],
    isPremium: false,
  },
] as const;

// Default Jurisdictions
export const DEFAULT_JURISDICTIONS = [
  {
    jurisdictionId: 'us-general',
    name: 'United States (Federal)',
    state: 'Federal',
    city: undefined,
    legalRights: [],
    actionScripts: [],
  },
  {
    jurisdictionId: 'ca-general',
    name: 'California (State)',
    state: 'California',
    city: undefined,
    legalRights: [],
    actionScripts: [],
  },
  {
    jurisdictionId: 'ny-general',
    name: 'New York (State)',
    state: 'New York',
    city: undefined,
    legalRights: [],
    actionScripts: [],
  },
] as const;
