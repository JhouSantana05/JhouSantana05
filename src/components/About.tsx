'use client';

import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

export default function About() {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Foto Oficial Real com Efeito Luminoso */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src="https://raw.githubusercontent.com/JhouSantana05/cartao-visita/main/1000904715.jpg" 
                  alt="Foto Oficial de Jhones Santana" 
                  className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl object-cover border-2 border-slate-800 shadow-2xl"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://avatars.githubusercontent.com/u/272603279?v=4';
                  }}
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-[11px] shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-slate-950"></span>
                  <span>Online no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Bio & Compromisso de Fechamento */}
            <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
                Desenvolvedor & Fundador
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Jhones Santana • JS Web & Negócios
              </h3>
              <p className="text-xs font-semibold text-emerald-400 font-mono mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>São Miguel Paulista, Zona Leste de São Paulo • Atendimento para todo o Brasil</span>
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Sou apaixonado por tecnologia e focado em criar <strong className="text-white">páginas e sistemas que realmente geram vendas</strong>. Meu compromisso é simples: entregar um trabalho de ponta, moderno, responsivo e com comunicação transparente direto comigo no WhatsApp, do início à publicação final.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Vi%20seu%20perfil%20na%20JS%20Web%20%26%20Neg%C3%B3cios%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-whatsapp px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
                <a
                  href="https://github.com/JhouSantana05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold inline-flex items-center gap-2 border border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub @JhouSantana05</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
