// User and Authentication Types
export interface User {
  userId: string;
  locationPreferences?: Jurisdiction;
  savedItems: SavedItem[];
  purchaseHistory: Purchase[];
}

// Location and Jurisdiction Types
export interface Jurisdiction {
  jurisdictionId: string;
  name: string;
  state: string;
  city?: string;
  legalRights: LegalRight[];
  actionScripts: ActionScript[];
}

export interface Location {
  latitude: number;
  longitude: number;
  city?: string;
  state?: string;
  country?: string;
}

// Legal Rights and Scripts Types
export interface LegalRight {
  rightId: string;
  title: string;
  description: string;
  category: 'traffic' | 'search' | 'arrest' | 'questioning' | 'general';
  jurisdictionId: string;
  relatedScripts: string[];
  isPremium: boolean;
}

export interface ActionScript {
  scriptId: string;
  scenario: string;
  scriptText: string;
  category: 'traffic' | 'search' | 'arrest' | 'questioning' | 'general';
  jurisdictionId: string;
  relatedRights: string[];
  isPremium: boolean;
}

// AI and Scenario Types
export interface AIScenario {
  scenarioId: string;
  userInput: string;
  simulatedConversation: ConversationTurn[];
  suggestedResponses: string[];
  relatedRights: string[];
  createdAt: Date;
}

export interface ConversationTurn {
  speaker: 'officer' | 'user';
  message: string;
  timestamp: Date;
}

// Saved Items and Purchases
export interface SavedItem {
  savedItemId: string;
  userId: string;
  type: 'right' | 'script' | 'scenario';
  itemId: string;
  savedAt: Date;
}

export interface Purchase {
  purchaseId: string;
  userId: string;
  type: 'action_pack' | 'monthly_subscription' | 'premium_feature';
  amount: number;
  purchasedAt: Date;
  expiresAt?: Date;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  variant?: 'default' | 'interactive';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
}

// Feature and Navigation Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  isPremium: boolean;
}

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
