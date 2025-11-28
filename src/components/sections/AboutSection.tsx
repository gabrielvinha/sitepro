import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const credentials = [
    "Desenvolvedor web há mais de 5 anos",
    "Especialista em tecnologias de IA para criação de sites",
    "Criador do método Sites em 10 Minutos",
    "Já economizou mais de R$500.000 para seus alunos"
  ];
  
  const stats = [
    { value: "+800", label: "Alunos Satisfeitos" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>QUEM VAI TE ENSINAR</SectionHeading>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="rounded-lg overflow-hidden border-2 border-purple-500/30 shadow-xl shadow-purple-500/10 group">
                <img 
                  src="https://i.ibb.co/LhsNk60K/cff7a495dc9d45b9b2b8fba446ea8d6c.webp" 
                  alt="Especialista em criação de sites com IA" 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/30 to-blue-400/30 rounded-lg filter blur-xl -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-gray-300 text-lg mb-6">
              <p>
                Olá, sou um especialista em criação de sites com IA. Após anos trabalhando como desenvolvedor web e vendo pessoas gastando fortunas e semanas para ter um site, descobri um método revolucionário que transforma completamente esse processo.
              </p>
              <p className="mt-4">
                Já ajudei centenas de pessoas a criarem sites profissionais em questão de minutos, sem conhecimento técnico e sem gastar fortunas.
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-purple-500/20 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {stat.value}
                  </p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Credenciais:</h3>
              <ul className="space-y-2">
                {credentials.map((credential, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start text-gray-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{credential}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default AboutSection;