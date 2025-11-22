"use client";

import React, { useState } from 'react';
import Link from 'next/link';
// Image import removed; using OptimizedImage wrapper instead
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LogIn, LogOut, Menu, X } from 'lucide-react';
import { User } from '@/app/types/indexHeroSection';
import { getMenuItems } from '@/app/types/constants/data';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import OptimizedImage from '@/components/shared/optimizeImage/page';

interface HeaderProps {
  isLoggedIn: boolean;
  user: User | null;
  activeItem: string;
  isScrolled: boolean;
  isMenuOpen: boolean;
  lang: 'en' | 'fa';
  t: any;
  onLogin: () => void;
  onLogout: () => void;
  onNavigation: (itemId: string) => void;
  onToggleMenu: () => void;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  user,
  activeItem,
  isScrolled,
  isMenuOpen,
  lang,
  t,
  onLogout,
  onNavigation,
  onToggleMenu

}) => {
  const router = useRouter();
  const menuItems = getMenuItems(t);
  const isRTL = lang === 'fa';
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Main Header */}
      <motion.header
        className="fixed top-0 inset-x-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="">
          <motion.div
            className="relative mx-auto"
            animate={{
              width: isScrolled ? '53%' : '60%',
              marginTop: isScrolled ? 8 : 20,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            {/* Glassmorphism Background */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(1px)",
              }}
              animate={{
                background: isScrolled
                  ? "rgba(255, 255, 255, 0.01)"
                  : "rgba(255, 255, 255, 0.01)",

                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Animated Glass Border Effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-60"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                backgroundSize: "200% 200%",
                animation: "shimmer 10s ease-in-out infinite"
              }}
            />

            {/* Content */}
            <div className={`relative flex max-sm:mx-0 items-center justify-between transition-all duration-400 ${isScrolled ? 'px-3 py-2' : 'px-4 py-2'
              }`}>
              {/* Logo with After/Before Effects */}
              <motion.div
                className="flex items-center cursor-pointer group relative"
                whileHover={{ scale: 1.02 }}
                onClick={() => onNavigation('home')}
              >




                <div className={`relative transition-all duration-300 ${isScrolled ? 'w-10 h-8' : 'w-12 h-12'
                  }`}>
                  <OptimizedImage
                    src="/logoes/logoGold.png"
                    alt="Logo"
                    fill
                    className="object-contain scale-150 group-hover:drop-shadow-[0_0_12px_rgba(255,185,0,0.6)] transition-all duration-300"
                  />
                </div>

                <motion.div
                  className="ml-3 transition-all duration-300"
                  animate={{
                    opacity: isScrolled ? 1 : 1,
                    width: isScrolled ? 0 : 'auto',
                    marginLeft: isScrolled ? 0 : 12
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <span className="text-amber-400 font-light text-xl tracking-wide whitespace-nowrap">
                    {t.logo}
                  </span>
                </motion.div>
              </motion.div>

              {/* Navigation - Fixed Position */}
              <motion.nav
                className="hidden lg:flex items-center  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;
                  return (
                    <Link key={item.id} href={item.path}>
                      <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                        onClick={() => onNavigation(item.id)}
                        className={`relative flex items-center rounded-full font-medium transition-all duration-300 ${isScrolled ? 'px-3.5 py-1 text-sm ' : 'px-4 py-2 text-sm'
                          } ${isActive
                            ? "bg-white/15 text-white shadow-lg  border border-white/20"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                          }`}
                      >
                        <Icon className={`${isScrolled ? 'w-3 h-3 mr-1.5' : 'w-4 h-4 mr-2'} ${isActive ? 'text-amber-400' : ''} transition-all duration-300`} />
                        <span className="whitespace-nowrap">{item.label}</span>
                      </motion.button>
                    </Link>
                  );
                })}
              </motion.nav>

              {/* Right Actions */}
              <div className="flex items-center space-x-2">

                {/* Search Toggle */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSearch(!showSearch)}
                  className={`rounded-full text-gray-300 hover:text-white hover:bg-white/10  transition-all duration-200 ${isScrolled ? '' : 'p-2'
                    }`}
                >
                  <Search className={`${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} transition-all duration-300`} />
                </motion.button>

                {/* Language Switch */}
                <div className="hidden lg:block">
                  <LanguageSwitcher />
                </div>

                {/* Mobile Menu */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onToggleMenu}
                  className={`lg:hidden rounded-full text-gray-300 hover:text-white hover:bg-white/10  transition-all duration-200 ${isScrolled ? 'p-1.5' : 'p-2'
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <X className={`${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} transition-all duration-300`} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Menu className={`${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} transition-all duration-300`} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* User Section */}
                <AnimatePresence>
                  {isLoggedIn && user ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`relative rounded-full overflow-hidden ring-2 ring-white/20 transition-all duration-300 ${isScrolled ? 'w-6 h-6' : 'w-8 h-8'
                        }`}>
                        <OptimizedImage
                          src={user.avatar || `https://robohash.org/${user.id || 'default'}?set=set4`}
                          alt={`${user.name || 'User'}'s avatar`}
                          fill
                          className="object-cover"
                          onError={(e: any) => {
                            // Fallback to robohash if the avatar fails to load
                            e.target.src = `https://robohash.org/${user.id || 'default'}?set=set4`
                          }}
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, color: "#ef4444" }}
                        onClick={onLogout}
                        className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <LogOut className={`${isScrolled ? 'w-3 h-3' : 'w-4 h-4'} transition-all duration-300`} />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.button
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        router.push('/auth/login');
                      }}
                      className={`  text-white font-medium rounded-full border border-white/20 hover:bg-white/30 transition-all duration-300 flex items-center ${isScrolled ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'
                        }`}
                    >
                      <LogIn className={`${isScrolled ? 'w-3 h-3 mr-1.5' : 'w-4 h-4 mr-2'} transition-all duration-300`} />
                      {t.login}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 "
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto mt-32 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className={`relative w-full bg-transparent text-white placeholder-gray-300 rounded-2xl focus:outline-none py-4 px-6 text-lg transition-all duration-300 ${isRTL ? 'text-right pr-16' : 'text-left pl-16'
                    }`}
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                  }}
                  autoFocus
                />
                <Search className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300 ${isRTL ? 'right-5' : 'left-5'
                  }`} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% -200%; }
          50% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }
      `}</style>
    </>
  );
};