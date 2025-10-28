"use client";

import React, { useEffect, useState } from 'react';
import FeaturedArticleHero from './FeaturedArticleHero';
import ArticleCard from './ArticleCard';
import SmallArticle from './SmallArticle';
import { mockNewsArticles } from '@/app/types/News/mockdataNews';
import { getFilteredArticles } from '@/app/types/News/utils/newsUtils';

interface RedesignedNewsProps {
    language?: 'en' | 'fa';
    t?: { logo?: any;[key: string]: any };
}

const localT = {
    logo: { en: 'THE GAMING TIMES', fa: 'اخبار بازی' },
};

const RedesignedNews: React.FC<RedesignedNewsProps> = ({ language: initialLang = 'en', t = { logo: localT.logo } }) => {
    const [language, setLanguage] = useState<'en' | 'fa'>(initialLang);
    const featuredArticle = getFilteredArticles(mockNewsArticles, 'featured', 1)[0] || mockNewsArticles[0];
    const trending = getFilteredArticles(mockNewsArticles, 'trending', 5);
    const rest = mockNewsArticles.filter(a => a.id !== featuredArticle?.id);

    const isRTL = language === 'fa';

    // compute displayed logo: support string or object shape
    const displayedLogo = (() => {
        const logo = t?.logo ?? localT.logo;
        if (typeof logo === 'string') return logo;
        if (typeof logo === 'object') return logo[language] ?? logo.en;
        return String(logo);
    })();

    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.body.classList.toggle('font-fa', isRTL);
        document.body.classList.toggle('font-sans', !isRTL);
    }, [isRTL]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between border-b-4 border-black pb-4 mb-8">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-4'}`}>
                    <div className="w-16 h-16 relative flex-shrink-0">
                        <img src="/logoes/logoGold.png" alt="logo" className="object-contain w-full h-full" />
                    </div>
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-tight">{displayedLogo}</h1>
                        <p className="mt-1 text-sm text-gray-600">LATEST IN GAMING, ESPORTS & HARDWARE</p>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition ${language === 'en' ? 'bg-black text-white' : 'bg-white/10 text-gray-700'}`}>
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('fa')}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition ${language === 'fa' ? 'bg-black text-white' : 'bg-white/10 text-gray-700'}`}>
                            فا
                        </button>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {featuredArticle && (
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <FeaturedArticleHero article={featuredArticle} language={language} />
                        </div>
                    )}

                    <section className="mt-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-serif font-bold pb-2 mb-6">Latest</h2>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <span className="hidden sm:inline">Sort by:</span>
                                <select className="bg-transparent border px-2 py-1 rounded">
                                    <option>Latest</option>
                                    <option>Most Read</option>
                                    <option>Trending</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {rest.slice(0, 6).map(article => (
                                <ArticleCard key={article.id} article={article} size="medium" language={language} />
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <button className="px-6 py-2 rounded-full bg-black text-white">Load more</button>
                        </div>
                    </section>
                </div>

                <aside className="lg:col-span-1 border-l-0 lg:border-l-2 pl-0 lg:pl-8">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Trending</h3>
                        <div className="space-y-4">
                            {trending.map(a => (
                                <SmallArticle key={a.id} article={a} language={language} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t">
                        <h3 className="text-xl font-semibold mb-4">Topics</h3>
                        <ul className="flex flex-wrap gap-2">
                            {['Hardware', 'Reviews', 'Esports', 'Guides', 'Indie', 'Features'].map(topic => (
                                <li key={topic} className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-black hover:text-white transition">
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>

            <footer className="mt-12 pt-8 border-t-2 border-gray-200 text-center text-sm text-gray-500">
                &copy; 2025 {displayedLogo}. All rights reserved.
            </footer>
        </div>
    );
};

export default RedesignedNews;
