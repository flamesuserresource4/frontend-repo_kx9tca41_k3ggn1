import React from 'react';
import { BrainCircuit, Map, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: BrainCircuit,
    title: 'Create your profile',
    desc: 'Share your goals, interests, and upcoming dates so the model can understand your vibe.',
  },
  {
    icon: MessageSquare,
    title: 'Chat with the AI',
    desc: 'Ask for plans by budget and time. It generates day-by-day routes with timing and costs.',
  },
  {
    icon: Map,
    title: 'See matches & map',
    desc: 'View compatible buddies and nearby groups on the interactive map to coordinate.',
  },
  {
    icon: ShieldCheck,
    title: 'Travel securely',
    desc: 'Verified profiles, safe messaging, and privacy-first design keep you in control.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How it works</h2>
        <p className="mt-2 text-white/70">From idea to itinerary — in minutes.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
          >
            <div className="mb-3 inline-flex rounded-xl bg-white/10 p-3 text-white">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-1 text-sm text-white/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
