import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Gamepad2, Zap, Trophy, Users } from 'lucide-react';

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
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 10,
        size: 2 + Math.random() * 6,
        colorClass: ['bg-cyan-400', 'bg-rose-500', 'bg-purple-500', 'bg-yellow-400'][i % 4],
      })),
    []
  );

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
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-transparent to-transparent" />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 20s linear infinite',
          }}
        />

        {/* Glow Effects */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-600/30 rounded-full blur-[100px]"
        />
      </div>

      {/* Floating Particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.colorClass} rounded-full opacity-60 blur-sm`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl text-center space-y-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-semibold"
        >
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.newFeature || 'NEW: Ultra HD Gaming Experience'}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
        >
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
            {t.heroTitle1 || 'ULTIMATE'}
          </span>
          <span className="block mt-4 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
            {t.heroTitle2 || 'GAMING'}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300/90 leading-relaxed font-light"
        >
          {t.heroDescription || 'Experience the next generation of cloud gaming with ultra-low latency and stunning graphics'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl text-xl font-bold shadow-2xl shadow-rose-500/50 hover:shadow-rose-500/70 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3">
              <Play className="w-6 h-6" fill="currentColor" />
              <span>{t.enterGameFord || 'Start Playing'}</span>
            </div>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-xl font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            {t.watchTrailer || 'Watch Trailer'}
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-wrap justify-center gap-12 pt-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <stat.icon className="w-8 h-8 text-cyan-400" />
                <span>{stat.value}</span>
              </div>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-3 text-gray-400"
      >
        <Gamepad2 className="w-6 h-6 animate-pulse" />
        <p className="text-sm font-semibold tracking-wider uppercase">
          {t.discoverMore || 'Discover More'}
        </p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(80px);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;