"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, LucideIcon } from 'lucide-react';
import { translations } from '@/lib/constants/admin/translations';

interface PlaceholderTabProps {
  icon: LucideIcon;
  title: string;
  lang: string;
}

const PlaceholderTab: React.FC<PlaceholderTabProps> = ({ icon: Icon, title, lang }) => {
  const t = translations(lang);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-2xl shadow-amber-500/30">
        <Icon className="w-12 h-12" />
      </div>
      <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-gray-400 text-lg mb-6">{t.underDevelopment}</p>
      <motion.button 
        className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-xl transition-colors font-medium flex items-center gap-2 shadow-lg shadow-amber-500/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Plus className="w-5 h-5" />
        {t.comingSoon}
      </motion.button>
    </motion.div>
  );
};

export default PlaceholderTab;