"use client";

import { motion } from "framer-motion";
import { Game } from "../types/Game";
import { useState, useEffect } from "react";

interface MainNewsGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export default function MainNewsGrid({ games, onGameClick }: MainNewsGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides every 8 seconds
  useEffect(() => {
    if (games.length > 3) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.min(games.length, 5));
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [games.length]);

  if (games.length < 2) return null;

  const featuredGames = games.slice(0, 5);
  const sideGames = games.slice(1, 4);

  return (
    <div className="relative">
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
                alt={featuredGames[currentSlide]?.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-4"
                >
                  {/* Badge */}
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-rose-600 text-white text-sm font-semibold rounded-full">
                      FEATURED
                    </span>
                    {featuredGames[currentSlide]?.hasDiscount && (
                      <span className="px-3 py-1  text-rose-500 text-sm font-semibold rounded-full animate-pulse">
                        Crack
                      </span>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-rose-300 transition-colors duration-300">
                    {featuredGames[currentSlide]?.title}
                  </h1>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                    {featuredGames[currentSlide]?.description?.english || "Experience the ultimate gaming adventure with stunning visuals and immersive gameplay that will keep you engaged for hours."}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-gray-300">
                    {/* <div className="flex items-center space-x-2">
                      <span className="text-xl">👁️</span>
                      <span className="font-medium">{Math.floor(Math.random() * 50) + 10}K views</span>
                    </div> */}
                    {/* <div className="flex items-center space-x-2">
                      <span className="text-xl">💬</span>
                      <span className="font-medium">{Math.floor(Math.random() * 200) + 50} comments</span>
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">⭐</span>
                      <span className="font-medium">{(Math.random() * 2 + 8).toFixed(1)}/10</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                 
                </motion.div>
              </div>
              
              {/* Play Button Overlay */}
              {/* <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
          
          {/* Side Games */}
          <div className="space-y-4">
            {sideGames.map((game, index) => (
              <motion.div
                key={game._id || index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="relative group cursor-pointer border-b-1 my-5 border-rose-950 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300"
                onClick={() => onGameClick(game)}
              >
                <div className="flex items-center p-4 space-x-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={game.image}
                      alt={typeof game.title === 'object' 
                        ? game.title || 'Game Image'
                        : game.title || 'Game Image'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {game.hasDiscount && (
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg group-hover:text-rose-300 transition-colors duration-300 truncate">
                      {game.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <span>👁️</span>
                        <span>{Math.floor(Math.random() * 20) + 5}K</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{Math.floor(Math.random() * 100) + 20}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Trending Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-gradient-to-r from-rose-950 to-black-600/10 rounded-xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">🔥 Trending Now</h3>
              <p className="text-purple-100 text-sm">
                Discover the hottest games and latest gaming news that everyone's talking about!
              </p>
              <button className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-all duration-300">
                Explore Trends
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        {featuredGames.length > 1 && (
          <div className="absolute bottom-4 left-8 flex space-x-2">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-rose-800 w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}