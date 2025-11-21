"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@heroui/react";
import { Game } from "@/app/types/Game";
import { useLanguageStore } from "@/app/zustand/uselangStore";
import Image from "next/image";

interface GameSliderProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export default function GameSlider({ games, onGameClick }: GameSliderProps) {
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { lang } = useLanguageStore();
  
  // تشخیص موبایل
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // نمایش 10 بازی اول
  const displayGames = games.slice(0, 10);
  const cardWidth = isMobile ? 200 : 256;
  const visibleCards = isMobile ? 2 : 4;
  const maxScroll = (cardWidth * (displayGames.length - visibleCards)) - (isMobile ? 100 : 200);

  useEffect(() => {
    const startAnimation = () => {
      const isRTL = document.dir === 'rtl' || document.documentElement.lang === 'fa';

      if (direction === 'right') {
        controls.start({
          x: isRTL ? maxScroll : -maxScroll,
          transition: {
            duration: isMobile ? 40 : 65, // سریع‌تر در موبایل
            ease: "linear"
          }
        }).then(() => {
          setDirection('left');
        });
      } else {
        controls.start({
          x: 100,
          transition: {
            duration: isMobile ? 40 : 65,
            ease: "linear"
          }
        }).then(() => {
          setDirection('right');
        });
      }
    };

    startAnimation();
  }, [direction, controls, maxScroll, isMobile]);

  return (
    <div className="relative mb-8" dir="ltr">
      <div className="overflow-hidden" ref={scrollRef}>
        <motion.div
          className="flex mb-10"
          animate={controls}
          style={{ width: "max-content" }}
        >
          {displayGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1, // کاهش delay
                duration: 0.5, // کاهش duration
                ease: "easeOut"
              }}
              className={`relative cursor-pointer ${isMobile ? 'w-48' : 'w-60'} flex-shrink-0 ${isMobile ? 'mx-2' : 'mx-4'} group`}
              onClick={() => onGameClick(game)}
            >
              <Card className="relative overflow-hidden rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                <motion.div
                  whileHover={isMobile ? {} : { scale: 1.1 }} // حذف hover در موبایل
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <div className={`relative ${isMobile ? 'h-64' : 'h-80'} w-full`}>
                    <Image
                      src={game.image || '/placeholder.png'}
                      alt={game.title[lang]}
                      fill
                      sizes={isMobile ? "192px" : "240px"}
                      style={{ 
                        objectFit: "cover", 
                        filter: "contrast(1.1)"
                      }}
                      // بهینه‌سازی‌های مهم
                      loading={index < 4 ? "eager" : "lazy"} // 4 تای اول سریع لود
                      priority={index < 4} // اولویت به 4 تای اول
                      quality={isMobile ? 60 : 75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKcSs0WsACT/2Q=="
                    />
                  </div>
                  
                  {/* حذف gradient overlay در موبایل */}
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* gradient ساده برای موبایل */}
                  {isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  )}
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.1 }} // کاهش delay
                >
                  <h3 className={`text-white ${isMobile ? 'text-xs' : 'text-sm'} font-semibold mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-200`}>
                    {game.title[lang]}
                  </h3>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}