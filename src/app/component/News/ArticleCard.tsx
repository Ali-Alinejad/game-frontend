// news/components/ArticleCard.tsx - REVISED
import { NewsArticle } from '@/app/types/News/NewsType';
import React from 'react';
import AuthorMeta from './AuthorBadge';
import { formatTimeSince } from '@/app/types/News/utils/newsUtils';

interface ArticleCardProps {
  article: NewsArticle;
  size: 'medium' | 'large';
  language: 'en' | 'fa';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, size, language }) => {
  const isLarge = size === 'large';
  const isRTL = language === 'fa';
  const titleSize = isLarge ? 'text-2xl' : 'text-xl';
  const textDirection = isRTL ? 'rtl' : 'ltr';

  return (
    <article className={`group bg-white rounded-md overflow-hidden shadow-sm transition hover:shadow-lg ${isRTL ? 'font-fa' : 'font-sans'}`} dir={textDirection}>
      <a href={`/news/${article.slug}`} className="block">
        <div className="relative">
          <img
            src={article.featuredImage}
            alt={article.title.en}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ height: isLarge ? '320px' : '220px' }}
          />
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold uppercase px-2 py-1 rounded">{article.category}</span>
        </div>

        <div className="p-4">
          <h2 className={`font-serif font-extrabold leading-tight ${titleSize} mb-2 group-hover:underline`}>
            {article.title[language]}
          </h2>
          <p className="text-sm text-gray-700 mb-4 hidden sm:block">
            {article.excerpt[language]}
          </p>
          <div className="flex items-center justify-between">
            <AuthorMeta article={article} language={language} />
            <div className="text-xs text-gray-500">{formatTimeSince(article.publishedAt)}</div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;