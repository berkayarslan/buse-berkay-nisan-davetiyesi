import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FloralCorner, BotanicalWatermark, LuxuryDivider } from './FloralOrnament';
import { WEDDING_DATA } from '../data/weddingData';

interface Screen2CoupleProps {
  onNext: () => void;
  onPrev?: () => void;
}

export const Screen2Couple: React.FC<Screen2CoupleProps> = ({ onNext }) => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 sm:px-6 py-6 overflow-hidden bg-[#FAF7F2] text-[#2D2926]">
      {/* Faint Botanical Watermark in Center Background */}
      <BotanicalWatermark size="md" className="opacity-[0.06]" />

      {/* 4 Corner Botanical Floral Sprigs */}
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      {/* Outer Border with Inner Double Line */}
      <div className="absolute inset-2.5 sm:inset-3.5 border border-[#C6A45F]/35 rounded-2xl pointer-events-none" />
      <div className="absolute inset-3.5 sm:inset-4.5 border border-[#527885]/20 rounded-xl pointer-events-none" />

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-3"
      >
        <span className="font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[#527885] font-semibold">
          NİŞAN TÖRENİ
        </span>
      </motion.div>

      {/* Center Couple Showcase */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-md w-full px-4 py-2">
        {/* Bride & Groom Calligraphic Showcase */}
        <div className="flex flex-col items-center justify-center gap-0.5">
          {/* Bride Name */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-[#B86851] leading-tight">
              Buse
            </span>
          </motion.div>

          {/* Elegant Ampersand Heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center my-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C4735B]/50" />
              <span className="font-script text-3xl sm:text-4xl text-[#B86851]">&</span>
              <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C4735B]/50" />
            </div>
          </motion.div>

          {/* Groom Name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-[#B86851] leading-tight">
              Berkay
            </span>
          </motion.div>
        </div>

        <LuxuryDivider className="my-2.5" />

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-luxury italic text-base sm:text-lg text-[#4A5D66] max-w-xs mx-auto leading-relaxed my-1"
        >
          {WEDDING_DATA.quote}
        </motion.p>

        {/* Parents Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-3.5 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm font-luxury text-[#527885] bg-white/80 backdrop-blur-2xs px-5 py-2.5 rounded-xl border border-[#C6A45F]/35 shadow-2xs"
        >
          <span className="whitespace-nowrap">
            <strong className="text-[#2D454E]">Gelin Ailesi:</strong> {WEDDING_DATA.brideParents}
          </span>
          <span className="hidden sm:inline text-[#C4735B] font-bold">•</span>
          <span className="whitespace-nowrap">
            <strong className="text-[#2D454E]">Damat Ailesi:</strong> {WEDDING_DATA.groomParents}
          </span>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 flex flex-col items-center pb-2 cursor-pointer"
        onClick={onNext}
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#527885] font-cinzel font-medium mb-1">
          NİŞAN TARİHİ & DETAYLAR
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

