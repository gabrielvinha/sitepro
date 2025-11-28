import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videos = [
    { 
      id: 'CpAjn3zbi4Q', 
      title: 'Depoimento de Aluno - Resultados Incríveis',
      thumbnail: `https://img.youtube.com/vi/CpAjn3zbi4Q/maxresdefault.jpg`
    },
    { 
      id: 'AyFWKIvh6J8', 
      title: 'Como Mudou Minha Vida Profissional',
      thumbnail: `https://img.youtube.com/vi/AyFWKIvh6J8/maxresdefault.jpg`
    },
    { 
      id: '40V0Le48dJM', 
      title: 'De Zero a Sites Profissionais',
      thumbnail: `https://img.youtube.com/vi/40V0Le48dJM/maxresdefault.jpg`
    }
  ];
   
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const currentVideo = videos[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>O QUE DIZEM NOSSOS ALUNOS</SectionHeading>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Veja depoimentos reais de pessoas que transformaram suas vidas com nosso método
        </p>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20">
            <motion.button 
              className="w-14 h-14 rounded-full bg-purple-600/90 hover:bg-purple-600 flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={28} />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20">
            <motion.button 
              className="w-14 h-14 rounded-full bg-purple-600/90 hover:bg-purple-600 flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={28} />
            </motion.button>
          </div>
          
          {/* Video Container - Larger and More Engaging */}
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border-2 border-purple-500/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0&modestbranding=1&autoplay=0&controls=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-2xl"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-md -z-10"></div>
          </div>
          
          {/* Video Title */}
          <motion.div 
            className="text-center mt-6"
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white text-xl font-semibold mb-2">{currentVideo.title}</h3>
            <p className="text-gray-400">Depoimento real de aluno satisfeito</p>
          </motion.div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnails Preview */}
          <div className="flex justify-center mt-8 space-x-4">
            {videos.map((video, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-purple-500 scale-110' 
                    : 'border-gray-600 hover:border-gray-400 opacity-70 hover:opacity-100'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;