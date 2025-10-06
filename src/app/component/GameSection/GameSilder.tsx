"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@heroui/react";
import { Game } from "../../../types/Game";

interface GameSliderProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export default function GameSlider({ games, onGameClick }: GameSliderProps) {
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // نمایش 10 بازی اول
  const displayGames = games.slice(0, 10);
  const cardWidth = 256; // w-60 = 240px + margins
  const visibleCards = 4; // تعداد کارت‌های قابل مشاهده
  const maxScroll = (cardWidth * (displayGames.length - visibleCards)) - 200; // فاصله برای اسکرول

  useEffect(() => {
    if (isPaused) return;

    const startAnimation = () => {
      // تشخیص جهت زبان
      const isRTL = document.dir === 'rtl' || document.documentElement.lang === 'fa';

      if (direction === 'right') {
        controls.start({
          x: isRTL ? maxScroll : -maxScroll, // برای فارسی مثبت، برای انگلیسی منفی
          transition: {
            duration: 65,
            ease: "linear"
          }
        }).then(() => {
          setDirection('left');
        });
      } else {
        controls.start({
          x: 100,
          transition: {
            duration: 65,
            ease: "linear"
          }
        }).then(() => {
          setDirection('right');
        });
      }
    };

    startAnimation();
  }, [direction, controls, maxScroll, isPaused]);



  return (
    <div className="relative mb-8" dir="ltr">


      <div
        className="overflow-hidden"
        ref={scrollRef}
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
                delay: index * 0.3,
                duration: 2.5,
                ease: "anticipate"
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
                    <div className="mt-2 text-gray-400 text-xs">
                      ${game.marketPrice}
                    </div>
                    {game.hasDiscount && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Crack
                      </span>
                    )}
                  </div>

                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>


    </div>
  );
}