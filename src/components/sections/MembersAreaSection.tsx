import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lock, Play, Users, MessageCircle, BookOpen, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const MembersAreaSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="members-area" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>VEJA NOSSA ÁREA DE MEMBROS POR DENTRO</SectionHeading>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Conheça a plataforma exclusiva onde você terá acesso a todo o conteúdo e nossa comunidade VIP
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Members Area Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-purple-500/30">
              <img 
                src="https://i.postimg.cc/jjyQqbh1/image.png"
                alt="Área de membros exclusiva"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-md -z-10"></div>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">Área de Membros Exclusiva</h3>
              <p className="text-gray-400">Acesso completo a todas as aulas e materiais</p>
            </div>
          </motion.div>

          {/* WhatsApp Community Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-green-500/30">
              <img 
                src="https://i.postimg.cc/hGDkWcTS/Imagem-do-Whats-App-de-2025-07-17-s-00-28-40-35e53ff9.jpg"
                alt="Comunidade VIP no WhatsApp"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur-md -z-10"></div>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">Comunidade VIP WhatsApp</h3>
              <p className="text-gray-400">Bônus exclusivos e networking com outros alunos</p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Aulas Práticas</h4>
            <p className="text-gray-400 text-sm">Conteúdo direto ao ponto sem enrolação</p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Suporte Direto</h4>
            <p className="text-gray-400 text-sm">Tire dúvidas diretamente comigo</p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Certificado</h4>
            <p className="text-gray-400 text-sm">Comprove seu conhecimento</p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-green-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default MembersAreaSection;