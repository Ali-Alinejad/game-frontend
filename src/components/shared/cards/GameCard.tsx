import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Download, Video } from 'lucide-react';
import { GameCardProps } from '@/app/types/indexHeroSection';

export const GameCard: React.FC<GameCardProps> = ({ 
  title, 
  genre, 
  rating, 
  players, 
  lang 
}) => (
  <motion.div
    className="relative bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-yellow-500/50 transition-all duration-300 group cursor-pointer shadow-md group-hover:shadow-xl"
  >
    <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-yellow-600/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-4 left-4 z-10">
        <h4 className="text-white font-bold text-lg mb-1">
          {title}
        </h4>
        <p className="text-gray-300 text-sm">{genre}</p>
      </div>
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-xs rounded-full px-3 py-1">
        <div className="flex items-center text-yellow-400 text-sm">
          <Star className="w-4 h-4 mr-1 fill-current" />
          {rating}
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-gray-400 text-sm">
          <Users className="w-4 h-4 mr-2" />
          {players} {lang === 'en' ? 'playing' : 'در حال بازی'}
        </div>
       
      </div>
      <div className="flex justify-between gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center justify-center"
        >
          <Download className="w-4 h-4 mr-2" />
          {lang === 'en' ? 'Download' : 'دانلود'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex-1  text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center justify-center"
        >
          <Video className="w-4 h-4 mr-2" />
          {lang === 'en' ? 'Watch Trailer' : 'تریلر را تماشا کنید'}
        </motion.button>
      </div>
    </div>
  </motion.div>
);