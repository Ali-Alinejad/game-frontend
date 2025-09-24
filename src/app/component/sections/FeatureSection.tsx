import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '../cards/FeatureCard';
import { getFeatures } from '../../types/constants/data';

interface FeaturesSectionProps {
  t: any;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ t }) => {
  const features = getFeatures(t);

  return (
    <section className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500 mb-6">
            {t.whyChoose}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.whyDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};