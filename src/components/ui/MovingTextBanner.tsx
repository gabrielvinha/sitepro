import React from 'react';

interface MovingTextBannerProps {
  text: string;
  className?: string;
  reverse?: boolean;
}

const MovingTextBanner: React.FC<MovingTextBannerProps> = ({ 
  text, 
  className = '', 
  reverse = false 
}) => {
  const repeatedText = `${text} • `.repeat(10);
  
  return (
    <div 
      className={`w-full py-3 overflow-hidden bg-gradient-to-r from-sky-500/30 to-cyan-500/30 backdrop-blur-sm ${className}`}
    >
      <div 
        className={`whitespace-nowrap text-white font-medium text-lg animate-marquee-${reverse ? 'reverse' : 'normal'}`}
      >
        {repeatedText}
      </div>
    </div>
  );
};

export default MovingTextBanner;