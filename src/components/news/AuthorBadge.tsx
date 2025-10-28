// news/components/AuthorMeta.tsx
import { NewsArticle } from '@/lib/types/news/NewsType';
import { formatTimeSince } from '@/lib/types/news/utils/newsUtils';
import React from 'react';

interface AuthorMetaProps {
  article: NewsArticle;
  language: 'en' | 'fa';
  // Note: Assuming 't' would come from a language/translation context if needed, 
  // but for simplicity here, we'll use direct string translations or fixed labels.
}

const AuthorMeta: React.FC<AuthorMetaProps> = ({ article, language }) => {
  const isRTL = language === 'fa';
  const { author, publishedAt, readTime } = article;

  const labels = {
    by: { en: 'By', fa: 'نویسنده:' },
    read: { en: 'min read', fa: 'دقیقه مطالعه' },
  };

  return (
    <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
      {/* Author Avatar */}
      <img
        src={author.avatar || '/authors/default.jpg'}
        alt={author.name}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200"
      />

      <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Author Name and Title */}
        <p className={`text-sm font-semibold text-gray-900 ${isRTL ? 'font-fa' : 'font-sans'}`}>
          {labels.by[language]} {author.name} 
          <span className="text-xs font-normal text-gray-500 ml-2">
            ({author.title})
          </span>
        </p>

        {/* Date and Read Time */}
        <p className={`text-xs text-gray-600 ${isRTL ? 'font-fa' : 'font-sans'}`}>
          {formatTimeSince(publishedAt)}
          <span className="mx-1">•</span>
          {readTime} {labels.read[language]}
        </p>
      </div>
    </div>
  );
};

export default AuthorMeta;