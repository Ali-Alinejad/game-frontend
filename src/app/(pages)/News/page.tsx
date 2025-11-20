// app/(pages)/News/page.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { mockNewsArticles } from '@/lib/types/news/mockdataNews';
import { formatTimeSince } from '@/lib/utils/news/newsUtils';
import Image from 'next/image';

export default function NewsPage() {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const isRTL = language === 'fa';
  
  const featuredArticles = mockNewsArticles.filter(a => a.featured);
  const regularArticles = mockNewsArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <h1 className="text-3xl font-serif font-bold">
              {isRTL ? 'تایمز گیمینگ' : 'The Gaming Times'}
            </h1>
            
            <div className="flex gap-3">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  language === 'en' ? 'text-white border-b-2 border-white' : 'text-gray-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fa')}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  language === 'fa' ? 'text-white border-b-2 border-white' : 'text-gray-500'
                }`}
              >
                فارسی
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Section */}
        <div className={`mb-12 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-4xl font-serif font-bold mb-8">
            {isRTL ? 'اخبار برجسته' : 'Featured Stories'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, idx) => (
              <Link key={article.id} href={`/News/${article.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 h-56">
                    <Image
                    fill
                      src={article.featuredImage || "/images/News/default-featured.png"}
                      alt={article.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold uppercase rounded">
                        {article.category}
                      </span>
                      {article.breaking && (
                        <span className="bg-yellow-500 text-black px-3 py-1 text-xs font-bold uppercase rounded animate-pulse">
                          {isRTL ? 'فوری' : 'BREAKING'}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gray-300 transition-colors mb-3 line-clamp-2">
                    {article.title[language]}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {article.excerpt[language]}
                  </p>
                  
                  <div className={`flex items-center gap-3 text-xs text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-gray-300 font-semibold">{article.author.name}</span>
                    <span>•</span>
                    <span>{formatTimeSince(article.publishedAt, language)}</span>
                    <span>•</span>
                    <span>{article.readTime} {isRTL ? 'دقیقه' : 'min'}</span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className={`border-t border-gray-800 pt-12 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-serif font-bold mb-8">
            {isRTL ? 'همه مقالات' : 'All Articles'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, idx) => (
              <Link key={article.id} href={`/News/${article.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer border-b border-gray-800 pb-6"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    <Image
                    fill
                      src={article.featuredImage || "/images/News/default-featured.png"}
                      alt={article.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold uppercase rounded">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gray-300 transition-colors mb-2 line-clamp-2">
                    {article.title[language]}
                  </h3>
                  
                  <p className="text-gray-500 text-sm">
                    {formatTimeSince(article.publishedAt, language)}
                  </p>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 mt-20 py-12 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 {isRTL ? 'GameFord' : 'The GameFord Times'}. {isRTL ? 'تمامی حقوق محفوظ است' : 'All rights reserved'}.
          </p>
        </div>
      </footer>
    </div>
  );
}