import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://site-jhones-portifolio.vercel.app'),
  title: "JS Web & Negócios | Sites de Alta Conversão, Catálogos & Sistemas Web",
  description: "Desenvolvimento de sites modernos, landing pages de alta conversão, catálogos online e sistemas web sob medida por Jhones Santana (JS Web & Negócios). Atendimento direto no WhatsApp.",
  keywords: ["criação de sites", "sistemas web", "landing page", "catálogo online", "desenvolvedor web sp", "jhones santana", "jhousantana05", "js web negocios", "js web business", "são miguel paulista"],
  authors: [{ name: "Jhones Santana - JS Web & Negócios" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/imagens/logo-icon.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "JS Web & Negócios | Sites de Alta Conversão & Sistemas Web",
    description: "Transforme sua presença digital em uma máquina de fechar negócios com design moderno e desenvolvimento web de alta performance.",
    images: [
      {
        url: "/imagens/logo-dark.png",
        width: 820,
        height: 210,
        alt: "JS Web & Negócios - Jhones Santana",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://jhousantana05.github.io/JhouSantana05/#website",
                  "url": "https://jhousantana05.github.io/JhouSantana05/",
                  "name": "JS Web & Negócios",
                  "description": "Desenvolvimento de sites de alta conversão, catálogos online e sistemas web sob medida.",
                  "inLanguage": "pt-BR"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://jhousantana05.github.io/JhouSantana05/#business",
                  "name": "JS Web & Negócios",
                  "image": "https://raw.githubusercontent.com/JhouSantana05/cartao-visita/main/1000904715.jpg",
                  "telephone": "+55-11-95453-2927",
                  "priceRange": "$$",
                  "founder": {
                    "@type": "Person",
                    "name": "Jhones Santana"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "São Paulo",
                    "addressRegion": "SP",
                    "addressCountry": "BR"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                      "opens": "08:00",
                      "closes": "22:00"
                    }
                  ],
                  "url": "https://jhousantana05.github.io/JhouSantana05/"
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen relative font-sans">
        <Script
          id="js-waas-license-js-web-e-negocios"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const CLIENT_ID = "cli_1790284773704";
                const FIREBASE_PROJECT = "js-manager-waas-js";
                const OVERLAY_ID = "js-waas-maintenance-screen";

                function showMaintenanceScreen() {
                  if (document.getElementById(OVERLAY_ID)) return;

                  // Bloqueia rolagem do site original
                  document.documentElement.style.overflow = 'hidden';
                  document.body.style.overflow = 'hidden';

                  const overlay = document.createElement('div');
                  overlay.id = OVERLAY_ID;
                  overlay.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:radial-gradient(circle at 50% 35%, #161a2e 0%, #080b14 100%);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);display:flex;align-items:center;justify-content:center;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#ffffff;text-align:center;box-sizing:border-box;";

                  overlay.innerHTML = '<div style="max-width:560px;width:100%;background:rgba(18,24,40,0.96);border:1px solid rgba(244,63,94,0.35);border-radius:28px;padding:44px 32px;box-shadow:0 0 60px rgba(0,0,0,0.9),0 0 40px rgba(244,63,94,0.15);display:flex;flex-direction:column;align-items:center;box-sizing:border-box;">' +
                    '<div style="width:80px;height:80px;border-radius:24px;background:rgba(244,63,94,0.12);border:1.5px solid rgba(244,63,94,0.4);display:flex;align-items:center;justify-content:center;margin-bottom:24px;box-shadow:0 0 30px rgba(244,63,94,0.25);">' +
                      '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
                        '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>' +
                      '</svg>' +
                    '</div>' +
                    '<span style="display:inline-block;padding:4px 14px;border-radius:20px;background:rgba(244,63,94,0.15);border:1px solid rgba(244,63,94,0.3);color:#fb7185;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px;">' +
                      'Aviso Importante' +
                    '</span>' +
                    '<h1 style="margin:0 0 14px;font-size:26px;font-weight:800;letter-spacing:-0.5px;color:#ffffff;line-height:1.2;">' +
                      'Site em Manutenção' +
                    '</h1>' +
                    '<p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#94a3b8;max-width:440px;">' +
                      'Este site encontra-se temporariamente em manutenção programada e regularização técnica. O acesso será restabelecido automaticamente em breve.' +
                    '</p>' +
                    '<a href="https://wa.me/5511954532927?text=Ol%C3%A1%20Jhones%2C%20estou%20vendo%20o%20aviso%20de%20manuten%C3%A7%C3%A3o%20no%20meu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;width:100%;max-width:380px;padding:14px 24px;border-radius:16px;background:linear-gradient(135deg,#10b981 0%,#059669 100%);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;box-shadow:0 0 25px rgba(16,185,129,0.35);box-sizing:border-box;">' +
                      'Falar com Suporte Técnico (WhatsApp)' +
                    '</a>' +
                    '<div style="margin-top:20px;font-size:11px;color:#64748b;font-family:monospace;">' +
                      'JS Web Negócios • Infraestrutura & Licenciamento' +
                    '</div>' +
                  '</div>';

                  document.body.appendChild(overlay);
                }

                function hideMaintenanceScreen() {
                  const overlay = document.getElementById(OVERLAY_ID);
                  if (overlay) {
                    overlay.remove();
                    document.documentElement.style.overflow = '';
                    document.body.style.overflow = '';
                  }
                }

                async function checkLicense() {
                  try {
                    const url = "https://firestore.googleapis.com/v1/projects/" + FIREBASE_PROJECT + "/databases/(default)/documents/clients/" + CLIENT_ID + "?t=" + Date.now();
                    const res = await fetch(url);
                    if (!res.ok) return;
                    const data = await res.json();
                    const status = data.fields?.status?.stringValue || 'ativo';

                    if (status === 'suspenso') {
                      showMaintenanceScreen();
                    } else {
                      hideMaintenanceScreen();
                    }
                  } catch (err) {
                    console.warn('[JS Manager WaaS] Erro na verificação:', err);
                  }
                }

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', checkLicense);
                } else {
                  checkLicense();
                }
                setInterval(checkLicense, 5000);
              })();
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
