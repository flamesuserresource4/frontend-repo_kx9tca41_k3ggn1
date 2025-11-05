import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} TravelBuddy AI. All rights reserved.</p>
          <div className="flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Twitter" className="rounded-lg bg-white/5 p-2 hover:bg-white/10">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="rounded-lg bg-white/5 p-2 hover:bg-white/10">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Contact" className="rounded-lg bg-white/5 p-2 hover:bg-white/10">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
