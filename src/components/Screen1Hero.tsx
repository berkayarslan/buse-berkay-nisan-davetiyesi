import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { BotanicalWreathRing, FloralCorner } from './FloralOrnament';

interface Screen1HeroProps {
  onNext: () => void;
  guestName?: string;
  isEnvelopeOpen: boolean;
  onOpenEnvelope: () => void;
}

export const Screen1Hero: React.FC<Screen1HeroProps> = ({
  onNext,
  guestName,
}) => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 sm:px-6 py-6 overflow-hidden bg-[#FAF7F2] text-[#2D2926]">
      {/* 4 Corner Subtle Botanical Flourishes */}
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      {/* Double Border Frame */}
      <div className="absolute inset-3 sm:inset-4 border border-[#C6A45F]/30 rounded-2xl pointer-events-none" />
      <div className="absolute inset-4 sm:inset-5 border border-[#527885]/15 rounded-xl pointer-events-none" />

      {/* Top Header Information */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-2"
      >
        {guestName ? (
          <div className="inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-[#527885]/10 border border-[#527885]/20 mb-2 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#C4735B]" />
            <span className="font-luxury text-xs sm:text-sm text-[#527885] tracking-wide">
              Sayın <strong className="text-[#2D454E] font-semibold">{guestName}</strong>
            </span>
          </div>
        ) : null}

        <p className="font-cinzel text-[11px] sm:text-[12px] uppercase tracking-[0.34em] text-[#527885] font-semibold">
          EN MUTLU GÜNÜMÜZE DAVETLİSİNİZ
        </p>
      </motion.div>

      {/* Center Main Circular Botanical Ring with Names */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-sm w-full py-2">
        <BotanicalWreathRing>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center py-2"
          >
            {/* Bride Name */}
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#B86851] leading-none tracking-normal py-0.5 select-none drop-shadow-xs">
              Buse
            </h1>

            {/* Ampersand */}
            <span className="font-script text-3xl sm:text-4xl text-[#B86851] my-1 select-none opacity-90">
              &
            </span>

            {/* Groom Name */}
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#B86851] leading-none tracking-normal py-0.5 select-none drop-shadow-xs">
              Berkay
            </h1>
          </motion.div>
        </BotanicalWreathRing>

        {/* Delicate invitation message under wreath */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 flex flex-col items-center text-center max-w-xs px-4"
        >
          {/* Subtle Diamond Divider */}
          <div className="flex items-center justify-center gap-2 mb-2 text-[#C4735B]">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C6A45F]/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#527885]" />
            <div className="w-2 h-2 rotate-45 bg-[#C4735B]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#527885]" />
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C6A45F]/50" />
          </div>

          <p className="font-luxury italic text-sm sm:text-base text-[#4A5D66] leading-relaxed">
            Hayatımızın bu en özel gününde sizleri de aramızda görmekten mutluluk duyarız.
          </p>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex flex-col items-center pb-2 cursor-pointer"
        onClick={onNext}
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#527885] font-cinzel font-medium mb-1">
          AŞAĞI KAYDIRIN
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#C4735B]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
