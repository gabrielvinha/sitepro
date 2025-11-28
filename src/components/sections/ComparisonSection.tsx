import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, XCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ComparisonSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const traditionalMethod = [
    "5 dias ou mais de trabalho",
    "Custo médio de R$2.000 a R$5.000",
    "Necessita conhecimento técnico",
    "Processo complexo e frustrante",
    "Difícil de fazer alterações",
    "Resultado nem sempre satisfatório"
  ];
  
  const ourMethod = [
    "Apenas 10 minutos de trabalho",
    "Custo zero ou mínimo",
    "Zero conhecimento técnico necessário",
    "Processo simples e intuitivo",
    "Alterações em segundos",
    "Resultado sempre profissional"
  ];

  return (
    <section id="comparison" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>COMPARE E VEJA A DIFERENÇA</SectionHeading>
        
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-3xl relative">
            <video
              src="https://gabrielovigna.com/Video-Artista.mp4"
              className="w-full h-auto rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-md -z-10"></div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional Method */}
          <motion.div 
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 border border-red-500/30"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                <XCircle className="h-10 w-10 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-6">MÉTODO TRADICIONAL</h3>
            <ul className="space-y-4">
              {traditionalMethod.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Our Method */}
          <motion.div 
            className="bg-gradient-to-b from-purple-900/40 to-blue-900/40 rounded-lg p-6 border border-blue-500/30"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-6">NOSSO MÉTODO</h3>
            <ul className="space-y-4">
              {ourMethod.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-red-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-green-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default ComparisonSection;