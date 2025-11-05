import React from 'react';
import { Map, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  {
    name: 'Kyoto, Japan',
    cost: '$$ · $80–$120/day',
    climate: 'Mild · Spring/Fall',
    best: 'Mar–Apr, Oct–Nov',
    safety: 'Very Safe',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Lisbon, Portugal',
    cost: '$ · $50–$90/day',
    climate: 'Warm · Spring/Summer',
    best: 'Apr–Jun, Sep–Oct',
    safety: 'Safe',
    img: 'https://images.unsplash.com/photo-1536082554079-2e662177fdc8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Bali, Indonesia',
    cost: '$ · $40–$70/day',
    climate: 'Tropical',
    best: 'May–Sep',
    safety: 'Moderate',
    img: 'https://images.unsplash.com/photo-1543248939-bc8fa3f0b3b1?q=80&w=1600&auto=format&fit=crop',
  },
];

const ExplorePreview = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Explore Destinations</h2>
          <p className="mt-2 text-white/70">AI-curated places with the best value by season, safety, and vibe.</p>
        </div>
        <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
          See all
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img src={d.img} alt={d.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                <Map className="mr-1 inline h-3 w-3" /> Nearby groups
              </div>
            </div>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{d.name}</h3>
                <div className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-1 text-[11px] font-medium text-amber-300">
                  <Star className="h-3 w-3" /> Top pick
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
                <span className="rounded-md bg-white/5 px-2 py-1">{d.cost}</span>
                <span className="rounded-md bg-white/5 px-2 py-1">{d.climate}</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1"><Calendar className="h-3 w-3" /> {d.best}</span>
                <span className="rounded-md bg-white/5 px-2 py-1">{d.safety}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExplorePreview;
