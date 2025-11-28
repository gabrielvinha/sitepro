import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import NeonButton from '../ui/NeonButton';

const HeroSection: React.FC = () => {
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);
  
  useEffect(() => {
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: ['CRIE SITES PROFISSIONAIS', 'ECONOMIZE TEMPO', 'IMPRESSIONE CLIENTES'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        smartBackspace: true
      });
    }
    
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Modern Gradient Background Effect */}
      <div className="absolute inset-0 gradient-background"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              <span ref={typedElementRef}></span>
              <br />EM APENAS 10 MINUTOS
              <br />COM <span className="text-gradient">INTELIGÊNCIA ARTIFICIAL</span>
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Crie sites profissionais com inteligência artificial, mesmo sem saber nada de tecnologia — e aprenda o passo a passo prático pra vendê-los rápido, com pouco ou nenhum investimento.
            </p>
            
          
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <div className="relative w-full max-w-md mx-auto bg-black rounded-lg overflow-hidden shadow-2xl border border-sky-500/30">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  poster="https://gabrielovigna.com/vslsitepro-thumbnail.jpg"
                >
                  <source src="https://gabrielovigna.com/vslsitepro.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>

                {/* Domain watermark */}
                <div className="absolute top-4 right-4 text-white/50 text-sm font-medium pointer-events-none z-10">
                  gabrielovigna.com
                </div>
              </div>
              
              <div className="w-full flex justify-center mt-8">
                <NeonButton> 
                  Ver Provas Reais
                </NeonButton> 
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-emerald-400/20 rounded-full filter blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
         
      </div>
        
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-sky-500/15 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-emerald-500/15 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-cyan-500/20 rounded-full filter blur-xl"></div>
    </section>
  );
   
};
 
export default HeroSection;