import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const WhatsAppSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Suporte Rápido",
      description: "Respostas em até 24 horas"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Atendimento Personalizado",
      description: "Tire todas suas dúvidas diretamente comigo"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Garantia de Satisfação",
      description: "Compromisso com sua experiência"
    }
  ];

  const whatsappLink = "https://wa.me/5517991279538?text=Olá! Gostaria de saber mais sobre o curso de criação de sites com IA";

  return (
    <section id="whatsapp-support" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>SUPORTE EXCLUSIVO NO WHATSAPP</SectionHeading>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg">
              Tenha acesso direto ao meu WhatsApp para tirar todas as suas dúvidas e receber suporte personalizado durante sua jornada.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-sky-900/30 to-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-sky-500/20"
              >
                <div className="text-gradient-purple-blue mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              FALAR COMIGO NO WHATSAPP
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-green-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default WhatsAppSection;