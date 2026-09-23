'use client';

import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 40;

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const stateRef = useRef({
    currentFrame: 0,
    targetFrame: 0,
    isLoaded: false,
    animId: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isSubscribed = true;
    const images: HTMLImageElement[] = [];

    // Preload progressivo dos 40 frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/imagens/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        if (!isSubscribed) return;
        if (i === 1 && !stateRef.current.isLoaded) {
          stateRef.current.isLoaded = true;
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    // Redimensionamento de alta definição (Retina / DPR)
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      drawFrame(Math.round(stateRef.current.currentFrame));
    };

    // Mapeamento contínuo: a animação dos 40 frames termina exatamente junto com o scroll total da página
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      stateRef.current.targetFrame = progress * (TOTAL_FRAMES - 1);
    };

    // Renderização no Canvas de Fundo (Cover proporcional)
    const drawFrame = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const hRatio = canvas.width / img.naturalWidth;
        const vRatio = canvas.height / img.naturalHeight;
        const ratio = Math.max(hRatio, vRatio);

        const drawWidth = img.naturalWidth * ratio;
        const drawHeight = img.naturalHeight * ratio;

        // No desktop e widescreen, garante que o personagem (lado direito) e a tela do laptop fiquem sempre em destaque
        let shiftX = (canvas.width - drawWidth) * 0.6;
        if (window.innerWidth < 1024) {
          shiftX = (canvas.width - drawWidth) * 0.75;
        }
        const shiftY = (canvas.height - drawHeight) / 2;

        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, shiftX, shiftY, drawWidth, drawHeight);
      }
    };

    // Loop persistente de interpolação suave e ágil (lerp 0.35)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lastRenderedFrame = -1;

    const renderLoop = () => {
      const state = stateRef.current;
      const isReduced = mediaQuery.matches;

      if (isReduced) {
        state.currentFrame = state.targetFrame;
      } else {
        // Resposta imediata a cada pixel do scroll
        const diff = state.targetFrame - state.currentFrame;
        if (Math.abs(diff) < 0.005) {
          state.currentFrame = state.targetFrame;
        } else {
          state.currentFrame += diff * 0.35;
        }
      }

      const frameToDraw = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(state.currentFrame)));

      if (frameToDraw !== lastRenderedFrame) {
        drawFrame(frameToDraw);
        lastRenderedFrame = frameToDraw;
      }

      state.animId = requestAnimationFrame(renderLoop);
    };

    handleResize();
    handleScroll();
    renderLoop();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      isSubscribed = false;
      cancelAnimationFrame(stateRef.current.animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Canvas com os 40 Frames */}
      <canvas ref={canvasRef} className="w-full h-full object-cover" />

      {/* Vinheta Suave Apenas à Esquerda para Contraste dos Textos, Mantendo a Cena 3D Luminosa */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/65 via-[#07090e]/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#07090e]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07090e]/70 to-transparent pointer-events-none" />
    </div>
  );
}
