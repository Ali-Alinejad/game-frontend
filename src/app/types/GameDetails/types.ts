// Game-related types
export interface Game {
    title: string | { en: string; fa: string };
    description?: string | { english: string; persian: string };
    image?: string;
    developer: string;
    platform: string;
    genres: string[];
    supportedLanguages: string[];
    releaseDate?: string;
    betaDate?: string;
    marketPrice: number;
    trailerUrl?: string;
    officialWebsiteUrl: string;
    developerInfo: {
        description: string | { en: string; fa: string };
        website: string;
        founded: string;
        logo?: string;
    };
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
}

export interface Download {
    title: string;
    url: string;
    size: string;
}