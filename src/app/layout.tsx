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
      </head>
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen relative font-sans">
        {children}
      </body>
    </html>
  );
}
