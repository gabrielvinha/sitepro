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
      {/* Rainbow Background Effect */}
      <div className="absolute inset-0 rainbow-background"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              <span ref={typedElementRef}></span>
              <br />EM APENAS 10 MINUTOS
              <br />COM <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-400">INTELIGÊNCIA ARTIFICIAL</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
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
              <div className="relative w-full max-w-md mx-auto bg-black rounded-lg overflow-hidden shadow-2xl border border-purple-500/30">
                <div 
                  style={{position:"relative", paddingTop:"177.77777777777777%"}}
                  dangerouslySetInnerHTML={{
                    __html: `
                      <iframe 
                        id="panda-6f1e8eb4-3749-468f-a571-fabf5fdaa799" 
                        src="https://player-vz-00f8c568-218.tv.pandavideo.com.br/embed/?v=6f1e8eb4-3749-468f-a571-fabf5fdaa799" 
                        style="border:none;position:absolute;top:0;left:0;" 
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                        allowfullscreen="true" 
                        width="100%" 
                        height="100%" 
                        fetchpriority="high">
                      </iframe>
                      <script>
                        if(!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')){
                          let s=document.createElement('script');
                          s.src='https://player.pandavideo.com.br/api.v2.js'; 
                          s.async=true; 
                          document.head.appendChild(s);
                        } 
                        window.pandascripttag = window.pandascripttag || [];
                        window.pandascripttag.push(function (){
                          const panda_id_player = 'panda-6f1e8eb4-3749-468f-a571-fabf5fdaa799';
                          const p=new PandaPlayer(panda_id_player,{
                            onReady(){
                              p.pipScrollFollow({panda_id_player});
                            }
                          });
                        });
                      </script>
                    `
                  }}
                />
                
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
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-400/30 rounded-full filter blur-3xl animate-pulse-slow -z-10"></div>
            </div>
          </motion.div>
        </div>
         
      </div>
        
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-fuchsia-600/30 rounded-full filter blur-xl"></div>
    </section>
  );
   
};
 
export default HeroSection;