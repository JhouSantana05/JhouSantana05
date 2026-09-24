'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center">
        {/* Logotipo Oficial da Empresa Centralizado */}
        <a href="#" className="flex items-center group py-1" aria-label="JS Web & Negócios - Início">
          <img
            src="/imagens/logo.png"
            alt="JS Web & Negócios"
            className="h-10 sm:h-12 w-auto max-w-[240px] sm:max-w-[290px] object-contain drop-shadow-[0_0_16px_rgba(6,182,212,0.35)] group-hover:drop-shadow-[0_0_26px_rgba(6,182,212,0.7)] group-hover:scale-[1.03] transition-all duration-300"
          />
        </a>
      </div>
    </header>
  );
}
