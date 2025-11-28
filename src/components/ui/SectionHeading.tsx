import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  children, 
  centered = true, 
  className = '' 
}) => {
  return (
    <motion.h2 
      className={`text-3xl md:text-4xl font-bold text-gradient mb-8
      ${centered ? 'text-center' : ''}
      ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;