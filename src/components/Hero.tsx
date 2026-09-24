'use client';

import { Zap, ArrowDown } from 'lucide-react';
import ScrollCanvas from './ScrollCanvas';

export default function Hero() {
  return (
    <>
      {/* Canvas Cinematográfico Fixo de Fundo com os 40 Frames */}
      <ScrollCanvas />

      {/* Hero Section com Fluxo Natural de Scroll */}
      {/* Hero Section Ultra-Clean */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Coluna Esquerda: Texto Conciso & Alto Impacto */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              

              {/* Headline Principal Curta & Direta */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                Sites de Alta Conversão & <br />
                <span className="text-gradient-cyan">Sistemas Web Sob Medida</span>
              </h1>

              {/* Subheadline Limpa */}
              <p className="text-sm sm:text-base text-slate-300 max-w-lg mb-7 leading-relaxed">
                Design 3D moderno, velocidade máxima no celular e botões diretos de WhatsApp para transformar visitantes em clientes reais.
              </p>

              {/* Ações Rápidas */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8">
                <a
                  href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Quero%20iniciar%20um%20projeto%20com%20a%20JS%20Web%20%26%20Neg%C3%B3cios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-cyan px-7 py-3.5 rounded-xl text-slate-950 font-extrabold text-sm inline-flex items-center justify-center gap-2.5 shadow-xl"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Chamar no WhatsApp</span>
                </a>

                <a
                  href="#projetos"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-200 hover:text-white font-bold text-sm inline-flex items-center justify-center gap-2 border border-slate-700/60 backdrop-blur-md transition-all"
                >
                  <span>Ver Projetos Reais</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>

              {/* 3 Micro Métricas */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span><strong className="text-white">100%</strong> Mobile First</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span><strong className="text-white">&lt; 1.0s</strong> Velocidade</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Sem Intermediários</span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Totalmente Livre e Desimpedida para o Personagem 3D */}
            <div className="lg:col-span-6 hidden lg:block pointer-events-none min-h-[300px]" />

          </div>
        </div>
      </section>
    </>
  );
}
