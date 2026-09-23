import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';
import BentoGrid from '@/components/BentoGrid';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-clip">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <BentoGrid />
      <Projects />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
