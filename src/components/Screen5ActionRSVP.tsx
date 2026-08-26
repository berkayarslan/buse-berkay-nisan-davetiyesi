import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowUp } from 'lucide-react';
import { FloralCorner, LuxuryDivider, BotanicalWatermark } from './FloralOrnament';

interface Screen5ActionRSVPProps {
  onOpenDirections: () => void;
  onOpenCalendar: () => void;
  onScrollToTop: () => void;
}

export const Screen5ActionRSVP: React.FC<Screen5ActionRSVPProps> = ({
  onOpenDirections,
  onOpenCalendar,
  onScrollToTop,
}) => {
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

      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-3"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[#527885] font-cinzel font-semibold">
          KATILIM & DETAYLAR
        </span>
      </motion.div>

      {/* Center Action Box */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-sm w-full px-3 py-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="space-y-1.5"
        >
          <h2 className="font-script text-4xl sm:text-5xl text-[#B86851] leading-tight">
            “Sizi de yanımızda görmek isteriz.”
          </h2>
          <p className="font-luxury italic text-base sm:text-lg text-[#4A5D66] max-w-xs mx-auto leading-relaxed">
            11 Ekim 2026 Pazar günü bu mutlu anımızı bizimle paylaşmanız dileğiyle.
          </p>
        </motion.div>

        <LuxuryDivider className="my-3.5" />

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          {/* Yol Tarifi (Google, Apple, Yandex) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenDirections}
            className="w-full py-3.5 px-5 rounded-xl bg-white border border-[#C6A45F]/40 text-[#2D2926] font-cinzel text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 shadow-2xs hover:border-[#C4735B] transition-all cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#C4735B]" />
            <span>YOL TARİFİ AL (HARİTALAR)</span>
          </motion.button>

          {/* Takvime Ekle (Google Calendar, iCal, Outlook) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenCalendar}
            className="w-full py-3.5 px-5 rounded-xl bg-white border border-[#C6A45F]/40 text-[#2D2926] font-cinzel text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 shadow-2xs hover:border-[#C4735B] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#527885]" />
            <span>TAKVİME EKLE (11 EKİM 13:30)</span>
          </motion.button>
        </div>
      </div>

      {/* Return to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center pb-2"
      >
        <button
          onClick={onScrollToTop}
          className="flex items-center gap-1.5 text-xs text-[#527885] hover:text-[#C4735B] font-cinzel tracking-wider transition-colors cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Başa Dön</span>
        </button>
      </motion.div>
    </section>
  );
};

