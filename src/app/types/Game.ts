export interface Game {
  id: string;
  title: {
    en: string;
    fa: string;
  };
  marketPrice: number;
  hasDiscount: boolean;
  platform: string[];
  releaseDate: string;
  betaDate?: string | null;
  image?: string;
  backgroundImage?: string;
  developer: string;
  genres: string[];
  tags: string[];
  officialWebsiteUrl?: string;
  trailerUrl?: string;
  supportedLanguages: string[];
  developerInfo: {
    description: string | { en: string; fa: string };
    website: string;
    founded: string;
    logo?: string;
  };
  description: {
    short: {
      english: string;
      persian: string;
    };
    long: {
      english: string;
      persian: string;
    };
    storyline: {
      english: string;
      persian: string;
    };
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

export interface SuggestedGame {
  id: number;
  title: string | { en: string; fa: string };
  image: string;
  genres: string[];
  rating: number;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: Date;
  likes: number;
  rating?: number;
}

export interface TabItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

export interface SystemRequirements {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
  typeStorage:string;
}

export interface Download {
  title: string;
  url: string;
  size: string;
}