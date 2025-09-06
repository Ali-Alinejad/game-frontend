"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@heroui/react";
import { Game } from "../types/Game";

interface GameSliderProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export default function GameSlider({ games, onGameClick }: GameSliderProps) {
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [currentPosition, setCurrentPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // نمایش 10 بازی اول
  const displayGames = games.slice(0, 10);
  const cardWidth = 256; // w-60 = 240px + margins
  const totalWidth = cardWidth * displayGames.length;

  useEffect(() => {
    const startAnimation = () => {
      if (direction === 'right') {
        controls.start({
          x: -totalWidth,
          transition: {
            duration: totalWidth / 50, // سرعت ثابت
            ease: "linear"
          }
        }).then(() => {
          // وقتی به انتها رسید، جهت را عوض کن
          setDirection('left');
          setCurrentPosition(-totalWidth);
        });
      } else {
        controls.start({
          x: 0,
          transition: {
            duration: totalWidth / 50, // سرعت ثابت
            ease: "linear"
          }
        }).then(() => {
          // وقتی به ابتدا رسید، جهت را عوض کن
          setDirection('right');
          setCurrentPosition(0);
        });
      }
    };

    startAnimation();
  }, [direction, controls, totalWidth]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    // انیمیشن را از جایی که متوقف شده ادامه بده
    const startAnimation = () => {
      if (direction === 'right') {
        controls.start({
          x: -totalWidth,
          transition: {
            duration: (totalWidth + currentPosition) / 50,
            ease: "linear"
          }
        }).then(() => {
          setDirection('left');
          setCurrentPosition(-totalWidth);
        });
      } else {
        controls.start({
          x: 0,
          transition: {
            duration: Math.abs(currentPosition) / 50,
            ease: "linear"
          }
        }).then(() => {
          setDirection('right');
          setCurrentPosition(0);
        });
      }
    };

    startAnimation();
  };

  const handleScroll = (scrollDirection: "left" | "right") => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = scrollContainer.offsetWidth;
    scrollContainer.scrollBy({
      left: scrollDirection === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mb-8">
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors duration-200"
      >
        ←
      </button>
      
      <div
        className="overflow-hidden"
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex"
          animate={controls}
          style={{ width: "max-content" }}
        >
          {displayGames.map((game, index) => (
            <motion.div
              key={game._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              className="relative cursor-pointer w-60 flex-shrink-0 mx-4 group"
              onClick={() => onGameClick(game)}
            >
              <Card className="relative overflow-hidden rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-50 object-cover transition-transform duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <h3 className="text-white text-sm font-semibold mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-200">
                    {game.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-300 text-xs">
                      <span>👁️ {index % 10 + 2}</span>
                      {index % 10 === 2 && <span>💬 5</span>}
                    </div>
                    {game.hasDiscount && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-gray-400 text-xs">
                    ${game.marketPrice}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700 transition-colors duration-200"
      >
        →
      </button>
    </div>
  );
}