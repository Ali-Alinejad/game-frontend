"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Author {
  id: string;
  name: string;
  title: string;
  avatar: string | null;
  bio?: string;
}

interface Article {
  id: string;
  slug: string;
  title: { en: string; fa: string };
  excerpt: { en: string; fa: string };
  content: { en: string; fa: string };
  category: string;
  tags: string[];
  author: Author;
  publishedAt: Date;
  featuredImage: string;
  readTime: number;
  views: number;
  featured?: boolean;
  breaking?: boolean;
}

// Mock Data
const mockAuthors: Author[] = [
  { id: '1', name: 'John Peterson', title: 'Senior Gaming Editor', avatar: '/images/avatars/man1.png', bio: 'Gaming journalist with 10+ years experience' },
  { id: '2', name: 'Sarah Mitchell', title: 'Reviews Editor', avatar: null, bio: 'Expert in game reviews and analysis' },
  { id: '3', name: 'David Chen', title: 'Esports Correspondent', avatar: null, bio: 'Following competitive gaming scene' },
];

const mockNewsArticles: Article[] = [
  {
    id: '1',
    slug: 'path-of-exile-2-early-access',
    title: { en: 'Path of Exile 2 Early Access Announced for December 2024', fa: 'پاث آو اکزایل ۲: دسترسی زودهنگام اعلام شد' },
    excerpt: { en: 'Grinding Gear Games has officially announced the early access release date for their highly anticipated action RPG sequel.', fa: 'Grinding Gear Games تاریخ انتشار دسترسی زودهنگام را اعلام کرد.' },
    content: { 
      en: `Grinding Gear Games has officially announced that Path of Exile 2 will enter early access on December 6, 2024. This announcement comes after years of anticipation from the ARPG community.

The sequel promises to revolutionize the action RPG genre with its innovative skill system and stunning graphics powered by a new engine. Players will experience a completely new campaign set 20 years after the original game's events.

Key features include a revamped skill gem system, enhanced graphics with improved lighting and physics, and a darker, more atmospheric setting. The game will launch with six character classes, each offering unique playstyles and abilities.

Early access supporters will gain immediate access to the first three acts, with regular content updates planned throughout the early access period. The full release is expected in late 2025.

The development team has spent years refining the gameplay mechanics, ensuring that Path of Exile 2 delivers a deep and engaging experience that honors the original while pushing the boundaries of the genre.

Players can expect improved visual fidelity, smoother combat animations, and a more intuitive user interface. The game's new engine allows for dynamic weather systems and destructible environments, adding layers of strategy to combat encounters.`, 
      fa: 'Grinding Gear Games به طور رسمی اعلام کرد که Path of Exile 2 در 6 دسامبر 2024 وارد دسترسی زودهنگام خواهد شد. این اعلامیه پس از سال‌ها انتظار صورت گرفته است...' 
    },
    category: 'Gaming',
    tags: ['Path of Exile 2', 'Action RPG', 'Early Access', 'ARPG'],
    author: mockAuthors[0],
    publishedAt: new Date(Date.now() - 1000 * 60 * 30),
    featuredImage: '/images/Games/starwars.png',
    readTime: 5,
    views: 15420,
    featured: true,
    breaking: true,
  },
  {
    id: '2',
    slug: 'doom-dark-ages',
    title: { en: 'DOOM: The Dark Ages Reveals Medieval Mayhem', fa: 'دوم: عصر تاریکی - نمایش هرج و مرج قرون وسطایی' },
    excerpt: { en: 'id Software showcases brutal medieval combat with mechs and dragons in the upcoming prequel.', fa: 'id Software نبرد وحشیانه قرون وسطایی را نشان می‌دهد.' },
    content: { 
      en: `id Software has unveiled extensive gameplay footage of DOOM: The Dark Ages, marking a bold new direction for the franchise with its medieval setting.

The game takes place in a dark fantasy world where demons have invaded medieval kingdoms. Players will wield both traditional medieval weapons and futuristic technology in an explosive combination.

New gameplay mechanics include shield-based combat, rideable war machines, and dragon combat sequences. The developers have confirmed that the game maintains the series' signature fast-paced action while adding strategic depth.

The visual design combines gothic architecture with hellish landscapes, creating an atmosphere unlike anything seen in previous DOOM games. Dynamic lighting and particle effects bring the medieval battlefields to life.

id Software's creative director emphasized that The Dark Ages explores the Doom Slayer's origins, revealing how he became the legendary warrior. The narrative will connect to the modern DOOM games while standing on its own as a compelling prequel.`, 
      fa: 'id Software فیلم گیم‌پلی گسترده‌ای را رونمایی کرد...' 
    },
    category: 'Gaming',
    tags: ['DOOM', 'FPS', 'Action', 'Medieval'],
    author: mockAuthors[1],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    featuredImage: '/images/Games/minecraft.png',
    readTime: 6,
    views: 12350,
    featured: true,
  },
  {
    id: '3',
    slug: 'assassins-creed-shadows',
    title: { en: 'Assassin\'s Creed Shadows Delayed to February 2025', fa: 'اساسینز کرید شادوز به فوریه ۲۰۲۵ تاخیر یافت' },
    excerpt: { en: 'Ubisoft announces delay to polish the feudal Japan adventure, citing quality improvements and player feedback.', fa: 'یوبی‌سافت تاخیر را اعلام می‌کند.' },
    content: { 
      en: `Ubisoft has announced a three-month delay for Assassin's Creed Shadows, moving the release from November 2024 to February 14, 2025.

The development team stated that the additional time will be used to refine gameplay mechanics, improve technical performance, and implement feedback from playtesting sessions. This marks the first mainline entry set in feudal Japan.

Shadows features dual protagonists: Naoe, a skilled shinobi assassin specializing in stealth, and Yasuke, a powerful samurai focused on direct combat. Each character offers distinct gameplay experiences and skill trees.

The game's feudal Japan setting has been meticulously researched, featuring authentic architecture, clothing, and cultural details. Players will explore bustling cities, serene temples, and dangerous battlefields across multiple regions.

Ubisoft has assured fans that pre-order customers will receive additional compensation for the wait, including exclusive in-game items and extended early access periods. The delay is being viewed positively by the community, who prefer a polished experience.`, 
      fa: 'یوبی‌سافت تاخیر سه ماهه را اعلام کرد...' 
    },
    category: 'News',
    tags: ['Assassin\'s Creed', 'Ubisoft', 'Japan', 'Delay'],
    author: mockAuthors[2],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
    featuredImage: '/images/Games/starwars.png',
    readTime: 4,
    views: 8920,
  },
  {
    id: '4',
    slug: 'counter-strike-2-update',
    title: { en: 'Counter-Strike 2 Major Balance Update Released', fa: 'به‌روزرسانی عمده کانتر استرایک ۲ منتشر شد' },
    excerpt: { en: 'Valve rolls out significant weapon balance changes and introduces new anti-cheat measures.', fa: 'والو تغییرات مهمی در تعادل سلاح‌ها ارائه می‌دهد.' },
    content: { 
      en: `Valve has released a substantial update for Counter-Strike 2, addressing long-standing community concerns about weapon balance and competitive integrity.

The update includes significant adjustments to popular weapons including the AWP, AK-47, and M4A4. Movement speed while scoped has been reduced, and spray patterns have been refined for better consistency.

Several competitive maps have received updates, with Dust 2 getting improved visibility and Mirage seeing adjustments to mid-control dynamics. These changes aim to create more balanced and strategic gameplay.

A new machine learning-based anti-cheat system has been implemented, which analyzes player behavior patterns to detect suspicious activity. Valve claims this will significantly reduce cheating in matchmaking.

Professional players have largely praised the changes, noting that Valve's responsiveness to community feedback demonstrates their commitment to the competitive scene. The update arrives just weeks before the next major tournament.`, 
      fa: 'والو یک به‌روزرسانی قابل توجه منتشر کرد...' 
    },
    category: 'Esports',
    tags: ['Counter-Strike 2', 'Valve', 'Update', 'Esports'],
    author: mockAuthors[0],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
    featuredImage: '/images/Games/minecraft.png',
    readTime: 5,
    views: 22100,
  },
];

