'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    {
      q: 'Quanto tempo leva para o meu site ou sistema ficar pronto?',
      a: 'Para Landing Pages e catálogos online, o prazo médio é de 5 a 8 dias úteis. Para Sistemas Web e Dashboards, varia de 15 a 25 dias úteis, com acompanhamento direto pelo WhatsApp.',
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'Geralmente 50% de entrada no início do desenvolvimento e 50% na aprovação final antes da publicação. Aceitamos Pix e transferência bancária.',
    },
    {
      q: 'Como recebo os pedidos ou contatos dos clientes?',
      a: 'Todos os botões do site são configurados para abrir uma conversa direta no seu WhatsApp, já com a mensagem pronta indicando o produto, serviço ou horário que o cliente escolheu!',
    },
    {
      q: 'Terei suporte após o site ser publicado?',
      a: 'Sim! Oferecemos 30 dias de suporte e garantia gratuita pós-lançamento para esclarecer qualquer dúvida ou realizar pequenos ajustes necessários.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 px-3.5 py-1 rounded-full border border-cyan-500/20">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-300 text-sm">
            Respostas claras para você fechar negócio com total segurança.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl border transition-all ${
                  isOpen ? 'border-cyan-500/40 bg-slate-900/80' : 'border-slate-800'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base text-white">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3 animate-in fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
