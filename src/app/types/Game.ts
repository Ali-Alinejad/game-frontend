export interface Game {
  _id: string;
  title: {
    en:string,
    fa:string
  };
  marketPrice: number;
  hasDiscount: boolean;
  platform: string;
  releaseDate: string;
  betaDate?: string | null;
  image?: string;
  developer: string;
  genres: string[];
  tags: string[];
  trailerUrl?: string;
  supportedLanguages: string[];
  description: {
    short: string;
    english: string;
    persian: string;
  };
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  time: string;
  image: string;
}

export interface Story {
  id: number;
  title: string;
  image: string;
}