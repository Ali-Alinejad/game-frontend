"use client";

import React, { useEffect, useState } from 'react';
import FeaturedArticleHero from './articles/FeaturedArticleHero';
import ArticleCard from './articles/ArticleCard';
import SmallArticle from './articles/SmallArticle';
import { mockNewsArticles } from '@/lib/types/news/mockdataNews';
import { getFilteredArticles } from '@/lib/types/news/utils/newsUtils';
import { ThemeProvider, Card, Button, CategoryChip, GradientBorder } from './ui';

interface RedesignedNewsProps {
    language?: 'en' | 'fa';
    t?: { logo?: any;[key: string]: any };
}

const localT = {
    logo: { en: 'THE GAMING TIMES', fa: 'اخبار بازی' },
    latest: { en: 'Latest News', fa: 'آخرین اخبار' },
    trending: { en: 'Trending', fa: 'پربازدید' },
    topics: { en: 'Topics', fa: 'موضوعات' },
    loadMore: { en: 'Load More', fa: 'بیشتر' },
    sortBy: { en: 'Sort by:', fa: 'مرتب سازی:' },
};

const RedesignedNews: React.FC<RedesignedNewsProps> = ({ language: initialLang = 'en', t = { logo: localT.logo } }) => {
    const [language, setLanguage] = useState<'en' | 'fa'>(initialLang);
    const featuredArticle = getFilteredArticles(mockNewsArticles, 'featured', 1)[0] || mockNewsArticles[0];
    const trending = getFilteredArticles(mockNewsArticles, 'trending', 5);
    const rest = mockNewsArticles.filter(a => a.id !== featuredArticle?.id);

    const isRTL = language === 'fa';

    // compute displayed text: support string or object shape for translations
    const getText = (key: keyof typeof localT) => {
        const translation = t?.[key] ?? localT[key];
        if (typeof translation === 'string') return translation;
        if (typeof translation === 'object') return translation[language] ?? translation.en;
        return String(translation);
    };

    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.body.classList.toggle('font-fa', isRTL);
        document.body.classList.toggle('font-sans', !isRTL);
    }, [isRTL]);

    return (
        <ThemeProvider>
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header with gradient border */}
                <GradientBorder className="mb-8">
                    <Card hover={false} className="bg-zinc-800/50 backdrop-blur">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6">
                            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-4'}`}>
                                <div className="w-16 h-16 relative flex-shrink-0">
                                    <img src="/logoes/logoGold.png" alt="logo" className="object-contain w-full h-full" />
                                </div>
                                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-tight bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                                        {getText('logo')}
                                    </h1>
                                    <p className="mt-1 text-sm text-gray-400">LATEST IN GAMING, ESPORTS & HARDWARE</p>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-0 flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                    <Button
                                        variant={language === 'en' ? 'primary' : 'outline'}
                                        size="sm"
                                        onClick={() => setLanguage('en')}>
                                        EN
                                    </Button>
                                    <Button
                                        variant={language === 'fa' ? 'primary' : 'outline'}
                                        size="sm"
                                        onClick={() => setLanguage('fa')}>
                                        فا
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </GradientBorder>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {/* Featured Hero */}
                        {featuredArticle && (
                            <Card className="mb-8">
                                <FeaturedArticleHero article={featuredArticle} language={language} />
                            </Card>
                        )}

                        {/* Latest News Section */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-serif font-bold text-amber-300">{getText('latest')}</h2>
                                <div className="flex items-center space-x-2 text-sm text-gray-400">
                                    <span className="hidden sm:inline">{getText('sortBy')}</span>
                                    <select className="bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-gray-300">
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

                            <div className="text-center">
                                <Button size="lg">{getText('loadMore')}</Button>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <Card className="sticky top-4 p-6 space-y-8">
                            {/* Trending Section */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-amber-300">{getText('trending')}</h3>
                                <div className="space-y-4">
                                    {trending.map(a => (
                                        <SmallArticle key={a.id} article={a} language={language} />
                                    ))}
                                </div>
                            </div>

                            {/* Topics Section */}
                            <div className="pt-6 border-t border-zinc-700/50">
                                <h3 className="text-xl font-semibold mb-4 text-amber-300">{getText('topics')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Hardware', 'Reviews', 'Esports', 'Guides', 'Indie', 'Features'].map(topic => (
                                        <CategoryChip key={topic} category={topic} textLanguage={language} />
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </aside>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default RedesignedNews;
