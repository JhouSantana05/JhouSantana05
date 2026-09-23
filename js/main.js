/**
 * JS Web & Business - Main Application Logic
 * Interface Moderna, 3D Card Tilt, Projetos Reais (@JhouSantana05) e Simulador de Negócios
 */

function initApp() {
  // 1. Inicializar Ícones Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 1.5. Canvas de Sequência Cinematográfica de Scroll (40 frames)
  setupScrollSequenceCanvas();

  // 2. Menu Mobile
  setupMobileMenu();

  // 3. Renderização dos Projetos Reais & Filtros
  setupProjectsFilter();

  // 4. Efeito 3D Tilt nos Cards
  setup3DTiltEffect();

  // 5. Calculadora Interativa de Escopo (Sem chatbot / Sem gateway)
  setupScopeCalculator();

  // 6. Accordion do FAQ
  setupFaqAccordion();

  // 7. Formulário de Contato Direto
  setupContactForm();

  // 8. Atualizar Ano no Rodapé e Dados Globais
  setupFooterAndGlobalLinks();

  // 9. Toggle Interativo do Bento Grid
  setupUltraModeToggle();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

/* ==========================================================================
   1. Menu Mobile
   ========================================================================== */
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   2. Mockups & Fotos Reais dos Projetos do GitHub
   ========================================================================== */
function getProjectVisual(project) {
  // Caso 1: Projeto Branch Clo (com foto real de produto e logo da marca)
  if (project.mockupType === "branch") {
    return `
      <div class="mockup-preview-window w-full h-52 bg-slate-950 flex flex-col relative overflow-hidden group/img">
        <div class="mockup-header-dots flex items-center justify-between z-10 bg-slate-900/90 backdrop-blur-md">
          <div class="flex gap-1.5">
            <span class="mockup-dot bg-red-500"></span>
            <span class="mockup-dot bg-amber-500"></span>
            <span class="mockup-dot bg-emerald-500"></span>
          </div>
          <span class="text-[11px] font-mono text-cyan-300">branch-clo.vercel.app</span>
          <div class="w-8"></div>
        </div>
        <div class="relative flex-1 overflow-hidden">
          <img 
            src="${project.image}" 
            alt="Peça de Roupa Streetwear - Branch Clo" 
            class="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
            loading="lazy"
            onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'flex items-center justify-center h-full bg-slate-900 text-cyan-400 font-bold\\'>Branch Clo Streetwear</div>';"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          
          <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
            <span class="text-[11px] font-bold text-white bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/60 backdrop-blur-md">
              Coleção Streetwear
            </span>
            <span class="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
              Next.js 14 + Prisma
            </span>
          </div>
        </div>
      </div>
    `;
  }

  // Caso 2: Cartão de Visita Digital (com a foto real do Jhones Santana)
  if (project.mockupType === "cartao-visita") {
    return `
      <div class="mockup-preview-window w-full h-52 bg-slate-950 flex flex-col relative overflow-hidden">
        <div class="mockup-header-dots flex items-center justify-between z-10 bg-slate-900/90 backdrop-blur-md">
          <div class="flex gap-1.5">
            <span class="mockup-dot bg-red-500"></span>
            <span class="mockup-dot bg-amber-500"></span>
            <span class="mockup-dot bg-emerald-500"></span>
          </div>
          <span class="text-[11px] font-mono text-indigo-300">jhones-santana.vercel.app</span>
          <div class="w-8"></div>
        </div>
        <div class="p-4 flex-1 flex items-center justify-center gap-4 bg-gradient-to-br from-slate-900 to-indigo-950/40">
          <div class="relative shrink-0">
            <img 
              src="${project.image}" 
              alt="Jhones Santana - Foto Oficial" 
              class="w-20 h-20 rounded-full object-cover border-2 border-indigo-400/80 shadow-lg shadow-indigo-500/20"
              loading="lazy"
            >
            <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
          </div>
          <div class="flex flex-col text-left">
            <span class="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">JS Web & Business</span>
            <h4 class="text-sm font-bold text-white leading-tight">Jhones Santana</h4>
            <p class="text-[11px] text-slate-300 mt-1">Soluções Comerciais & Digitais</p>
            <span class="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
              <i data-lucide="check-circle" class="w-3 h-3"></i> Atendimento Rápido
            </span>
          </div>
        </div>
      </div>
    `;
  }

  // Caso 3: Gestão Financeira Pro (Gest-o-30k)
  if (project.mockupType === "dashboard-30k") {
    return `
      <div class="mockup-preview-window w-full h-52 bg-slate-900 flex flex-col">
        <div class="mockup-header-dots flex items-center justify-between">
          <div class="flex gap-1.5">
            <span class="mockup-dot bg-red-500"></span>
            <span class="mockup-dot bg-amber-500"></span>
            <span class="mockup-dot bg-emerald-500"></span>
          </div>
          <span class="text-[11px] font-mono text-emerald-400">gestao-financeira-pro-v10</span>
          <div class="w-8"></div>
        </div>
        <div class="p-3.5 flex-1 flex flex-col justify-between bg-slate-950">
          <div class="bg-gradient-to-r from-slate-900 to-slate-800 p-2.5 rounded-lg border border-emerald-500/30 flex items-center justify-between">
            <div>
              <div class="text-[9px] text-slate-400 uppercase font-mono">Meta de Reserva</div>
              <div class="text-sm font-extrabold text-amber-400 font-mono">R$ 30.000,00</div>
            </div>
            <div class="text-right">
              <div class="text-[9px] text-emerald-400 font-bold">Projeção Ativa</div>
              <div class="text-[11px] text-slate-300 font-mono">Chart.js Analytics</div>
            </div>
          </div>
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden my-2">
            <div class="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-[68%] rounded-full shadow-sm shadow-emerald-500/50"></div>
          </div>
          <div class="grid grid-cols-2 gap-2 text-[10px]">
            <div class="bg-slate-900 p-1.5 rounded border border-slate-800">
              <span class="text-slate-400">Status:</span> <strong class="text-emerald-400">Sob Controle</strong>
            </div>
            <div class="bg-slate-900 p-1.5 rounded border border-slate-800">
              <span class="text-slate-400">Autenticação:</span> <strong class="text-cyan-400">Login Seguro</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Caso 4: Favela Chic (PWA com Câmera)
  if (project.mockupType === "pwa-camera") {
    return `
      <div class="mockup-preview-window w-full h-52 bg-slate-950 flex flex-col">
        <div class="mockup-header-dots flex items-center justify-between">
          <div class="flex gap-1.5">
            <span class="mockup-dot bg-red-500"></span>
            <span class="mockup-dot bg-amber-500"></span>
            <span class="mockup-dot bg-emerald-500"></span>
          </div>
          <span class="text-[11px] font-mono text-cyan-400">favela-chic.web.app (PWA)</span>
          <div class="w-8"></div>
        </div>
        <div class="p-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div class="flex items-center justify-between text-[11px] text-slate-300">
            <span class="font-bold flex items-center gap-1.5 text-white">
              <i data-lucide="camera" class="w-3.5 h-3.5 text-cyan-400"></i> Câmera em Tempo Real
            </span>
            <span class="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">Instalável</span>
          </div>
          <div class="my-2 border border-dashed border-cyan-500/40 rounded-lg p-2.5 text-center bg-cyan-950/20">
            <div class="text-[10px] text-cyan-300 font-mono">Grade Regra dos Terços Ativa</div>
            <div class="text-[11px] text-white font-semibold mt-0.5">Captura & Otimização Instantânea</div>
          </div>
          <div class="flex justify-between items-center text-[10px] text-slate-400">
            <span>Roupas • Tênis • Bonés</span>
            <span class="text-emerald-400 font-bold flex items-center gap-1">
              <i data-lucide="shopping-bag" class="w-3 h-3"></i> Pedido no WhatsApp
            </span>
          </div>
        </div>
      </div>
    `;
  }

  // Caso 5: Barbearia (Agendamento)
  if (project.mockupType === "barbearia") {
    return `
      <div class="mockup-preview-window w-full h-52 bg-slate-950 flex flex-col">
        <div class="mockup-header-dots flex items-center justify-between">
          <div class="flex gap-1.5">
            <span class="mockup-dot bg-red-500"></span>
            <span class="mockup-dot bg-amber-500"></span>
            <span class="mockup-dot bg-emerald-500"></span>
          </div>
          <span class="text-[11px] font-mono text-slate-400">demo/barbearia</span>
          <div class="w-8"></div>
        </div>
        <div class="p-3 flex-1 flex flex-col justify-between bg-slate-900/90">
          <div class="flex items-center justify-between text-xs text-white font-bold">
            <span>Escolha o Horário</span>
            <span class="text-[10px] text-amber-400 font-mono">Corte & Barba</span>
          </div>
          <div class="grid grid-cols-3 gap-2 my-2">
            <span class="bg-slate-800 text-center py-1.5 rounded text-[11px] text-slate-300">14:00</span>
            <span class="bg-cyan-500 text-center py-1.5 rounded text-[11px] text-slate-950 font-bold">15:30 ✓</span>
            <span class="bg-slate-800 text-center py-1.5 rounded text-[11px] text-slate-300">17:00</span>
          </div>
          <div class="text-[10px] text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 p-1.5 rounded border border-emerald-500/20">
            <i data-lucide="check" class="w-3 h-3"></i> Envia confirmação com dados direto no WhatsApp
          </div>
        </div>
      </div>
    `;
  }

  // Caso 6: Cardápio Digital
  return `
    <div class="mockup-preview-window w-full h-52 bg-slate-950 flex flex-col">
      <div class="mockup-header-dots flex items-center justify-between">
        <div class="flex gap-1.5">
          <span class="mockup-dot bg-red-500"></span>
          <span class="mockup-dot bg-amber-500"></span>
          <span class="mockup-dot bg-emerald-500"></span>
        </div>
        <span class="text-[11px] font-mono text-slate-400">demo/cardapio</span>
        <div class="w-8"></div>
      </div>
      <div class="p-3 flex-1 flex flex-col justify-between bg-slate-900">
        <div class="flex items-center justify-between text-xs text-white">
          <span class="font-bold">Cardápio Interativo</span>
          <span class="text-[10px] text-emerald-400 font-bold">Carrinho Rápido</span>
        </div>
        <div class="bg-slate-800/80 p-2 rounded-lg flex items-center justify-between border border-slate-700">
          <div class="text-[11px] text-slate-200">
            <strong>Burger Artesanal + Fritas</strong>
            <div class="text-[9px] text-slate-400">Com adicionais selecionados</div>
          </div>
          <span class="text-xs font-bold text-amber-400 font-mono">R$ 38</span>
        </div>
        <div class="text-[10px] text-cyan-300 flex items-center justify-between bg-cyan-950/50 p-1.5 rounded">
          <span>Finalizar pedido</span>
          <span class="font-bold text-white">WhatsApp da Cozinha →</span>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   3. Renderização Dinâmica dos Projetos & Filtros
   ========================================================================== */
function setupProjectsFilter() {
  const container = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!container || typeof portfolioProjects === "undefined") return;

  function renderProjects(filter = "all") {
    container.innerHTML = "";

    const filtered = filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "card-tilt-wrap group";
      card.innerHTML = `
        <div class="card-tilt glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all"></div>
          
          <!-- Mockup Visual ou Foto Real -->
          <div class="mb-5 relative">
            ${getProjectVisual(project)}
            <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-950/85 text-cyan-300 border border-cyan-500/40 backdrop-blur-md z-20">
              ${project.badge}
            </span>
          </div>

          <!-- Conteúdo -->
          <div class="card-tilt-content flex-1 flex flex-col">
            <span class="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">${project.categoryName}</span>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">${project.title}</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">${project.description}</p>
            
            <!-- Destaque de Impacto -->
            <div class="bg-slate-900/80 p-3 rounded-xl border border-emerald-500/25 mb-4 flex items-start gap-2.5">
              <i data-lucide="trending-up" class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"></i>
              <p class="text-xs text-emerald-300 font-medium">${project.impact}</p>
            </div>

            <!-- Tags Tech -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${project.technologies.map(tech => `
                <span class="text-[11px] px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/60 font-mono">
                  ${tech}
                </span>
              `).join("")}
            </div>
          </div>

          <!-- Ações de Fechamento & GitHub -->
          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
              <i data-lucide="github" class="w-4 h-4"></i> Ver no GitHub
            </a>
            
            <a href="https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Olá Jhones! Vi o projeto *${project.title}* no portfólio da JS Web & Business e gostaria de um orçamento para criar um projeto similar para minha empresa.`)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md shadow-cyan-500/20">
              Quero um Igual <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Recria ícones para os novos elementos
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Render inicial
  renderProjects("all");

  // Cliques nos Filtros
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/25");
        b.classList.add("bg-slate-800", "text-slate-300");
      });

      btn.classList.remove("bg-slate-800", "text-slate-300");
      btn.classList.add("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/25");

      const category = btn.getAttribute("data-category");
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   4. Efeito 3D Tilt nos Cards (Desktop)
   ========================================================================== */
function setup3DTiltEffect() {
  if (window.innerWidth < 1024) return;

  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".card-tilt");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      } else {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      }
    });
  });
}

