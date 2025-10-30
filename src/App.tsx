import { HeroV2 } from './components/HeroV2';
import { AboutV2 } from './components/AboutV2';
import { ExperienceV2 } from './components/ExperienceV2';
import { SkillsV2 } from './components/SkillsV2';
import { EducationV2 } from './components/EducationV2';
import { AwardsV2 } from './components/AwardsV2';
import { ContactV2 } from './components/ContactV2';
import { NavigationV2 } from './components/NavigationV2';
import { BackgroundEffects } from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <BackgroundEffects />
      <NavigationV2 />
      <main className="relative z-10">
        <HeroV2 />
        <AboutV2 />
        <ExperienceV2 />
        <SkillsV2 />
        <EducationV2 />
        <AwardsV2 />
        <ContactV2 />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Asharaf Ali. Available for consulting opportunities.</p>
        </div>
      </footer>
    </div>
  );
}
