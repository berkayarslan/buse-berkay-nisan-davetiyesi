import React from 'react';

interface NavigationIndicatorProps {
  currentScreen: number;
  totalScreens?: number;
  onSelectScreen: (index: number) => void;
}

export const NavigationIndicator: React.FC<NavigationIndicatorProps> = ({
  currentScreen,
  totalScreens = 4,
  onSelectScreen,
}) => {
  const screenLabels = ['Giriş', 'Buse & Berkay', 'Tarih & Akış', 'Detaylar & Konum'];

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 bg-white/60 backdrop-blur-xs py-3 px-1.5 rounded-full border border-[#C6A45F]/40 shadow-xs">
      {Array.from({ length: totalScreens }).map((_, index) => {
        const isActive = currentScreen === index;
        return (
          <button
            key={index}
            onClick={() => onSelectScreen(index)}
            className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            aria-label={`Ekran ${index + 1}`}
          >
            {/* Tooltip Label on Hover (Desktop) */}
            <span className="absolute right-7 px-2 py-0.5 rounded-md bg-[#2D454E] text-white text-[10px] font-luxury font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xs">
              {screenLabels[index] || `Ekran ${index + 1}`}
            </span>

            {/* Dot Indicator */}
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-2.5 bg-[#C4735B] ring-2 ring-[#C4735B]/30'
                  : 'w-1.5 h-1.5 bg-[#527885]/40 hover:bg-[#527885]'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
