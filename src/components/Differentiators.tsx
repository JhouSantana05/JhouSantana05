'use client';

import React from 'react';

export default function Differentiators() {
  const items = [
    {
      num: '01',
      numColor: 'text-cyan-400 bg-cyan-500/10',
      title: 'Comunicação Direta',
      desc: 'Você fala diretamente com o desenvolvedor Jhones Santana pelo WhatsApp, tirando dúvidas em tempo real sem intermediários.',
    },
    {
      num: '02',
      numColor: 'text-emerald-400 bg-emerald-500/10',
      title: 'Velocidade & SEO',
      desc: 'Código otimizado para abrir instantaneamente no 4G/5G e ranquear bem no Google quando alguém pesquisar pelos seus serviços.',
    },
    {
      num: '03',
      numColor: 'text-violet-400 bg-violet-500/10',
      title: 'Design Moderno em 3D',
      desc: 'Seu negócio ganha uma presença digital sofisticada que transmite credibilidade e autoridade imediata para o cliente.',
    },
    {
      num: '04',
      numColor: 'text-amber-400 bg-amber-500/10',
      title: 'Entrega Pontual',
      desc: 'Prazos combinados e cumpridos com rigor, além de suporte de 30 dias após o lançamento para eventuais ajustes.',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase bg-violet-950/60 px-3.5 py-1 rounded-full border border-violet-500/20">
            Vantagens Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
            Por Que Fechar Projeto Conosco?
          </h2>
          <p className="text-slate-300 text-sm">
            Sem intermediários, sem termos complicados. Atendimento direto e foco total no seu retorno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-mono font-bold text-xl ${item.numColor}`}>
                {item.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
