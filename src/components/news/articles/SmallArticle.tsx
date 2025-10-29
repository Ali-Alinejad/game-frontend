import React from 'react';
import { motion } from 'framer-motion';
import { NewsArticle } from '@/lib/types/news/NewsType';
import { formatTimeSince } from '@/lib/types/news/utils/newsUtils';

interface SmallArticleProps {
    article: NewsArticle;
    language: 'en' | 'fa';
    index?: number;
}

const SmallArticle: React.FC<SmallArticleProps> = ({ article, language, index = 0 }) => {
    const isRTL = language === 'fa';

    return (
        <motion.article
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <a 
                href={`/news/${article.slug}`}
                className="group flex items-start gap-4 p-3 -m-3 rounded-lg hover:bg-stone-900/30 transition-all duration-200 border border-transparent hover:border-amber-900/30"
            >
                {/* Image */}
                <div className="relative flex-shrink-0 overflow-hidden rounded-lg">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={article.featuredImage}
                        alt={article.title[language]}
                        className="w-28 h-20 object-cover"
                    />
                    
                    {/* Category Badge on Image */}
                    <span className="absolute bottom-1 left-1 px-2 py-0.5 bg-amber-500 text-black text-[10px] font-bold uppercase rounded">
                        {article.category}
                    </span>
                </div>

                {/* Content */}
                <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {/* Title */}
                    <h3 
                        className="text-sm font-bold text-amber-100 leading-snug mb-2 line-clamp-2 group-hover:text-amber-300 transition-colors duration-200"
                        style={{ fontFamily: isRTL ? 'inherit' : 'Georgia, serif' }}
                    >
                        {article.title[language]}
                    </h3>

                    {/* Meta Info */}
                    <div className={`flex items-center gap-2 text-xs text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-amber-500/70">{formatTimeSince(article.publishedAt)}</span>
                        <span>•</span>
                        <span>{article.readTime} {isRTL ? 'دقیقه' : 'min'}</span>
                        {article.trending && (
                            <>
                                <span>•</span>
                                <span className="flex items-center gap-1 text-red-500 font-medium">
                                    <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                                    {isRTL ? 'ترند' : 'Trending'}
                                </span>
                            </>
                        )}
                    </div>

                    {/* Views */}
                    <div className={`flex items-center gap-1 mt-1 text-xs text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>{article.views.toLocaleString()}</span>
                    </div>
                </div>
            </a>
        </motion.article>
    );
};

export default SmallArticle;