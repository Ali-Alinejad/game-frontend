// news/components/FeaturedArticleHero.tsx
import React from 'react';
import AuthorBadge from './AuthorBadge';
import { NewsArticle } from '@/app/types/News/NewsType';
import { formatTimeSince } from '@/app/types/News/utils/newsUtils';

interface FeaturedArticleHeroProps {
  article: NewsArticle;
  language: 'en' | 'fa';
}

const FeaturedArticleHero: React.FC<FeaturedArticleHeroProps> = ({ article, language }) => {
  return (
    <div className="pb-8 mb-8 border-b-4 border-black">
      <a href={`/news/${article.slug}`} className="block group">
        <img
          src={article.featuredImage}
          alt={article.title.en}
          className="w-full object-cover transition-transform duration-300 transform group-hover:scale-[1.01]"
          style={{ height: '450px' }}
        />
        <div className="mt-6">
          <p className="text-sm font-bold uppercase text-red-700 mb-2 tracking-wider">
            {article.category.toUpperCase()} {article.trending && '• TRENDING'}
          </p>
          <h1 className="font-serif text-5xl font-extrabold leading-none group-hover:underline">
            {article.title[language]}
          </h1>
          <p className="text-xl mt-4 text-gray-800">
            {article.excerpt[language]}
          </p>
        </div>
      </a>
      <div className="flex items-center mt-6 space-x-4">
        <AuthorBadge author={article.author} size="medium" />
        <span className="text-sm text-gray-600">
          | {formatTimeSince(article.publishedAt)} • {article.readTime} min read
        </span>
      </div>
    </div>
  );
};

export default FeaturedArticleHero;