import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, CreditCard, Star, Crown, MessageCircle, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import CountdownTimer from '../ui/CountdownTimer';

const PriceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const basicFeatures = [
    "Aprenda a criar sites com inteligência artificial, de graça."
  ];

  const completeFeatures = [
    "Aprenda a criar sites com inteligência artificial",
    "Aprenda a vender sites com IA",
    "Hospedagem gratuita",
    "Captação de clientes reais",
    "Prompts excepcionais",
    "Suporte vitalício via WhatsApp",
    "Grupo da comunidade, interaja com pessoas como você"
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(https://professorfellipeguerra.com.br/wp-content/uploads/2023/12/garantia.png)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>ESCOLHA SEU PLANO</SectionHeading>

        <CountdownTimer className="mb-12" />
        
        {/* Two Cards Container */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Basic Plan Card */}
          <motion.div 
            className="bg-gray-100 rounded-xl p-8 border border-gray-300 relative h-full flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Acesso Básico</h3>
              <div className="text-5xl font-bold text-gray-800 mb-2">R$10</div>
              <p className="text-gray-600">Pagamento único</p>
            </div>
            
            <div className="flex-grow mb-8">
              <ul className="space-y-4">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Check className="h-6 w-6 text-green-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <a 
                href="https://ofertalimitada.pay.yampi.com.br/r/7N4P40ZI42"
                className="inline-block w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 text-lg"
              >
                Escolher Acesso Básico
              </a>
            </div>
          </motion.div>

          {/* Complete Plan Card - Enhanced and Highlighted */}
          <motion.div 
            className="bg-gradient-to-br from-[#FFC500]/10 via-[#FFD700]/5 to-[#FFA000]/10 rounded-xl p-8 border-3 border-[#FFC500] relative h-full flex flex-col shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              boxShadow: '0 0 30px rgba(255, 197, 0, 0.3), 0 0 60px rgba(255, 197, 0, 0.1)'
            }}
          >
            {/* Most Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFC500] to-[#FFD700] px-6 py-2 rounded-full text-black font-bold text-sm flex items-center gap-2 shadow-lg">
              <Crown className="w-4 h-4 fill-black" />
              Mais Recomendado
              <Crown className="w-4 h-4 fill-black" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFC500]/20 to-[#FFA000]/20 rounded-xl filter blur-xl -z-10"></div>
            
            <div className="text-center mb-8 mt-6">
              <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Acesso Completo</h3>
              <div className="text-6xl font-bold text-[#FFC500] mb-2 drop-shadow-lg">R$19,90</div>
              <p className="text-[#FFD700] font-bold text-lg">Melhor custo-benefício</p>
            </div>
            
            <div className="flex-grow mb-8">
              <ul className="space-y-4">
                {completeFeatures.map((feature, index) => {
                  let icon = <Check className="h-4 w-4 text-white" />;
                  
                  if (feature.includes('WhatsApp')) {
                    icon = <MessageCircle className="h-4 w-4 text-white" />;
                  } else if (feature.includes('comunidade')) {
                    icon = <Users className="h-4 w-4 text-white" />;
                  }
                  
                  return (
                    <li key={index} className="flex items-start text-white">
                      <div className="bg-green-500 rounded-full p-1 mr-3 shrink-0 mt-0.5">
                        {icon}
                      </div>
                      <span className="text-lg font-medium">{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="text-center">
              <a 
                href="https://ofertalimitada.pay.yampi.com.br/r/S6RLAM6JR0"
                className="inline-block w-full bg-gradient-to-r from-[#FFC500] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFC500] text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-lg uppercase tracking-wide"
              >
                🚀 GARANTIR ACESSO COMPLETO 🚀
              </a>
              <p className="text-[#FFD700] text-sm mt-3 font-medium">
                ⚡ Oferta por tempo limitado ⚡
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 border border-sky-500/30 max-w-2xl">
            <img 
              src="https://i.ibb.co/xtpq7bFp/B50-C9-DEE-097-B-4071-A544-5-F2-F86-CF8-FC5-1.png" 
              alt="Garantia de 7 dias"
              className="w-16 h-16"
              loading="lazy"
            />
            <div>
              <p className="text-white font-bold text-lg">GARANTIA INCONDICIONAL DE 7 DIAS</p>
              <p className="text-gray-400">
                Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div 
          className="bg-gray-800/50 rounded-lg p-6 max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h4 className="text-white font-semibold mb-4 flex items-center justify-center text-lg">
            <CreditCard className="mr-2 h-6 w-6 text-blue-400" />
            Formas de Pagamento
          </h4>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="flex items-center justify-center text-gray-300">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Cartão de Crédito</span>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Cartão de Débito</span>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>PIX</span>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Boleto Bancário</span>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center">
            Pagamento 100% seguro e criptografado
          </p>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-yellow-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-60 h-60 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default PriceSection;