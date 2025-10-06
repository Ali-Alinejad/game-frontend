"use client";

import { useLanguageFont } from "@/app/hook/langFontUtils";
import { Game } from "@/app/types/Game";
import { useLanguageStore } from "@/app/zustand/uselangStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GameRankingTable from "./GameRankingTable";

interface MainNewsGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export default function MainNewsGrid({ games, onGameClick }: MainNewsGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'top' | 'popular' | 'newest'>('top');
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  // Auto-rotate slides every 7 seconds (بر اساس کد ارسالی شما)
  useEffect(() => {
    if (games.length > 3) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.min(games.length, 5));
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [games.length]);

  if (games.length < 2) return null;

  const featuredGames = games.slice(0, 5);

  // Helper function to get game title based on language
  const getGameTitle = (game: Game) => {
    if (
      typeof game.title === 'object' &&
      game.title !== null &&
      typeof (game.title as Record<string, string>).en === 'string'
    ) {
      return (game.title as Record<string, string>)[lang] || (game.title as Record<string, string>).en || 'Game Title';
    }
    return typeof game.title === 'string' ? game.title : 'Game Title';
  };

  // Helper function to get game description based on language
  const getGameDescription = (game: Game) => {
    if (game.description) {
      if (typeof game.description === 'object') {
        const langKey = lang === 'fa' ? 'persian' : lang === 'en' ? 'english' : lang === 'short' ? 'short' : 'english';
        return game.description[langKey] || game.description.english || "Experience the ultimate gaming adventure with stunning visuals and immersive gameplay that will keep you engaged for hours.";
      }
      return game.description;
    }
    return lang === 'fa'
      ? "تجربه‌ای فوق‌العاده از بازی با گرافیک خیره‌کننده و گیم‌پلی جذاب که ساعت‌ها شما را سرگرم خواهد کرد."
      : "Experience the ultimate gaming adventure with stunning visuals and immersive gameplay that will keep you engaged for hours.";
  };

  // Get games based on active tab (keeping original logic)
  const getTabGames = () => {
    const tabGames = games.slice(1, 11);
    if (activeTab === 'popular') {
      return [...tabGames].sort(() => Math.random() - 0.5);
    } else if (activeTab === 'newest') {
      return [...tabGames].reverse();
    }
    return tabGames;
  };

  const tabLabels = {
    top: lang === 'fa' ? 'رتبه بندی الماس' : 'Diamond Tier',
    popular: lang === 'fa' ? 'پر طرفدار' : 'In Vogue',
    newest: lang === 'fa' ? 'عناوین جدید' : 'New Acquisitions'
  };

  const currentFeaturedGame = featuredGames[currentSlide];
  
  // متغیر ثابت برای زمان انیمیشن (بر اساس useEffect شما)
  const autoSlideDuration = 7;

  return (
    <div className={`relative ${fontClass} text-white`} lang={lang}>
      {/* Hero Section - Elevated and Elegant */}
      <div className="relative mb-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Featured Game Container */}
          <div className="lg:col-span-8 relative group cursor-pointer" onClick={() => onGameClick(currentFeaturedGame)}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full min-h-[550px] rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
              >
                {/* Background Image with Muted Overlay */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={currentFeaturedGame?.image}
                    alt={getGameTitle(currentFeaturedGame)}
                    className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
                  />
                </motion.div>

                {/* Rich Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10 pt-24" dir={direction}>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="space-y-4"
                  >
                    
                    {/* Badges - Subtle and Premium */}
                  <div className="flex items-center space-x-3">
                    <motion.span 
                      className="px-4 py-1.5 bg-gradient-to-r from-amber-500 via-[#D89000] to-amber-500 text-white text-xs font-bold rounded-full shadow-lg shadow-amber-500/50"
                      whileHover={{ scale: 1.05 }}
                    >
                      {lang === 'fa' ? ' منتخب ویژه' : ' FEATURED'}
                    </motion.span>
                    {featuredGames[currentSlide]?.hasDiscount && (
                      <motion.span 
                        className="px-4 py-1.5  border border-amber-400/50 text-amber-300 text-xs font-bold rounded-full backdrop-blur-sm"
                        animate={{ 
                          boxShadow: ['0 0 0px rgba(52, 211, 153, 0)', '0 0 20px rgba(255, 255, 0, 0.1)', '0 0 0px rgba(52, 211, 153, 0)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {lang === 'fa' ? ' کرک شده' : 'Cracked'}
                      </motion.span>
                    )}
                  </div>

                    {/* Title with Subtle Glow */}
                    <motion.h1 
                      className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
                      style={{ textShadow: '0 0 20px rgba(252, 211, 77, 0.4)' }}
                      whileHover={{ scale: 1.01 }}
                    >
                      {getGameTitle(currentFeaturedGame)}
                    </motion.h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base lg:text-lg max-w-4xl leading-relaxed line-clamp-2 drop-shadow-lg font-light">
                      {getGameDescription(currentFeaturedGame)}
                    </p>

                    {/* Stats Bar - Refined Display */}
                    <div className="flex items-center pt-2">
                      <div className="flex items-center space-x-2   px-4 py-2 rounded-lg ">
                        <span className="text-amber-400 text-xl">★</span>
                        <span className="font-bold text-white text-lg">{(Math.random() * 2 + 8).toFixed(1)}</span>
                        <span className="text-gray-400 text-sm">/ 10</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Minimal Gilded Sentinel - FINAL LUXURY VERSION */}
            {featuredGames.length > 1 && (
                // کانتینر ناوبری: در مرکز و جدا از لبه پایین
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center p-0 z-50">
                    
                    <div className="relative w-full max-w-xs flex items-center justify-center space-x-4 px-4 py-2  backdrop-blur-lg rounded-xl shadow-2xl shadow-black/80">
                        
                        {/* 1. Navigation Indicators - Elevated & Segmented Lines */}
                        <div className="flex justify-center space-x-5 relative z-10">
                            {featuredGames.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentSlide(index);
                                    }}
                                    // طراحی خطی بسیار نازک و ظریف
                                    className={`relative rounded-full transition-all duration-300 w-10 h-1  ${ // نازک‌تر و ظریف‌تر
                                      currentSlide === index
                                        // Active State: Fully Gold Line, with a prominent glow
                                        ? "bg-amber-400 shadow-[0_0_10px_#FCD34D]" 
                                        // Inactive State: Dark Bronze line
                                        : "bg-gray-500/50 hover:bg-amber-400/50"
                                    }`}
                                    whileHover={{ y: -1, boxShadow: '0 0 15px #FCD34D' }}
                                    // انتقال ظریف در حالت فعال
                                    animate={{ y: currentSlide === index ? -2 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* یک نقطه/خط نازک روی نشانگر فعال برای تاکید بیشتر */}
                                    {currentSlide === index && (
                                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-200 shadow-lg shadow-amber-400/80" />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            {/* 2. Full-Width Progress Timer Bar (Final Classic Element) */}
            {/* این نوار، کاملاً در پایین و جداگانه قرار می‌گیرد تا کل فضای Bottom-Bar را پوشش دهد */}
            {featuredGames.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 w-full h-0.5  overflow-hidden z-40 ">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 opacity-90 shadow-[0_0_4px_#FCD34D]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        key={currentSlide} // Reset animation every time currentSlide changes
                        style={{ originX: 0 }}
                        transition={{ duration: autoSlideDuration, ease: "linear" }} 
                    />
                </div>
            )}
          </div>

          {/* Slim Ranking Table - Side Panel */}
          <div className="lg:col-span-4">
            <GameRankingTable
              games={getTabGames()}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabLabels={tabLabels}
              onGameClick={onGameClick}
              getGameTitle={getGameTitle}
              lang={lang}
              direction={direction}
            />
          </div>
        </div>
      </div>
    </div>
  );
}