import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';

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
  t 
}) => (
  <motion.section 
    className="relative min-h-screen flex items-center justify-center px-4 z-10"
    style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
  >
    <div className="text-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="space-y-8 relative"
      >
        <motion.div
          className="relative z-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Background Text for 3D Effect */}
          <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-700 transform translate-x-2 translate-y-2 blur-sm opacity-30">
            <span className="block">
              {t.heroTitle1}
            </span>
            <span className="block mt-2">
              {t.heroTitle2}
            </span>
          </div>
          
          {/* Main Text */}
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-purple-700 relative z-10"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{ 
              backgroundSize: '200% 200%',
              textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
              filter: 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.5))'
            }}
          >
            {t.heroTitle1}
          </motion.span>
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-purple-300 mt-2 relative z-10"
            animate={{ 
              backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{ 
              backgroundSize: '200% 200%',
              textShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
              filter: 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.5))'
            }}
          >
            {t.heroTitle2}
          </motion.span>

          {/* Extra Glow Effects */}
          <div className="absolute inset-0 text-red-500 opacity-20 blur-xl transform scale-110">
            <span className="block">
              {t.heroTitle1}
            </span>
            <span className="block mt-2">
              {t.heroTitle2}
            </span>
          </div>
        </motion.div>
        
        <motion.p 
          className="relative z-10 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light rounded-2xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {t.heroDescription}
        </motion.p>

        <motion.div
          className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              y: -3
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-full shadow-lg shadow-red-600/30 overflow-hidden backdrop-blur-sm border border-blue-400/20"
          >
            <motion.span 
              className="relative z-10 flex items-center"
              whileHover={{ x: 2 }}
            >
              <Play className="w-5 h-5 mr-2" />
              {t.enterNexus}
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.button>
        </motion.div>

        {/* Floating Elements for 3D Effect */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 z-20 backdrop-blur-sm bg-zinc-950/20 rounded-full p-3 border border-zinc-800/30"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-sm mb-2 font-medium">{t.discoverMore}</span>
      <ArrowDown className="w-5 h-5" />
    </motion.div>
  </motion.section>
);