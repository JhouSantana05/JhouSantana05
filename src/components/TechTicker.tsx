'use client';

import React from 'react';
import { Layers, Cpu, FileCode2, Wind, Database, Box, BarChart3, Smartphone, MessageCircle } from 'lucide-react';

export default function TechTicker() {
  const items = [
    { label: 'Next.js 16', icon: Layers, color: 'text-white' },
    { label: 'React 19', icon: Cpu, color: 'text-cyan-400' },
    { label: 'TypeScript', icon: FileCode2, color: 'text-blue-400' },
    { label: 'Tailwind CSS', icon: Wind, color: 'text-cyan-300' },
    { label: 'Prisma ORM', icon: Database, color: 'text-emerald-400' },
    { label: 'Three.js / 3D', icon: Box, color: 'text-violet-400' },
    { label: 'Chart.js', icon: BarChart3, color: 'text-amber-400' },
    { label: 'PWA (Instalável)', icon: Smartphone, color: 'text-purple-400' },
    { label: 'WhatsApp Lead Direct', icon: MessageCircle, color: 'text-emerald-400' },
  ];

  return (
    <section className="py-6 bg-slate-950/60 border-y border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold">
          Tecnologias Utilizadas nos Seus Projetos
        </span>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track flex items-center gap-10 py-2">
          {items.concat(items).map((item, idx) => {
            const Icon = item.icon;
            return (
              <span key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-300 shrink-0">
                <Icon className={`w-4 h-4 ${item.color}`} />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
