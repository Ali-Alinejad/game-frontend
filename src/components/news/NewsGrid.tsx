// news/components/NewsGrid.tsx
import React from 'react';
import ArticleCard from './articles/ArticleCard';
import SmallArticle from './articles/SmallArticle';
import { NewsArticle } from '@/lib/types/news/NewsType';

interface NewsGridProps {
  articles: NewsArticle[];
  language: 'en' | 'fa';
  categoryTitle: string;
}

/**
 * Renders a section of news articles in a sophisticated, magazine-style grid.
 * - Article 1: Large Feature Card (Full width on small screens, 2/3 on large)
 * - Articles 2 & 3: Medium Cards (Below the feature, 1/3 width each)
 * - Articles 4-7: Small/List Items (In the dedicated 1/3 column)
 */
const NewsGrid: React.FC<NewsGridProps> = ({ articles, language, categoryTitle }) => {
  if (!articles || articles.length === 0) {
    return (
      <section className="mt-10 border-t pt-6">
        <h2 className="text-3xl font-serif font-bold border-b-2 border-red-600 inline-block pb-1 mb-6">{categoryTitle}</h2>
        <p className="text-gray-500">No recent articles found for this section.</p>
      </section>
    );
  }

  const mainFeature = articles[0];
  const mediumCards = articles.slice(1, 3);
  const listItems = articles.slice(3, 7);

  return (
    <section className="mt-10 pt-8">
      {/* SECTION HEADER */}
      <div className="flex justify-between items-end border-b-4 border-gray-800 pb-2 mb-6">
        <h2 className="text-4xl font-serif font-black">{categoryTitle.toUpperCase()}</h2>
        <a href={`/news/category/${mainFeature.category}`} className="text-sm text-blue-700 hover:text-blue-900 font-semibold hidden sm:block">
          View All {categoryTitle} »
        </a>
      </div>

      {/* GRID LAYOUT: 2/3 Feature Column + 1/3 List Column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* === LEFT COLUMN (2/3 width on large screens) === */}
        <div className="lg:col-span-2 space-y-8 border-r lg:pr-8">

          {/* Main Feature */}
          {mainFeature && (
            <div className="mb-8">
              <ArticleCard
                article={mainFeature}
                size="large"
                language={language}
              />
            </div>
          )}

          {/* Medium Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t">
            {mediumCards.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                size="medium"
                language={language}
              />
            ))}
          </div>
        </div>

        {/* === RIGHT COLUMN (1/3 width on large screens) === */}
        <div className="lg:col-span-1 border-t lg:border-t-0 pt-6 lg:pt-0">
          <h3 className="text-2xl font-serif font-bold pb-3 mb-4 border-b-2">Editor's Picks</h3>
          <div className="space-y-6 divide-y">
            {listItems.map(article => (
              <div key={article.id} className="pt-4 first:pt-0">
                <SmallArticle
                  article={article}
                  language={language}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;