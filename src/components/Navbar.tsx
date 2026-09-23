'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center">
        {/* Logotipo da Empresa Centralizado */}
        <a href="#" className="flex items-center gap-3 group text-center" aria-label="JS Web & Business - Início">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            JS
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              JS Web & Business
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Sites & Sistemas de Alta Conversão</span>
          </div>
        </a>
      </div>
    </header>
  );
}
