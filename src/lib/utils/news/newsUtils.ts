import { NewsArticle } from "@/lib/types/news/NewsType";

/**
 * Helper function to format the publication date like "X hours ago" or "Yesterday".
 * @param date The Date object of publication.
 * @returns A formatted string.
 */
export const formatTimeSince = (date: Date): string => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) return `${Math.floor(interval)} years ago`;
  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)} months ago`;
  interval = seconds / 86400;
  if (interval > 1) return `${Math.floor(interval)} days ago`;
  interval = seconds / 3600;
  if (interval > 1) return `${Math.floor(interval)} hours ago`;
  interval = seconds / 60;
  if (interval > 1) return `${Math.floor(interval)} minutes ago`;
  return "just now";
};

/**
 * Gets a subset of articles based on criteria (e.g., featured, trending).
 * @param articles The full list of articles.
 * @param criteria The property to filter by ('featured' or 'trending').
 * @param limit The max
 * imum number of articles to return.
 * @returns A filtered array of NewsArticle.
 */
export const getFilteredArticles = (
  articles: NewsArticle[],
  criteria: "featured" | "trending",
  limit?: number
): NewsArticle[] => {
  const filtered = articles
    .filter((article) => article[criteria])
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()); // Sort by newest first

  return limit ? filtered.slice(0, limit) : filtered;
};
