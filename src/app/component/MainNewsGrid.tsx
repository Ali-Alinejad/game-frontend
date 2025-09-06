"use client";

import { motion } from "framer-motion";
import { Game } from "../types/Game";

interface MainNewsGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export default function MainNewsGrid({ games, onGameClick }: MainNewsGridProps) {
  if (games.length < 2) return null;

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {/* اولین بازی */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className="relative cursor-pointer group"
        onClick={() => onGameClick(games[0])}
      >
        <div className="relative overflow-hidden rounded-lg">
          <motion.img
            src={games[0]?.image}
            alt={games[0]?.title}
            className="w-full h-90 object-cover transition-all duration-700"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-4 left-4 right-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {games[0]?.title}
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  👁️ 10
                </motion.span>
              </div>
              {games[0]?.hasDiscount && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 500 }}
                  className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                >
                  Sale
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* دومین بازی */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.1,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className="relative cursor-pointer group"
        onClick={() => onGameClick(games[1])}
      >
        <div className="relative overflow-hidden rounded-lg">
          <motion.img
            src={games[1]?.image}
            alt={games[1]?.title}
            className="w-full h-90 object-cover transition-all duration-700"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-4 left-4 right-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {games[1]?.title}
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  👁️ 6
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  💬 21
                </motion.span>
              </div>
              {games[1]?.hasDiscount && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 500 }}
                  className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                >
                  Sale
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}