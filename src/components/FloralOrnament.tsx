import React from 'react';

/**
 * Clean & Delicate Botanical Corner Ornament
 * Uses high-resolution watercolor corner floral with terracotta roses and dusty blue-teal leaves.
 */
export const FloralCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-[-1]';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
    }
  };

  return (
    <div
      className={`absolute ${getPositionClasses()} pointer-events-none z-10 w-24 sm:w-28 h-24 sm:h-28 ${getTransform()} ${className}`}
    >
      <img
        src="/botanical_corner.png"
        alt=""
        className="w-full h-full object-contain opacity-85 select-none pointer-events-none drop-shadow-2xs"
      />
    </div>
  );
};

/**
 * The Master Botanical Wreath from Buse & Berkay design.
 * Features a high-resolution watercolor wreath ring
 * with beautiful dusty-teal foliage and terracotta blooms.
 */
export const BotanicalWreathRing: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Botanical Wreath Artwork Container */}
      <div className="relative w-[310px] h-[310px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center">
        {/* Watercolor Wreath Graphic */}
        <img
          src="/wreath.png"
          alt="Botanical Wreath"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none drop-shadow-xs"
        />

        {/* Text / Children centered inside the ring */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * Refined Divider matching the stationery card
 */
export const LuxuryDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-2.5 ${className}`}>
      <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C6A45F]/50" />
      <div className="flex items-center gap-1.5 text-[#C4735B]">
        <div className="w-1.5 h-1.5 rotate-45 border border-[#527885]" />
        <div className="w-2 h-2 rotate-45 bg-[#C4735B]" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[#527885]" />
      </div>
      <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C6A45F]/50" />
    </div>
  );
};

/**
 * Faint Botanical Watermark for inner screens (subtle & non-distracting)
 */
export const BotanicalWatermark: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
  }[size];

  return (
    <div
      className={`absolute inset-0 m-auto pointer-events-none select-none flex items-center justify-center opacity-[0.06] ${className}`}
      aria-hidden="true"
    >
      <img
        src="/wreath.png"
        alt=""
        className={`${sizeClasses} object-contain`}
      />
    </div>
  );
};

/**
 * Rich Watercolor Botanical Divider
 * Replaces the flat geometric SVG with authentic watercolor blooms and eucalyptus leaves.
 */
export const DelicateFloralSprig: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center py-1 ${className}`}>
      <img
        src="/botanical_divider.png"
        alt="Botanical Divider"
        className="w-52 sm:w-60 h-auto max-h-12 object-contain select-none pointer-events-none drop-shadow-2xs opacity-90"
      />
    </div>
  );
};

export const FloralSprigBottom = DelicateFloralSprig;


