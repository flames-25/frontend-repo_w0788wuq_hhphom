import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ProblemSection, SolutionSection, HowItWorks, EmotionalBenefits, FeatureHighlights, AboutDesign, CTASection } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <EmotionalBenefits />
        <FeatureHighlights />
        <AboutDesign />
        <CTASection />
      </main>
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Balance Cars. Designed for clarity and confidence.</p>
          <div className="flex items-center gap-6">
            <a href="#problem" className="hover:text-zinc-700">Problem</a>
            <a href="#solution" className="hover:text-zinc-700">Solution</a>
            <a href="#how" className="hover:text-zinc-700">How it works</a>
            <a href="#cta" className="hover:text-zinc-700">Start</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
