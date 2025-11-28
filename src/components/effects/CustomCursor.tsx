import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      setIsPointer(computedStyle.cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (typeof window === 'undefined' || window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    >
      <div 
        className={`w-4 h-4 rounded-full 
          ${isPointer ? 'bg-purple-500/30' : 'bg-blue-400/30'}
          blur-sm shadow-[0_0_10px_rgba(138,43,226,0.5)]
          transition-all duration-300`}
      />
    </motion.div>
  );
};

export default CustomCursor;