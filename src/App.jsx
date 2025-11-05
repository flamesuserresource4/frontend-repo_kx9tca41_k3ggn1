import React from 'react';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import AIDemoPanel from './components/AIDemoPanel';
import ExplorePreview from './components/ExplorePreview';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0b0b0f] to-black text-white">
      {/* Hero with interactive Spline scene */}
      <HeroCover />

      {/* Feature highlights */}
      <FeatureGrid />

      {/* AI chat demo (frontend-only mock) */}
      <AIDemoPanel />

      {/* Explore destination previews */}
      <ExplorePreview />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        Built with React, Tailwind, Framer Motion, and an interactive Spline cover. Future updates will add real auth, chat, maps, and AI backends.
      </footer>
    </div>
  );
};

export default App;
