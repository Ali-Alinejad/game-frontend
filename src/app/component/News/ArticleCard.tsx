// news/components/ArticleCard.tsx
import React from 'react';
import AuthorBadge from './AuthorBadge';
import { NewsArticle } from '@/app/types/News/NewsType';
import { formatTimeSince } from '@/app/types/News/utils/newsUtils';

interface ArticleCardProps {
  article: NewsArticle;
  size: 'medium' | 'large';
  language: 'en' | 'fa';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, size, language }) => {
  const isLarge = size === 'large';
  const titleSize = isLarge ? 'text-2xl' : 'text-xl';

  return (
    <div className="border-b pb-6 mb-6">
      <a href={`/news/${article.slug}`} className="block group">
        <img
          src={article.featuredImage}
          alt={article.title.en}
          className="w-full object-cover mb-4 transition-opacity group-hover:opacity-85"
          style={{ height: isLarge ? '300px' : '200px' }}
        />
        <p className="text-xs font-semibold uppercase text-red-600 mb-1">{article.category}</p>
        <h2 className={`font-serif font-extrabold leading-tight ${titleSize} mb-2 group-hover:underline`}>
          {article.title[language]}
        </h2>
        <p className="text-base text-gray-700 mb-3 hidden sm:block">
          {article.excerpt[language]}
        </p>
      </a>
      <div className="flex justify-between items-center">
        <AuthorBadge author={article.author} size="small" />
        <span className="text-xs text-gray-500">
          {formatTimeSince(article.publishedAt)}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;