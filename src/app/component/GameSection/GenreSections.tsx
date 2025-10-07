"use client";

import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, User, Joystick } from "lucide-react"; // GamingConsole اضافه شد

import { useLanguageStore } from "@/app/zustand/uselangStore";
import { useLanguageFont } from "@/app/hook/langFontUtils";
import { Game } from "@/app/types/Game";

interface GenreSectionsProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

const genreCategories = [
  // ... (ژانرها بدون تغییر)
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

export default function GenreSections({ games, onGameClick }: GenreSectionsProps) {
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  const getGameTitle = (game: Game) => {
    if (typeof game.title === "object" && game.title !== null) {
      return (game.title as { en: string; fa: string })[lang] || (game.title as { en: string; fa: string }).en;
    }
    return typeof game.title === "string" ? game.title : "Game Title";
  };

  const categorizedGames = useMemo(() => {
    // ... (منطق دسته‌بندی بدون تغییر)
    let categorizedGames = genreCategories.map((category) => {
        let filteredGames: Game[] = [];
        const gamesWithTagsOrGenres = games.filter(game => game.genres || game.tags);
    
        if (category.name === "Remake/Remaster") {
            filteredGames = gamesWithTagsOrGenres.filter(game => 
                (game.genres?.includes("Remake") || game.genres?.includes("Remaster")) || 
                (game.tags?.includes("Remake") || game.tags?.includes("Remaster"))
            );
        } 
        else if (category.name === "Open-World") {
            filteredGames = gamesWithTagsOrGenres.filter(game => 
                (game.genres?.includes("Open-World")) || 
                (game.tags?.includes("Open-World"))
            );
        }
        else {
            filteredGames = gamesWithTagsOrGenres.filter((game) => game.genres?.includes(category.name));
        }
    
        // گرفتن 5 بازی برتر
        return {
          ...category,
          games: filteredGames.slice(0, 5),
        };
      });
      return categorizedGames;
  }, [games]);

  const sectionsToRender = categorizedGames.filter(category => category.games.length > 0);

  const ArrowIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className={`space-y-12 ${fontClass}`} dir={direction}>
      {sectionsToRender.map((category, i) => (
        <React.Fragment key={category.name}>
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            {/* بخش عنوان - بدون تغییر */}
            <div className="flex items-center justify-between mb-6"> 
              <div className="relative pb-2">
                <h2 
                  className="text-xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 uppercase"
                  style={{ textShadow: '0 0 12px rgba(255, 193, 7, 0.7)' }}
                >
                  {lang === "fa" ? category.nameFA : `${category.name} Games`}
                </h2>
              </div>

              {/* دکمه مشاهده همه - بدون تغییر */}
              <motion.a
                href={category.link}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-semibold text-amber-400 hover:text-black bg-amber-600/10 hover:bg-amber-400 transition-all border border-amber-600/50 px-4 py-2 rounded-full uppercase tracking-wider flex items-center space-x-2 rtl:space-x-reverse group"
              >
                <span>{lang === "fa" ? "مشاهده همه" : "View All"}</span>
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: direction === "rtl" ? -4 : 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <ArrowIcon size={18} className="text-amber-400 group-hover:text-black transition-colors" />
                </motion.span>
              </motion.a>
            </div>

            {/* گرید کارت‌ها (نمایش 5 کارت) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"> 
              {category.games.map((game, j) => (
                <motion.div
                  key={game._id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.05 + j * 0.08, duration: 0.6, ease: "easeOut" }}
                  whileHover={{
                    y: -8, // حرکت بیشتر به بالا
                    scale: 1.02, // کمی بزرگ شدن
                    // سایه هاور حرفه‌ای تر: قوی‌تر و شامل رنگ طلایی محو
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => onGameClick(game)}
                  // 👇 کلاس‌های جدید: بک‌گراند تاریک‌تر اما با افکت نورپردازی داخلی
                  className="relative group w-full cursor-pointer overflow-hidden rounded-xl transition-all duration-300 transform-gpu border border-zinc-700/50 hover:border-amber-500/80 bg-zinc-950/70"
                  style={{
                    // سایه داخلی برای ایجاد حس "شیشه‌ای" و عمق در محیط تیره
                    backdropFilter: 'blur(1px)' // بلور ملایم برای ترکیب با بک‌گراند متحرک
                  }}
                >
                  
                  {/* کانتینر تصویر */}
                  <div className="relative aspect-video"> 
                    <motion.img
                      src={game.image}
                      alt={getGameTitle(game)}
                      className="w-full h-90 object-cover transition-transform duration-700 group-hover:scale-110" 
                      style={{ filter: "brightness(0.8) contrast(1.1)" }} // تصویر تیره‌تر برای خوانایی بهتر متن
                    />
                    {/* پوشش گرادیانت تیره‌کننده از پایین */}
                  </div>

                  {/* پاورقی محتوا */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-3 pt-5 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ 
                        // گرادیانت جذاب‌تر: از تیره به مشکی کمی روشن‌تر
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(20, 20, 20, 0) 100%)',
                    }}
                  >
                    
                    {/* عنوان بازی */}
                    <h3 
                      className="text-base font-extrabold text-white mb-1 line-clamp-1 transition-colors tracking-tight relative pb-1 group-hover:text-amber-300"
                    >
                      {getGameTitle(game)}
                    
                    </h3>

                    <div className={`flex flex-col text-sm `}>
                      
                      {/* تاریخ انتشار */}
                      <div className={`flex items-center text-zinc-400  ${direction === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                          <Calendar size={12} className="text-amber-500 flex-shrink-0" />
                          <span className={`text-xs font-medium ${lang ==='fa' && 'mx-1' } `}>
                            {game.releaseDate ? new Date(game.releaseDate).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : (lang === 'fa' ? 'به زودی' : 'TBA')}
                          </span>
                      </div>
                      
                      {/* توسعه‌دهنده و پلتفرم */}
                      <div className={`flex items-center justify-between text-xs mt-1`}>
                          {/* توسعه‌دهنده */}
                          <div className={`flex items-center text-zinc-500 ${direction === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                              <User size={12} className="text-zinc-600 flex-shrink-0" />
                              <span className="text-[10px] tracking-wider uppercase line-clamp-1">
                                {game.developer || (lang === 'fa' ? 'توسعه‌دهنده نامشخص' : 'Unknown Dev')}
                              </span>
                          </div>
                        
                          {/* پلتفرم اصلی - استفاده از آیکون */}
                          <div className={`flex items-center text-zinc-500 ${direction === 'rtl' ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                             <Joystick size={14} className="text-zinc-600 flex-shrink-0" /> 
                            <span className="text-zinc-500 text-[12px] tracking-wider uppercase font-semibold">
                                {game.platform?.split(",")[0].trim()}
                            </span>
                          </div>
                      </div>
                    </div>

                    {/* نشان کرک */}
                    {game.hasDiscount && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                         className={`absolute top-[-8px] ${lang === "fa" ? 'left-2' : 'right-2'} bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg shadow-amber-700/70`}
                      >
                        {lang === "fa" ? "کرک" : "CRACK"}
                      </motion.span>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* جداکننده (Divider) - بدون تغییر */}
          {i < sectionsToRender.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative my-12 h-1 transform origin-center" 
            >
              {/* خط اصلی: شیشه‌ای با درخشش طلایی محو */}
              <div 
                className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent transform -translate-y-1/2 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(255, 193, 7, 0.4), inset 0 0 5px rgba(255, 193, 7, 0.2)',
                  backdropFilter: 'blur(2px)', 
                  WebkitBackdropFilter: 'blur(2px)',
                }}
              />
              
              {/* درخشش مرکز: کمی قوی‌تر برای حس عمق */}
              <div 
                className="absolute inset-x-0 top-1/2 h-2.5 w-2.5 mx-auto rounded-full bg-amber-500 shadow-xl shadow-amber-500/90 transform -translate-y-1/2"
              />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}