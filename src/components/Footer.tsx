'use client';

import React from 'react';
import GithubIcon from '@/components/icons/GithubIcon';

export default function Footer() {
  return (
    <footer className="bg-slate-950/40 backdrop-blur-md border-t border-white/10 py-6 relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-2">
          <img src="/imagens/logo-icon.png" alt="JS Web & Negócios" className="w-5 h-5 object-contain" />
          <span className="font-bold text-white">JS Web & Negócios</span>
          <span>•</span>
          <span>Jhones Santana</span>
          <span>•</span>
          <span>© 2026 Todos os direitos reservados</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/JhouSantana05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>@JhouSantana05</span>
          </a>
          <span>•</span>
          <span className="text-cyan-400 font-semibold">(11) 95453-2927</span>
        </div>
      </div>
    </footer>
  );
}
