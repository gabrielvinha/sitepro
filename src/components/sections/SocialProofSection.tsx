import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
  { id: '3IOVoVRrYbk', title: 'Depoimento 1' },
  { id: 'wCN47E_44IM', title: 'Depoimento 2' },
  { id: 'eNs5CFHXWME', title: 'Depoimento 3' },
  { id: 'mM8qrjt-1aw', title: 'Depoimento 4' },
  { id: 'CJnoc8--zpA', title: 'Depoimento 5' }
];

const SocialProofSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="social-proof" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>VEJA O QUE NOSSOS ALUNOS DIZEM</SectionHeading>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="relative"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="aspect-video w-full max-w-3xl mx-auto">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&controls=0&showinfo=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-sky-500/80 hover:bg-sky-500 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-sky-500/80 hover:bg-sky-500 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-sky-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default SocialProofSection;