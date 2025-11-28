import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  className = '', 
  href = "https://ofertalimitada.pay.yampi.com.br/r/S6RLAM6JR0", 
  pulse = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-3',
    xl: 'text-xl px-10 py-4'
  };

  const buttonContent = (
    <motion.span
      className={`inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold rounded-md 
      transition-all duration-300 uppercase tracking-wide 
      hover:shadow-glow hover:scale-105 
      ${pulse ? 'animate-pulse-slow' : ''} 
      ${sizeClasses[size]} 
      ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  return href ? (
    <a href={href}>
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default GlowButton;