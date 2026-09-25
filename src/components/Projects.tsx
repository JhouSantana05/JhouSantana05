'use client';

import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

export default function Projects() {
  return (
    <section id="projetos" className="min-h-screen flex flex-col justify-center py-20 relative bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
              Portfólio Real
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Projetos Desenvolvidos & Código Aberto
            </h2>
          </div>

          <a
            href="https://github.com/JhouSantana05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:bg-slate-800/60 text-slate-200 border border-slate-700/60 text-xs font-bold transition-all shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>GitHub Oficial (@JhouSantana05)</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* 3 Cards Translúcidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Projeto 1: Branch Clo */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all group">
            <div className="h-36 bg-slate-950/60 relative overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://raw.githubusercontent.com/JhouSantana05/branch-clo/main/camisa1.png"
                alt="Branch Clo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-3 text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                Next.js 14 + Prisma
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-white mb-1">Branch Clo • Streetwear</h3>
              <p className="text-xs text-slate-300 mb-3">Loja virtual para marca de streetwear, com catálogo de produtos e direcionamento do cliente para atendimento e fechamento pelo WhatsApp.</p>
              <a
                href="https://github.com/JhouSantana05/branch-clo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
              >
                Ver no GitHub <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Projeto 2: Cartão de Visita Digital */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition-all group">
            <div className="h-36 bg-gradient-to-br from-slate-900/60 to-indigo-950/40 relative overflow-hidden flex items-center justify-center p-3">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://raw.githubusercontent.com/JhouSantana05/cartao-visita/main/1000904715.jpg"
                  alt="Jhones Santana"
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400/80 shadow-md"
                />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white">Jhones Santana</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
                  </span>
                </div>
              </div>
              <span className="absolute bottom-2 left-3 text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                Hub de Autoridade
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-white mb-1">Cartão de Visita Digital</h3>
              <p className="text-xs text-slate-300 mb-3">Página profissional para prestadores de serviços, centralizando apresentação comercial, canais de contato e chave Pix em um só lugar.</p>
              <a
                href="https://github.com/JhouSantana05/cartao-visita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
              >
                Ver no GitHub <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Projeto 3: Gestão Financeira Pro */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/40 transition-all group">
            <div className="h-36 bg-slate-950/60 relative overflow-hidden flex flex-col justify-center p-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono text-emerald-400 font-bold">R$ 30.000,00</span>
                <span className="text-[10px] font-mono text-slate-400">Meta Mensal</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-1.5">
                <div className="w-3/4 h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Simulação de Metas • Tempo Real</span>
              <span className="absolute bottom-2 left-3 text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Dashboard Web
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-white mb-1">Gestão Financeira Pro</h3>
              <p className="text-xs text-slate-300 mb-3">Sistema web para gestão financeira interna de pequenos negócios, organizando entradas, despesas operacionais e metas de fluxo de caixa.</p>
              <a
                href="https://github.com/JhouSantana05/Gest-o-30k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
              >
                Ver no GitHub <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
