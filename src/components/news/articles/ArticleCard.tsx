import React from 'react';
import { motion } from 'framer-motion';
import { NewsArticle } from '@/lib/types/news/NewsType';
import { formatTimeSince } from '@/lib/types/news/utils/newsUtils';

interface ArticleCardProps {
    article: NewsArticle;
    size: 'medium' | 'large';
    language: 'en' | 'fa';
    index?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, size, language, index = 0 }) => {
    const isLarge = size === 'large';
    const isRTL = language === 'fa';

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="group h-full"
        >
            <a href={`/news/${article.slug}`} className="block h-full">
                <div className="relative h-full bg-stone-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-stone-800 hover:border-amber-900/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-950/20">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            src={article.featuredImage}
                            alt={article.title[language]}
                            className="w-full object-cover"
                            style={{ height: isLarge ? '280px' : '200px' }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <span className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-wide rounded-md">
                            {article.category}
                        </span>

                        {/* Trending Badge */}
                        {article.trending && (
                            <span className="absolute top-3 right-3 px-2 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded-md flex items-center gap-1">
                                <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                {isRTL ? 'ترند' : 'TREND'}
                            </span>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {/* Title */}
                        <h2 
                            className={`font-bold text-amber-100 mb-3 leading-tight group-hover:text-amber-300 transition-colors duration-200 line-clamp-2 ${
                                isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                            }`}
                            style={{ fontFamily: isRTL ? 'inherit' : 'Georgia, serif' }}
                        >
                            {article.title[language]}
                        </h2>

                        {/* Excerpt */}
                        <p className={`text-gray-400 mb-4 line-clamp-2 ${isLarge ? 'text-base' : 'text-sm'}`}>
                            {article.excerpt[language]}
                        </p>

                        {/* Meta Info */}
                        <div className="pt-4 border-t border-stone-800">
                            <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                                {/* Author */}
                                <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white text-xs font-bold">
                                        {article.author.name.charAt(0)}
                                    </div>
                                    <div className={`text-xs ${isRTL ? 'text-right' : 'text-left'}`}>
                                        <p className="text-amber-300 font-medium">{article.author.name}</p>
                                    </div>
                                </div>

                                {/* Time and Read */}
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>{formatTimeSince(article.publishedAt)}</span>
                                    <span>•</span>
                                    <span>{article.readTime} {isRTL ? 'دقیقه' : 'min'}</span>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className={`flex items-center gap-2 mt-3 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
                                {article.tags.slice(0, 3).map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 bg-stone-800/50 text-amber-500/80 text-xs rounded border border-amber-900/20"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-amber-500/0 group-hover:border-amber-500/20 transition-colors duration-300 pointer-events-none" />
                </div>
            </a>
        </motion.article>
    );
};

export default ArticleCard;