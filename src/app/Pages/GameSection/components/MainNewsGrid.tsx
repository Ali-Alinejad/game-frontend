"use client";

import { useLanguageFont } from "@/app/hook/langFontUtils";
import { Game } from "@/app/types/Game";
import { useLanguageStore } from "@/app/zustand/uselangStore";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface MainNewsGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export default function MainNewsGrid({ games, onGameClick }: MainNewsGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  // Auto-rotate slides every 8 seconds
  useEffect(() => {
    if (games.length > 3) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.min(games.length, 5));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [games.length]);

  if (games.length < 2) return null;

  const featuredGames = games.slice(0, 5);
  const sideGames = games.slice(1, 4);

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
        // Map your lang to the correct property key
        const langKey = lang === 'fa' ? 'persian' : lang === 'en' ? 'english' : lang === 'short' ? 'short' : 'english';
        return game.description[langKey] || game.description.english || "Experience the ultimate gaming adventure with stunning visuals and immersive gameplay that will keep you engaged for hours.";
      }
      return game.description;
    }
    return lang === 'fa'
      ? "تجربه‌ای فوق‌العاده از بازی با گرافیک خیره‌کننده و گیم‌پلی جذاب که ساعت‌ها شما را سرگرم خواهد کرد."
      : "Experience the ultimate gaming adventure with stunning visuals and immersive gameplay that will keep you engaged for hours.";
  };

  return (
    <div className={`relative ${fontClass}`} dir={direction} lang={lang}>
      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[650px]">
          {/* Main Featured Game */}
          <div className="lg:col-span-2 relative group cursor-pointer" onClick={() => onGameClick(featuredGames[currentSlide])}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden"
            >
              <motion.img
                src={featuredGames[currentSlide]?.image}
                alt={getGameTitle(featuredGames[currentSlide])}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-${direction === 'rtl' ? 'l' : 'r'} from-black/50 via-transparent to-transparent`} />

              {/* Content */}
              <div className={`absolute bottom-0 ${direction === 'rtl' ? 'right-0 text-end' : 'left-0 text-start'}  p-8`}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-4"
                >
                  {/* Badge */}
                  <div className={`flex ${direction === 'rtl' ? 'space-x-reverse space-x-3  justify-end' : 'space-x-3'}`}>
                    <span className="px-3 py-1 bg-rose-600 text-white text-sm font-semibold rounded-full">
                      {lang === 'fa' ? 'منتخب' : 'FEATURED'}
                    </span>
                    {featuredGames[currentSlide]?.hasDiscount && (
                      <span className="px-3 py-1 text-rose-500 text-sm font-semibold rounded-full animate-pulse">
                        {lang === 'fa' ? 'کرک' : 'Crack'}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-rose-300 transition-colors duration-300">
                    {getGameTitle(featuredGames[currentSlide])}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                    {getGameDescription(featuredGames[currentSlide])}
                  </p>

                  {/* Stats */}
                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-6 justify-end' : 'space-x-6'} text-gray-300`}>
                    <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                      <span className="text-xl">⭐</span>
                      <span className="font-medium">{(Math.random() * 2 + 8).toFixed(1)}/10</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Side Games */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-br rounded-3xl p-6 border border-gray-500/30 shadow-2xl"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    background: [
                      "radial-gradient(circle at 100% 40%, rgba(139, 68, 196, 0.2) 10%, transparent 60%)",
                      "radial-gradient(circle at 10% 40%, rgba(239, 8, 108, 0.2)  0%, transparent 60%)",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  {lang === 'fa' ? 'هاب گیمینگ' : 'Gaming Hub'}
                </div>

                <p className="text-gray-200 text-sm leading-relaxed mb-2">
                  {lang === 'fa'
                    ? 'بازی‌های ترند، محتوای اختصاصی و جامعه‌ای پر جنب و جوش از گیمرها را کشف کنید!'
                    : 'Discover trending games, exclusive content, and join our vibrant gaming community!'
                  }
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {(lang === 'fa'
                    ? ['نقد و بررسی', 'اخبار', 'به‌روزرسانی', 'کامیونیتی']
                    : ['Reviews', 'News', 'Updates', 'Community']
                  ).map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 border-1 border-rose-200/50 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center">
                    {lang === 'fa' ? 'کاوش هاب' : 'Explore Hub'}
                    <motion.span
                      className={`${direction === 'rtl' ? 'mr-2' : 'ml-2'} mb-1`}
                      animate={{ x: direction === 'rtl' ? [-5, 0, -5] : [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {direction === 'rtl' ? '←' : '→'}
                    </motion.span>
                  </span>
                </motion.button>
              </div>
            </motion.div>

            <div className="lg:col-span-4 space-y-6">
              {/* News Header */}
              <motion.div
                initial={{ opacity: 0, x: direction === 'rtl' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex items-center ${direction === 'rtl' ? 'justify-start' : 'justify-end'}`}
              >
                <h2 className="text-xl font-bold text-white flex items-center">
                  {lang === 'fa' ? 'جدید ترین اخبار دنیای گیم' : 'Latest Gaming News'}
                  <span className={`${direction === 'rtl' ? 'mr-3' : 'ml-3'} text-3xl`}>📰</span>
                </h2>
              </motion.div>

              {/* News Items */}
              <div className="space-y-4">
                {sideGames.map((game, index) => (
                  <motion.div
                    key={game._id || index}
                    initial={{ opacity: 0, x: direction === 'rtl' ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                    className="group cursor-pointer"
                    onClick={() => onGameClick(game)}
                  >
                    <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-rose-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10">
                      <div className="flex p-2">
                        {/* Thumbnail */}
                        <div className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden ${direction === 'rtl' ? 'order-2' : ''}`}>
                          <img
                            src={game.image}
                            alt={getGameTitle(game)}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div className={`flex-1 ${direction === 'rtl' ? 'mr-4 order-1' : 'ml-4'} min-w-0`}>
                          <h3 className="text-white font-semibold text-lg group-hover:text-rose-300 transition-colors duration-300 line-clamp-2">
                            {getGameTitle(game)}
                          </h3>

                          <div className="flex items-center justify-between mt-3">
                            <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-4' : 'space-x-4'} text-sm text-gray-400`}>
                              <span className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                                <span className="text-blue-400">👁️</span>
                                <span>{Math.floor(Math.random() * 20) + 5}K</span>
                              </span>
                              <span className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                                <span className="text-green-400">💬</span>
                                <span>{Math.floor(Math.random() * 100) + 20}</span>
                              </span>
                            </div>

                            <motion.div
                              className="text-gray-400 group-hover:text-rose-400 transition-colors duration-300"
                              whileHover={{ x: direction === 'rtl' ? -5 : 5 }}
                            >
                              {direction === 'rtl' ? '←' : '→'}
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        {featuredGames.length > 1 && (
          <div className="absolute bottom-2 left-1/3 -translate-x-1/2 flex space-x-2">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${currentSlide === index
                  ? "bg-rose-600 w-8"
                  : "bg-white/50 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>

        )}
      </div>
    </div>
  );
}