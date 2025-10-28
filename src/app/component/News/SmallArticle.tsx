// news/components/SmallArticle.tsx
import { NewsArticle } from '@/app/types/News/NewsType';
import { formatTimeSince } from '@/app/types/News/utils/newsUtils';
import React from 'react';

interface SmallArticleProps {
  article: NewsArticle;
  language: 'en' | 'fa';
}

const SmallArticle: React.FC<SmallArticleProps> = ({ article, language }) => {
  return (
    <a href={`/news/${article.slug}`} className="flex items-start space-x-3 group hover:bg-gray-50 p-2 -m-2 rounded transition-colors">
      <img
        src={article.featuredImage}
        alt={article.title.en}
        className="w-24 h-16 object-cover flex-shrink-0 rounded"
      />
      <div className="flex-1">
        <h3 className="text-sm font-serif font-bold leading-snug group-hover:underline">
          {article.title[language]}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {formatTimeSince(article.publishedAt)} • {article.readTime} min read
        </p>
      </div>
      <div className="text-xs text-gray-400">{article.category}</div>
    </a>
  );
};

export default SmallArticle;