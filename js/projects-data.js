/**
 * JS Web & Negócios - Banco de Dados de Projetos Reais do GitHub (@JhouSantana05)
 * Todos os projetos e fotos aqui são reais, extraídos diretamente dos repositórios.
 */
const COMPANY_CONFIG = {
  name: "JS Web & Negócios",
  founder: "Jhones Santana",
  photoUrl: "https://raw.githubusercontent.com/JhouSantana05/cartao-visita/main/1000904715.jpg",
  tagline: "Desenvolvimento de Sites de Alta Conversão, Catálogos & Sistemas Web",
  whatsappNumber: "5511954532927",
  whatsappDisplay: "(11) 95453-2927",
  email: "contato.jswebbusiness@gmail.com",
  githubUrl: "https://github.com/JhouSantana05",
  location: "São Miguel Paulista, São Paulo - SP (Atendimento Nacional & Remoto)",
  availability: "Disponível para novos projetos"
};

const portfolioProjects = [
  {
    id: "branch-clo",
    title: "Branch Clo - Catálogo & Loja Streetwear",
    category: "ecommerce",
    categoryName: "Catálogo & E-commerce",
    description: "Plataforma moderna de moda urbana (Streetwear) com vitrine de produtos, detalhes de peças, fotos reais de alta resolução e fechamento de pedidos direto no WhatsApp.",
    impact: "Apresentação profissional de coleções, facilitando a escolha de tamanhos e modelos pelos clientes.",
    technologies: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
    githubUrl: "https://github.com/JhouSantana05/branch-clo",
    demoUrl: "https://wa.me/5511954532927?text=Olá%20Jhones!%20Gostei%20do%20projeto%20Branch%20Clo%20e%20gostaria%20de%20um%20catálogo%20similar.",
    featured: true,
    badge: "Next.js & Prisma",
    image: "https://raw.githubusercontent.com/JhouSantana05/branch-clo/master/Roupas/WhatsApp%20Image%202026-09-17%20at%2022.02.38%20(1).jpeg",
    logoImage: "https://raw.githubusercontent.com/JhouSantana05/branch-clo/master/Logos/WhatsApp%20Image%202026-09-17%20at%2022.06.33.jpeg",
    mockupType: "branch"
  },
  {
    id: "gestao-financeira-30k",
    title: "Gestão Financeira Pro - Dashboard & Metas",
    category: "sistemas",
    categoryName: "Sistema Web & Dashboard",
    description: "Sistema web completo para controle financeiro empresarial e pessoal, com tela de autenticação/login, gráficos dinâmicos com Chart.js, cálculo de reserva de emergência e barra de progresso de metas.",
    impact: "Visão clara do fluxo de caixa e acompanhamento de metas financeiras em tempo real.",
    technologies: ["JavaScript", "Chart.js", "HTML5", "CSS3 Moderno", "LocalStorage"],
    githubUrl: "https://github.com/JhouSantana05/Gest-o-30k",
    demoUrl: "https://wa.me/5511954532927?text=Olá%20Jhones!%20Vi%20o%20sistema%20Gestão%20Financeira%20Pro%20e%20preciso%20de%20um%20painel%20similar.",
    featured: true,
    badge: "Dashboard Completo",
    image: null,
    mockupType: "dashboard-30k"
  },
  {
    id: "favela-chic",
    title: "Favela Chic - PWA de Catálogo com Câmera",
    category: "sistemas",
    categoryName: "WebApp & PWA",
    description: "Aplicativo web progressivo (PWA) para lojas de roupas e acessórios, com câmera integrada para cadastro rápido de peças em tempo real, enquadramento por grade e envio da sacola de compras para o WhatsApp.",
    impact: "Agilidade para cadastrar novos produtos na hora pelo próprio celular e receber pedidos prontos.",
    technologies: ["Vite", "TypeScript", "PWA (Instalável)", "Câmera HTML5", "Firebase"],
    githubUrl: "https://github.com/JhouSantana05/favela-chic",
    demoUrl: "https://wa.me/5511954532927?text=Olá%20Jhones!%20Gostaria%20de%20um%20WebApp%20ou%20PWA%20como%20o%20Favela%20Chic.",
    featured: true,
    badge: "PWA com Câmera",
    image: null,
    mockupType: "pwa-camera"
  },
  {
    id: "cartao-visita-digital",
    title: "Cartão de Visita Digital & Hub Comercial",
    category: "landing",
    categoryName: "Landing Page & Hub",
    description: "Página de apresentação de alta conversão para negócios locais e prestadores de serviços, com design dark glassmorphism, links rápidos, foto oficial e demonstrações interativas de soluções comerciais.",
    impact: "Aumento no contato imediato de clientes da região via WhatsApp e maior autoridade de marca.",
    technologies: ["TailwindCSS", "HTML5", "Glassmorphism", "Mobile First"],
    githubUrl: "https://github.com/JhouSantana05/cartao-visita",
    demoUrl: "https://wa.me/5511954532927?text=Olá%20Jhones!%20Gostaria%20de%20um%20Cartão%20Digital%20/%20Página%20de%20Apresentação.",
    featured: true,
    badge: "Alta Conversão",
    image: "https://raw.githubusercontent.com/JhouSantana05/cartao-visita/main/1000904715.jpg",
    mockupType: "cartao-visita"
  },
  {
    id: "demo-barbearia",
    title: "Agendamento Online - Barbearia & Salão",
    category: "sistemas",
    categoryName: "Sistema de Agendamento",
    description: "Interface intuitiva para barbearias e profissionais de estética: o cliente escolhe o corte/barba, o profissional de preferência, o dia e horário, enviando a confirmação direta para o WhatsApp do estabelecimento.",
    impact: "Redução de mensagens manuais e eliminação de conflito de horários.",
    technologies: ["JavaScript", "TailwindCSS", "HTML5", "WhatsApp Direct"],
    githubUrl: "https://github.com/JhouSantana05/cartao-visita/tree/main/demos/barbearia",
    demoUrl: "https://wa.me/5511954532927?text=Olá%20Jhones!%20Preciso%20de%20um%20sistema%20de%20agendamento%20online%20para%20meu%20estabelecimento.",
    featured: false,
    badge: "Agendamento Ágil",
    image: null,
    mockupType: "barbearia"
  },
  {
    id: "demo-cardapio",
    title: "Cardápio Digital & Pedidos no WhatsApp",
    category: "ecommerce",
    categoryName: "Cardápio & Delivery",
    description: "Cardápio online moderno para restaurantes, lanchonetes e confeitarias. O cliente visualiza fotos dos pratos, adiciona adicionais, monta a sacola e o pedido chega mastigado no WhatsApp da cozinha.",
    impact: "Sem cobrança de porcentagem sobre as vendas (ao contrário de apps tradicionais de delivery).",
    technologies: ["JavaScript", "TailwindCSS", "HTML5", "Carrinho Dinâmico"],
    githubUrl: "https://github.com/JhouSantana05/cartao-visita/tree/main/demos/cardapio",
    demoUrl: "https://wa.me/5511954532927?text=Olá%20Jhones!%20Gostaria%20de%20um%20Cardápio%20Digital%20para%20meu%20restaurante/lanchonete.",
    featured: false,
    badge: "Delivery Direto",
    image: null,
    mockupType: "cardapio"
  }
];