/* ==========================================================================
   5. Calculadora Interativa de Escopo (Sem chatbot / Sem gateway)
   ========================================================================== */
function setupScopeCalculator() {
  const typeBtns = document.querySelectorAll(".calc-type-btn");
  const featureBtns = document.querySelectorAll(".calc-feature-btn");
  const summaryScopeEl = document.getElementById("calc-summary-scope");
  const summaryTimeEl = document.getElementById("calc-summary-time");
  const whatsappCtaBtn = document.getElementById("calc-whatsapp-cta");

  if (!summaryScopeEl || !whatsappCtaBtn) return;

  // Estado da calculadora
  let selectedType = {
    id: "landing",
    name: "Landing Page de Alta Conversão",
    baseDays: "5 a 8 dias úteis"
  };

  let selectedFeatures = new Set(["whatsapp-direct", "seo"]);

  function updateCalculatorOutput() {
    const featureNames = [];
    featureBtns.forEach(btn => {
      const featId = btn.getAttribute("data-feature");
      if (selectedFeatures.has(featId)) {
        btn.classList.add("selected");
        featureNames.push(btn.getAttribute("data-name"));
      } else {
        btn.classList.remove("selected");
      }
    });

    summaryScopeEl.textContent = selectedType.name;
    summaryTimeEl.textContent = `Estimativa de Entrega: ${selectedType.baseDays}`;

    // Montar mensagem para o WhatsApp com Jhones Santana
    let messageText = `Olá Jhones Santana! Estive no site da *JS Web & Business* e montei a seguinte prévia de projeto:\n\n`;
    messageText += `📌 *Tipo de Projeto:* ${selectedType.name}\n`;
    messageText += `⚡ *Prazo Estimado:* ${selectedType.baseDays}\n`;
    
    if (featureNames.length > 0) {
      messageText += `🛠️ *Recursos Escolhidos:*\n`;
      featureNames.forEach(f => {
        messageText += ` • ${f}\n`;
      });
    }

    messageText += `\nPode me passar uma proposta e disponibilidade de início?`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodedMsg}`;
    whatsappCtaBtn.href = whatsappUrl;
  }

  // Seleção de Tipo
  typeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      typeBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      selectedType = {
        id: btn.getAttribute("data-type"),
        name: btn.getAttribute("data-name"),
        baseDays: btn.getAttribute("data-days")
      };

      updateCalculatorOutput();
    });
  });

  // Seleção de Features
  featureBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const featId = btn.getAttribute("data-feature");
      if (selectedFeatures.has(featId)) {
        selectedFeatures.delete(featId);
      } else {
        selectedFeatures.add(featId);
      }
      updateCalculatorOutput();
    });
  });

  updateCalculatorOutput();
}

/* ==========================================================================
   6. Accordion do FAQ
   ========================================================================== */
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   7. Formulário de Contato Direto
   ========================================================================== */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const successNotice = document.getElementById("form-success-notice");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const phoneInput = document.getElementById("contact-phone");
    const projectTypeInput = document.getElementById("contact-project-type");
    const messageInput = document.getElementById("contact-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const projectType = projectTypeInput ? projectTypeInput.value : "Novo Projeto";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !phone) {
      alert("Por favor, preencha seu nome e WhatsApp para contato.");
      return;
    }

    let fullMsg = `Olá Jhones! Meu nome é *${name}*.\n`;
    fullMsg += `📱 Meu WhatsApp: ${phone}\n`;
    fullMsg += `💼 Projeto de Interesse: *${projectType}*\n`;
    if (message) {
      fullMsg += `📝 Detalhes: ${message}\n`;
    }
    fullMsg += `\nGostaria de solicitar uma proposta da JS Web & Business.`;

    const waLink = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;

    if (successNotice) {
      successNotice.classList.remove("hidden");
    }

    setTimeout(() => {
      window.open(waLink, "_blank");
    }, 350);

    form.reset();
  });
}

/* ==========================================================================
   8. Rodapé, Links Globais e Número de WhatsApp
   ========================================================================== */
function setupFooterAndGlobalLinks() {
  const yearEls = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = currentYear);

  const phoneEls = document.querySelectorAll("[data-company-phone]");
  phoneEls.forEach(el => el.textContent = COMPANY_CONFIG.whatsappDisplay);

  const waLinks = document.querySelectorAll("[data-company-wa-link]");
  waLinks.forEach(el => {
    el.href = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá Jhones! Visitei o site da JS Web & Business e gostaria de conversar sobre um projeto.")}`;
  });
}

