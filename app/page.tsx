import { AppShell } from '../components/AppShell';
import { WelcomeSection } from '../components/WelcomeSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { LocationSelector } from '../components/LocationSelector';

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <WelcomeSection />
        <LocationSelector />
        <FeaturesGrid />
      </div>
    </AppShell>
  );
}
