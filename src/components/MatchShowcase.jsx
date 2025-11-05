import React from 'react';
import { Users, ThumbsUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const matches = [
  {
    name: 'Maya • 27 • Berlin',
    interests: ['Hiking', 'Street food', 'Photography'],
    score: 92,
    route: 'Kyoto → Nara → Osaka',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Leo • 31 • Lisbon',
    interests: ['Surf', 'Coworking', 'Sunsets'],
    score: 88,
    route: 'Bali → Canggu → Uluwatu',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Aisha • 29 • Dubai',
    interests: ['Museums', 'Cafés', 'Night markets'],
    score: 85,
    route: 'Tokyo → Hakone → Nikko',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
  },
];

const Meter = ({ score }) => (
  <div className="w-full">
    <div className="h-2 w-full rounded-full bg-white/10">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400"
        style={{ width: `${Math.min(score, 100)}%` }}
      />
    </div>
    <div className="mt-1 text-xs text-white/70">Compatibility {score}%</div>
  </div>
);

const MatchShowcase = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Smart Buddy Matches</h2>
          <p className="mt-2 text-white/70">AI evaluates vibe, interests, and routes to match you with ideal partners.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
          <Sparkles className="h-4 w-4" /> See your matches
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur"
          >
            <div className="relative h-44 w-full">
              <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                <Users className="h-3 w-3" /> AI Match
              </div>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{m.name}</h3>
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-[11px] font-medium text-emerald-300">
                  <ThumbsUp className="h-3 w-3" /> {m.score}%
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {m.interests.map((tag) => (
                  <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-white/80">{tag}</span>
                ))}
              </div>
              <div className="text-xs text-white/70">Suggested route: {m.route}</div>
              <Meter score={m.score} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MatchShowcase;
