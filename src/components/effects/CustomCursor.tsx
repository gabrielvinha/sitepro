import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, {
    damping: 30,
    stiffness: 200,
    mass: 0.5
  });

  const cursorY = useSpring(0, {
    damping: 30,
    stiffness: 200,
    mass: 0.5
  });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);

    const target = e.target as HTMLElement;
    const computedStyle = window.getComputedStyle(target);
    setIsPointer(computedStyle.cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    setIsVisible(true);
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseenter', () => setIsVisible(true));
    window.addEventListener('mouseleave', () => setIsVisible(false));

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', () => setIsVisible(true));
      window.removeEventListener('mouseleave', () => setIsVisible(false));
    };
  }, [updateMousePosition]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div
        className={`rounded-full transition-all duration-200 ${
          isPointer
            ? 'w-8 h-8 bg-sky-500/20 border-2 border-sky-400/50'
            : 'w-3 h-3 bg-emerald-400/40'
        } shadow-[0_0_10px_rgba(14,165,233,0.3)]`}
      />
    </motion.div>
  );
};

export default CustomCursor;