import { FeaturesSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection';

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};
