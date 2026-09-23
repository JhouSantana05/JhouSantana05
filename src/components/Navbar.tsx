'use client';

import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Projetos Reais', href: '#projetos' },
    { label: 'Simulador', href: '#calculadora' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logotipo da Empresa */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            JS
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              JS Web & Business
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Sites & Sistemas de Alta Conversão</span>
          </div>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão de Ação do Header (WhatsApp Direto) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Gostaria%20de%20um%20or%C3%A7amento%20com%20a%20JS%20Web%20%26%20Business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-whatsapp px-5 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Jhones Santana</span>
          </a>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <div className="flex md:hidden">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col px-6 py-6 space-y-4 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones!%20Gostaria%20de%20um%20or%C3%A7amento%20com%20a%20JS%20Web%20%26%20Business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-whatsapp w-full justify-center py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp (11 95453-2927)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
