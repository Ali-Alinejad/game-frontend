export type Language = 'en' | 'fa';

export interface User {
  name: string;
  avatar: string;
}

export interface Translations {
  [key: string]: {
    logo: string;
    logoSubtitle: string;
    home: string;
    games: string;
    news: string;
    reviews: string;
    community: string;
    trending: string;
    downloads: string;
    trailers: string;
    searchPlaceholder: string;
    login: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDescription: string;
    enterGameFord: string;
    discoverMore: string;
    trendingNow: string;
    trendingDescription: string;
    playNow: string;
    whyChoose: string;
    whyDescription: string;
    nextGenGaming: string;
    nextGenDesc: string;
    globalCommunity: string;
    globalDesc: string;
    epicTournaments: string;
    epicDesc: string;
    lightningFast: string;
    lightningDesc: string;
    crossPlatform: string;
    crossDesc: string;
    liveStreaming: string;
    liveDesc: string;
    joinRevolution: string;
    joinDesc: string;
    activePlayers: string;
    gamesLibrary: string;
    countries: string;
    prizePools: string;
    stayInGame: string;
    stayDesc: string;
    subscribe: string;
    emailPlaceholder: string;
    readyToAscend: string;
    readyDesc: string;
    enterGameFordNow: string;
    joinCommunity: string;
    freeToPlay: string;
    browseGames: string;
    tournaments: string;
    leaderboards: string;
    achievements: string;
    forums: string;
    discord: string;
    support: string;
    feedback: string;
    footer: string;
  };
}

export interface MenuItemType {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  path: string;
}

export interface FeatureType {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

export interface GameType {
  title: string;
  genre: string;
  rating: number;
  players: string;
}

export interface StatType {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

export interface AnimatedSphereProps {
  position: [number, number, number];
  color: string;
  size?: number;
}

export interface Scene3DProps {
  scrollY: number;
}

export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
  gradient: string;
}

export interface GameCardProps {
  title: string;
  genre: string;
  image?: string;
  rating: number;
  players: string;
  lang: Language;
}