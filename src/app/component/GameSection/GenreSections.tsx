"use client";

import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, User } from "lucide-react"; 

import { useLanguageStore } from "@/app/zustand/uselangStore";
import { useLanguageFont } from "@/app/hook/langFontUtils";
import { Game } from "@/app/types/Game";

interface GenreSectionsProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

// 👇👇👇 لیست به‌روز شده ژانرها 👇👇👇
const genreCategories = [
  // ژانرهای اصلی
  { name: "Action", nameFA: "اکشن", link: "/games/action" },
  { name: "Adventure", nameFA: "ماجراجویی", link: "/games/adventure" },
  { name: "Strategy", nameFA: "استراتژی", link: "/games/strategy" },
  { name: "Shooter", nameFA: "تیراندازی (Shooter)", link: "/games/shooter" },
  { name: "Sports", nameFA: "ورزشی", link: "/games/sports" },
  { name: "RPG", nameFA: "نقش‌آفرینی (RPG)", link: "/games/rpg" },
  { name: "Simulation", nameFA: "شبیه‌سازی", link: "/games/simulation" },
  { name: "Fighting", nameFA: "مبارزه‌ای", link: "/games/fighting" },
  { name: "Survival", nameFA: "بقا (Survival)", link: "/games/survival" },
  { name: "Open-World", nameFA: "جهان-باز (Open-World)", link: "/games/open-world" },
  { name: "Remake/Remaster", nameFA: "بازسازی/ریمستر", link: "/games/remake-remaster" },
];
// 👆👆👆 لیست به‌روز شده ژانرها 👆👆👆

export default function GenreSections({ games, onGameClick }: GenreSectionsProps) {
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  const getGameTitle = (game: Game) => {
    if (typeof game.title === "object" && game.title !== null) {
      return (game.title as { en: string; fa: string })[lang] || (game.title as { en: string; fa: string }).en;
    }
    return typeof game.title === "string" ? game.title : "Game Title";
  };

  const categorizedGames = useMemo(() => genreCategories.map((category) => {
    let filteredGames = [];
    
    if (category.name === "Remake/Remaster") {
        // فیلتر کردن بر اساس وجود تگ‌های Remake یا Remaster در لیست ژانرها یا تگ‌های بازی
        filteredGames = games.filter(game => 
            game.genres.includes("Remake") || 
            game.genres.includes("Remaster") || 
            (game.tags && game.tags.includes("Remake")) ||
            (game.tags && game.tags.includes("Remaster"))
        );
    } else {
        // فیلتر معمولی بر اساس ژانر
        filteredGames = games.filter((game) => game.genres.includes(category.name));
    }

    return {
      ...category,
      games: filteredGames,
    };
  }), [games]);

  const sectionsToRender = categorizedGames.filter(category => category.games.length > 0);

  // Determine which arrow icon to use based on direction
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className={`space-y-16 ${fontClass}`} dir={direction}>
      {sectionsToRender.map((category, i) => (
        <React.Fragment key={category.name}>
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            {/* Title Section (High Contrast Gold) */}
            <div className="flex items-center justify-between mb-8"> 
              <div className="relative pb-2">
                <h2 
                  className="text-xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 uppercase"
                  style={{ textShadow: '0 0 8px rgba(255, 193, 7, 0.4)' }}
                >
                  {lang === "fa" ? category.nameFA : `${category.name} Games`}
                </h2>

              </div>

              {/* View All Button - دکمه مشاهده همه */}
              <motion.a
                href={category.link}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-semibold text-amber-400 hover:text-black bg-amber-600/10 hover:bg-amber-400 transition-all border border-amber-600/50 px-4 py-2 rounded-full uppercase tracking-wider flex items-center space-x-2 rtl:space-x-reverse group"
              >
                <span>{lang === "fa" ? "مشاهده همه" : "View All"}</span>
                {/* Animated Arrow Icon */}
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: direction === "rtl" ? -4 : 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <ArrowIcon size={18} className="text-amber-400 group-hover:text-black transition-colors" />
                </motion.span>
              </motion.a>
            </div>

            {/* Games Grid - کارت‌ها */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"> 
              {category.games.slice(0, 4).map((game, j) => (
                <motion.div
                  key={game._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.05 + j * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 50px rgba(255, 215, 0, 0.15), 0 0 20px rgba(255, 193, 7, 0.5)",
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => onGameClick(game)}
                  className="relative group w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-950/80 transition-all duration-300 transform-gpu border border-zinc-800/70 hover:border-amber-600/50"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.05), 0 0 5px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  
                  {/* Image Container */}
                  <div className="relative aspect-video"> 
                    <motion.img
                      src={game.image}
                      alt={getGameTitle(game)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      style={{ filter: "brightness(0.6) contrast(1.1)" }} 
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  </div>

                  {/* Content Footer - Dark and Glossy Look */}
                  <div className="p-4 pt-3 bg-zinc-900/90 backdrop-blur-sm">
                    {/* Game Title */}
                    <h3 
                      className="text-lg font-extrabold text-white mb-2 line-clamp-1 transition-colors tracking-tight relative pb-1 group-hover:text-amber-300"
                    >
                      {getGameTitle(game)}
                      {/* Animated Gold Underline on Hover */}
                      <span 
                          className="absolute bottom-0 left-0 h-[2px] w-full bg-amber-500 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                      ></span>
                    </h3>

                    <div className={`flex flex-col text-sm space-y-1`}>
                      
                      {/* 1. Release Date */}
                      <div className={`flex items-center text-zinc-400 ${direction === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                          <Calendar size={14} className="text-amber-600 flex-shrink-0" />
                          <span className="text-xs font-medium">
                            {game.releaseDate ? new Date(game.releaseDate).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : (lang === 'fa' ? 'به زودی' : 'TBA')}
                          </span>
                      </div>
                      
                      {/* 2. Platform / Developer */}
                      <div className={`flex items-center justify-between text-xs`}>
                          {/* Developer */}
                          <div className={`flex items-center text-zinc-500 ${direction === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                              <User size={14} className="text-zinc-600 flex-shrink-0" />
                              <span className="text-xs tracking-wider uppercase line-clamp-1">
                                {game.developer || (lang === 'fa' ? 'توسعه‌دهنده نامشخص' : 'Unknown Dev')}
                              </span>
                          </div>
                        
                          {/* Main Platform (Right/Left) */}
                          <span className="text-zinc-500 text-xs tracking-wider uppercase font-semibold">
                            {game.platform.split(",")[0].trim()}
                          </span>
                      </div>
                    </div>

                    {/* Crack badge (Gold) */}
                    {game.hasDiscount && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-[-10px] right-3 bg-amber-400 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg shadow-amber-700/70"
                      >
                        {lang === "fa" ? "کرک" : "CRACK"}
                      </motion.span>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* جداکننده (Divider) جذاب بین سکشن‌ها */}
          {i < sectionsToRender.length - 1 && (
            <motion.div
              initial={{ width: '50%', opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1 }}
              className="relative my-16 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"
            >
              <div 
                // نقطه مرکزی طلایی
                className="absolute inset-x-0 top-1/2 h-2 w-2 mx-auto rounded-full bg-amber-500 shadow-md shadow-amber-500/80 transform -translate-y-1/2"
              />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}