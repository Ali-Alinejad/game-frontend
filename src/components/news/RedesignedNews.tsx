"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FeaturedArticleHero from './articles/FeaturedArticleHero';
import ArticleCard from './articles/ArticleCard';
import SmallArticle from './articles/SmallArticle';
import { mockNewsArticles } from '@/lib/types/news/mockdataNews';
import { getFilteredArticles } from '@/lib/types/news/utils/newsUtils';

interface RedesignedNewsProps {
    language?: 'en' | 'fa';
    t?: { logo?: any; [key: string]: any };
}

const localT = {
    logo: { en: 'THE GAMING TIMES', fa: 'تایمز گیمینگ' },
    latest: { en: 'Latest Stories', fa: 'آخرین اخبار' },
    trending: { en: 'Trending Now', fa: 'پرطرفدارها' },
    topics: { en: 'Browse Topics', fa: 'موضوعات' },
    loadMore: { en: 'Load More Articles', fa: 'مقالات بیشتر' },
    sortBy: { en: 'Sort:', fa: 'مرتب‌سازی:' },
    subscribe: { en: 'Subscribe to Newsletter', fa: 'عضویت در خبرنامه' },
    editor: { en: "Editor's Pick", fa: 'انتخاب سردبیر' },
};

const RedesignedNews: React.FC<RedesignedNewsProps> = ({ language: initialLang = 'en', t = { logo: localT.logo } }) => {
    const [language, setLanguage] = useState<'en' | 'fa'>(initialLang);
    const [visibleArticles, setVisibleArticles] = useState(6);
    
    const featuredArticle = getFilteredArticles(mockNewsArticles, 'featured', 1)[0] || mockNewsArticles[0];
    const trending = getFilteredArticles(mockNewsArticles, 'trending', 5);
    const rest = mockNewsArticles.filter(a => a.id !== featuredArticle?.id);

    const isRTL = language === 'fa';

    const getText = (key: keyof typeof localT) => {
        const translation = t?.[key] ?? localT[key];
        if (typeof translation === 'string') return translation;
        if (typeof translation === 'object') return translation[language] ?? translation.en;
        return String(translation);
    };

    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }, [isRTL]);

    const loadMore = () => {
        setVisibleArticles(prev => prev + 6);
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-amber-900/20">
                <div className="container mx-auto px-4 py-4">
                    <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {/* Logo */}
                        <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <div className="w-12 h-12 relative">
                                    <img 
                                        src="/logoes/logoGold.png" 
                                        alt="logo" 
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={isRTL ? 'text-right' : 'text-left'}
                            >
                                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent tracking-tight">
                                    {getText('logo')}
                                </h1>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                                    {isRTL ? 'اخبار بازی و فناوری' : 'Gaming & Tech News'}
                                </p>
                            </motion.div>
                        </div>

                        {/* Language Switcher */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-center gap-2 bg-stone-900/50 rounded-full p-1 border border-stone-800"
                        >
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    language === 'en'
                                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('fa')}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    language === 'fa'
                                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                فا
                            </button>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Featured Article */}
                {featuredArticle && (
                    <section className="mb-16">
                        <FeaturedArticleHero article={featuredArticle} language={language} />
                    </section>
                )}

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        {/* Section Header */}
                        <div className={`flex items-center justify-between mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className={isRTL ? 'text-right' : 'text-left'}>
                                <h2 className="text-3xl font-bold text-amber-300 mb-1" style={{ fontFamily: isRTL ? 'inherit' : 'Georgia, serif' }}>
                                    {getText('latest')}
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
                            </div>

                            {/* Sort Dropdown */}
                            <select className="bg-stone-900 border border-stone-800 text-amber-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-amber-600 transition-colors">
                                <option>{isRTL ? 'جدیدترین' : 'Latest'}</option>
                                <option>{isRTL ? 'پربازدیدترین' : 'Most Read'}</option>
                                <option>{isRTL ? 'پرطرفدارترین' : 'Trending'}</option>
                            </select>
                        </div>

                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {rest.slice(0, visibleArticles).map((article, index) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    size="medium"
                                    language={language}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Load More Button */}
                        {visibleArticles < rest.length && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center"
                            >
                                <button
                                    onClick={loadMore}
                                    className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                                >
                                    <span className="flex items-center gap-2">
                                        {getText('loadMore')}
                                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">
                            {/* Trending Section */}
                            <motion.div
                                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-stone-900/50 backdrop-blur-sm rounded-xl p-6 border border-stone-800"
                            >
                                <div className={`flex items-center gap-2 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-amber-300" style={{ fontFamily: isRTL ? 'inherit' : 'Georgia, serif' }}>
                                        {getText('trending')}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {trending.map((article, index) => (
                                        <SmallArticle
                                            key={article.id}
                                            article={article}
                                            language={language}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Topics Section */}
                            <motion.div
                                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-stone-900/50 backdrop-blur-sm rounded-xl p-6 border border-stone-800"
                            >
                                <h3 className={`text-xl font-bold text-amber-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`} style={{ fontFamily: isRTL ? 'inherit' : 'Georgia, serif' }}>
                                    {getText('topics')}
                                </h3>

                                <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    {['Hardware', 'Reviews', 'Esports', 'Guides', 'Indie', 'Features', 'News', 'Updates'].map((topic) => (
                                        <motion.button
                                            key={topic}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-stone-800/50 hover:bg-amber-900/30 text-amber-300 text-sm font-medium rounded-lg border border-stone-700 hover:border-amber-600/50 transition-all duration-200"
                                        >
                                            {topic}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Newsletter Section */}
                            <motion.div
                                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30"
                            >
                                <h3 className={`text-lg font-bold text-amber-200 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {getText('subscribe')}
                                </h3>
                                <p className={`text-sm text-amber-100/60 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {isRTL 
                                        ? 'جدیدترین اخبار را مستقیم در ایمیل خود دریافت کنید'
                                        : 'Get the latest news delivered to your inbox'}
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder={isRTL ? 'ایمیل شما' : 'Your email'}
                                        className="flex-1 px-4 py-2 bg-stone-900 border border-stone-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                    />
                                    <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-amber-900/20 mt-20 py-8">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>© 2024 {getText('logo')}. {isRTL ? 'تمامی حقوق محفوظ است.' : 'All rights reserved.'}</p>
                </div>
            </footer>
        </div>
    );
};

export default RedesignedNews;