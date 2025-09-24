import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LogIn, LogOut, Gamepad2, Menu, X, Globe2 } from 'lucide-react';
import { User, Language } from '../../../types/indexHeroSection';
import { getMenuItems } from '../../../types/constants/data';

interface HeaderProps {
  isLoggedIn: boolean;
  user: User | null;
  activeItem: string;
  isScrolled: boolean;
  isMenuOpen: boolean;
  lang: Language;
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
  onLogin,
  onLogout,
  onNavigation,
  onToggleMenu,
  onToggleLang
}) => {
  const menuItems = getMenuItems(t);

  return (
    <AnimatePresence>
      <motion.header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-2xl bg-zinc-950/95 border-b border-zinc-800/50 shadow-2xl' 
            : 'backdrop-blur-sm bg-zinc-950/20'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={`transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => onNavigation('home')}
            >
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl shadow-2xl shadow-rose-500/50"
                  animate={{ 
                    boxShadow: isScrolled 
                      ? "0 10px 30px rgba(244, 63, 94, 0.4)" 
                      : "0 20px 50px rgba(244, 63, 94, 0.7)"
                  }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 font-bold text-xl">
                  {t.logo}
                </span>
                {!isScrolled && (
                  <motion.span 
                    className="text-xs text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {t.logoSubtitle}
                  </motion.span>
                )}
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-2 bg-zinc-800/40 backdrop-blur-xl rounded-full px-3 py-2 border border-zinc-700/50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <Link key={item.id} href={item.path} passHref>
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onNavigation(item.id)}
                      className={`relative flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm
                        ${isActive 
                          ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg shadow-rose-500/40` 
                          : "text-gray-300 hover:text-white hover:bg-zinc-700/60"
                        }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </motion.button>
                  </Link>
                );
              })}
            </motion.nav>

            {/* Language Switch */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onToggleLang}
              className="mx-4 text-gray-300 hover:text-white flex items-center"
            >
              <Globe2 className="w-5 h-5 mr-1" />
              {lang === 'en' ? 'EN' : 'FA'}
            </motion.button>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <motion.div 
                className="relative hidden md:block"
                whileHover={{ scale: 1.02 }}
              >
                <input 
                  type="text" 
                  placeholder={t.searchPlaceholder} 
                  className={`bg-zinc-800/60 text-white placeholder-gray-400 rounded-full border border-zinc-700/50 focus:border-rose-400/50 focus:outline-none focus:ring-2 focus:ring-rose-400/20 transition-all duration-300 ${
                    isScrolled ? 'py-2 px-4 text-sm w-40' : 'py-2.5 px-5 text-base w-48'
                  }`}
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggleMenu}
                className="lg:hidden p-2 text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>

              {/* User Auth */}
              {isLoggedIn && user ? (
                <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
                  <img 
                    src={user?.avatar || "https://i.pravatar.cc/150?u=default"}
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full border-2 border-rose-400/50 cursor-pointer" 
                  />
                  <button 
                    onClick={onLogout}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(244, 63, 94, 0.3)" }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={onLogin}
                  className={`bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-rose-500/40 transition-all duration-300 flex items-center ${
                    isScrolled ? 'text-sm py-2 px-4' : 'text-base py-2.5 px-5'
                  }`}
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  {t.login}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};