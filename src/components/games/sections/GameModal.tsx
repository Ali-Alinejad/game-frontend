"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/react';
import { X, Calendar, DollarSign, Star, HardDrive, Download } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { Game } from '@/app/types/Game';
import { useLanguageFont } from '@/app/hook/langFontUtils';
import Link from 'next/link';

interface GameModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  // --- Utility Functions (Keep as is) ---
  const getGameTitle = (game: Game) => {
    return typeof game.title === 'string'
      ? game.title
      : (game.title as { en: string; fa: string })[lang] || (game.title as { en: string; fa: string }).en;
  };

  const getGameDescription = (game: Game) => {
    if (game.description) {
      if (typeof game.description === 'object') {
        const langKey = lang === 'fa' ? 'persian' : 'english';
        // Note: Assuming the description keys are 'persian' and 'english' based on your logic
        return (game.description as any)[langKey] || (game.description as any).english;
      }
      return game.description;
    }
    return lang === 'fa' ? "توضیحات بازی در دسترس نیست." : "Game description not available.";
  };
  // ----------------------------------------

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/90" // Enhanced dark backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className={twMerge(
              `w-full max-w-5xl rounded-3xl shadow-2xl relative overflow-hidden`,
              // GOLD/DARK THEME: Changed gradient and border
              `bg-gradient-to-br from-gray-900 via-yellow-900/10 to-gray-900`, 
              `border border-yellow-500/30`,
              fontClass
            )}
            dir={direction}
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              isIconOnly
              variant="ghost"
              className={`absolute top-4 ${direction === 'rtl' ? 'left-4' : 'right-4'} text-gray-400 hover:text-amber-400  transition-colors z-20 rounded-full`}
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </Button>

      

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Left Side - Image */}
              <motion.div
                initial={{ x: direction === 'rtl' ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                // GOLD/DARK THEME: Changed border color
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/30 group"
              >
                <img
                  src={game.image}
                  alt={getGameTitle(game)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badges on Image */}
                <div className={`absolute top-4 ${direction === 'rtl' ? 'left-4' : 'right-4'} flex flex-col gap-2`}>
                  {game.hasDiscount && (
                    <motion.span
                      initial={{ scale: 0, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4, type: "spring" }}
                      // GOLD/DARK THEME: Kept red for 'CRACK/Discount' for contrast
                      className="overflow-hidden bg-gray-500/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                    >
                      {lang === 'fa' ? '🔥 کرک' : '🔥 CRACK'}
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {/* Right Side - Details */}
              <motion.div
                initial={{ x: direction === 'rtl' ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col justify-center"
              >
                {/* Title */}
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  // GOLD/DARK THEME: Title gradient changed to gold/yellow/orange
                  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 mb-4 leading-tight"
                >
                  {getGameTitle(game)}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed"
                >
                  {getGameDescription(game)}
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 mb-6"
                >
                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10`}>
                    {/* GOLD/DARK THEME: Icon color changed */}
                    <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'تاریخ انتشار' : 'Release Date'}</p>
                      <p className="text-sm font-semibold text-white">
                        {game.releaseDate ? new Date(game.releaseDate).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US') : 'N/A'}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10`}>
                    {/* GOLD/DARK THEME: Icon color changed */}
                    <HardDrive className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'پلتفرم' : 'Platform'}</p>
                      <p className="text-sm font-semibold text-white">{game.platform}</p>
                    </div>
                  </div>

                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10`}>
                    {/* GOLD/DARK THEME: Icon color changed */}
                    <DollarSign className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'قیمت' : 'Price'}</p>
                      <p className="text-sm font-semibold text-white">
                        {game.marketPrice === 0 ? (lang === 'fa' ? 'رایگان' : 'Free') : `$${game.marketPrice}`}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10`}>
                    {/* GOLD/DARK THEME: Icon color changed */}
                    <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'امتیاز' : 'Rating'}</p>
                      {/* Note: This still uses Math.random(), which will cause a hydration error if rendered on SSR.
                       As discussed previously, for production, this should be fetched or calculated in useEffect. */}
                      <p className="text-sm font-semibold text-white">{(Math.random() * 2 + 8).toFixed(1)}/10</p>
                    </div>
                  </div>
                </motion.div>

                {/* Genres */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mb-6"
                >
                  <p className="text-xs text-gray-400 mb-3">{lang === 'fa' ? 'ژانرها' : 'GENRES'}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.genres.map((genre, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        // GOLD/DARK THEME: Genre badge changed to gold/amber
                        className="bg-amber-600/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full border border-amber-500/30 hover:bg-amber-600/30 transition-colors"
                      >
                        {genre}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Download Button */}
                 <Link
                   href={`/Games/${game.id}`} 
                 onClick={onClose} >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    variant="solid"
                    // GOLD/DARK THEME: Button gradient changed to gold/yellow/orange
                    className={`w-full border border-amber-500 text-white font-bold rounded-2xl py-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                    onClick={() => console.log('Download game:', getGameTitle(game))}
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-lg">{lang === 'fa' ? 'دانلود بازی' : 'Download Game'}</span>
                  </Button>
                </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameModal;