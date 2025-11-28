import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  className?: string;
  compact?: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  className = '', 
  compact = false 
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }
        
        const newMinutes = prevTime.minutes - 1;
        
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prevTime.hours - 1;
        
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        // Reset to 24 hours when countdown reaches zero
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  if (compact) {
    return (
      <div className={`flex items-center space-x-1 text-white ${className}`}>
        <span>{formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-white text-sm mb-2 font-medium">OFERTA EXPIRA EM:</p>
      <div className="flex items-center space-x-2">
        <TimeBox value={formatNumber(timeLeft.hours)} />
        <span className="text-white text-xl">:</span>
        <TimeBox value={formatNumber(timeLeft.minutes)} />
        <span className="text-white text-xl">:</span>
        <TimeBox value={formatNumber(timeLeft.seconds)} />
      </div>
    </div>
  );
};

const TimeBox: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-sky-900 to-purple-800 rounded-md text-white text-xl font-bold">
      {value}
    </div>
  );
};

export default CountdownTimer;