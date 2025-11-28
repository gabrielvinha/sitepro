import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SectionHeading from '../ui/SectionHeading';

const ExamplesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const examples = [
    { url: 'https://gabrielovigna.com/mockup1.png', alt: 'Site Example 1' },
    { url: 'https://gabrielovigna.com/mockup2.png', alt: 'Site Example 2' },
    { url: 'https://gabrielovigna.com/mockup3.png', alt: 'Site Example 3' },
    { url: 'https://gabrielovigna.com/mockup4.png', alt: 'Site Example 4' },
    { url: 'https://i.postimg.cc/QCmf83jD/image.png', alt: 'Site Example 5' },
    { url: 'https://i.postimg.cc/gkMg1mMq/image.png', alt: 'Site Example 6' },
    { url: 'https://i.postimg.cc/nhg0cTfX/image.png', alt: 'Site Example 7' },
    { url: 'https://i.postimg.cc/Qtrmctts/image.png', alt: 'Site Example 8' },
    { url: 'https://i.postimg.cc/50q3gVYz/image.png', alt: 'Site Example 9' },
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeading>Sites que você também pode fazer</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            className="py-10"
          >
            {examples.map((example, index) => (
              <SwiperSlide key={index} className="max-w-2xl">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={example.url}
                    alt={example.alt}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-purple-600/80 hover:bg-purple-600 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-purple-600/80 hover:bg-purple-600 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default ExamplesSection;