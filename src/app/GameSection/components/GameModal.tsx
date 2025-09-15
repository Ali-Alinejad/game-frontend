// component/GameModal.tsx
"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Game } from '../../types/Game';
import { useLanguageStore } from '../../zustand/uselangStore';
import { useLanguageFont } from '../../hook/langFontUtils';
import { Button } from '@heroui/react';
import { X, Calendar, DollarSign, Star, HardDrive } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={twMerge(`w-full max-w-4xl p-6 rounded-3xl shadow-2xl relative`, `bg-zinc-900/90 border border-rose-800/30`, fontClass)}
            dir={direction}
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <Button
              isIconOnly
              variant="ghost"
              className="absolute top-4 right-4 text-gray-400 hover:text-rose-400 transition-colors z-20"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-rose-800/30">
                <img src={game.image} alt={getGameTitle(game)} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 mb-4 leading-tight">
                  {getGameTitle(game)}
                </h2>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {getGameDescription(game)}
                </p>

                <div className="grid grid-cols-2 gap-4 text-gray-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-rose-500" />
                    <span>{game.releaseDate ? new Date(game.releaseDate).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US') : 'N/A'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-rose-500" />
                    <span>{game.platform}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-rose-500" />
                    <span>${game.marketPrice}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-rose-500" />
                    <span>{(Math.random() * 2 + 8).toFixed(1)}/10</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {game.genres.map((genre, index) => (
                    <span key={index} className="bg-rose-600/20 text-rose-400 text-xs font-semibold px-3 py-1 rounded-full border border-rose-500/30">
                      {genre}
                    </span>
                  ))}
                </div>

                <Button
                  variant="solid"
                  className="mt-8 w-full bg-gradient-to-r from-rose-600 to-red-500 text-white font-bold rounded-full py-3 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => console.log('Download game:', game.title)}
                >
                  {lang === 'fa' ? 'دانلود بازی' : 'Download Game'}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameModal;