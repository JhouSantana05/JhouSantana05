'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Vi%20seu%20site%20da%20JS%20Web%20%26%20Business%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-emerald-500/30 text-xs font-semibold text-slate-200 shadow-xl hover:border-emerald-400 transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Jhones Santana • Online no WhatsApp</span>
      </a>

      <a
        href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Vi%20seu%20site%20da%20JS%20Web%20%26%20Business%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com Jhones Santana"
        className="btn-glow-whatsapp w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950 stroke-none" />
      </a>
    </div>
  );
}
