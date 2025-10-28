export type NewsCategory = 
  | 'breaking'
  | 'reviews'
  | 'updates'
  | 'releases'
  | 'esports'
  | 'industry'
  | 'hardware'
  | 'guides';

export interface NewsAuthor {
  id: string;
  name: string;
  avatar?: string;
  title: string;
}

export interface NewsArticle {
  id: string;
  title: {
    en: string;
    fa: string;
  };
  slug: string;
  excerpt: {
    en: string;
    fa: string;
  };
  content: {
    en: string;
    fa: string;
  };
  category: NewsCategory;
  tags: string[];
  author: NewsAuthor;
  publishedAt: Date;
  updatedAt?: Date;
  featuredImage: string;
  images?: string[];
  readTime: number; // in minutes
  views: number;
  featured?: boolean;
  trending?: boolean;
}

export interface NewsFilter {
  category?: NewsCategory;
  tag?: string;
  search?: string;
  sortBy?: 'latest' | 'popular' | 'trending';
}