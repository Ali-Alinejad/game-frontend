import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  t: any;
  onNavigation: (itemId: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ t, onNavigation }) => (
  <section className="relative py-32 px-4 z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto text-center"
    >
      <div className="relative  backdrop-blur-xs rounded-3xl p-16 border border-zinc-700/50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-rose-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-500 to-cyan-400 mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            {t.readyToAscend}
          </motion.h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.readyDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 30px 60px rgba(244, 63, 94, 0.4)",
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigation('games')}
              className="group relative px-16 py-5 bg-gradient-to-r from-rose-500 via-red-600 to-rose-500 text-white font-bold text-xl rounded-full shadow-2xl shadow-rose-500/50 overflow-hidden"
            >
              <motion.span 
                className="relative z-10 flex items-center"
                whileHover={{ x: 5 }}
              >
                <Zap className="w-6 h-6 mr-3" />
                {t.enterGameFordNow}
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-xl rounded-full backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-5 h-5 mr-3" />
                {t.joinCommunity}
              </span>
            </motion.button>
          </div>
          
          <motion.p
            className="text-gray-400 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t.freeToPlay}
          </motion.p>
        </div>
      </div>
    </motion.div>
  </section>
);