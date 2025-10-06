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

        <div className="relative z-10">
          <motion.h2
            className="text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mb-6"
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
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.readyDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ 
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigation('games')}
              className="group relative px-16 py-5 text-white border-amber-400 border font-bold  rounded-full  overflow-hidden"
            >
              <motion.span 
                className="relative z-10 flex items-center"
              >
                <Zap className="w-6 h-6 mr-3" />
                {t.enterGameFordNow}
              </motion.span>
              
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border   text-white  rounded-full backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300 relative overflow-hidden"
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