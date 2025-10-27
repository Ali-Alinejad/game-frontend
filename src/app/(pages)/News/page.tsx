// news/pages/NewsIndex.tsx
import ArticleCard from '@/app/component/News/ArticleCard';
import FeaturedArticleHero from '@/app/component/News/FeaturedArticleHero';
import SmallArticle from '@/app/component/News/SmallArticle';
import { mockNewsArticles } from '@/app/types/News/mockdataNews';
import { NewsArticle } from '@/app/types/News/NewsType';
import { getFilteredArticles } from '@/app/types/News/utils/newsUtils';
import React from 'react';

// Import Reusable Components

// --- Placeholder Component for a Section ---
const NewsSection: React.FC<{ title: string, articles: NewsArticle[], language: 'en' | 'fa' }> = ({ title, articles, language }) => (
  <section className="mt-10 border-t pt-6">
    <h2 className="text-3xl font-serif font-bold border-b-2 border-red-600 inline-block pb-1 mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.slice(0, 3).map(article => (
        <ArticleCard 
          key={article.id} 
          article={article} 
          size="medium" 
          language={language}
        />
      ))}
    </div>
  </section>
);
// ------------------------------------------

const NewsIndex: React.FC = () => {
  // --- Data Fetching/Filtering ---
  const language: 'en' | 'fa' = 'en'; // Assume language context/setting
  const featuredArticle = getFilteredArticles(mockNewsArticles, 'featured', 1)[0] || mockNewsArticles[0];
  const secondaryFeatured = getFilteredArticles(mockNewsArticles, 'featured', 4).slice(1);
  const trendingArticles = getFilteredArticles(mockNewsArticles, 'trending', 5);
  const allArticles = mockNewsArticles.filter(a => a.id !== featuredArticle?.id); // Rest of the articles

  if (!featuredArticle) {
    return <div>No news articles found.</div>;
  }
  // ------------------------------------------

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* HEADER BAR (Times-like branding/nav would go here) */}
      <header className="text-center border-b-4 border-black pb-4 mb-8">
        <h1 className="text-8xl font-serif font-black tracking-tighter">THE GAMING TIMES</h1>
        <p className="mt-2 text-sm text-gray-600">
          MONDAY, OCTOBER 27, 2025 • LATEST IN GAMING, ESPORTS, AND HARDWARE
        </p>
      </header>
      
      {/* MAIN FEATURED GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* L1: Hero Article (2/3 width on desktop) */}
        <div className="lg:col-span-2">
          <FeaturedArticleHero article={featuredArticle} language={language} />
        </div>

        {/* L2: Trending/Sidebar (1/3 width on desktop) */}
        <div className="lg:col-span-1 border-l-2 border-gray-200 pl-8">
          <h2 className="text-2xl font-serif font-bold border-b pb-2 mb-4">Trending Now</h2>
          <div className="space-y-4">
            {trendingArticles.map((article, index) => (
              <div key={article.id} className="pt-2">
                <SmallArticle article={article} language={language} />
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t">
            <h2 className="text-2xl font-serif font-bold border-b pb-2 mb-4">More Featured</h2>
            <div className="space-y-6">
              {secondaryFeatured.map(article => (
                <SmallArticle key={article.id} article={article} language={language} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ADDITIONAL SECTIONS (Hardware, Reviews, Esports) */}
      
      {/* Example 1: Latest Hardware News */}
      <NewsSection 
        title="Hardware & Tech" 
        articles={allArticles.filter(a => a.category === 'hardware')} 
        language={language} 
      />

      {/* Example 2: Reviews & Guides */}
      <NewsSection 
        title="Reviews & Guides" 
        articles={allArticles.filter(a => a.category === 'reviews' || a.category === 'guides')} 
        language={language} 
      />
      
      {/* FOOTER (Simplified) */}
      <footer className="mt-12 pt-8 border-t-2 border-gray-200 text-center text-sm text-gray-500">
        &copy; 2025 The Gaming Times. All rights reserved.
      </footer>
    </div>
  );
};

export default NewsIndex;