import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Gamepad2, Star } from 'lucide-react';

interface HeroSectionProps {
  heroY: any;
  heroOpacity: any;
  heroScale: any;
  t: any;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroY,
  heroOpacity,
  heroScale,
  t,
}) => {
  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        size: 1 + Math.random() * 3,
        colorClass: ['bg-pink-500', 'bg-cyan-400', 'bg-purple-600'][i % 3],
      })),
    []
  );

  return (
    <motion.section
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-80 blur-[70px] -z-20" />

      {/* Floating particles */}
  

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl text-center space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="block bg-gradient-to-r from-cyan-400 via-rose-600 to-purple-600 bg-clip-text text-transparent">
            {t.heroTitle1}
          </span>
          <span className="block mt-3 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
            {t.heroTitle2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed font-sans"
        >
          {t.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex justify-center items-center space-x-8"
        >
          {/* Play Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 20px #06b6d4',
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-gradient-to-r from-rose-600 to-rose-700 text-white text-2xl font-bold px-14 py-5 rounded-full shadow-lg border border-rose-400/50 cursor-pointer select-none"
          >
            <Play className="w-7 h-7 mr-5" />
            {t.enterGameFord}
          </motion.button>

          {/* Scroll Down Indicator */}
        
        </motion.div>
        
      </div>

  <div className="mt-40 absolute bottom-0  items-center text-rose-500/50 select-none">
    <div className='flex flex-col text-center justify-center items-center'>
            <Gamepad2 className="w-6 h-6 mb-2 animate-pulse" />
            <p className="text-sm font-semibold">{t.discoverMore}</p>
            <ArrowDown className="w-5 h-5 mt-2 animate-bounce" />
          </div>
          </div>
    </motion.section>

    
  );
};
