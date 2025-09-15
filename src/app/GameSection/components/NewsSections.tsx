"use client";

import { motion } from "framer-motion";
import { NewsItem, Story } from "../../types/Game";

interface NewsSectionsProps {
  newsItems: NewsItem[];
  lastStories: Story[];
}

export default function NewsSections({ newsItems, lastStories }: NewsSectionsProps) {
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Latest News */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="space-y-4">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="flex space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
            >
              <motion.img
                src={news.image}
                alt={news.title}
                className="w-24 h-16 object-cover rounded"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex-1">
                <motion.div
                  className="text-sm text-gray-400 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {news.time}
                </motion.div>
                <motion.h3
                  className="text-white font-semibold mb-1 hover:text-blue-300 transition-colors duration-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {news.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {news.excerpt}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Last Stories */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Last stories</h2>
          <motion.button
            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See all
          </motion.button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {lastStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.4,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <motion.img
                src={story.image}
                alt={story.title}
                className="w-full h-32 object-cover transition-transform duration-500"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-2 left-2 right-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors duration-200">
                  {story.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}