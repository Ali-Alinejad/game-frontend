// app/(pages)/News/[slug]/page.tsx

import ArticleView from '@/components/news/components/ArticleView';
import { mockNewsArticles } from '@/lib/types/news/mockdataNews';
import { notFound } from 'next/navigation';

// Helper function
function getArticleBySlug(slug: string) {
  return mockNewsArticles.find(article => article.slug === slug);
}

export interface NewsArticle {
  slug: string;
  title: { en: string; fa: string };
  excerpt: { en: string; fa: string };
  content: { en: string; fa: string };
  breaking: boolean; // ❌ الان ممکنه optional باشه
  // ...
}


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all articles
export async function generateStaticParams() {
  return mockNewsArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title.en} - The Gaming Times`,
    description: article.excerpt.en,
  };
}

// Main component
export default async function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }
  function normalizeArticle(article: any) {
  return {
    ...article,
    breaking: article.breaking ?? false,
    publishedAt: article.publishedAt instanceof Date
      ? article.publishedAt.toISOString()
      : article.publishedAt ?? '',
    trending: article.trending ?? false, 
  };
}

return <ArticleView article={normalizeArticle(article)} />;

;
}