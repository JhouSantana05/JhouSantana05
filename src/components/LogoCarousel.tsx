'use client';

import React from 'react';
import {
  Layers,
  Cpu,
  FileCode2,
  Wind,
  Box,
  Server,
  Database,
  CreditCard,
  Zap,
} from 'lucide-react';

const techs = [
  { label: 'Next.js 16', icon: Layers, color: 'text-cyan-400' },
  { label: 'React 19', icon: Cpu, color: 'text-cyan-400' },
  { label: 'TypeScript', icon: FileCode2, color: 'text-blue-400' },
  { label: 'Tailwind CSS', icon: Wind, color: 'text-teal-400' },
  { label: 'Three.js 3D', icon: Box, color: 'text-purple-400' },
  { label: 'Node.js', icon: Server, color: 'text-emerald-400' },
  { label: 'Supabase', icon: Database, color: 'text-emerald-400' },
  { label: 'Stripe Checkout', icon: CreditCard, color: 'text-violet-400' },
  { label: 'Vercel Edge', icon: Zap, color: 'text-amber-400' },
  // Repetição para loop contínuo
  { label: 'Next.js 16', icon: Layers, color: 'text-cyan-400' },
  { label: 'React 19', icon: Cpu, color: 'text-cyan-400' },
  { label: 'TypeScript', icon: FileCode2, color: 'text-blue-400' },
  { label: 'Tailwind CSS', icon: Wind, color: 'text-teal-400' },
  { label: 'Three.js 3D', icon: Box, color: 'text-purple-400' },
  { label: 'Node.js', icon: Server, color: 'text-emerald-400' },
];

export default function LogoCarousel() {
  return (
    <section id="tecnologias" className="py-8 relative overflow-hidden bg-transparent border-y border-white/5 select-none">
      <div className="relative w-full overflow-hidden marquee-mask py-1">
        <div className="marquee-left flex items-center gap-4 sm:gap-6">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl glass-panel border border-white/10 shrink-0"
              >
                <Icon className={`w-4 h-4 ${tech.color}`} />
                <span className="text-xs font-semibold text-slate-200">{tech.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
