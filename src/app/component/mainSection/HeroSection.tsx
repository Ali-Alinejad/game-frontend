"use client"

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Gamepad2, Zap, Trophy, Users } from 'lucide-react';

interface HeroSectionProps {
  heroY: any;
  heroOpacity: any;
  heroScale: any;
  t: any;
}

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 1000;
  return x - Math.floor(x);
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroY,
  heroOpacity,
  heroScale,
  t,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const stats = [
    { icon: Users, value: '10M+', label: t.players || 'Players' },
    { icon: Gamepad2, value: '5K+', label: t.games || 'Games' },
    { icon: Trophy, value: '50K+', label: t.tournaments || 'Tournaments' },
  ];

  return (
    <motion.section
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-white overflow-hidden"
    >
      {/* افکت‌های پس‌زمینه پیشرفته */}
      <div className="absolute inset-0 -z-10">
        {/* گرادیانت شعاعی */}
        <div className="absolute inset-0 bg-gradient-radial from-amber-900/40 via-transparent to-transparent" />

       

      </div>



      {/* محتوای اصلی */}
      <div className="relative z-10 max-w-6xl text-center space-y-12">
        {/* بج */}
     

        {/* عنوان */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
        >

          <motion.span 
            className="block mt-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255, 185, 0, 0.5))',
            }}
            animate={isMounted ? {
              backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
            } : {}}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
             {t.heroTitle1 || 'ULTIMATE'}

          </motion.span>
        </motion.h1>

        {/* توضیحات */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300/90 leading-relaxed font-light"
        >
          {t.heroDescription || 'Experience the next generation of cloud gaming with ultra-low latency and stunning graphics'}
        </motion.p>

        {/* دکمه‌های CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          {/* دکمه اصلی */}
       
        </motion.div>

        {/* آمار */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-wrap justify-center gap-12 pt-12"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center gap-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center gap-3 text-3xl font-bold">
               
                
                
                  <stat.icon className="w-8 h-8 bg-clip-text " style={{ filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))' }} />
   
                <motion.span 
                  className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))',
                  }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* نشانگر اسکرول */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 flex flex-col   items-center gap-3 text-gray-400"
      >
        
        <motion.div
          animate={isMounted ? {
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown className="w-6 h-6 text-amber-400/50" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 185, 0, 0.9))' }} />
        </motion.div>
      </motion.div>

    

    </motion.section>
  );
};

export default HeroSection;