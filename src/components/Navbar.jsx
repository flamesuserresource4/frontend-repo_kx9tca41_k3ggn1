import React, { useState } from 'react';
import { Compass, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm text-white/80 hover:text-white transition">
    {children}
  </a>
);

const Navbar = ({ onLogin, onSignup }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            <Compass className="h-5 w-5" />
          </div>
          <span className="font-semibold">TravelBuddy AI</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#ai-demo">AI Planner</NavLink>
          <NavLink href="#explore">Explore</NavLink>
          <NavLink href="#how">How it works</NavLink>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={onLogin}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            <LogIn className="h-4 w-4" /> Log in
          </button>
          <button
            onClick={onSignup}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            <UserPlus className="h-4 w-4" /> Sign up
          </button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-black/60 px-6 md:hidden"
          >
            <div className="mx-auto max-w-7xl py-4">
              <div className="flex flex-col gap-3">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#ai-demo">AI Planner</NavLink>
                <NavLink href="#explore">Explore</NavLink>
                <NavLink href="#how">How it works</NavLink>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={onLogin}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    <LogIn className="h-4 w-4" /> Log in
                  </button>
                  <button
                    onClick={onSignup}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    <UserPlus className="h-4 w-4" /> Sign up
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
