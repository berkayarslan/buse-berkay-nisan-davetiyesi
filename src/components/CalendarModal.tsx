import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Download, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Nişan start & end: 2026-10-11 13:30 to 2026-10-11 17:00 (TRT UTC+3 -> 10:30 UTC to 14:00 UTC)
  const startTime = '20261011T103000Z';
  const endTime = '20261011T140000Z';

  const title = encodeURIComponent(`Buse & Berkay Nişan Töreni`);
  const details = encodeURIComponent(`Buse ve Berkay'ın Nişan Töreni ve Kutlaması.\n\nMekan: ${WEDDING_DATA.venueName}\nSaat: 13:30 - 17:00\nAdres: ${WEDDING_DATA.venueAddress}\n\nSizi de yanımızda görmekten mutluluk duyarız!`);
  const location = encodeURIComponent(`${WEDDING_DATA.venueName}, ${WEDDING_DATA.venueAddress}`);

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;

  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Buse ve Berkay//Nisan Davetiyesi//TR',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:Buse & Berkay Nişan Töreni`,
      `DESCRIPTION:Buse ve Berkay'ın Nişan Kutlaması (Saat 13:30 - 17:00).\\nMekan: ${WEDDING_DATA.venueName}\\n${WEDDING_DATA.venueAddress}`,
      `LOCATION:${WEDDING_DATA.venueName}, ${WEDDING_DATA.venueAddress}`,
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Buse-Berkay-Nisan-11-Ekim-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

          {/* Header */}
          <div className="text-center mb-5">
            <div className="w-12 h-12 rounded-full bg-[#527885]/10 border border-[#527885]/20 flex items-center justify-center mx-auto mb-2 text-[#527885]">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-[#A85842]">
              Takviminize Ekleyin
            </h3>
            <p className="font-luxury text-sm text-[#527885] mt-0.5 font-medium">
              11 Ekim 2026 Pazar • 13:30 - 17:00
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* Google Calendar Link */}
            <a
              href={googleCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-white border border-[#527885]/25 text-[#2D454E] hover:border-[#C4735B] hover:text-[#C4735B] flex items-center justify-between font-cinzel text-xs font-semibold tracking-wider transition-all shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <CalendarIcon className="w-4 h-4 text-[#C4735B]" />
                <span>Google Takvim'e Ekle</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>

            {/* Apple / Outlook iCal Download */}
            <button
              onClick={handleDownloadICS}
              className="w-full py-3.5 px-4 rounded-xl bg-white border border-[#527885]/25 text-[#2D454E] hover:border-[#C4735B] hover:text-[#C4735B] flex items-center justify-between font-cinzel text-xs font-semibold tracking-wider transition-all shadow-2xs cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Download className="w-4 h-4 text-[#527885]" />
                <span>Apple / Outlook Takvim (.ics)</span>
              </div>
              <span className="text-[10px] text-gray-400 font-sans">İndir</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
