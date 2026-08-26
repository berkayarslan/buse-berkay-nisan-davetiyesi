import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Calendar, Clock, MapPin, Sparkles, Utensils, Music, GlassWater, HeartHandshake, Heart, Gift, PartyPopper, Headphones, Camera } from 'lucide-react';
import { FloralCorner, BotanicalWatermark } from './FloralOrnament';
import { WEDDING_DATA, TIMELINE_EVENTS } from '../data/weddingData';

interface Screen3DateVenueProps {
  onNext: () => void;
  onPrev?: () => void;
}

export const Screen3DateVenue: React.FC<Screen3DateVenueProps> = ({ onNext }) => {
  // Live Countdown to 11 October 2026 13:30
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.weddingDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'GlassWater':
        return <GlassWater className="w-4 h-4 text-[#C4735B]" />;
      case 'Heart':
        return <Heart className="w-4 h-4 text-[#C4735B]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-[#C4735B]" />;
      case 'Gift':
        return <Gift className="w-4 h-4 text-[#C4735B]" />;
      case 'PartyPopper':
        return <PartyPopper className="w-4 h-4 text-[#C4735B]" />;
      case 'Headphones':
        return <Headphones className="w-4 h-4 text-[#C4735B]" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-[#C4735B]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#C4735B]" />;
      case 'Music':
        return <Music className="w-4 h-4 text-[#C4735B]" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-[#C4735B]" />;
      default:
        return <Clock className="w-4 h-4 text-[#C4735B]" />;
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 sm:px-6 py-4 sm:py-6 overflow-hidden bg-[#FAF7F2] text-[#2D2926]">
      {/* Faint Botanical Watermark in Center Background */}
      <BotanicalWatermark size="lg" className="opacity-[0.05]" />

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
        className="relative z-10 text-center pt-1 sm:pt-2"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[#527885] font-cinzel font-semibold">
          TARİH, MEKAN & AKIŞ
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-md w-full px-2 py-1">
        {/* Date & Time Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="w-full bg-white/80 backdrop-blur-xs border border-[#C6A45F]/40 rounded-2xl p-3 sm:p-4 shadow-2xs mb-2"
        >
          {/* Calendar Display */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-[#C4735B] mb-0.5">
              <Calendar className="w-3.5 h-3.5 text-[#C4735B]" />
              <span className="font-cinzel text-[11px] sm:text-xs tracking-widest uppercase font-semibold">
                Nişan Günü
              </span>
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#B86851] my-0.5">
              11 EKİM 2026
            </h3>

            <p className="font-luxury text-sm sm:text-base font-semibold text-[#527885]">
              Pazar • Saat 13:30 - 17:00
            </p>

            <div className="h-[1px] w-24 bg-[#C6A45F]/35 my-1.5" />

            {/* Venue Location */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-[#527885] mb-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C4735B]" />
                <span className="font-cinzel font-bold text-xs sm:text-sm text-[#2D454E]">
                  {WEDDING_DATA.venueName}
                </span>
              </div>
              <p className="font-luxury text-[11px] sm:text-xs text-[#4A5D66] max-w-xs leading-tight">
                {WEDDING_DATA.venueAddress}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full grid grid-cols-4 gap-1.5 sm:gap-2 mb-2"
        >
          {[
            { label: 'GÜN', value: timeLeft.days },
            { label: 'SAAT', value: timeLeft.hours },
            { label: 'DAKİKA', value: timeLeft.minutes },
            { label: 'SANİYE', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/85 border border-[#C6A45F]/35 rounded-xl py-1.5 px-1 sm:p-2 shadow-2xs flex flex-col items-center justify-center"
            >
              <span className="font-cinzel text-base sm:text-lg font-bold text-[#B86851] leading-none">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-wider text-[#527885] font-semibold mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Timeline Sequence Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full bg-white/75 backdrop-blur-xs border border-[#527885]/20 rounded-2xl p-3 max-h-36 sm:max-h-44 overflow-y-auto shadow-2xs"
        >
          <p className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-widest text-[#3E5D68] font-bold mb-2">
            Nişan Akışı
          </p>

          <div className="space-y-1.5 text-left pb-1">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#C4735B]/30 flex items-center justify-center shrink-0">
                  {getTimelineIcon(event.iconName)}
                </div>
                <div className="flex-1 flex items-baseline justify-between gap-2 border-b border-gray-100/80 pb-0.5">
                  <span className="font-cinzel text-[11px] sm:text-xs font-semibold text-[#2D2926]">
                    {event.title}
                  </span>
                  <span className="font-luxury text-[11px] sm:text-xs text-[#C4735B] font-bold shrink-0">
                    {event.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center pb-1 cursor-pointer"
        onClick={onNext}
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#527885] font-cinzel font-medium mb-1">
          HARİTA & KATILIM
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
