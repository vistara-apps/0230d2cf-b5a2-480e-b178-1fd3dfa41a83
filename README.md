# PocketLawyer AI

**Know Your Rights. Instantly.**

A Base Mini App that provides individuals with immediate, location-specific legal rights information and action scripts for encounters with law enforcement, enhanced with AI-powered response preview.

## Features

### 🛡️ Location-Specific Rights Database
- Searchable database of legal rights and relevant laws
- Tailored by jurisdiction (state, city)
- Instant access to rights information

### 📝 Action Script Generator
- Pre-written, actionable scripts for common scenarios
- Traffic stops, questioning, search situations
- Clear, concise, and legally sound guidance

### 🧠 AI Scenario Preview (Premium)
- AI-powered simulation of potential interactions
- Practice scenarios with guided responses
- Build confidence through realistic practice

### 🔖 Bookmark & Share Rights
- Save important rights information
- Quick access to saved scripts
- Share with trusted contacts

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Base Integration**: MiniKit for Base ecosystem features
- **AI**: OpenAI API for scenario simulation
- **TypeScript**: Full type safety throughout
- **Mobile-First**: Responsive design optimized for mobile

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Base MiniKit API key
- OnchainKit API key
- OpenAI API key (for AI features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/pocketlawyer-ai.git
cd pocketlawyer-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your API keys:
```env
NEXT_PUBLIC_MINIKIT_API_KEY=your_minikit_api_key_here
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # MiniKit provider setup
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── AppShell.tsx      # Main app layout
│   ├── Header.tsx        # App header
│   ├── Navigation.tsx    # Bottom navigation
│   └── ...               # Feature components
├── lib/                  # Utilities and types
│   ├── types.ts          # TypeScript type definitions
│   ├── constants.ts      # App constants and config
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Design System

The app uses a custom design system with:

- **Colors**: Dark theme with blue primary and orange accent
- **Typography**: Inter font with semantic text sizes
- **Components**: Consistent card, button, and input patterns
- **Spacing**: 8px base unit system
- **Animations**: Smooth transitions and micro-interactions

## API Integration

### Base MiniKit
- Wallet integration for premium features
- Social sharing capabilities
- Frame-based interactions

### OpenAI API
- Powers the AI Scenario Preview feature
- Generates realistic conversation simulations
- Provides contextual response guidance

### Geolocation API
- Determines user's current location
- Enables jurisdiction-specific content
- Fallback to manual location selection

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This app provides general legal information and should not be considered as legal advice. Always consult with a qualified attorney for specific legal situations.

## Support

For support, email support@pocketlawyer-ai.com or create an issue in this repository.
