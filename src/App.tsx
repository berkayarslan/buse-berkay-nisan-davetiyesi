import { useState, useEffect, useRef } from 'react';
import { Screen1Hero } from './components/Screen1Hero';
import { Screen2Couple } from './components/Screen2Couple';
import { Screen3DateVenue } from './components/Screen3DateVenue';
import { Screen5ActionRSVP } from './components/Screen5ActionRSVP';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { DirectionsModal } from './components/DirectionsModal';
import { CalendarModal } from './components/CalendarModal';
import { MusicControl } from './components/MusicControl';
import { NavigationIndicator } from './components/NavigationIndicator';
import { romanticAudio } from './utils/audioPlayer';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

  // Modals
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Section refs for smooth scrolling & observer
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Read ?davetli= url parameter for WhatsApp personalized invites
  const [guestName, setGuestName] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get('davetli') || urlParams.get('guest') || urlParams.get('isim');
      if (name) {
        setGuestName(decodeURIComponent(name));
      }
    } catch {
      // ignore url parse issues
    }
  }, []);

  // Intersection observer to track active screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = screenRefs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) {
              setActiveScreen(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    screenRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [isEnvelopeOpen]);

  const handleToggleMusic = () => {
    const isNowPlaying = romanticAudio.toggle();
    setIsPlayingMusic(isNowPlaying);
  };

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    // Try romantic piano notes when envelope opens
    try {
      romanticAudio.start();
      setIsPlayingMusic(true);
    } catch {
      // Audio context might require user interaction
    }
  };

  const scrollToScreen = (index: number) => {
    if (screenRefs[index]?.current) {
      screenRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#FAF7F2] text-[#2D2926] font-body flex justify-center selection:bg-[#C4735B]/20">
      {/* Maximum width container mimicking phone/tablet luxury card or fluid desktop presentation */}
      <div className="relative w-full max-w-md md:max-w-lg min-h-[100dvh] flex flex-col shadow-2xl bg-[#FAF7F2] overflow-hidden border-x border-[#C6A45F]/20">
        {/* Floating Top Music Control */}
        <MusicControl
          isPlaying={isPlayingMusic}
          onToggle={handleToggleMusic}
        />

        {/* Right Fixed Dot Indicator Navigation */}
        {isEnvelopeOpen && (
          <NavigationIndicator
            currentScreen={activeScreen}
            totalScreens={4}
            onSelectScreen={scrollToScreen}
          />
        )}

        {/* Initial Envelope / Wax Seal Opening Experience */}
        <EnvelopeIntro
          isOpen={isEnvelopeOpen}
          onOpen={handleOpenEnvelope}
          guestName={guestName}
        />

        {/* Continuous Scrollable & Snap Screens (1 to 4) */}
        <div
          ref={containerRef}
          className="w-full flex-1 overflow-y-auto no-scrollbar scroll-smooth snap-y snap-mandatory"
        >
          {/* Ekran 1: Giriş & Davet */}
          <div ref={screenRefs[0]} className="snap-start min-h-[100dvh]">
            <Screen1Hero
              onNext={() => scrollToScreen(1)}
              guestName={guestName}
              isEnvelopeOpen={isEnvelopeOpen}
              onOpenEnvelope={handleOpenEnvelope}
            />
          </div>

          {/* Ekran 2: Buse & Berkay */}
          <div ref={screenRefs[1]} className="snap-start min-h-[100dvh]">
            <Screen2Couple
              onNext={() => scrollToScreen(2)}
              onPrev={() => scrollToScreen(0)}
            />
          </div>

          {/* Ekran 3: 11 Ekim 2026 / Tarih, Mekan & Nişan Akışı */}
          <div ref={screenRefs[2]} className="snap-start min-h-[100dvh]">
            <Screen3DateVenue
              onNext={() => scrollToScreen(3)}
              onPrev={() => scrollToScreen(1)}
            />
          </div>

          {/* Ekran 4: Son Bölüm / Sizi de yanımızda görmek isteriz & Yol Tarifi, Takvim */}
          <div ref={screenRefs[3]} className="snap-start min-h-[100dvh]">
            <Screen5ActionRSVP
              onOpenDirections={() => setIsDirectionsOpen(true)}
              onOpenCalendar={() => setIsCalendarOpen(true)}
              onScrollToTop={() => scrollToScreen(0)}
            />
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <DirectionsModal
        isOpen={isDirectionsOpen}
        onClose={() => setIsDirectionsOpen(false)}
      />

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </div>
  );
}
