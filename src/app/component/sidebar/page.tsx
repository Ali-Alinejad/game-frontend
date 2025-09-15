// components/Sidebar.tsx
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

// Component for the Three.js background
const FloatingParticles = () => (
  <>
    <PerspectiveCamera makeDefault position={[0, 0, 10]} />
    <ambientLight intensity={0.4} color="#ff007f" />
    <Sparkles count={50} scale={7} size={5} color="#EA0054" speed={1} />
    <Sparkles count={100} scale={7} size={3} color="#fff" speed={1} />
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
    { id: 'home', label: { fa: 'خانه', en: 'Home' }, icon: Home, color: 'rose' },
    { id: 'news', label: { fa: 'اخبار', en: 'News' }, icon: Newspaper, color: 'pink' },
    { id: 'releases', label: { fa: 'تاریخ عرضه', en: 'Releases' }, icon: Calendar, color: 'orange' },
    { id: 'collection', label: { fa: 'کالکشن', en: 'Collection' }, icon: Trophy, color: 'red' },
    { id: 'trending', label: { fa: 'ترندینگ', en: 'Trending' }, icon: Flame, color: 'orange' },
    { id: 'reviews', label: { fa: 'نقد و بررسی', en: 'Reviews' }, icon: Star, color: 'red' }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const borderPosition = direction === 'rtl' ? 'border-r-1' : 'border-l-2';
    const colors = {
      rose: isActive
        ? `text-rose-400 ${borderPosition} border-rose-400`
        : 'text-gray-300 hover:text-rose-600 hover:bg-rose-500/10',
      pink: isActive
        ? `text-pink-400 ${borderPosition} border-pink-400`
        : 'text-gray-300 hover:text-pink-400 hover:bg-pink-500/10',
      orange: isActive
        ? `text-orange-400 ${borderPosition} border-orange-400`
        : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10',
      red: isActive
        ? `text-red-400 ${borderPosition} border-red-400`
        : 'text-gray-300 hover:text-red-400 hover:bg-red-500/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
       <motion.div
                                className={`fixed top-15 ${direction === 'rtl' ? 'left-4' : 'left-4'} w-60 h-[calc(100vh-120px)] backdrop-blur-xl bg-zinc-950/90 rounded-3xl p-2 border border-zinc-800 shadow-2xl z-40`}
                                initial={{ opacity: 0, x: direction === 'rtl' ? 50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
    <div
      className={twMerge(`fixed top-0 bottom-0 w-60 backdrop-blur-lg  overflow-hidden`, direction === 'rtl' ? 'left-0' : 'left-0', fontClass)}
      dir={direction}
      lang={lang}
    >
   
                                   <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <ambientLight intensity={0.2} color="#ff007f" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#EC4899" />
          <FloatingParticles />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="relative z-10 p-4 h-full flex flex-col">
        {/* Logo Section */}
        <div className="mb-6">
          <div className={twMerge(`flex items-center justify-center mb-4`, direction === 'rtl' ? 'space-x-4 mr-7' : 'space-x-4 mr-7')}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-orange-800 rounded-xl transform rotate-12 shadow-lg shadow-rose-500/50"></div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-red-400 rounded-xl transform -rotate-12 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white z-20" />
              </div>
            </div>
            <div>
              <div className="text-transparent bg-gradient-to-r from-rose-400 to-rose-700 bg-clip-text font-bold text-lg">GAMING</div>
              <div className="text-transparent bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text font-semibold text-xs">NEWS HUB</div>
            </div>
          </div>
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-1.5 border border-gray-700/30">
              <div className="text-rose-300 font-bold text-sm">1.2K</div>
              <div className="text-gray-400 text-xs">{lang === 'fa' ? 'بازدید' : 'Views'}</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-1.5 border border-gray-700/30">
              <div className="text-rose-300 font-bold text-sm">847</div>
              <div className="text-gray-400 text-xs">{lang === 'fa' ? 'اعضا' : 'Members'}</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-1.5 border border-gray-700/30">
              <div className="text-rose-300 font-bold text-sm">234</div>
              <div className="text-gray-400 text-xs">{lang === 'fa' ? 'بازی' : 'Games'}</div>
            </div>
          </div>
        </div>

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
                <Icon className={twMerge(`w-4 h-4`, direction === 'rtl' ? 'ml-3' : 'ml-4', '-mb-5')} />
                <span className="font-medium">{item.label[lang]}</span>
                {isActive && <div className={twMerge(direction === 'rtl' ? 'mr-auto' : 'mr-auto', `rounded-full bg-current animate-pulse`)}></div>}
              </Button>
            );
          })}
        </nav>

        {/* Community & Social */}
        <div className="mb-4 flex-shrink-0">
          <div className="text-rose-400/80 text-xs font-semibold uppercase tracking-wider mb-3 justify-center flex">
            {lang === 'fa' ? 'کامیونیتی و شبکه های اجتماعی' : 'Community & Social'}
          </div>
          <div className={twMerge(`flex items-center justify-center mb-3`, direction === 'rtl' ? ' space-x-3' : 'space-x-3')}>
            <Button variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors" title="Community"><Users className="w-4 h-4" /></Button>
            <Button variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-colors" title="Group Chat"><MessageCircle className="w-4 h-4" /></Button>
          </div>
          <div className={twMerge(`flex items-center justify-center`, direction === 'rtl' ? ' space-x-2' : 'space-x-2')}>
            <Button variant="ghost" className="w-8 h-8 p-0 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors" title="Discord"><MessageCircle className="w-4 h-4" /></Button>
            <Button variant="ghost" className="w-8 h-8 p-0 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-colors" title="Telegram"><Send className="w-4 h-4" /></Button>
            <Button variant="ghost" className="w-8 h-8 p-0 text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition-colors" title="Instagram"><Instagram className="w-4 h-4" /></Button>
            <Button variant="ghost" className="w-8 h-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors" title="YouTube"><Youtube className="w-4 h-4" /></Button>
          </div>
        </div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br rounded-3xl p-6 border border-gray-500/30 shadow-2xl mt-auto"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ background: ["radial-gradient(circle at 100% 40%, rgba(139, 68, 196, 0.2) 10%, transparent 60%)", "radial-gradient(circle at 10% 40%, rgba(239, 8, 108, 0.2)  0%, transparent 60%)"] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0"
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              {lang === 'fa' ? 'هاب گیمینگ' : 'Gaming Hub'}
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 border border-rose-200/50 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="flex items-center justify-center">
                {isLoggedIn && user ? (
                  <div className={twMerge(`flex items-center`, direction === 'rtl' ? ' space-x-3' : 'space-x-3')}>
                    <Avatar src={user.avatar} alt="User Avatar" className="w-10 h-10 rounded-full border border-rose-400" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">{user.name}</span>
                      <span className="text-xs text-green-400">{lang === 'fa' ? 'آنلاین' : 'Online'}</span>
                    </div>
                  </div>
                ) : (
                  <div className={twMerge(`flex items-center`, direction === 'rtl' ? 'space-x-3' : 'space-x-3')}>
                    <Avatar name="?" className="w-10 h-10 rounded-full border border-gray-600" />
                    <span className="text-gray-400 text-sm">{lang === 'fa' ? 'مهمان' : 'Guest'}</span>
                  </div>
                )}
                <motion.span
                  className={twMerge(direction === 'rtl' ? 'ml-2' : 'ml-2', 'mb-1')}
                  animate={{ x: direction === 'rtl' ? [0, 5, 0] : [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {isLoggedIn ? (
                    <Button isIconOnly size="sm" className="text-rose-400 hover:text-rose-500" onClick={handleLogout}><LogOut className="w-4 h-4" /></Button>
                  ) : (
                    <Button isIconOnly size="sm" className="text-green-400 hover:text-green-500" onClick={handleLogin}><LogIn className="w-4 h-4" /></Button>
                  )}
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-gray-800/50 pt-3 flex-shrink-0 mt-4">
          <div className="flex items-center justify-between text-xs">
            <div className="text-gray-600">© 2025 Gaming Hub</div>
            <div className={twMerge(`flex items-center`, direction === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2')}>
              <button className="cursor-pointer hover:scale-105 text-rose-400 font-semibold hover:text-rose-500 transition-colors" onClick={toggleLang}>
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