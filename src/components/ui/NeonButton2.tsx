import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  targetId?: string;
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  targetId = 'PriceSection',
  className = '' 
}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`neon-button ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <span className="neon-button-text">{children}</span>
    </motion.button>
  );
};

export default NeonButton;