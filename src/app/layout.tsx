import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://site-jhones-portifolio.vercel.app'),
  title: "JS Web & Business | Sites de Alta Conversão, Catálogos & Sistemas Web",
  description: "Desenvolvimento de sites modernos, landing pages de alta conversão, catálogos online e sistemas web sob medida por Jhones Santana (JS Web & Business). Atendimento direto no WhatsApp.",
  keywords: ["criação de sites", "sistemas web", "landing page", "catálogo online", "desenvolvedor web sp", "jhones santana", "jhousantana05", "js web business", "são miguel paulista"],
  authors: [{ name: "Jhones Santana - JS Web & Business" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "JS Web & Business | Sites de Alta Conversão & Sistemas Web",
    description: "Transforme sua presença digital em uma máquina de fechar negócios com design moderno e desenvolvimento web de alta performance.",
    images: [
      {
        url: "/imagens/image01.jpg",
        width: 1920,
        height: 1080,
        alt: "JS Web & Business - Jhones Santana",
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
                  "name": "JS Web & Business",
                  "description": "Desenvolvimento de sites de alta conversão, catálogos online e sistemas web sob medida.",
                  "inLanguage": "pt-BR"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://jhousantana05.github.io/JhouSantana05/#business",
                  "name": "JS Web & Business",
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
        {children}
      </body>
    </html>
  );
}
