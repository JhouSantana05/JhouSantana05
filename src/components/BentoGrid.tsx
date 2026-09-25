'use client';

import React from 'react';
import {
  Sparkles,
  Gauge,
  ShieldCheck,
  Zap,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="ecossistema" className="py-16 relative overflow-hidden bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Compacto */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Arquitetura de Alto Padrão</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Feito para{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Dominar o Mercado
            </span>
          </h2>
        </div>

        {/* Bento Grid Compacto em Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
          
          {/* Card 1: Design & Entrega Rápida */}
          <div className="cosmic-card rounded-2xl p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-pink-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white leading-snug">Design 3D & Entrega Ágil</h3>
              <p className="text-xs text-slate-300">Entrega de 7 a 15 dias com acompanhamento direto comigo.</p>
            </div>
            <div className="pt-3 border-t border-white/5 mt-3">
              <span className="text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" /> Suporte 1-on-1
              </span>
            </div>
          </div>

          {/* Card 2: Orbe Central Cósmico Compacto */}
          <div className="cosmic-hero-card rounded-2xl p-5 md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                JS Engine Core
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                Presença Digital de Alta Performance
              </h3>
              <p className="text-xs text-slate-300 max-w-sm">
                Estrutura pensada para engajar o visitante e guiar diretamente para o WhatsApp.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Alta Disponibilidade & Carregamento Fluido
              </div>
            </div>

            {/* Orbe Compacto */}
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-purple-500/30 border-dashed animate-spin-slow" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shadow-lg animate-cosmic-orb flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded-full bg-[#080914] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Performance Otimizada */}
          <div className="cosmic-card rounded-2xl p-5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Gauge className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white">Performance Otimizada</h3>
              <p className="text-xs text-slate-300">Carregamento rápido e fluido, otimizado para abrir sem travar no 4G.</p>
            </div>
            <div className="pt-3 border-t border-white/5 mt-3">
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Navegação Leve
              </span>
            </div>
          </div>

          {/* Card 4: Soluções Sob Medida */}
          <div className="cosmic-card rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mb-1">Sob Medida</div>
              <p className="text-xs text-slate-300 mb-2">Projetos desenvolvidos para resolver os gargalos reais do seu negócio.</p>
            </div>
            <div className="pt-3 border-t border-white/5">
              <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Foco no Seu Negócio
              </span>
            </div>
          </div>

          {/* Card 5: Código 100% Seu */}
          <div className="cosmic-card rounded-2xl p-5 md:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Código & Domínio 100% Seus</h4>
                <p className="text-xs text-slate-300">Sem mensalidades presas a plataformas de terceiros. O projeto é seu para sempre.</p>
              </div>
            </div>
            <a
              href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-btn-pill px-5 py-2.5 rounded-xl text-xs font-bold text-white inline-flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
