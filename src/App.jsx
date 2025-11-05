import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import StatsRibbon from './components/StatsRibbon';
import FeatureGrid from './components/FeatureGrid';
import AIDemoPanel from './components/AIDemoPanel';
import MatchShowcase from './components/MatchShowcase';
import ExplorePreview from './components/ExplorePreview';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

const App = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);
  const [notice, setNotice] = useState('');

  const openLogin = () => {
    setAuthMode('login');
    setAuthOpen(true);
  };
  const openSignup = () => {
    setAuthMode('signup');
    setAuthOpen(true);
  };

  const handleAuthSuccess = (u, mode) => {
    setUser(u);
    setNotice(mode === 'login' ? `Welcome back, ${u.name}!` : `Account created. Hi, ${u.name}!`);
    setTimeout(() => setNotice(''), 3000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0b0b0f] to-black text-white">
      {/* Top notice */}
      {notice && (
        <div className="fixed inset-x-0 top-0 z-50 mx-auto max-w-2xl px-4">
          <div className="mt-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-3 text-center text-sm text-emerald-200 backdrop-blur">
            {notice}
          </div>
        </div>
      )}

      <Navbar onLogin={openLogin} onSignup={openSignup} />
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

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onModeChange={setAuthMode}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default App;
