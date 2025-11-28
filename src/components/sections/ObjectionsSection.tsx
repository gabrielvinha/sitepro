import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, Shield, Code, Clock, Smartphone, Brain, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ObjectionsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const objections = [
    {
      icon: <Brain className="w-6 h-6" />,
      question: "Preciso pagar pela IA?",
      answer: "Não. A IA usada no treinamento é 100% gratuita e você aprenderá a usá-la sem custos adicionais."
    },
    {
      icon: <Code className="w-6 h-6" />,
      question: "Vou conseguir fazer mesmo sem saber nada de programação?",
      answer: "Sim! O método foi feito pra iniciantes. Você só precisa saber usar o celular."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      question: "Tenho medo de comprar e me arrepender…",
      answer: "Você tem garantia de 7 dias. Se não gostar, devolvemos seu dinheiro na hora, sem perguntas."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      question: "E se eu tiver dúvidas durante o curso?",
      answer: "Temos suporte humanizado 24 horas por dia, com pessoas reais prontas pra te ajudar."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      question: "Preciso de computador pra fazer?",
      answer: "Não! Você pode fazer tudo pelo celular. O curso mostra como."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      question: "Isso funciona mesmo?",
      answer: "Funciona porque é baseado em prática, não teoria. Você vai ver sites sendo criados na sua frente."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>Ainda com dúvidas? Vamos eliminar todas elas agora.</SectionHeading>

        <div className="max-w-3xl mx-auto">
          {objections.map((objection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-lg flex items-start gap-4 transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-sky-900/40 to-emerald-900/40 border border-sky-500/30'
                    : 'bg-gray-900/60 hover:bg-gray-900/80'
                }`}
              >
                <div className="text-gradient-purple-blue shrink-0">
                  {objection.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-lg font-medium pr-8">{objection.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-sky-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-sky-400 shrink-0" />
                    )}
                  </div>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 mt-4"
                    >
                      {objection.answer}
                    </motion.p>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            AGORA NÃO TEM MAIS DESCULPA
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-sky-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default ObjectionsSection;