import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, onToggle }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={onToggle}
      className="fixed top-4 right-4 z-40 p-2.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#C6A45F]/40 shadow-md text-[#527885] hover:text-[#C4735B] hover:border-[#C4735B] transition-all cursor-pointer group"
      aria-label="Müzik Çalar"
      title={isPlaying ? 'Müziği Durdur' : 'Müziği Başlat'}
    >
      {isPlaying ? (
        <div className="relative">
          <Volume2 className="w-5 h-5 text-[#C4735B] animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C4735B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4735B]"></span>
          </span>
        </div>
      ) : (
        <VolumeX className="w-5 h-5 text-[#527885]/70 group-hover:text-[#C4735B]" />
      )}
    </motion.button>
  );
};