// Utility Functions
const formatTimeSince = (date: Date, language: 'en' | 'fa') => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  const intervals = [
    { label: { en: 'year', fa: 'سال' }, seconds: 31536000 },
    { label: { en: 'month', fa: 'ماه' }, seconds: 2592000 },
    { label: { en: 'day', fa: 'روز' }, seconds: 86400 },
    { label: { en: 'hour', fa: 'ساعت' }, seconds: 3600 },
    { label: { en: 'minute', fa: 'دقیقه' }, seconds: 60 },
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return language === 'fa' 
        ? `${count} ${interval.label.fa} پیش`
        : `${count} ${interval.label.en}${count > 1 ? 's' : ''} ago`;
    }
  }
  return language === 'fa' ? 'اکنون' : 'just now';
};

const getArticleBySlug = (slug: string): Article | undefined => {
  return mockNewsArticles.find(article => article.slug === slug);
};

// Components
const Header = ({ language, onLanguageChange }: { language: 'en' | 'fa', onLanguageChange: (lang: 'en' | 'fa') => void }) => {
  const isRTL = language === 'fa';
  const categories = isRTL 
    ? ['سیاست', 'نظرات', 'فناوری', 'اخبار', 'بازی‌ها', 'ورزشی', 'جهان']
    : ['Politics', 'Opinions', 'Technology', 'News', 'Gaming', 'Sports', 'World'];

  return (
    <header className="sticky top-0  z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className={`flex items-center justify-between py-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3">
           
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 text-xs font-medium transition-colors ${language === 'en' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('fa')}
              className={`px-3 py-1 text-xs font-medium transition-colors ${language === 'fa' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              فارسی
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center  border-b border-gray-900">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-white mb-2" 
            style={{ fontFamily: 'Old English Text MT, Georgia, serif', letterSpacing: '0.05em' }}
          >
            {isRTL ? 'تایمز گیمینگ' : 'The Gaming Times'}
          </motion.h1>
         
        </div>

        {/* Navigation */}
        <nav className={`flex items-center justify-center gap-6 py-3 overflow-x-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-sm text-gray-300 hover:text-white whitespace-nowrap transition-colors font-medium relative group"
            >
              {cat}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

const HeroSlider = ({ articles, language, onArticleClick }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isRTL = language === 'fa';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [articles.length]);

  const currentArticle = articles[currentSlide];

  return (
    <div className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden bg-black group cursor-pointer" onClick={() => onArticleClick(currentArticle)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={currentArticle.featuredImage}
            alt={currentArticle.title[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
        <div className={`max-w-4xl ${isRTL ? 'mr-auto text-right' : ''}`}>
          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {currentArticle.breaking && (
              <span className="bg-yellow-500 text-black px-4 py-1.5 text-xs font-bold uppercase rounded-full animate-pulse">
                {isRTL ? 'فوری' : 'BREAKING'}
              </span>
            )}
            <span className="bg-red-600 text-white px-4 py-1.5 text-xs font-bold uppercase rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {isRTL ? 'داغ' : 'HOT'}
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 text-xs font-semibold uppercase rounded-full">
              {currentArticle.category}
            </span>
          </motion.div>

          <motion.h2
            key={`title-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight hover:text-gray-200 transition-colors"
            style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {currentArticle.title[language]}
          </motion.h2>

          <motion.p
            key={`excerpt-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-xl text-gray-200 mb-6 line-clamp-2"
          >
            {currentArticle.excerpt[language]}
          </motion.p>

          {/* Author Info */}
          <motion.div
            key={`author-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={`flex items-center gap-4 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold ring-2 ring-white/20">
              {currentArticle.author.avatar ? (
                <img src={currentArticle.author.avatar} alt="" className="w-12 h-12 rounded-full object-cover" />
              ) : (
                currentArticle.author.name.charAt(0)
              )}
            </div>
            <div className={isRTL ? 'text-right' : ''}>
              <p className="font-semibold text-white">{currentArticle.author.name}</p>
              <div className={`flex items-center gap-2 text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{formatTimeSince(currentArticle.publishedAt, language)}</span>
                <span>•</span>
                <span>{currentArticle.readTime} {isRTL ? 'دقیقه' : 'min'}</span>
                <span>•</span>
                <span>{currentArticle.views.toLocaleString()} {isRTL ? 'بازدید' : 'views'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCurrentSlide((prev) => (prev + 1) % articles.length);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {articles.map((_: any, idx: number) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(idx);
            }}
            className={`h-1 rounded-full transition-all ${
              idx === currentSlide ? 'bg-white w-12' : 'bg-gray-500 w-8'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ article, language, onClick, size = 'default' }: any) => {
  const isRTL = language === 'fa';
  const isLarge = size === 'large';

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className={`group cursor-pointer ${isLarge ? '' : 'border-b border-gray-800 pb-6'}`}
    >
      <div className={`${isLarge ? 'grid md:grid-cols-2 gap-8' : ''}`}>
        <div className={`relative overflow-hidden ${isLarge ? 'h-full min-h-[400px]' : 'mb-4 h-56'} rounded-lg`}>
          <img
            src={article.featuredImage}
            alt={article.title[language]}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold uppercase rounded">
            {article.category}
          </span>
        </div>

        <div className={`${isRTL ? 'text-right' : ''} flex flex-col justify-center`}>
          <h3 className={`font-serif font-bold text-white group-hover:text-gray-300 transition-colors mt-2 mb-4 ${
            isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
          } leading-tight`} style={{ fontFamily: 'Georgia, serif' }}>
            {article.title[language]}
          </h3>
          <p className={`text-gray-400 mb-4 ${isLarge ? 'text-lg' : 'text-sm'} line-clamp-3 leading-relaxed`}>
            {article.excerpt[language]}
          </p>
          <div className={`flex items-center gap-3 text-xs text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-gray-300 font-semibold">{article.author.name}</span>
            <span>•</span>
            <span>{formatTimeSince(article.publishedAt, language)}</span>
            <span>•</span>
            <span>{article.readTime} {isRTL ? 'دقیقه' : 'min read'}</span>
          </div>
          <div className={`flex items-center gap-2 mt-4 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
            {article.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const OpinionCard = ({ article, language, onClick }: any) => {
  const isRTL = language === 'fa';

  return (
    <motion.article 
      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={onClick} 
      className="flex gap-4 group cursor-pointer border-b border-gray-800 pb-4 hover:border-gray-700 transition-colors"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 overflow-hidden ring-2 ring-gray-800 group-hover:ring-gray-700 transition-all">
        {article.author.avatar ? (
          <img src={article.author.avatar} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
            {article.author.name.charAt(0)}
          </div>
        )}
      </div>
      <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
        <p className="text-xs text-gray-500 mb-1 font-medium">{article.author.name}</p>
        <h4 className="text-sm font-serif font-bold text-white group-hover:text-gray-300 transition-colors line-clamp-3 leading-snug">
          {article.title[language]}
        </h4>
      </div>
    </motion.article>
  );
};

const ArticleView = ({ article, language, onBack, onNavigate }: any) => {
  const isRTL = language === 'fa';
  const relatedArticles = mockNewsArticles.filter(a => 
    a.id !== article.id && (a.category === article.category || a.tags.some(tag => article.tags.includes(tag)))
  ).slice(0, 3);

  useEffect(() => {
    document.title = `${article.title[language]} - The Gaming Times`;
  }, [article, language]);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Article Header */}
      <div className="border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
            </svg>
            {isRTL ? 'بازگشت' : 'Back to articles'}
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-blue-400 uppercase font-bold tracking-wide bg-blue-400/10 px-3 py-1 rounded">
              {article.category}
            </span>
            {article.breaking && (
              <span className="text-xs text-yellow-400 uppercase font-bold tracking-wide bg-yellow-400/10 px-3 py-1 rounded">
                {isRTL ? 'فوری' : 'BREAKING'}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {article.title[language]}
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 mb-8 leading-relaxed">
            {article.excerpt[language]}
          </p>

          {/* Author & Meta */}
          <div className={`flex items-center gap-4 pb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ring-2 ring-gray-800">
              {article.author.avatar ? (
                <img src={article.author.avatar} alt="" className="w-14 h-14 rounded-full object-cover" />
              ) : (
                <span className="text-white font-bold text-xl">{article.author.name.charAt(0)}</span>
              )}
            </div>
            <div className={isRTL ? 'text-right' : ''}>
              <p className="font-semibold text-lg">{article.author.name}</p>
              <div className={`flex items-center gap-2 text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{article.author.title}</span>
                <span>•</span>
                <span>{formatTimeSince(article.publishedAt, language)}</span>
                <span>•</span>
                <span>{article.readTime} {isRTL ? 'دقیقه مطالعه' : 'min read'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="relative rounded-xl overflow-hidden">
          <img src={article.featuredImage} alt="" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <p className="text-xs text-gray-300">{article.title[language]}</p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none" style={{ fontFamily: 'Georgia, serif' }}>
          {article.content[language].split('\n\n').map((p: string, i: number) => (
            <p key={i} className="mb-8 text-gray-300 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
              {p}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className={`flex items-center gap-3 flex-wrap mt-12 pt-8 border-t border-gray-800 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-sm text-gray-500 font-semibold">{isRTL ? 'برچسب‌ها:' : 'Tags:'}</span>
          {article.tags.map((tag: string) => (
            <button
              key={tag}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white text-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Share Section */}
        <div className={`mt-8 pt-8 border-t border-gray-800 ${isRTL ? 'text-right' : ''}`}>
          <p className="text-sm text-gray-500 font-semibold mb-4">{isRTL ? 'اشتراک‌گذاری' : 'Share this article'}</p>
          <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {['Twitter', 'Facebook', 'LinkedIn', 'Copy Link'].map((platform) => (
              <button
                key={platform}
                className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white text-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className={`mt-12 p-6 bg-gray-900 rounded-xl border border-gray-800 ${isRTL ? 'text-right' : ''}`}>
          <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              {article.author.avatar ? (
                <img src={article.author.avatar} alt="" className="w-20 h-20 rounded-full object-cover" />
              ) : (
                <span className="text-white font-bold text-3xl">{article.author.name.charAt(0)}</span>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{article.author.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{article.author.title}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{article.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 py-12 mt-12 border-t border-gray-800">
          <h3 className={`text-3xl font-serif font-bold mb-8 ${isRTL ? 'text-right' : ''}`}>
            {isRTL ? 'مقالات مرتبط' : 'Related Articles'}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => onNavigate(related.slug)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <img
                    src={related.featuredImage}
                    alt={related.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-gray-500 uppercase font-semibold">{related.category}</span>
                <h4 className="text-lg font-serif font-bold mb-2 mt-1 group-hover:text-gray-400 transition-colors line-clamp-2">
                  {related.title[language]}
                </h4>
                <p className="text-sm text-gray-500">
                  {formatTimeSince(related.publishedAt, language)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main Component
const WashingtonPostNews = () => {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const [currentPage, setCurrentPage] = useState<'home' | string>('home');
  const isRTL = language === 'fa';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isRTL, currentPage]);

  const handleNavigate = (slug: string) => {
    setCurrentPage(slug);
    window.history.pushState({}, '', `/news/${slug}`);
  };

  const handleBack = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
  };

  // Handle article view
  if (currentPage !== 'home') {
    const article = getArticleBySlug(currentPage);
    if (article) {
      return (
        <>
          <Header language={language} onLanguageChange={setLanguage} />
          <ArticleView 
            article={article} 
            language={language} 
            onBack={handleBack}
            onNavigate={handleNavigate}
          />
        </>
      );
    }
  }

  const featuredArticles = mockNewsArticles.filter(a => a.featured);
  const regularArticles = mockNewsArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <HeroSlider 
        articles={featuredArticles} 
        language={language}
        onArticleClick={(article: Article) => handleNavigate(article.slug)}
      />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Section Title */}
        <div className={`mb-8 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-4xl font-serif font-bold mb-2">
            {isRTL ? 'اخبار برجسته' : 'Featured Stories'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <ArticleCard 
              article={regularArticles[0]} 
              language={language}
              onClick={() => handleNavigate(regularArticles[0].slug)}
              size="large"
            />

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {regularArticles.slice(1, 5).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  language={language}
                  onClick={() => handleNavigate(article.slug)}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Opinions Section */}
              <div>
                <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h3 className="text-2xl font-serif font-bold">
                    {isRTL ? 'نظرات' : 'Opinions'}
                  </h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  {mockNewsArticles.slice(0, 5).map((article) => (
                    <OpinionCard
                      key={article.id}
                      article={article}
                      language={language}
                      onClick={() => handleNavigate(article.slug)}
                    />
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className={`text-xl font-bold mb-3 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'خبرنامه' : 'Newsletter'}
                </h3>
                <p className={`text-sm text-gray-400 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL 
                    ? 'آخرین اخبار را در ایمیل دریافت کنید'
                    : 'Get the latest news in your inbox'}
                </p>
                <input
                  type="email"
                  placeholder={isRTL ? 'ایمیل شما' : 'Your email'}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 mb-3 transition-colors"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm font-semibold rounded-lg transition-colors">
                  {isRTL ? 'اشتراک' : 'Subscribe'}
                </button>
              </div>

              {/* Trending Topics */}
              <div>
                <h3 className={`text-xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'موضوعات ترند' : 'Trending Topics'}
                </h3>
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {['Gaming', 'Esports', 'Reviews', 'Hardware', 'News', 'Updates'].map((topic) => (
                    <button
                      key={topic}
                      className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white text-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* More Articles Section */}
        <div className={`border-t border-gray-800 pt-12 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-serif font-bold mb-8">
            {isRTL ? 'مقالات بیشتر' : 'More Articles'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mockNewsArticles.slice(0, 6).map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleNavigate(article.slug)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <img
                    src={article.featuredImage}
                    alt={article.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs text-gray-500 uppercase font-semibold">{article.category}</span>
                <h3 className="text-lg font-serif font-bold mt-2 mb-2 group-hover:text-gray-400 transition-colors line-clamp-2">
                  {article.title[language]}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatTimeSince(article.publishedAt, language)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-20 py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">
                {isRTL ? 'تایمز گیمینگ' : 'The Gaming Times'}
              </h3>
              <p className="text-sm text-gray-500">
                {isRTL 
                  ? 'منبع اصلی اخبار بازی و فناوری'
                  : 'Your source for gaming and tech news'}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{isRTL ? 'بخش‌ها' : 'Sections'}</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-white cursor-pointer transition-colors">{isRTL ? 'اخبار' : 'News'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{isRTL ? 'نقد و بررسی' : 'Reviews'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{isRTL ? 'ای‌اسپورت' : 'Esports'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{isRTL ? 'شرکت' : 'Company'}</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-white cursor-pointer transition-colors">{isRTL ? 'درباره ما' : 'About'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{isRTL ? 'تماس' : 'Contact'}</li>
                <li className="hover:text-white cursor-pointer transition-colors">{isRTL ? 'شغل‌ها' : 'Careers'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{isRTL ? 'دنبال کنید' : 'Follow Us'}</h4>
              <div className="flex gap-3">
                {['Twitter', 'Facebook', 'Instagram'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 {isRTL ? 'تایمز گیمینگ' : 'The Gaming Times'}. {isRTL ? 'تمامی حقوق محفوظ است' : 'All rights reserved'}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WashingtonPostNews;