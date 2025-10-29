import React from 'react';
import { motion } from 'framer-motion';
import { NewsArticle } from '@/lib/types/news/NewsType';
import { formatTimeSince } from '@/lib/types/news/utils/newsUtils';

interface FeaturedArticleHeroProps {
    article: NewsArticle;
    language: 'en' | 'fa';
}

const FeaturedArticleHero: React.FC<FeaturedArticleHeroProps> = ({ article, language }) => {
    const isRTL = language === 'fa';

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="relative group"
        >
            <a href={`/news/${article.slug}`} className="block">
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden rounded-2xl aspect-[21/9] mb-6">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        src={article.featuredImage}
                        alt={article.title[language]}
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                    
                    {/* Category Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-6 left-6"
                    >
                        <div className="flex items-center gap-2">
                            <span className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-xs font-bold uppercase tracking-wider rounded-full">
                                {article.category}
                            </span>
                            {article.trending && (
                                <motion.span
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded-full flex items-center gap-1"
                                >
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                    {isRTL ? 'داغ' : 'HOT'}
                                </motion.span>
                            )}
                        </div>
                    </motion.div>

                    {/* Content on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 lg:p-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight group-hover:text-amber-300 transition-colors duration-300"
                            style={{ fontFamily: isRTL ? 'inherit' : 'Georgia, serif' }}
                        >
                            {article.title[language]}
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-200 mb-6 max-w-4xl line-clamp-2"
                        >
                            {article.excerpt[language]}
                        </motion.p>

                        {/* Author and Meta Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className={`flex items-center gap-6 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white font-bold">
                                    {article.author.avatar ? (
                                        <img 
                                            src={article.author.avatar} 
                                            alt={article.author.name} 
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    ) : (
                                        article.author.name.charAt(0)
                                    )         
                                            } 

                                </div>  
                                <div className={isRTL ? 'text-right' : 'text-left'}>
                                    <p className="text-white font-semibold">{article.author.name}</p>
                                    <p className="text-gray-300 text-xs">{article.author.title}</p>
                                </div>
                            </div>
                            
                            <div className="h-4 w-px bg-gray-500" />
                            
                            <div className="flex items-center gap-4 text-gray-300">
                                <span>{formatTimeSince(article.publishedAt)}</span>
                                <span>•</span>
                                <span>{article.readTime} {isRTL ? 'دقیقه' : 'min read'}</span>
                                <span>•</span>
                                <span>{article.views.toLocaleString()} {isRTL ? 'بازدید' : 'views'}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Tags */}
                <div className={`flex items-center gap-2 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {article.tags.slice(0, 5).map((tag, index) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="px-3 py-1 bg-stone-900 text-amber-400 text-xs font-medium rounded-lg border border-amber-900/30 hover:border-amber-600/50 hover:bg-stone-800 transition-all duration-200"
                        >
                            #{tag}
                        </motion.span>
                    ))}
                </div>
            </a>
        </motion.article>
    );
};

export default FeaturedArticleHero;