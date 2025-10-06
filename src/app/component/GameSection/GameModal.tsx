// component/GameModal.tsx
"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/react';
import { X, Calendar, DollarSign, Star, HardDrive, Download } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { Game } from '@/app/types/Game';
import { useLanguageFont } from '@/app/hook/langFontUtils';

interface GameModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  const getGameTitle = (game: Game) => {
    return typeof game.title === 'string'
      ? game.title
      : (game.title as { en: string; fa: string })[lang] || (game.title as { en: string; fa: string }).en;
  };

  const getGameDescription = (game: Game) => {
    if (game.description) {
      if (typeof game.description === 'object') {
        const langKey = lang === 'fa' ? 'persian' : 'english';
        return game.description[langKey] || game.description.english;
      }
      return game.description;
    }
    return lang === 'fa' ? "توضیحات بازی در دسترس نیست." : "Game description not available.";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className={twMerge(
              `w-full max-w-5xl rounded-3xl shadow-2xl relative overflow-hidden`,
              `bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900`,
              `border border-purple-500/30`,
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
              className={`absolute top-4 ${direction === 'rtl' ? 'left-4' : 'right-4'} text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 rounded-full`}
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-full h-full"
                style={{
                  backgroundImage: "radial-gradient(circle, #8b44c6 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Left Side - Image */}
              <motion.div
                initial={{ x: direction === 'rtl' ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 group"
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
                      className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
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
                  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4 leading-tight"
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
                    <Calendar className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'تاریخ انتشار' : 'Release Date'}</p>
                      <p className="text-sm font-semibold text-white">
                        {game.releaseDate ? new Date(game.releaseDate).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US') : 'N/A'}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10`}>
                    <HardDrive className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'پلتفرم' : 'Platform'}</p>
                      <p className="text-sm font-semibold text-white">{game.platform}</p>
                    </div>
                  </div>

                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10`}>
                    <DollarSign className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'قیمت' : 'Price'}</p>
                      <p className="text-sm font-semibold text-white">
                        {game.marketPrice === 0 ? (lang === 'fa' ? 'رایگان' : 'Free') : `$${game.marketPrice}`}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10`}>
                    <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400">{lang === 'fa' ? 'امتیاز' : 'Rating'}</p>
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
                        className="bg-purple-600/20 text-purple-300 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                      >
                        {genre}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Download Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    variant="solid"
                    className={`w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold rounded-2xl py-6 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                    onClick={() => console.log('Download game:', game.title)}
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-lg">{lang === 'fa' ? 'دانلود بازی' : 'Download Game'}</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameModal;