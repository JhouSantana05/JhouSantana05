'use client';

import React from 'react';
import { Rocket, ShoppingBag, LayoutDashboard, Smartphone, Check, ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Landing Pages de Alta Conversão',
      desc: 'Páginas focadas em tráfego pago (Instagram, Facebook e Google Ads). Estrutura persuasiva com botões que direcionam clientes prontos para fechar negócio no seu WhatsApp.',
      icon: Rocket,
      color: 'border-t-cyan-500',
      iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      ctaText: 'Quero uma Landing Page',
      ctaColor: 'text-cyan-400 hover:text-cyan-300',
      features: [
        'Abertura em menos de 1 segundo',
        'Botões com mensagem personalizada no WhatsApp',
        '100% adaptado para smartphones',
      ],
      whatsappMsg: 'Olá Jhones! Tenho interesse em uma Landing Page de Alta Conversão.',
    },
    {
      title: 'Catálogos & Vitrines com Pedido no WhatsApp',
      desc: 'Lojas de roupas, calçados e produtos físicos. O cliente escolhe tamanhos, cores, adiciona na sacola e o pedido chega formatado direto no WhatsApp da sua loja.',
      icon: ShoppingBag,
      color: 'border-t-emerald-500',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      ctaText: 'Quero um Catálogo Virtual',
      ctaColor: 'text-emerald-400 hover:text-emerald-300',
      features: [
        'Fotos reais em alta qualidade',
        'Pedido montado com detalhes no WhatsApp',
        'Zero taxas ou porcentagem sobre vendas',
      ],
      whatsappMsg: 'Olá Jhones! Gostaria de um Catálogo ou Vitrine Virtual para minha loja.',
    },
    {
      title: 'Sistemas Web & Dashboards',
      desc: 'Painéis para controle financeiro, controle de metas, gráficos analíticos e rotinas operacionais (como o sistema Gestão Financeira Pro desenvolvido por nós).',
      icon: LayoutDashboard,
      color: 'border-t-violet-500',
      iconBg: 'bg-violet-500/10 border-violet-500/30 text-violet-400',
      ctaText: 'Quero um Sistema Web',
      ctaColor: 'text-violet-400 hover:text-violet-300',
      features: [
        'Gráficos interativos analíticos',
        'Telas com autenticação e login seguro',
        'Acompanhamento visual de metas',
      ],
      whatsappMsg: 'Olá Jhones! Preciso de um Sistema Web ou Dashboard personalizado.',
    },
    {
      title: 'Soluções Comerciais & Agendamentos',
      desc: 'Sistemas de agendamento online para barbearias, cardápios interativos para lanchonetes e WebApps instaláveis (PWA) direto na tela inicial do celular.',
      icon: Smartphone,
      color: 'border-t-amber-500',
      iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      ctaText: 'Quero uma Solução Comercial',
      ctaColor: 'text-amber-400 hover:text-amber-300',
      features: [
        'Agendamento sem conflito de horários',
        'Cardápio digital para WhatsApp',
        'Instalável como app no Android/iPhone',
      ],
      whatsappMsg: 'Olá Jhones! Gostaria de um sistema de agendamento ou cardápio digital.',
    },
  ];

  return (
    <section id="solucoes" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 px-3.5 py-1 rounded-full border border-cyan-500/20">
            Serviços Sob Medida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
            O Que a JS Web & Business Constrói Para Você
          </h2>
          <p className="text-slate-300 text-base">
            Desenvolvimento direto, transparente e sem enrolação, entregando soluções que realmente trazem clientes para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="card-tilt-wrap">
                <div className={`card-tilt glass-card rounded-2xl p-6 flex flex-col justify-between h-full border-t-2 ${service.color}`}>
                  <div>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${service.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <ul className="text-xs text-slate-400 space-y-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`https://wa.me/5511954532927?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-bold flex items-center gap-1 group mt-2 ${service.ctaColor}`}
                  >
                    <span>{service.ctaText}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
