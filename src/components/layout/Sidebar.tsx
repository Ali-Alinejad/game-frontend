"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Avatar, Button } from '@heroui/react';
import { Calendar, Newspaper, Trophy, Flame, Star, Home, Users, MessageCircle, Send, Instagram, Youtube, LogOut, LogIn, Linkedin } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { useLanguageFont } from '@/app/hook/langFontUtils';
import Link from 'next/link';

// Component for the Three.js background
const FloatingParticles = () => (
  <>
    <Sparkles count={50} scale={7} size={2} color="#D88F00" speed={1} />
    <Sparkles count={100} scale={7} size={1} color="#D88F00" speed={1} />
  </>
);

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Games');
  const { lang, toggleLang } = useLanguageStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(null);


  const { fontClass, direction } = useLanguageFont(lang);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: "Ali Alinejad", avatar: "https://i.pravatar.cc/150?u=ali" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // 🔴 اصلاح: تعریف مسیرهای صحیح برای آیتم‌های منو
  const menuItems = [
    { id: 'Games', label: { fa: 'بازی ها', en: 'Games' }, icon: Home, color: 'amber', path: '' },
    { id: 'news', label: { fa: 'اخبار', en: 'News' }, icon: Newspaper, color: 'yellow', path: '/news' },
    { id: 'releases', label: { fa: 'تاریخ عرضه', en: 'Releases' }, icon: Calendar, color: 'orange', path: '/releases' },
    { id: 'collection', label: { fa: 'کالکشن', en: 'Collection' }, icon: Trophy, color: 'yellow', path: '/collection' },
    { id: 'trending', label: { fa: 'ترندینگ', en: 'Trending' }, icon: Flame, color: 'orange', path: '/trending' },
    { id: 'reviews', label: { fa: 'نقد و بررسی', en: 'Reviews' }, icon: Star, color: 'yellow', path: '/reviews' }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const borderPosition =  'border-l-2'; // changed 1 to 2 for better visibility
    const colors = {
      amber: isActive
        ? `text-amber-400 ${borderPosition} border-amber-400`
        : 'text-gray-300 hover:text-amber-600 hover:bg-amber-500/10',
      yellow: isActive
        ? `text-yellow-400 ${borderPosition} border-yellow-400`
        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10',
      orange: isActive
        ? `text-orange-400 ${borderPosition} border-orange-400`
        : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10',
      pink: isActive
        ? `text-yellow-400 ${borderPosition} border-yellow-400`
        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <motion.div
      className={`fixed top-15  w-60 h-[calc(100vh-100px)] backdrop-blur-xl  rounded-3xl ml-4  p-2 overflow-hidden shadow-amber-300/50  shadow-sm z-40`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div
        className={twMerge(`h-full backdrop-blur-lg overflow-hidden`, fontClass)}
        lang={lang}
      >
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Canvas>
            <FloatingParticles />
          </Canvas>
        </div>

        <div className="relative z-10 p-4 h-full flex flex-col">
          {/* Logo Section */}
          <motion.div
            className="flex items-center cursor-pointer group relative mb-8"
            whileHover={{ scale: 1.02 }}
          >
           
           
            <Link href={'/'} className={`relative flex items-center transition-all duration-300`}>
              <div className={`w-12 h-12 scale-125`}>
                <Image
                  src="/logoes/logoGold.png"
                  alt="Logo"
                  fill
                  className="object-contain group-hover:drop-shadow-[0_0_12px_rgb(216, 143, 0)] transition-all duration-300"
                  style={{ filter: "brightness(1.5)" }}
                />
              </div>
              <motion.div
                className=" transition-all duration-300"
                animate={{
                  opacity: 1,
                  width: 'auto',
                  marginLeft:  12,
                  marginRight: 0,
                }}
                style={{ overflow: 'hidden' }}
              >
                <span className="text-yellow-400 font-light text-xl tracking-wide whitespace-nowrap">
                  {lang === 'fa' ? 'GameFord' : 'GameFord'}
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="space-y-1 flex-shrink-0">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <Link 
                    key={item.id} 
                    href={item.path} 
                    onClick={() => setActiveItem(item.id)}
                    // Button wrapper is good for styling
                    className={twMerge(
                        `w-full h-10 px-3 transition-all duration-300 text-sm flex items-center `, 
                        getColorClasses(item.color, isActive), 
                       'justify-start'
                    )}
                >
                  <Icon className={twMerge(`w-4 h-4`,  'mr-3')} />
                  <span className="font-medium">{item.label[lang]}</span>
                  {/* Active indicator */}
                  {isActive && <div className={twMerge(direction === 'rtl' ? 'ml-auto' : 'ml-auto', `w-1 h-1 rounded-full bg-current animate-pulse`)}></div>}
                </Link>
              );
            })}
          </nav>

          {/* Community & Social (No Link changes needed here) */}
          <div className="mb-4 flex-shrink-0 mt-5">
            <div className="text-amber-400/80 text-xs font-semibold uppercase tracking-wider mb-3 justify-center flex">
              {lang === 'fa' ? 'کامیونیتی و شبکه های اجتماعی' : 'Community & Social'}
            </div>
            <div className={twMerge(`flex items-center justify-center mb-3`, direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3')}>
              <Button variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-amber-400 hover:bg-amber-500/10 transition-colors" title="Community"><Users className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors" title="Group Chat"><MessageCircle className="w-4 h-4" /></Button>
            </div>
            <div className={twMerge(`flex items-center justify-center`, direction === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2')}>
              <Button variant="ghost" className="w-8 h-8 p-0 text-blue-400 hover:text-purple-300 transition-colors" title="Discord"><Linkedin className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-cyan-400 hover:text-blue-300 transition-colors" title="Telegram"><Send className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-pink-400 hover:text-pink-300 transition-colors" title="Instagram"><Instagram className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-red-400 hover:text-red-400 transition-colors" title="YouTube"><Youtube className="w-4 h-4" /></Button>
            </div>
          </div>

          {/* Profile Section (No Link changes needed here) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative overflow-hidden  p-4 rounded-2xl border-t-2 border-yellow-500/30 shadow-xl mt-auto "
          >
            <div className="relative z-10 flex flex-col items-center ">
              {isLoggedIn && user ? (
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <Avatar
                      src={user.avatar}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full border-2 border-amber-400/50 shadow-md"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border border-zinc-800"></div>
                  </motion.div>
                  <div className="text-center">
                    <span className="text-sm font-semibold text-white">{user.name}</span>
                    <div className="text-xs text-amber-400/80">{lang === 'fa' ? 'آنلاین' : 'Online'}</div>
                  </div>
                  <Button
                    size="sm"
                    className="border-amber-400/50 hover:bg-amber-500/10 text-amber-400 transition-all duration-300"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <Avatar
                      name="?"
                      className="w-12 h-12 rounded-full border-2 border-gray-600/50"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full border border-zinc-800"></div>
                  </motion.div>
                  <span className="text-sm font-semibold text-gray-400">{lang === 'fa' ? 'مهمان' : 'Guest'}</span>
                  <div className="text-xs text-amber-400/80">{lang === 'fa' ? 'ناشناس' : 'unknown'}</div>
                  <Button
                    size="sm"
                    className="w-full border-gray-600/50 hover:bg-green-500/10 text-gray-400 hover:text-green-300 transition-all duration-300"
                    onClick={handleLogin}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Footer (No Link changes needed here) */}
          <div className="border-t border-gray-800/50 pt-3 flex-shrink-0 mt-4">
            <div className="flex items-center justify-between text-xs">
              <div className="text-gray-600">© 2025 GameFord</div>
              <div className={twMerge(`flex items-center`, direction === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2')}>
                <button className="cursor-pointer hover:scale-105 text-amber-400 font-semibold hover:text-amber-500 transition-colors" onClick={toggleLang}>
                  {lang === 'fa' ? 'English' : 'فارسی'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;