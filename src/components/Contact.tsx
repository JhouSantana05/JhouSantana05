'use client';

import React from 'react';
import { MessageCircle, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="min-h-screen flex items-center justify-start relative bg-transparent select-none py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Card Translúcido Posicionado à Esquerda (Marcador 2), deixando Jhones e o Laptop 100% visíveis */}
        <div className="cosmic-card rounded-3xl p-6 sm:p-10 max-w-xl relative overflow-hidden backdrop-blur-xl border border-cyan-500/30 shadow-2xl mr-auto text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>O Próximo Projeto é o Seu</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
            Pronto para Colocar o <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Seu Site Aqui?
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
            Vamos construir a presença digital que sua empresa precisa com design 3D de ponta, velocidade extrema e botões diretos de fechamento.
          </p>

          {/* CTA Principal WhatsApp */}
          <div className="flex items-center mb-6">
            <a
              href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Vi%20a%20apresenta%C3%A7%C3%A3o%203D%20na%20JS%20Web%20%26%20Business%20e%20quero%20o%20meu%20site%20aqui."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-whatsapp px-7 py-3.5 rounded-xl text-slate-950 font-extrabold text-sm sm:text-base inline-flex items-center gap-2.5 shadow-2xl"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 stroke-none" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Garantias Rápidas */}
          <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Sem Intermediários
            </span>
            <span className="flex items-center gap-1.5 text-emerald-300">
              <Zap className="w-3.5 h-3.5 text-emerald-400" /> Entrega em 7 a 15 Dias
            </span>
            <span className="flex items-center gap-1.5 text-purple-300">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Código 100% Seu
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
