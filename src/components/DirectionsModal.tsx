import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, ExternalLink, Navigation, Copy, Check } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${WEDDING_DATA.venueName}, ${WEDDING_DATA.venueAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-sm bg-[#FAF6F0] rounded-2xl p-6 shadow-2xl border border-[#C6A45F]/40"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-[#527885] hover:bg-black/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center mb-5">
            <div className="w-12 h-12 rounded-full bg-[#527885]/10 border border-[#527885]/20 flex items-center justify-center mx-auto mb-2 text-[#C4735B]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-[#A85842]">
              Yol Tarifi & Konum
            </h3>
            <p className="font-luxury text-sm text-[#527885] mt-0.5 font-medium">
              {WEDDING_DATA.venueName}
            </p>
          </div>

          {/* Venue Address Card */}
          <div className="bg-white/80 border border-[#C6A45F]/30 rounded-xl p-3.5 mb-5 text-center">
            <p className="font-luxury text-sm text-[#2D2926] leading-relaxed">
              {WEDDING_DATA.venueAddress}
            </p>
            <button
              onClick={handleCopyAddress}
              className="mt-2.5 inline-flex items-center gap-1 text-xs font-cinzel text-[#527885] hover:text-[#C4735B] transition-colors cursor-pointer font-semibold"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-600">Adres Kopyalandı!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Adresi Kopyala</span>
                </>
              )}
            </button>
          </div>

          {/* Navigation App Links */}
          <div className="flex flex-col gap-2.5">
            {/* Google Maps */}
            <a
              href={WEDDING_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white border border-[#527885]/25 text-[#2D454E] hover:border-[#C4735B] hover:text-[#C4735B] flex items-center justify-between font-cinzel text-xs font-semibold tracking-wider transition-all shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-[#C4735B]" />
                <span>Google Haritalar ile Aç</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>

            {/* Apple Maps */}
            <a
              href={WEDDING_DATA.appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white border border-[#527885]/25 text-[#2D454E] hover:border-[#C4735B] hover:text-[#C4735B] flex items-center justify-between font-cinzel text-xs font-semibold tracking-wider transition-all shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-[#527885]" />
                <span>Apple Haritalar ile Aç</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>

            {/* Yandex Maps */}
            <a
              href={WEDDING_DATA.yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white border border-[#527885]/25 text-[#2D454E] hover:border-[#C4735B] hover:text-[#C4735B] flex items-center justify-between font-cinzel text-xs font-semibold tracking-wider transition-all shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-[#C4735B]" />
                <span>Yandex Navigasyon</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
