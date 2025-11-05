import React from 'react';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import StatsRibbon from './components/StatsRibbon';
import FeatureGrid from './components/FeatureGrid';
import AIDemoPanel from './components/AIDemoPanel';
import MatchShowcase from './components/MatchShowcase';
import ExplorePreview from './components/ExplorePreview';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0b0b0f] to-black text-white">
      <Navbar />
      {/* Hero with interactive Spline scene */}
      <div className="pt-14">
        <HeroCover />
      </div>

      {/* Stats */}
      <StatsRibbon />

      {/* Feature highlights */}
      <FeatureGrid />

      {/* AI chat demo (frontend-only mock) */}
      <AIDemoPanel />

      {/* AI Match previews */}
      <MatchShowcase />

      {/* Explore destination previews */}
      <section id="explore">
        <ExplorePreview />
      </section>

      {/* How it works */}
      <HowItWorks />

      <Footer />
    </div>
  );
};

export default App;
