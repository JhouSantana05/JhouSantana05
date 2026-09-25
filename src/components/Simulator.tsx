'use client';

import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

interface ProjectTypeOption {
  id: string;
  name: string;
  subtitle: string;
  days: string;
}

interface FeatureOption {
  id: string;
  name: string;
}

export default function Simulator() {
  const projectTypes: ProjectTypeOption[] = [
    { id: 'landing', name: 'Landing Page de Alta Conversão', subtitle: 'Foco em vendas e tráfego', days: '5 a 8 dias úteis' },
    { id: 'sistema', name: 'Sistema Web / Dashboard', subtitle: 'Gestão, gráficos e controle', days: '15 a 25 dias úteis' },
    { id: 'catalogo', name: 'Catálogo / Loja Virtual', subtitle: 'Vitrine com pedido no WhatsApp', days: '7 a 14 dias úteis' },
    { id: 'institucional', name: 'Site Institucional 3D', subtitle: 'Autoridade e marca corporativa', days: '7 a 12 dias úteis' },
  ];

  const availableFeatures: FeatureOption[] = [
    { id: 'whatsapp-direct', name: 'Botão com Pedido Direto no WhatsApp' },
    { id: 'seo', name: 'SEO Otimizado (Google)' },
    { id: 'fotos', name: 'Galeria de Fotos em Alta Resolução' },
    { id: 'admin', name: 'Painel de Gestão Administrativo' },
    { id: '3d', name: 'Elementos 3D Interativos' },
    { id: 'mobile', name: 'Design Mobile-First (Celular)' },
  ];

  const [selectedType, setSelectedType] = useState<string>('landing');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'whatsapp-direct',
    'seo',
  ]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];
  const selectedFeatureNames = availableFeatures
    .filter((f) => selectedFeatures.includes(f.id))
    .map((f) => f.name);

  const whatsappMessage = `Olá Jhones! Fiz uma simulação de projeto no site da JS Web & Negócios:

📌 *Tipo de Projeto:* ${currentType.name}
⏱️ *Prazo Estimado:* ${currentType.days}
⚙️ *Recursos Desejados:*
${selectedFeatureNames.map((f) => `• ${f}`).join('\n')}

Gostaria de uma proposta formal para este escopo.`;

  return (
    <section id="calculadora" className="py-20 bg-slate-950/80 border-y border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/20">
            Simulador Instantâneo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
            Monte o Escopo do Seu Projeto em 30 Segundos
          </h2>
          <p className="text-slate-300 text-sm">
            Escolha o tipo de solução e os recursos desejados para gerar uma prévia e solicitar uma proposta formal no WhatsApp com Jhones Santana.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          {/* Passo 1: Tipo de Projeto */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-xs font-mono font-bold">
                1
              </span>
              Selecione o Tipo Principal de Projeto:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {projectTypes.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                        : 'bg-slate-800/50 border-white/10 hover:border-cyan-500/50 hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="font-bold text-white text-sm">{type.name}</div>
                    <div className="text-xs text-slate-400 mt-1">{type.subtitle}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Passo 2: Funcionalidades Desejadas */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-xs font-mono font-bold">
                2
              </span>
              Selecione Recursos Adicionais Desejados (Opcional):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {availableFeatures.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded-xl text-left flex items-center justify-between transition-all border ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                        : 'bg-slate-800/50 border-white/10 hover:border-cyan-500/50 hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="text-xs font-medium text-slate-200">{feat.name}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500 text-slate-950 font-bold'
                          : 'border-slate-600 text-transparent'
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Box Resumo & Botão Final */}
          <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Prévia do Seu Projeto:
              </div>
              <div className="text-lg font-bold text-white">{currentType.name}</div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">
                Estimativa de Entrega: {currentType.days}
              </div>
            </div>

            <a
              href={`https://wa.me/5511954532927?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-whatsapp px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2.5 w-full sm:w-auto justify-center shrink-0 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
