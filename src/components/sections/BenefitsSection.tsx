import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, DollarSign, Smartphone, Brain, Code, Rocket } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const BenefitsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Economia de Tempo",
      description: "Crie sites completos em apenas 10 minutos, não em dias ou semanas"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Economia de Dinheiro",
      description: "Economize milhares de reais em cada projeto que criar"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Sites Responsivos",
      description: "Seus sites funcionarão perfeitamente em qualquer dispositivo"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Poder da IA",
      description: "Utilize inteligência artificial avançada para criar designs impressionantes"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Zero Código",
      description: "Nenhum conhecimento técnico ou de programação necessário"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Resultados Imediatos",
      description: "Publique seu site instantaneamente e comece a receber visitas"
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="benefits" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>O QUE VOCÊ VAI APRENDER</SectionHeading>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Domine todas as técnicas para criar sites profissionais em minutos
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-sky-500/20 hover:border-emerald-400/50 transition-all duration-300 group hover:shadow-glow"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 text-sky-400 p-3 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 rounded-xl w-14 h-14 flex items-center justify-center group-hover:from-sky-500/20 group-hover:to-emerald-500/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-sky-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-20 w-40 h-40 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default BenefitsSection;