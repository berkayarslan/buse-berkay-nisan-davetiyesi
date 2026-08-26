import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface EnvelopeIntroProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ isOpen, onOpen, guestName }) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleOpenEnvelope = () => {
    if (hasTriggered) return;
    setHasTriggered(true);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#C4735B', '#527885', '#EEDCC8', '#C6A45F'],
      });
    } catch {
      // ignore
    }

    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F2] px-4 overflow-hidden"
        >
          {/* Subtle floral background aura */}
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,rgba(196,115,91,0.12)_0%,transparent_70%)]" />

          {/* Luxury Card Frame */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full max-w-sm sm:max-w-md bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 shadow-2xl border border-[#C6A45F]/35 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Faint Botanical Wreath Backdrop */}
            <div className="absolute inset-0 m-auto pointer-events-none select-none flex items-center justify-center opacity-[0.08]">
              <img src="/wreath.png" alt="" className="w-80 h-80 object-contain" />
            </div>

            {/* Elegant Outer Border */}
            <div className="absolute inset-3 border border-[#C6A45F]/35 rounded-xl pointer-events-none" />
            <div className="absolute inset-4 border border-[#527885]/20 rounded-lg pointer-events-none" />

            {/* Personalized Guest Badge */}
            {guestName && (
              <div className="mb-4 inline-block px-4 py-1 rounded-full bg-[#527885]/10 border border-[#527885]/20">
                <p className="font-luxury text-sm text-[#527885] tracking-wide">
                  Sayın <span className="font-semibold text-[#2D454E]">{guestName}</span>
                </p>
              </div>
            )}

            {/* Subtitle Badge */}
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#527885] font-semibold mb-2">
              NİŞAN DAVETİYESİ
            </p>

            {/* Names */}
            <h1 className="font-script text-4xl sm:text-5xl text-[#B86851] my-2 leading-tight">
              Buse & Berkay
            </h1>

            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C6A45F]/60 to-transparent my-4" />

            <p className="font-luxury italic text-base text-[#4A5D66] mb-8 leading-relaxed max-w-xs">
              Bu mutlu günümüzde sizleri de aramızda görmekten onur duyarız.
            </p>

            {/* Interactive Seal Button with Minimal, Elegant Hint */}
            <div className="flex flex-col items-center">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleOpenEnvelope}
                className="relative group cursor-pointer flex flex-col items-center focus:outline-none"
                aria-label="Davetiyeyi Aç"
              >
                {/* Wax Seal Circle */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#C4735B] via-[#B35841] to-[#8C3A27] flex items-center justify-center shadow-lg border-2 border-[#EEDCC8] group-hover:shadow-[#C4735B]/40 transition-all">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 flex flex-col items-center justify-center text-white">
                    <span className="font-cinzel text-xs tracking-widest font-bold">B • B</span>
                    <span className="font-luxury text-[10px] text-white/80">2026</span>
                  </div>
                </div>
              </motion.button>

              {/* Minimal, Subtle, Tiny Hint */}
              <p
                onClick={handleOpenEnvelope}
                className="mt-3 font-luxury italic text-xs text-[#527885]/80 hover:text-[#C4735B] cursor-pointer tracking-wider transition-colors select-none"
              >
                — davetiyeyi aç —
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
