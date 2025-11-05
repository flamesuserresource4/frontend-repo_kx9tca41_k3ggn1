import React from 'react';
import { Users, Bot, MessageCircle, Map, Shield, Calendar, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Users,
    title: 'AI Buddy Match',
    desc: 'Find compatible travel partners using interests, destinations, and behavior signals.',
  },
  {
    icon: Bot,
    title: 'AI Travel Chatbot',
    desc: 'Plan itineraries, budgets, and routes through natural conversation.',
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Chat',
    desc: 'Private and group chat powered by Socket.IO with an Ask AI assistant.',
  },
  {
    icon: Map,
    title: 'Interactive Map',
    desc: 'Explore travelers and hotspots nearby with Google Maps/Mapbox.',
  },
  {
    icon: Calendar,
    title: 'Trip Dashboard',
    desc: 'Create and manage trips with auto-generated daily plans and routes.',
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    desc: 'JWT auth, OAuth, rate limiting, and admin controls built-in.',
  },
  {
    icon: Compass,
    title: 'Explore Destinations',
    desc: 'AI recommends where to go next with cost, climate, and safety insights.',
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything You Need to Travel Smarter</h2>
        <p className="mt-3 text-white/70">Clean, fast, and AI-assisted — designed for modern travelers.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 shadow-lg backdrop-blur hover:border-white/20"
          >
            <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-white">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
