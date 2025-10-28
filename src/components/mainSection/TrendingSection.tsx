import React from 'react';
import { motion } from 'framer-motion';
import { getTrendingGames } from '@/app/types/constants/data';
import { Language } from '@/app/types/indexHeroSection';
import { GameCard } from '@/components/shared/cards/GameCard';

interface TrendingSectionProps {
  t: any;
  lang: Language;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ t, lang }) => {
  const trendingGames = getTrendingGames(lang);

  return (
    <section className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold block mt-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent mb-6">
            {t.trendingNow}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.trendingDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingGames.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GameCard {...game} lang={lang} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};