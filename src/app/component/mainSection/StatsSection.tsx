import React from 'react';
import { motion } from 'framer-motion';
import { getStats } from '@/app/types/constants/data';

interface StatsSectionProps {
  t: any;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ t }) => {
  const stats = getStats(t);

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.joinRevolution}
          </h2>
          <p className="text-xl text-gray-300">
            {t.joinDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group cursor-pointer"
            >
              <div className="relative mb-4">
                <motion.div
                  className={`w-20 h-20 mx-auto bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2"
                whileInView={{ scale: [0.5, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};