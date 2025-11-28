import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ComparisonSection from './components/sections/ComparisonSection';
import BenefitsSection from './components/sections/BenefitsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ProcessSection from './components/sections/ProcessSection';
import BonusSection from './components/sections/BonusSection';
import WhatsAppSection from './components/sections/WhatsAppSection';
import PriceSection from './components/sections/PriceSection';
import FaqSection from './components/sections/FaqSection';
import CtaSection from './components/sections/CtaSection';
import MovingTextBanner from './components/ui/MovingTextBanner';
import CustomCursor from './components/effects/CustomCursor';
import AffiliateSection from './components/sections/AffiliateSection';
import ObjectionsSection from './components/sections/ObjectionsSection';
import ExamplesSection from './components/sections/ExamplesSection';
import MembersAreaSection from './components/sections/MembersAreaSection';

function App() {
  useEffect(() => {
    document.title = "SitePRO | Crie Sites Profissionais com IA";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white relative">
      <CustomCursor />
      
      <Header />
      
      <main>
        <HeroSection />
        
        <MovingTextBanner 
          text="CRIE SITES PROFISSIONAIS EM MINUTOS • ECONOMIZE TEMPO E DINHEIRO • RESULTADOS IMPRESSIONANTES • MÉTODO EXCLUSIVO" 
        />
        
        <AboutSection />
        <ComparisonSection />
        <ExamplesSection />
        
        <MovingTextBanner 
          text="SITES RESPONSIVOS • DESIGNS MODERNOS • OTIMIZADOS PARA SEO • COMPATÍVEL COM TODOS DISPOSITIVOS" 
          reverse 
        />
        
        <AffiliateSection />
        <BenefitsSection />
        <TestimonialsSection />
        <BonusSection />
        <MembersAreaSection />
        <CtaSection />
        <PriceSection />
        <WhatsAppSection />
        <ObjectionsSection />
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;