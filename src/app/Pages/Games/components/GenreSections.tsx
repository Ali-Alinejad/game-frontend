"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/app/zustand/uselangStore";
import { useLanguageFont } from "@/app/hook/langFontUtils";
import { Game } from "@/app/types/Game";

interface GenreSectionsProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

// Genre categories with emojis
const genreCategories = [
  { 
    name: "Action", 
    nameFA: "اکشن",
    emoji: "⚔️", 
    color: "from-red-600 to-orange-600" 
  },
  { 
    name: "RPG", 
    nameFA: "نقش‌آفرینی",
    emoji: "🎭", 
    color: "from-purple-600 to-pink-600" 
  },
  { 
    name: "Strategy", 
    nameFA: "استراتژی",
    emoji: "🧠", 
    color: "from-blue-600 to-cyan-600" 
  },
  { 
    name: "FPS", 
    nameFA: "تیراندازی",
    emoji: "🎯", 
    color: "from-green-600 to-emerald-600" 
  },
  { 
    name: "Adventure", 
    nameFA: "ماجراجویی",
    emoji: "🗺️", 
    color: "from-yellow-600 to-amber-600" 
  },
  { 
    name: "Fighting", 
    nameFA: "مبارزه‌ای",
    emoji: "🥊", 
    color: "from-rose-600 to-red-600" 
  }
];

export default function GenreSections({ games, onGameClick }: GenreSectionsProps) {
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  // Helper function to get game title
  const getGameTitle = (game: Game) => {
    if (typeof game.title === 'object' && game.title !== null) {
      return (game.title as { en: string; fa: string })[lang] || (game.title as { en: string; fa: string }).en;
    }
    return typeof game.title === 'string' ? game.title : 'Game Title';
  };

  // Categorize games by genre
  const categorizedGames = genreCategories.map(category => ({
    ...category,
    games: games.filter(game => game.genres.includes(category.name))
  }));

  return (
    <div className={`space-y-16 ${fontClass}`} dir={direction}>
      {categorizedGames.map((category, categoryIndex) => (
        category.games.length > 0 && (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            {/* Section Header */}
            <div className={`flex items-center justify-between mb-8`}>
              <div className="flex items-center">
                <span className={`text-5xl ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}>
                  {category.emoji}
                </span>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {lang === 'fa' ? `بازی‌های ${category.nameFA}` : `${category.name} Games`}
                  </h2>
                  <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full mt-2`}></div>
                </div>
              </div>
              <motion.button
                className="text-gray-400 hover:text-rose-400 text-sm font-semibold transition-colors duration-200 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang === 'fa' ? 'مشاهده همه' : 'View All'}
                <span className={`${direction === 'rtl' ? 'mr-2' : 'ml-2'}`}>
                  {direction === 'rtl' ? '←' : '→'}
                </span>
              </motion.button>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.games.slice(0, 4).map((game, index) => (
                <motion.div
                  key={game._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: categoryIndex * 0.1 + index * 0.05,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="cursor-pointer group"
                  onClick={() => onGameClick(game)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-800/50 hover:border-rose-500/50 transition-all duration-300">
                    {/* Game Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={game.image}
                        alt={getGameTitle(game)}
                        className="w-full h-64 object-cover transition-transform duration-500"
                        whileHover={{ scale: 1.15 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Discount Badge */}
                      {game.hasDiscount && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
                          className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse"
                        >
                          {lang === 'fa' ? 'کرک' : 'CRACK'}
                        </motion.span>
                      )}
                    </div>

                    {/* Game Info */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.2 }}
                    >
                      <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-rose-300 transition-colors duration-300">
                        {getGameTitle(game)}
                      </h3>
                      
                      <div className={`flex items-center justify-between ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                        {/* Price */}
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-300 text-sm font-semibold">
                            {game.marketPrice === 0 
                              ? (lang === 'fa' ? 'رایگان' : 'Free')
                              : `$${game.marketPrice}`
                            }
                          </span>
                        </div>

                        {/* Platform */}
                        <span className="text-gray-400 text-xs">
                          {game.platform.split(',')[0].trim()}
                        </span>
                      </div>

                      {/* Genre Tags */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {game.genres.slice(0, 2).map((genre, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/10 backdrop-blur-sm text-gray-300 px-2 py-1 rounded-full border border-white/20"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {category.games.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>{lang === 'fa' ? 'بازی‌ای یافت نشد' : 'No games found'}</p>
              </div>
            )}
          </motion.div>
        )
      ))}
    </div>
  );
}