import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import GlowButton from '../ui/GlowButton';
import CountdownTimer from '../ui/CountdownTimer';

const CtaSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const benefits = [
    "Crie sites profissionais em apenas 10 minutos",
    "Economize milhares de reais em cada projeto",
    "Não precisa de conhecimento técnico",
    "Resultados profissionais garantidos",
    "Acesso a mais de 50 templates premium"
  ];

  return (
    <section id="cta" className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-900/40 to-blue-900/40" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://i.ibb.co/qMY4WsTP/1-A50377-E-45-BB-436-A-B9-A0-50-A00-BB470-DB-1.png" 
              alt="Criação de sites com IA"
              className="w-full max-w-md mx-auto relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/20 to-blue-400/20 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              COMECE A CRIAR SITES PROFISSIONAIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">HOJE MESMO</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Não perca mais tempo e dinheiro com métodos tradicionais. Transforme sua maneira de criar sites agora!
            </p>
            
            <ul className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start text-gray-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://i.ibb.co/xtpq7bFp/B50-C9-DEE-097-B-4071-A544-5-F2-F86-CF8-FC5-1.png" 
                  alt="Garantia de 7 dias"
                  className="w-16 h-16"
                />
                <div>
                  <h4 className="text-white font-bold">GARANTIA INCONDICIONAL DE 7 DIAS</h4>
                  <p className="text-gray-400 text-sm">
                    Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                  </p>
                </div>
              </div>
              
              <CountdownTimer compact className="mb-4" />
              
              <a 
                href="#pricing"
                className="inline-block w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold rounded-md 
                transition-all duration-300 uppercase tracking-wide 
                hover:shadow-glow hover:scale-105 
                animate-pulse-slow 
                text-lg px-10 py-4 text-center"
              >
                QUERO CRIAR SITES PROFISSIONAIS AGORA
              </a>
              
              <p className="text-center text-fuchsia-500 mt-3 font-medium">
                Últimas vagas com 60% de desconto!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-60 h-60 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default CtaSection;