/* ==========================================================================
   Canvas de Sequência de Frames 1 a 40 Controlado pelo Scroll Global
   ========================================================================== */
function setupScrollSequenceCanvas() {
  const bgCanvas = document.getElementById("scroll-sequence-canvas");
  if (!bgCanvas) return;

  const bgCtx = bgCanvas.getContext("2d");
  if (!bgCtx) return;

  const TOTAL_FRAMES = 40;
  const images = [];
  const state = {
    currentFrame: 0,
    targetFrame: 0,
    animId: 0,
    isLoaded: false
  };

  // Preload progressivo dos 40 frames
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    const frameNum = String(i).padStart(3, "0");
    img.src = `imagens/ezgif-frame-${frameNum}.png`;
    img.onerror = () => {
      img.src = `public/imagens/ezgif-frame-${frameNum}.png`;
    };
    img.onload = () => {
      if (i === 1 && !state.isLoaded) {
        state.isLoaded = true;
        drawFrame(0);
      }
    };
    images.push(img);
  }

  // Redimensionamento de alta resolução (Retina / DPR)
  function handleResize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    bgCanvas.width = window.innerWidth * dpr;
    bgCanvas.height = window.innerHeight * dpr;
    drawFrame(Math.round(state.currentFrame));
  }

  // Mapeamento contínuo: a animação dos 40 frames termina exatamente junto com o scroll total da página
  function handleScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    state.targetFrame = progress * (TOTAL_FRAMES - 1);

    // No final da tela (seção de fechamento), oculta header, footer e botão flutuante
    // para exibir SOMENTE as 2 partes: o personagem 3D com o notebook e o card na esquerda (marcador 2)
    const header = document.getElementById("main-header");
    const floatingWa = document.getElementById("floating-whatsapp");
    const footer = document.getElementById("main-footer");

    if (progress > 0.88) {
      if (header) {
        header.classList.add("opacity-0", "pointer-events-none", "-translate-y-full");
      }
      if (floatingWa) {
        floatingWa.classList.add("opacity-0", "pointer-events-none");
      }
      if (footer) {
        footer.classList.add("opacity-0", "pointer-events-none");
      }
    } else {
      if (header) {
        header.classList.remove("opacity-0", "pointer-events-none", "-translate-y-full");
      }
      if (floatingWa) {
        floatingWa.classList.remove("opacity-0", "pointer-events-none");
      }
      if (footer) {
        footer.classList.remove("opacity-0", "pointer-events-none");
      }
    }
  }

  // Renderização precisa no Canvas de Fundo
  function drawFrame(frameIndex) {
    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    const hRatio = bgCanvas.width / img.naturalWidth;
    const vRatio = bgCanvas.height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);

    const drawWidth = img.naturalWidth * ratio;
    const drawHeight = img.naturalHeight * ratio;

    // No desktop e widescreen, garante que o personagem (lado direito) e a tela do laptop fiquem sempre em destaque
    let shiftX = (bgCanvas.width - drawWidth) * 0.6;
    if (window.innerWidth < 1024) {
      shiftX = (bgCanvas.width - drawWidth) * 0.75;
    }
    const shiftY = (bgCanvas.height - drawHeight) / 2;

    bgCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, shiftX, shiftY, drawWidth, drawHeight);
  }

  // Loop persistente de interpolação suave e ágil (lerp 0.35) para reação imediata
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let lastRenderedFrame = -1;

  function renderLoop() {
    if (mediaQuery.matches) {
      state.currentFrame = state.targetFrame;
    } else {
      // Reação rápida ao scroll: responde instantaneamente sem atraso excessivo
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
  }

  handleResize();
  handleScroll();
  renderLoop();

  window.addEventListener("resize", handleResize, { passive: true });
  window.addEventListener("scroll", handleScroll, { passive: true });
}

/* ==========================================================================
   9. Toggle Interativo do Bento Grid
   ========================================================================== */
function setupUltraModeToggle() {
  const toggleBtn = document.getElementById("ultra-mode-toggle");
  const modeLabel = document.getElementById("ultra-mode-label");
  if (!toggleBtn || !modeLabel) return;

  let isUltra = true;

  toggleBtn.addEventListener("click", () => {
    isUltra = !isUltra;
    if (isUltra) {
      modeLabel.textContent = "Modo Alta Conversão";
      toggleBtn.classList.remove("justify-start", "bg-slate-800", "border-slate-700");
      toggleBtn.classList.add("justify-end", "bg-purple-950", "border-purple-500/50");
    } else {
      modeLabel.textContent = "Modo Padrão";
      toggleBtn.classList.remove("justify-end", "bg-purple-950", "border-purple-500/50");
      toggleBtn.classList.add("justify-start", "bg-slate-800", "border-slate-700");
    }
  });
}


