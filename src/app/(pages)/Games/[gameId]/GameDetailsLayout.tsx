"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Button } from '@heroui/react';
import { Download, Calendar, HardDrive, DollarSign, Star, Cpu, MemoryStick, Image, Joystick } from 'lucide-react';

// 🔴 حتماً تایپ Game را از مسیر صحیح وارد کنید
import { Game } from '@/app/types/Game'; 
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { useLanguageFont } from '@/app/hook/langFontUtils';

interface GameDetailsLayoutProps {
  game: Game;
}

const GameDetailsLayout: React.FC<GameDetailsLayoutProps> = ({ game }) => {
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  // --- Utility Functions ---
  const getGameTitle = (game: Game) => {
    return typeof game.title === 'string'
      ? game.title
      : (game.title as { en: string; fa: string })[lang] || (game.title as { en: string; fa: string }).en;
  };

  const getGameDescription = (game: Game) => {
    if (game.description) {
      if (typeof game.description === 'object') {
        // 💡 فرض می‌کنیم کلیدهای توضیحات شما 'persian' و 'english' هستند
        const langKey = lang === 'fa' ? 'persian' : 'english';
        return (game.description as any)[langKey] || (game.description as any).english;
      }
      return game.description;
    }
    return lang === 'fa' ? "توضیحات مفصل بازی در دسترس نیست." : "Detailed game description not available.";
  };
  // -------------------------

  // 🔴 داده‌های ساختگی برای بخش سیستم مورد نیاز
  const systemRequirements = {
    os: "Windows 10 64-bit",
    cpu: "Intel Core i5-8400 or AMD Ryzen 5 2600",
    ram: "16 GB RAM",
    gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
    storage: "150 GB available space (SSD Recommended)",
  };

  const downloads = [
    { title: lang === 'fa' ? 'لینک مستقیم (نیم بها)' : 'Direct Link (Half-Price)', url: "#download-link-1" },
    { title: lang === 'fa' ? 'تورنت (Torrent)' : 'Torrent Link', url: "#download-link-2" },
  ];
  // ----------------------------------------------------------------------


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (
    <motion.div 
      className={twMerge(`min-h-screen p-4 md:p-8 lg:p-12 ${fontClass} text-white`, direction === 'rtl' ? 'text-right' : 'text-left')}
      dir={direction}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
        {/* ----------------------------------------------------------- */}
        {/* هدر و تصویر اصلی (Header & Hero Image) */}
        {/* ----------------------------------------------------------- */}
        <motion.div 
            className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl border border-yellow-500/40 mb-12"
            variants={itemVariants}
        >
            <img
                src={game.image}
                alt={getGameTitle(game)}
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <motion.div 
                className={`absolute bottom-0 p-6 md:p-8 lg:p-10 ${direction === 'rtl' ? 'right-0' : 'left-0'}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 leading-tight mb-2">
                    {getGameTitle(game)}
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl">{lang === 'fa' ? 'صفحه رسمی جزئیات، مشخصات و دانلود' : 'Official Details, Specs, and Download Page'}</p>
            </motion.div>
        </motion.div>

        {/* ----------------------------------------------------------- */}
        {/* بخش اصلی (Main Content Grid) */}
        {/* ----------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* ستون اصلی: توضیحات و گالری */}
            <div className="lg:col-span-2">
                
                {/* توضیحات کامل */}
                <motion.section className="mb-10" variants={itemVariants}>
                    <h2 className="text-3xl font-bold mb-4 border-b border-amber-500/40 pb-2">
                        {lang === 'fa' ? 'درباره بازی' : 'About the Game'}
                    </h2>
                    <p className="text-gray-300 leading-loose whitespace-pre-wrap">
                        {getGameDescription(game)}
                        {/* افزودن توضیحات ساختگی بیشتر برای پر کردن صفحه */}
                        <br/><br/>
                        {lang === 'fa' ? 
                            "این بازی که توسط تیم توسعه ما شبیه‌سازی شده، یک تجربه بی‌نظیر از ژانر خود را ارائه می‌دهد. گیم‌پلی عمیق، داستان‌سرایی غنی و گرافیک خیره‌کننده از ویژگی‌های اصلی این عنوان هستند. برای تجربه‌ی کامل، حتماً بخش سیستم مورد نیاز را بررسی کنید و از آخرین نسخه درایورهای خود استفاده نمایید." : 
                            "This simulated game offers an unparalleled experience in its genre. Deep gameplay, rich storytelling, and stunning graphics are the main features of this title. For the full experience, be sure to check the system requirements section and use the latest version of your drivers."
                        }
                    </p>
                </motion.section>

                {/* گالری تصاویر (ساختگی) */}
                <motion.section className="mb-10" variants={itemVariants}>
                    <h2 className="text-3xl font-bold mb-4 border-b border-amber-500/40 pb-2 flex items-center">
                        <Image className="w-6 h-6 mr-3 text-amber-500 rtl:ml-3" />
                        {lang === 'fa' ? 'گالری و تریلرها' : 'Gallery & Trailers'}
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* تصاویر ساختگی */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-video bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-700 hover:border-amber-500 transition-colors cursor-pointer">
                                <span className="text-gray-500 text-sm">
                                    {lang === 'fa' ? `تصویر/تریلر ساختگی ${i}` : `Placeholder Image/Trailer ${i}`}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>

            {/* ستون کناری: مشخصات و دکمه دانلود */}
            <div className="lg:col-span-1 space-y-10">
                
                {/* باکس دانلود نهایی */}
                <motion.section 
                    className="p-6 rounded-2xl bg-zinc-900/60 border border-amber-500/50 shadow-xl"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">{lang === 'fa' ? 'لینک‌های دانلود' : 'Download Links'}</h3>
                    <div className="space-y-3">
                        {downloads.map((item, index) => (
                            <motion.a 
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-between p-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-all duration-300"
                            >
                                <span className="text-lg">{item.title}</span>
                                <Download className="w-5 h-5" />
                            </motion.a>
                        ))}
                        <p className="text-xs text-gray-400 pt-2 text-center">
                            {lang === 'fa' ? 'حجم کل بازی: ۱۲۰ گیگابایت' : 'Total Game Size: 120 GB'}
                        </p>
                    </div>
                </motion.section>

                {/* باکس مشخصات عمومی */}
                <motion.section 
                    className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700 shadow-lg"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">{lang === 'fa' ? 'مشخصات عمومی' : 'General Specs'}</h3>
                    <div className="space-y-3">
                        {[
                            { icon: Calendar, label: lang === 'fa' ? 'تاریخ انتشار' : 'Release Date', value: game.releaseDate ? new Date(game.releaseDate).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US') : 'N/A' },
                            { icon: Joystick, label: lang === 'fa' ? 'ژانرها' : 'Genres', value: game.genres.join(', ') },
                            { icon: HardDrive, label: lang === 'fa' ? 'پلتفرم' : 'Platform', value: game.platform },
                            { icon: DollarSign, label: lang === 'fa' ? 'قیمت اصلی' : 'Market Price', value: game.marketPrice === 0 ? (lang === 'fa' ? 'رایگان' : 'Free') : `$${game.marketPrice}` },
                            { icon: Star, label: lang === 'fa' ? 'امتیاز ما' : 'Our Rating', value: (Math.random() * 2 + 8).toFixed(1) + '/10' },
                        ].map((item, index) => (
                            <div key={index} className={`flex items-start justify-between border-b border-zinc-700/50 pb-2 ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                                <div className="flex items-center">
                                    <item.icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                    <span className={`text-sm text-gray-400 ${direction === 'rtl' ? 'mr-2' : 'ml-2'}`}>{item.label}</span>
                                </div>
                                <span className="text-sm font-semibold text-white/90">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* باکس سیستم مورد نیاز */}
                <motion.section 
                    className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700 shadow-lg"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">{lang === 'fa' ? 'سیستم مورد نیاز' : 'System Requirements'}</h3>
                    <div className="space-y-3">
                        {[
                            { icon: Cpu, label: lang === 'fa' ? 'پردازنده (CPU)' : 'Processor (CPU)', value: systemRequirements.cpu },
                            { icon: MemoryStick, label: lang === 'fa' ? 'رم (RAM)' : 'Memory (RAM)', value: systemRequirements.ram },
                            { icon: HardDrive, label: lang === 'fa' ? 'کارت گرافیک (GPU)' : 'Graphics Card (GPU)', value: systemRequirements.gpu },
                            { icon: Download, label: lang === 'fa' ? 'فضای مورد نیاز' : 'Storage Space', value: systemRequirements.storage },
                        ].map((item, index) => (
                            <div key={index} className={`flex items-start justify-between border-b border-zinc-700/50 pb-2 ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                                <div className="flex items-center">
                                    <item.icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                    <span className={`text-sm text-gray-400 ${direction === 'rtl' ? 'mr-2' : 'ml-2'}`}>{item.label}</span>
                                </div>
                                <span className="text-sm font-semibold text-white/90">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    </motion.div>
  );
};

export default GameDetailsLayout;