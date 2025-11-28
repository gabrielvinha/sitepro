import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Target, Zap, Brain, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const AffiliateSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Crie landing pages em minutos",
      description: "Teste múltiplas ofertas por dia em qualquer nicho sem perder tempo com desenvolvimento"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Valide ideias com baixo custo",
      description: "Economize tempo e dinheiro testando diferentes abordagens e públicos rapidamente"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Escale produtos com velocidade",
      description: "Use o mesmo método que escalou produtos digitais para milhares em vendas"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Use IA sem saber programar",
      description: "Aproveite o poder da inteligência artificial mesmo sem conhecimento técnico"
    }
  ];

  return (
    <section id="affiliate" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-400">
            Transforme ideias em lucros com velocidade nunca vista
          </h2>
          <p className="text-xl text-gray-300">
            Acelere sua jornada como afiliado testando ofertas em horas, não em semanas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-blue-400/40 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-gradient-purple-blue p-3 bg-gray-800/50 rounded-full group-hover:bg-gray-700/50 transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-r from-[#FFC500]/10 to-[#FFC500]/5 p-8 rounded-xl border border-[#FFC500]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC500] to-[#FFA000] text-[#111] px-8 py-4 rounded-full font-bold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              QUERO MUDAR MEU JOGO AGORA !
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="mt-6 text-gray-300 font-medium">
              Se você não aproveitar agora, alguém vai. Simples assim.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#FFC500]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default AffiliateSection;