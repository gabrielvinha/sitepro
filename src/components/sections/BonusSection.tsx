import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gift } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const BonusSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const bonuses = [
  {
     id: 1,
    title: "Template Oculto Ultra-Conversivo",
    value: "R$197",
    description: "Um modelo secreto usado em campanhas que venderam mais de R$100.000. Disponível apenas para alunos selecionados."
  },
  {
    id: 2,
    title: "Mini Manual de Gatilhos Mentais",
    value: "R$147",
    description: "Descubra os 7 gatilhos mais usados por copywriters milionários para transformar visitantes em compradores."
  },
  {
    id: 3,
    title: "Checklist Pro de Lançamento Rápido",
    value: "R$97",
    description: "Uma sequência simples, passo a passo, para colocar seu site no ar e começar a vender no mesmo dia."
  },
  {
    id: 4,
    title: "Suporte Prioritário via WhatsApp",
    value: "R$297",
    description: "Durante 30 dias, você poderá tirar dúvidas diretamente comigo — sem chatbots ou enrolação."
  },
  {
    id: 5,
    title: "Acesso Vitalício ao Conteúdo",
    value: "Inestimável",
    description: "Você terá acesso vitalício a todas as aulas e futuras atualizações, sem custo adicional. Apenas para essa turma."
  }
]
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="bonus" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>BÔNUS EXCLUSIVOS</SectionHeading>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Além do curso principal, você receberá estes bônus incríveis:
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {bonuses.map((bonus) => (
            <motion.div 
              key={bonus.id}
              className="bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-gradient-to-r from-sky-500 to-cyan-500"></div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="px-3 py-1 bg-sky-500/20 rounded-full text-sky-400 text-xs font-medium">
                    BÔNUS #{bonus.id}
                  </div>
                  <Gift className="h-5 w-5 text-blue-400" />
                </div>
                
                <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-400 transition-all">
                  {bonus.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {bonus.description}
                </p>
                
                <div className="text-right">
                  <span className="text-white font-bold">VALOR: </span>
                  <span className="text-green-400 font-bold">{bonus.value}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-2">
            Valor Total dos Bônus: R$738
          </p>
          <p className="text-white">
            Todos incluídos GRATUITAMENTE com sua compra hoje!
          </p>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-sky-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default BonusSection;