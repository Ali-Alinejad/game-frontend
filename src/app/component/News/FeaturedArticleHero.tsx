// news/components/FeaturedArticleHero.tsx - REVISED
import React from 'react';
import AuthorMeta from './AuthorBadge';
import { NewsArticle } from '@/app/types/News/NewsType';

interface FeaturedArticleHeroProps {
  article: NewsArticle;
  language: 'en' | 'fa';
}

const FeaturedArticleHero: React.FC<FeaturedArticleHeroProps> = ({ article, language }) => {
  const isRTL = language === 'fa';
  const textDirection = isRTL ? 'rtl' : 'ltr';

  return (
    <article className={`relative pb-8 mb-8 border-b-4 border-black ${isRTL ? 'font-fa' : 'font-sans'}`} dir={textDirection}>
      <a href={`/news/${article.slug}`} className="block group">
        <div className="relative overflow-hidden rounded-md">
          <img
            src={article.featuredImage}
            alt={article.title.en}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ height: '480px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="inline-block bg-red-700 text-white text-xs font-bold uppercase px-3 py-1 rounded mb-2">
              {article.category} {article.trending && (isRTL ? '• پرطرفدار' : '• TRENDING')}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {article.title[language]}
            </h1>
            <p className="text-lg text-gray-100 mt-3 max-w-3xl">
              {article.excerpt[language]}
            </p>
          </div>
        </div>
      </a>
      <div className="mt-6">
        <AuthorMeta article={article} language={language} />
      </div>
    </article>
  );
};

export default FeaturedArticleHero;