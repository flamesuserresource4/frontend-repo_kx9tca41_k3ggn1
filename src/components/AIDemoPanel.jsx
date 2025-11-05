import React, { useMemo, useRef, useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mockAIResponse = (text) => {
  const t = text.toLowerCase();
  const suggestions = [];
  if (t.includes('japan') || t.includes('tokyo') || t.includes('kyoto')) {
    suggestions.push('Japan in spring (Mar–Apr) for cherry blossoms. 7–10 days for Tokyo, Kyoto, Osaka.');
  }
  if (t.includes('budget') || t.includes('cheap') || t.includes('$')) {
    suggestions.push('Target $60–$100/day excluding flights. Use IC cards for transit and stay near major stations.');
  }
  if (t.includes('hike') || t.includes('nature')) {
    suggestions.push('Consider day trips to Nikko or Hakone for nature and onsen. Pack lightweight layers.');
  }
  if (t.includes('europe') || t.includes('interrail')) {
    suggestions.push('Consider an Interrail/Eurail pass if traveling across multiple countries within 2–3 weeks.');
  }
  if (suggestions.length === 0) {
    suggestions.push("Tell me your destination, dates, and budget — I'll build a day-by-day plan.");
  }
  return `Here are some ideas:\n• ${suggestions.join('\n• ')}`;
};

const Message = ({ role, content }) => (
  <div className={`flex items-start gap-3 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    {role !== 'user' && (
      <div className="mt-1 rounded-lg bg-emerald-500/20 p-2 text-emerald-300">
        <Bot className="h-4 w-4" />
      </div>
    )}
    <div
      className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
        role === 'user'
          ? 'bg-white text-black'
          : 'bg-white/5 text-white backdrop-blur border border-white/10'
      }`}
    >
      {content}
    </div>
    {role === 'user' && (
      <div className="mt-1 rounded-lg bg-white text-black p-2">
        <User className="h-4 w-4" />
      </div>
    )}
  </div>
);

const AIDemoPanel = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI travel planner. Tell me where and when, and I\'ll craft a route, budget, and daily plans.' },
  ]);
  const [input, setInput] = useState('I want a budget trip to Japan with some hiking');
  const listRef = useRef(null);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { role: 'user', content: text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      const aiMsg = { role: 'assistant', content: mockAIResponse(text) };
      setMessages((m) => [...m, aiMsg]);
      // scroll to bottom
      requestAnimationFrame(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
      });
    }, 500);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const tips = useMemo(
    () => [
      'Ask: 10-day Japan under $1200, March, love food + nature',
      'Ask: 5 cities in Europe by train, July, mid-range',
      'Ask: Bali in November, surfing + coworking'
    ],
    []
  );

  return (
    <section id="ai-demo" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Plan with an AI Copilot</h2>
          <p className="mt-2 text-white/70">Itineraries, budgets, and routes — generated as you chat.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          {tips.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{t}</span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chat Panel */}
        <div className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] backdrop-blur">
          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto p-4">
            <AnimatePresence>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Message role={m.role} content={m.content} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 bg-black/30 p-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Ask about routes, budgets, visas, seasons..."
              className="min-h-[44px] flex-1 resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
            />
            <button onClick={send} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-black transition hover:bg-white/90">
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid content-start gap-4">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-200">
            <h3 className="text-lg font-semibold">How it works</h3>
            <p className="mt-1 text-sm text-emerald-100/80">Your prompts are transformed into routes, daily plans, and budgets. The model considers distance, transit time, opening hours, and seasonality.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90">
            <h4 className="font-semibold">Why it\'s smart</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>Understands constraints (budget, time, interests)</li>
              <li>Optimizes routes to minimize backtracking</li>
              <li>Suggests compatible buddies based on shared goals</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-5 text-white">
            <p className="text-sm">Tip: Click "Start Planning with AI" above to jump straight into the chat demo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemoPanel;
