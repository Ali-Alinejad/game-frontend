"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Sparkles } from "@react-three/drei";
import { Avatar, Button } from '@heroui/react';
import { Calendar, Newspaper, Trophy, Gamepad2, Flame, Star, Home, Users, MessageCircle, Send, Instagram, Youtube, LogOut, LogIn } from 'lucide-react';
import { useLanguageStore } from '../../zustand/uselangStore';
import { useLanguageFont } from '../../hook/langFontUtils';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

// Component for the Three.js background
const FloatingParticles = () => (
  <>
    <Sparkles count={50} scale={7} size={2} color="#D88F00" speed={1} />
    <Sparkles count={100} scale={7} size={1} color="#D88F00" speed={1} />
  </>
);

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');
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

  const menuItems = [
    { id: 'home', label: { fa: 'خانه', en: 'Home' }, icon: Home, color: 'amber' },
    { id: 'news', label: { fa: 'اخبار', en: 'News' }, icon: Newspaper, color: 'yellow' },
    { id: 'releases', label: { fa: 'تاریخ عرضه', en: 'Releases' }, icon: Calendar, color: 'orange' },
    { id: 'collection', label: { fa: 'کالکشن', en: 'Collection' }, icon: Trophy, color: 'yellow' },
    { id: 'trending', label: { fa: 'ترندینگ', en: 'Trending' }, icon: Flame, color: 'orange' },
    { id: 'reviews', label: { fa: 'نقد و بررسی', en: 'Reviews' }, icon: Star, color: 'yellow' }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const borderPosition = direction === 'rtl' ? 'border-r-1' : 'border-l-2';
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
      yellow: isActive
        ? `text-yellow-400 ${borderPosition} border-yellow-400`
        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <motion.div
      className={`fixed top-15 left-2 w-60 h-[calc(100vh-120px)] backdrop-blur-xl bg-zinc-950/90 rounded-3xl p-2 border border-zinc-800 shadow-2xl z-40`}
      initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div
        className={twMerge(`fixed top-0 bottom-0 w-60 backdrop-blur-lg overflow-hidden`, direction === 'rtl' ? 'right-0' : 'left-0', fontClass)}
        dir={direction}
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
            className="flex items-center cursor-pointer group relative"
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="absolute -left-2 -top-2 w-4 h-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                filter: "blur(2px)",
                transform: "translate(-50%, -50%)"
              }}
            />
            <div 
              className="absolute -right-2 -bottom-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                filter: "blur(2px)",
                transform: "translate(50%, 50%)"
              }}
            />
            <div className={`relative transition-all duration-300 w-12 h-12`}>
              <Image
                src="/logoes/newLogo.png"
                alt="Logo"
                fill
                className="object-contain group-hover:drop-shadow-[0_0_12px_rgb(216, 143, 0)] transition-all duration-300"
              />
            </div>
            <motion.div 
              className="ml-3 transition-all duration-300"
              animate={{
                opacity: 1,
                width: 'auto',
                marginLeft: 12
              }}
              style={{ overflow: 'hidden' }}
            >
              <span className="text-yellow-400 font-light text-xl tracking-wide whitespace-nowrap">
                {lang === 'fa' ? 'GameFord' : 'GameFord'}
              </span>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <nav className="space-y-5 mb-4 flex-shrink-0">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={twMerge(`w-full h-9 px-3 transition-all duration-300 text-sm`, getColorClasses(item.color, isActive), direction === 'rtl' ? 'justify-start' : 'justify-start')}
                  onClick={() => setActiveItem(item.id)}
                >
                  <Icon className={twMerge(`w-4 h-4`, direction === 'rtl' ? 'ml-3' : 'mr-3', '-mb-5')} />
                  <span className="font-medium">{item.label[lang]}</span>
                  {isActive && <div className={twMerge(direction === 'rtl' ? 'mr-auto' : 'ml-auto', `rounded-full bg-current animate-pulse`)}></div>}
                </Button>
              );
            })}
          </nav>

          {/* Community & Social */}
          <div className="mb-4 flex-shrink-0">
            <div className="text-amber-400/80 text-xs font-semibold uppercase tracking-wider mb-3 justify-center flex">
              {lang === 'fa' ? 'کامیونیتی و شبکه های اجتماعی' : 'Community & Social'}
            </div>
            <div className={twMerge(`flex items-center justify-center mb-3`, direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3')}>
              <Button variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-amber-400 hover:bg-amber-500/10 transition-colors" title="Community"><Users className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors" title="Group Chat"><MessageCircle className="w-4 h-4" /></Button>
            </div>
            <div className={twMerge(`flex items-center justify-center`, direction === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2')}>
              <Button variant="ghost" className="w-8 h-8 p-0 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors" title="Discord"><MessageCircle className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors" title="Telegram"><Send className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors" title="Instagram"><Instagram className="w-4 h-4" /></Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors" title="YouTube"><Youtube className="w-4 h-4" /></Button>
            </div>
          </div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-4  border border-yellow-500/30 shadow-xl mt-auto"
          >
            <div className="absolute inset-0 overflow-hidden  ">
              <motion.div
                animate={{ background: ["radial-gradient(circle at 100% 40%, rgba(139, 68, 0, 0.1) 10%, transparent 60%)", "radial-gradient(circle at 10% 40%, rgba(255, 185, 0, 0.2) 0%, transparent 60%)"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0"
              />
            </div>
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
                    className="  text-amber-400  hover:text-amber-300 transition-all duration-300"
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
                       <div className="text-xs text-amber-400/80">{lang === 'fa' ? 'نامشخص' : 'unknown'}</div>
                  <Button
                    size="sm"
                    className="w-full  text-green-400  hover:text-green-300 transition-all duration-300"
                    onClick={handleLogin}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Footer */}
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