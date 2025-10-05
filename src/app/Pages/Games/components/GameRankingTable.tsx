"use client";

import { Game } from "@/app/types/Game";
import { motion, AnimatePresence } from "framer-motion";

interface GameRankingTableProps {
  games: Game[];
  activeTab: 'top' | 'popular' | 'newest';
  setActiveTab: (tab: 'top' | 'popular' | 'newest') => void;
  tabLabels: Record<string, string>;
  onGameClick: (game: Game) => void;
  getGameTitle: (game: Game) => string;
  lang: string;
  direction: string;
}

export default function GameRankingTable({ 
  games, 
  activeTab, 
  setActiveTab, 
  tabLabels, 
  onGameClick, 
  getGameTitle,
  lang,
  direction 
}: GameRankingTableProps) {
  
  const tabIcons = {
    top: '♕', 
    popular: '⚜', 
    newest: '✦', 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-full   p-5  shadow-2xl shadow-black/80 backdrop-blur-xl"
    >
      {/* Refined Header */}
      <h2 className="text-xl font-light text-center text-amber-400 mb-4 pb-3 border-b border-amber-500/20 tracking-wider">
        {lang === 'fa' ? 'فهرست ویژه' : 'Exclusive Rankings'}
      </h2>
 <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_rgba(252,211,77,0.7)]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    />
      {/* Subtle Tab Buttons - Segmented Minimalism */}
      <div className="flex mb-6 space-x-1 p-0.5 bg-black/50 rounded-xl border border-white/10">
        {(Object.keys(tabLabels) as Array<'top' | 'popular' | 'newest'>).map((tab, index) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative flex-1 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 overflow-hidden text-center ${
              activeTab === tab
                ? 'text-black'
                : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Animated Background for Active Tab (Gradient Gold) */}
            {activeTab === tab && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 shadow-lg shadow-amber-500/40"
                layoutId="activeGoldTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Tab Content */}
            <span className="relative z-10 flex items-center justify-center" dir={direction}>
              <span className={`text-lg ${activeTab === tab ? 'text-black' : 'text-amber-400/80'}`}>{tabIcons[tab]}</span>
              <span className={direction === 'rtl' ? 'mr-2' : 'ml-2'}>
                {tabLabels[tab]}
              </span>
            </span>

          </motion.button>
        ))}
      </div>

      {/* Games List - Elegant Scrollable Data */}
      <div className="space-y-3 overflow-y-auto max-h-[350px] pr-2 scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-transparent">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            {games.map((game, index) => (
              <motion.div
                key={game._id || index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => onGameClick(game)}
                className="group cursor-pointer relative p-3 transition-all duration-300 rounded-xl hover:bg-white/5 border border-transparent hover:border-amber-500/30"
                whileHover={{ x: direction === 'rtl' ? -5 : 5 }}
              >
                <div className="relative flex items-center space-x-4" dir={direction === 'rtl' ? 'rtl' : 'ltr'}>
                  
                  {/* Rank Display - Medal/Number */}
                  <motion.div 
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center font-serif  ${
                      'text-gray-600 group-hover:text-amber-300'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index < 3 ? `${index + 1}` : index + 1}
                  </motion.div>

                  {/* Compact Game Image */}
                  <div className="flex-shrink-0 w-16 h-10 rounded-md overflow-hidden ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-amber-500 transition-all duration-300">
                    <motion.img
                      src={game.image}
                      alt={getGameTitle(game)}
                      className="w-full h-full object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>

                  {/* Game Info */}
                  <div className="flex-1 min-w-0" dir={direction}>
                    <h3 className="text-white font-medium text-base group-hover:text-amber-300 transition-colors duration-300 truncate tracking-tight">
                      {getGameTitle(game)}
                    </h3>
                    <div className="flex items-center space-x-2 mt-0.5 text-xs text-gray-500">
                      <span className="text-amber-500">★ {(Math.random() * 2 + 8).toFixed(1)}</span>
                      <span>•</span>
                      <span>{Math.floor(Math.random() * 50 + 5)}K VIEWS</span>
                    </div>
                  </div>

                  {/* Icon Button */}
                  <motion.div
                    className="flex-shrink-0 text-xl text-gray-700 group-hover:text-amber-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {direction === 'rtl' ? '‹' : '›'}
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}