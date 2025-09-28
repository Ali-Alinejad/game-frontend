import React from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  t: any;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ t }) => (
  <section className="relative py-32 px-4 z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="relative backdrop-blur-xs rounded-3xl p-12 border border-zinc-700/50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.stayInGame}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.stayDesc}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="flex-1 px-6 py-4 text-white placeholder-gray-400 rounded-full border border-zinc-700/50 focus:border-rose-400/50 focus:outline-none focus:ring-2 focus:ring-rose-400/20 transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-full shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300"
            >
              {t.subscribe}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);