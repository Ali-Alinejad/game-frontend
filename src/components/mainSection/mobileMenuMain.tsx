import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getMenuItems } from '@/app/types/constants/data';

interface MobileMenuProps {
  isMenuOpen: boolean;
  activeItem: string;
  t: any;
  onNavigation: (itemId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isMenuOpen, 
  activeItem, 
  t, 
  onNavigation 
}) => {
  const menuItems = getMenuItems(t);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-20 left-0 right-0 z-30 lg:hidden bg-zinc-900/95 backdrop-blur-xs border-b border-zinc-800/50"
        >
          <div className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <Link key={item.id} href={item.path} passHref>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 10 }}
                    onClick={() => onNavigation(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${item.gradient} text-white` 
                        : "text-gray-300 hover:text-white hover:bg-zinc-800/60"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </motion.button>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};