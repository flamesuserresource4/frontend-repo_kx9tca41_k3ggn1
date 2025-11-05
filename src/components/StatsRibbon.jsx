import React from 'react';
import { Users, Plane, MessageCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, label: 'Travelers matched', value: '120k+' },
  { icon: Plane, label: 'Trips planned', value: '300k+' },
  { icon: MessageCircle, label: 'Messages sent', value: '25M+' },
  { icon: Shield, label: 'Verified profiles', value: '98%' },
];

const StatsRibbon = () => {
  return (
    <section className="relative -mt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl p-2"
            >
              <div className="rounded-lg bg-white/10 p-2 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">{s.value}</div>
                <div className="text-xs text-white/70">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRibbon;
