import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Plane, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve text contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Find Your Perfect Travel Buddy with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-white/85 sm:text-xl"
          >
            Smart matching, itinerary planning, real-time chat, and an interactive map — all powered by AI to make your next adventure effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#ai-demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-white/90"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Start Planning with AI
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Users className="h-5 w-5" /> See How It Works
            </a>
          </motion.div>

          <div className="mt-6 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              <span className="text-sm">Worldwide Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">Real-time Matching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
