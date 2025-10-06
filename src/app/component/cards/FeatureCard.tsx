import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FeatureCardProps } from '../../types/indexHeroSection';

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0, 
  gradient 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      rotateX: 5,
      transition: { duration: 0.3 }
    }}
    className="relative group cursor-pointer perspective-1000"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-50 scale-90 group-hover:scale-110`} />
    <div className="relative  backdrop-blur-xs border border-zinc-700/50 rounded-2xl p-8 group-hover:border-yellow-500/50 transition-all duration-500 transform-gpu shadow-lg group-hover:shadow-2xl">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-yellow-200 transition-colors duration-300">
        {description}
      </p>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-4 right-4 text-rose-400"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.div>
    </div>
  </motion.div>
);