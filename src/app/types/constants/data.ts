import { 
  Home, 
  Gamepad2, 
  Newspaper, 
  Users, 
  TrendingUp, 
  Video,
  Trophy,
  Zap,
  Globe,
  MessageCircle
} from 'lucide-react';
import { MenuItemType, FeatureType, GameType, StatType, Language } from '../indexHeroSection';

export const getMenuItems = (t: Record<string, string>): MenuItemType[] => [
  { id: 'home', label: t.home, icon: Home, gradient: 'from-rose-500 to-red-600', path: '/' },
  { id: 'games', label: t.games, icon: Gamepad2, gradient: 'from-purple-500 to-pink-600', path: '/Games' },
  { id: 'news', label: t.news, icon: Newspaper, gradient: 'from-blue-500 to-cyan-600', path: '/News' },
  { id: 'trending', label: t.trending, icon: TrendingUp, gradient: 'from-red-500 to-pink-600', path: '/Trending' },
  { id: 'trailers', label: t.trailers, icon: Video, gradient: 'from-indigo-500 to-purple-600', path: '/Trailers' },
];

export const getFeatures = (t: any): FeatureType[] => [
  {
    icon: Gamepad2,
    title: t.nextGenGaming,
    description: t.nextGenDesc,
    gradient: "from-yellow-500/20 to-amber-600/20"
  },
  {
    icon: Users,
    title: t.globalCommunity,
    description: t.globalDesc,
    gradient: "from-yellow-500/20 to-amber-600/20"
  },
  {
    icon: Trophy,
    title: t.epicTournaments,
    description: t.epicDesc,
    gradient: "from-yellow-500/20 to-amber-600/20"
  },
  {
    icon: Zap,
    title: t.lightningFast,
    description: t.lightningDesc,
    gradient: "from-yellow-500/20 to-amber-600/20"
  },
  {
    icon: Globe,
    title: t.crossPlatform,
    description: t.crossDesc,
    gradient: "from-yellow-500/20 to-amber-600/20"
  },
  {
    icon: MessageCircle,
    title: t.liveStreaming,
    description: t.liveDesc,
    gradient: "from-yellow-500/30 to-amber-600/30"
  }
];

export const getTrendingGames = (lang: Language): GameType[] => [
  { 
    title: lang === 'en' ? "Cyber Strike 2077" : "ضربه سایبری ۲۰۷۷", 
    genre: lang === 'en' ? "FPS" : "تیراندازی اول شخص", 
    rating: 4.8, 
    players: "1.2M" 
  },
  { 
    title: lang === 'en' ? "Fantasy Realms" : "قلمروهای فانتزی", 
    genre: lang === 'en' ? "RPG" : "نقش‌آفرینی", 
    rating: 4.9, 
    players: "800K" 
  },
  { 
    title: lang === 'en' ? "Speed Legends" : "افسانه‌های سرعت", 
    genre: lang === 'en' ? "Racing" : "مسابقه‌ای", 
    rating: 4.7, 
    players: "650K" 
  },
  { 
    title: lang === 'en' ? "Battle Royale X" : "بتل رویال ایکس", 
    genre: lang === 'en' ? "Battle Royale" : "بتل رویال", 
    rating: 4.6, 
    players: "2.1M" 
  }
];

export const getStats = (t: any): StatType[] => [
  { number: "50M+", label: t.activePlayers, icon: Users },
  { number: "10K+", label: t.gamesLibrary, icon: Gamepad2 },
  { number: "150+", label: t.countries, icon: Globe},
  { number: "$100M+", label: t.prizePools, icon: Trophy }
];