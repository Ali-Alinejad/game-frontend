import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Zap, Trophy, Target, Gamepad2 } from 'lucide-react';

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
}) => {
  // Memoize heavy computations
  const gridItems = useMemo(() => 
    Array.from({ length: 25 }).map((_, i) => ({ id: i, delay: Math.random() * 2 })), 
    []
  );

  const particles = useMemo(() => 
    Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    })), 
    []
  );

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center px-4 z-10 overflow-hidden"
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
    >
      {/* Simplified Gaming Grid - Much Less Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-5 grid-rows-5 w-full h-full">
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              className="border border-cyan-500/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4,
                delay: item.delay,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </div>
      </div>


      <div className="text-center max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-12 relative"
        >
          {/* Simplified Gaming HUD Title */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Simple HUD Frame */}
            <div className="relative p-6 border-2 border-cyan-400/20 bg-black/10 backdrop-blur-sm rounded-lg">
              {/* Only Corner Decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>

              <div className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  {t.heroTitle1}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 mt-2">
                  {t.heroTitle2}
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Simplified Gaming Console Description */}
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="bg-black/20 backdrop-blur-sm border border-gray-600/20 rounded-xl p-6 font-mono">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-400 text-sm">TERMINAL</span>
              </div>
              <p className="text-lg md:text-xl text-green-400 leading-relaxed">
                <span className="text-cyan-400">{'> '}</span>
                {t.heroDescription}
                <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse" />
              </p>
            </div>
          </motion.div>

          {/* Simplified Gaming Control Panel */}
          <motion.div
            className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {/* Main Play Button - Simplified */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-xl rounded-lg shadow-lg shadow-cyan-500/30 border border-cyan-400/30"
            >
              <span className="flex items-center">
                <Play className="w-6 h-6 mr-3 fill-current" />
                {t.enterGameFord}
              </span>
            </motion.button>

            {/* Simple Gaming Stats */}
            <div className="flex space-x-3">
              <div className="bg-black/20 border border-green-400/20 rounded-lg p-3 text-center min-w-[70px]">
                <div className="text-green-400 font-bold text-lg">98</div>
                <div className="text-gray-400 text-xs">LVL</div>
              </div>
              
              <div className="bg-black/20 border border-blue-400/20 rounded-lg p-3 text-center min-w-[70px]">
                <div className="text-blue-400 font-bold text-lg">1.2K</div>
                <div className="text-gray-400 text-xs">XP</div>
              </div>
            </div>
          </motion.div>

          {/* Minimal Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: particle.delay
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Simplified Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-cyan-400 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="bg-black/30 border border-cyan-400/20 rounded-full p-3">
          <div className="flex flex-col items-center">
            <Gamepad2 className="w-5 h-5 mb-2" />
            <span className="text-sm mb-2">{t.discoverMore}</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};