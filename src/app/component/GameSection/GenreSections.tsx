"use client";

import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react"; 

import { useLanguageStore } from "@/app/zustand/uselangStore";
import { useLanguageFont } from "@/app/hook/langFontUtils";
import { Game } from "@/app/types/Game";

interface GenreSectionsProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

// All genre categories with dedicated links
const genreCategories = [
  { name: "Action", nameFA: "اکشن", link: "/games/action" },
  { name: "RPG", nameFA: "نقش‌آفرینی", link: "/games/rpg" },
  { name: "Strategy", nameFA: "استراتژی", link: "/games/strategy" },
  { name: "FPS", nameFA: "تیراندازی", link: "/games/fps" },
  { name: "Adventure", nameFA: "ماجراجویی", link: "/games/adventure" },
  { name: "Fighting", nameFA: "مبارزه‌ای", link: "/games/fighting" },
  { name: "Simulation", nameFA: "شبیه‌سازی", link: "/games/simulation" },
  { name: "Sports", nameFA: "ورزشی", link: "/games/sports" },
  { name: "Racing", nameFA: "مسابقه‌ای", link: "/games/racing" },
];

export default function GenreSections({ games, onGameClick }: GenreSectionsProps) {
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  const getGameTitle = (game: Game) => {
    if (typeof game.title === "object" && game.title !== null) {
      return (game.title as { en: string; fa: string })[lang] || (game.title as { en: string; fa: string }).en;
    }
    return typeof game.title === "string" ? game.title : "Game Title";
  };

  const categorizedGames = useMemo(() => genreCategories.map((category) => ({
    ...category,
    games: games.filter((game) => game.genres.includes(category.name)),
  })), [games]);

  const sectionsToRender = categorizedGames.filter(category => category.games.length > 0);

  // Determine which arrow icon to use based on direction
  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className={`space-y-0 ${fontClass}`} dir={direction}>
      {sectionsToRender.map((category, i) => (
        <React.Fragment key={category.name}>
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pb-20" // Reduced bottom padding, using separator margin instead
          >
            {/* Title Section (High Contrast Gold) - UI/UX FIX: Larger text, better spacing */}
            <div className="flex items-center justify-between mb-8"> 
              <div className="relative pb-2">
                <h2 
                  // UI/UX FIX: Increased font size for prominence (3xl on mobile, 4xl on desktop)
                  className="text-3xl md:text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 uppercase"
                  style={{ textShadow: '0 0 5px rgba(255, 193, 7, 0.3)' }} // Soft glow for distinction
                >
                  {lang === "fa" ? `بازی‌های ${category.nameFA}` : `${category.name} Games`}
                </h2>

              </div>

              {/* View All Button */}
              <motion.a
                href={category.link}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-semibold text-amber-400 hover:text-white transition-all border border-amber-600/50 hover:border-amber-400 px-4 py-2 rounded-lg uppercase tracking-wider flex items-center space-x-2 rtl:space-x-reverse "
              >
                <span>{lang === "fa" ? "مشاهده همه" : "View All"}</span>
                {/* Animated Arrow Icon */}
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: direction === "rtl" ? -4 : 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <ArrowIcon size={18} className="text-amber-400 group-hover:text-white transition-colors" />
                </motion.span>
              </motion.a>
            </div>

            {/* Games Grid - UI/UX FIX: Removed fixed width, adjusted grid and gap */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"> {/* Increased gap for separation */}
              {category.games.slice(0, 5).map((game, j) => (
                <motion.div
                  key={game._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + j * 0.05, duration: 0.5 }}
                  whileHover={{
                    y: -6, 
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.7), 0 0 18px rgba(255, 193, 7, 0.3)", // Stronger hover shadow
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => onGameClick(game)}
                  // UI/UX FIX: Removed fixed w-60
                  className="relative group w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-950/80 transition-all duration-300 transform-gpu"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.05), 0 0 5px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  
                  {/* Image Container - UI/UX FIX: Adjusted height for better aspect ratio */}
                  <div className="relative h-48 sm:h-56"> 
                    <motion.img
                      src={game.image}
                      alt={getGameTitle(game)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      style={{ filter: "brightness(0.7) contrast(1.1)" }} 
                    />
                    {/* Strong Gradient Overlay for Dark Look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Footer - Dark and Glossy Look */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 pt-1 border-t border-zinc-800 bg-zinc-900/90 backdrop-blur-sm">
                    {/* Game Title */}
                    <h3 
                      className="text-base font-extrabold text-white mb-2 line-clamp-1 transition-colors tracking-tight relative pb-1"
                    >
                      {getGameTitle(game)}
                      {/* Animated Gold Underline on Hover */}
                      <span 
                          className="absolute bottom-0 left-0 h-[2px] w-full bg-amber-500 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                      ></span>
                    </h3>

                    {/* Price and Platform */}
                    <div className={`flex items-center justify-between text-sm`}>
                      <span className="text-amber-400 font-bold text-base">
                        {game.marketPrice === 0
                          ? lang === "fa"
                            ? "رایگان"
                            : "FREE"
                          : `$${game.marketPrice}`}
                      </span>
                      <span className="text-zinc-600 text-xs tracking-wider uppercase">
                        {game.platform.split(",")[0].trim()}
                      </span>
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

                    {/* Genre Tag (Small and Subtle, Bottom Left) */}
                    {game.genres.slice(0, 1).map((genre, k) => (
                        <span
                          key={k}
                          className="absolute bottom-3 left-3 text-[10px] text-zinc-500 font-medium tracking-wider"
                        >
                          {genre}
                        </span>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

         
        </React.Fragment>
      ))}
    </div>
  );
}