import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const faqs = [
    {
      question: "Preciso ter conhecimento técnico para criar sites com este método?",
      answer: "Absolutamente não! O método foi desenvolvido justamente para pessoas sem nenhum conhecimento técnico. Tudo é feito de forma intuitiva e com a ajuda da IA."
    },
    {
      question: "Quanto tempo leva para criar um site completo?",
      answer: "Com nosso método, você consegue criar um site profissional completo em apenas 10 minutos. Isso inclui todas as páginas, textos, imagens e funcionalidades."
    },
    {
      question: "Os sites criados funcionam em celulares e tablets?",
      answer: "Sim! Todos os sites criados são 100% responsivos, ou seja, se adaptam perfeitamente a qualquer dispositivo: computadores, tablets e smartphones."
    },
    {
      question: "Preciso pagar mensalidades ou taxas recorrentes?",
      answer: "Não! Você paga apenas uma vez pelo curso e tem acesso vitalício ao método e atualizações. Não há mensalidades ou taxas escondidas."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "É simples: se em até 7 dias após a compra você não estiver satisfeito por qualquer motivo, basta solicitar o reembolso e devolveremos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Posso criar sites para meus clientes com este método?",
      answer: "Com certeza! Muitos alunos usam o método para criar sites para clientes e cobram entre R$1.000 e R$3.000 por projeto, gerando uma excelente renda extra."
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "Seu acesso é vitalício! Uma vez que você adquire o curso, pode acessá-lo quando e quantas vezes quiser, para sempre."
    }
  ];
  
  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>PERGUNTAS FREQUENTES</SectionHeading>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30' 
                    : 'bg-gray-800/60 hover:bg-gray-800/80'
                } transition-colors`}
                onClick={() => toggleFaq(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-400 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-400 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div 
                  className="bg-gray-800/30 p-4 rounded-b-lg text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default FaqSection;