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
  screenshots ?:[]
  backgroundImage?: string;
  developer: string;
  genres: string[];
  tags: string[];
  officialWebsiteUrl?: string;
  trailerUrl?: string;
  supportedLanguages: string[];
 description: {
        short: {
            english: string;
            persian: string;
        } | string;
        long: {
            english: string;
            persian: string;
        } | string;
        storyline?: {
            english: string;
            persian: string;
        } | string;
    };
  
    developerInfo?: {
        logo?: string;
        description: {
            en: string;
            fa: string;
        } | string;
        website: string;
        founded: string;
    };
    systemRequirements?: {
        minimum: {
            os: string;
            ram: string;
            cpu: string;
            gpu: string;
            storage: string;
            typeStorage: string;
        };
        recommended: {
            os: string;
            ram: string;
            cpu: string;
            gpu: string;
            storage: string;
            typeStorage: string;
        };
    };
    
    crackVersions?: CrackVersion[];
}
 export interface CrackVersion {
    name: string;
    version: string;
    totalSize: string;
    files: CrackFile[];
}
export interface CrackFile {
    name: string;
    size: string;
    url: string;
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