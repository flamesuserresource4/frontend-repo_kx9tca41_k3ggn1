import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', value, onChange, placeholder, autoComplete }) => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/40">
      <Icon className="h-4 w-4" />
    </div>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full rounded-xl border border-white/15 bg-white/5 px-9 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/30 focus:bg-white/10"
    />
  </div>
);

const AuthModal = ({ open, mode: initialMode = 'login', onClose, onModeChange, onSuccess }) => {
  const [mode, setMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => setMode(initialMode), [initialMode]);

  const switchMode = (next) => {
    setMode(next);
    onModeChange?.(next);
    setError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'signup' && name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    const emailOk = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      // Frontend-only mock success to unblock UX until backend is wired.
      await new Promise((res) => setTimeout(res, 800));
      const user = { id: Date.now().toString(), name: mode === 'signup' ? name : email.split('@')[0], email };
      onSuccess?.(user, mode);
      onClose?.();
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />

          {/* Panel */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]/95 p-6 shadow-2xl backdrop-blur"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {mode === 'login' ? 'Welcome back' : 'Create your account'}
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  {mode === 'login' ? 'Log in to plan trips, match and chat.' : 'Join the community of AI-powered travelers.'}
                </p>
              </div>
              <div className="rounded-xl bg-white px-3 py-1 text-xs font-semibold text-black">TravelBuddy AI</div>
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {mode === 'signup' && (
                <Input
                  icon={User}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  autoComplete="name"
                />
              )}
              <Input
                icon={Mail}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <Input
                icon={Lock}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />

              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-sm text-red-300">{error}</div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (mode === 'login' ? 'Logging in…' : 'Creating account…') : mode === 'login' ? 'Log in' : 'Sign up'}
              </button>

              <div className="text-center text-sm text-white/70">
                {mode === 'login' ? (
                  <span>
                    Don't have an account?{' '}
                    <button type="button" onClick={() => switchMode('signup')} className="font-semibold text-white hover:underline">
                      Sign up
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{' '}
                    <button type="button" onClick={() => switchMode('login')} className="font-semibold text-white hover:underline">
                      Log in
                    </button>
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
