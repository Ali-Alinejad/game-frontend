import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


// Import types and constants
import { User, Language } from '../../types/indexHeroSection';
import { translations } from '@/app/types/constants/translations';

// Import 3D GameShowcase
import PlayhostBackground from '../../component/3D/Three3Dcomponents';

// Import layout components
import { Header } from '../../component/layout/main/HeaderMain';
import { MobileMenu } from '../../component/layout/main/mobileMenuMain';
import { Footer } from '../../component/layout/main/FooterMain';

// Import section components
import { HeroSection } from '../../component/sections/HeroSection';
import { TrendingSection } from '../../component/sections/TrendingSection';
import { FeaturesSection } from '../../component/sections/FeatureSection';
import { StatsSection } from '../../component/sections/StatsSection';
import { NewsletterSection } from '../../component/sections/NewsLetterSection';
import { CTASection } from '../../component/sections/STASection';
import { useLanguageStore } from '@/app/zustand/uselangStore';

const GamingHub: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [activeItem, setActiveItem] = useState<string>('home');
  // ⭐️ این حالت (State) اکنون به‌روزرسانی خواهد شد
  const [scrollY, setScrollY] = useState<number>(0); 
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const gamesData = [
  { id: 1, image: '/images/game1.jpg', title: 'Cyber Strike' },
  { id: 2, image: '/images/game2.jpg', title: 'Neon Racer' },
  { id: 3, image: '/images/game3.jpg', title: 'Space Hunter' },
  { id: 4, image: '/images/game4.jpg', title: 'Dark Realm' },
];


  const { lang, toggleLang } = useLanguageStore();

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  // ⭐️ تابع برای به‌روزرسانی موقعیت اسکرول
  const handleScroll = useCallback(() => {
    // از window.scrollY برای گرفتن موقعیت اسکرول پیکسلی استفاده می‌شود
    setScrollY(window.scrollY);
  }, []);

  // ⭐️ useEffect برای افزودن و حذف Event Listener اسکرول
  useEffect(() => {
    // افزودن شنونده رویداد در زمان Mount شدن کامپوننت
    window.addEventListener('scroll', handleScroll);
    
    // اجرای اولیه برای تنظیم مقدار scrollY
    handleScroll();

    // حذف شنونده رویداد در زمان Unmount شدن کامپوننت برای جلوگیری از نشت حافظه
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // وابستگی به handleScroll

  // ... (سایر توابع)
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ 
      name: lang === 'en' ? "Ali Alinejad" : "علی علی نژاد", 
      avatar: "https://i.pravatar.cc/150?u=ali" 
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleNavigation = (itemId: string) => {
    setActiveItem(itemId);
    setIsMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // ...

  const t = translations[lang];
  const isScrolled = scrollY > 50;

  return (
    <div className={`min-h-screen bg-zinc-950 text-white overflow-hidden relative ${lang === 'fa' ? 'rtl font-sans-fa' : 'ltr font-sans-en'}`}>
      {/* Mouse follower */}
      {/* <FancyCursor /> */}

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
            {/* ⭐️ مقدار scrollY که اکنون به‌روزرسانی می‌شود به GameShowcase پاس داده می‌شود */}
            <PlayhostBackground scrollY={scrollY} />
      </div>

      {/* Header */}
      <Header
        isLoggedIn={isLoggedIn}
        user={user}
        activeItem={activeItem}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        lang={lang}
        t={t}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onNavigation={handleNavigation}
        onToggleMenu={handleToggleMenu}
        onToggleLang={toggleLang}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        activeItem={activeItem}
        t={t}
        onNavigation={handleNavigation}
      />

      {/* Hero Section */}
      <HeroSection
        heroY={heroY}
        heroOpacity={heroOpacity}
        heroScale={heroScale}
        t={t}
      />

      {/* Trending Games Section */}
      <TrendingSection t={t} lang={lang} />

      {/* Features Section */}
      <FeaturesSection t={t} />

      {/* Stats Section */}
      <StatsSection t={t} />

      {/* Newsletter Section */}
      <NewsletterSection t={t} />

      {/* Final CTA Section */}
      <CTASection t={t} onNavigation={handleNavigation} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
};

export default GamingHub;
