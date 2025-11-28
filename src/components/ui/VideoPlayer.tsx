import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  domain?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, domain }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showInitialOverlay, setShowInitialOverlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handleInitialClick = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.muted = false;
    videoRef.current.play();
    setIsMuted(false);
    setShowInitialOverlay(false);
  };

  const handleVideoClick = () => {
    if (!videoRef.current || showInitialOverlay) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-black">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        autoPlay
        muted={isMuted}
        loop={false}
        onClick={handleVideoClick}
        onContextMenu={preventRightClick}
      />

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
        <motion.div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-sky-500 to-emerald-400"
          style={{ width: `${progress}%` }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>

      {/* Domain watermark */}
      {domain && (
        <div className="absolute top-4 right-4 text-white/50 text-sm font-medium pointer-events-none">
          {domain}
        </div>
      )}

      {/* Initial overlay */}
      <AnimatePresence>
        {showInitialOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center cursor-pointer"
            onClick={handleInitialClick}
          >
            <div className="text-center">
              {isMuted ? <VolumeX size={48} className="mb-4 text-white/90" /> : <Volume2 size={48} className="mb-4 text-white/90" />}
              <p className="text-white text-xl font-medium mb-2">Seu vídeo já começou</p>
              <p className="text-white/80">Clique para ouvir</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pause overlay */}
      <AnimatePresence>
        {isPaused && !showInitialOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="text-center">
              {isPaused ? <Play size={48} className="mb-4 text-white/90" /> : <Pause size={48} className="mb-4 text-white/90" />}
              <p className="text-white text-xl font-medium mb-2">Vídeo pausado</p>
              <p className="text-white/80">Clique para assistir</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoPlayer;