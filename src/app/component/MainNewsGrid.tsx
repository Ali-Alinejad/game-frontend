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
      }, 5000);
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
                    "radial-gradient(circle at 10% 40%, rgba(239, 28, 108, 0.2)  0%, transparent 60%)",

      
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-xl flex items-center">
                
                  Gaming Hub
                </h3>
               
              </div>
              
              <p className="text-gray-200 text-sm leading-relaxed mb-2">
                Discover trending games, exclusive content, and join our vibrant gaming community!
              </p>
              
              <div className="flex flex-wrap gap-2 mb-2">
                {['Reviews', 'News', 'Updates', 'Community'].map((tag, index) => (
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
                className="w-full py-2 border-1 border-rose-200/50  text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Explore Hub
                  <motion.span
                    className="ml-2 mb-1"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>
             <div className="lg:col-span-4 space-y-6">
          {/* News Header */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-end"
          >
            <h2 className="text-xl font-bold text-white flex items-center">
             جدید ترین اخبار دنیای گیم
              <span className="ml-3 text-3xl">📰</span>
            </h2>
          </motion.div>

          {/* News Items */}
          <div className="space-y-4">
            {sideGames.map((game, index) => (
              <motion.div
                key={game._id || index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => onGameClick(game)}
              >
                <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-rose-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10">
                  <div className="flex p-2">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={game.image}
                        alt={typeof game.title === 'object' 
                          ? game.title || 'Game Image'
                          : game.title || 'Game Image'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                     
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 ml-4 min-w-0">
                      <h3 className="text-white font-semibold text-lg group-hover:text-rose-300 transition-colors duration-300 line-clamp-2">
                        {game.title}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <span className="text-blue-400">👁️</span>
                            <span>{Math.floor(Math.random() * 20) + 5}K</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <span className="text-green-400">💬</span>
                            <span>{Math.floor(Math.random() * 100) + 20}</span>
                          </span>
                        </div>
                        
                        <motion.div 
                          className="text-gray-400 group-hover:text-rose-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gaming Hub Section */}
        
        </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}