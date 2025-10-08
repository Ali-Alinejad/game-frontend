"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import {
  Download, Calendar, HardDrive, Star, Cpu, MemoryStick, Image, Joystick,
  Film, MessageSquare, Code, Globe, CheckCircle, Send, ThumbsUp, Clock, User,
  AlertCircle, Sparkles, X, ArrowLeft, ArrowRight, BookOpen,
  Layers, Zap, Factory, Hash, Link, Gamepad, Target
} from 'lucide-react';

// --- TYPE DEFINITIONS & MOCK DATA ---

interface Game {
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
  developerInfo: {
    description: string | { en: string; fa: string };
    website: string;
    founded: string;
    logo?: string;
  };
}

interface SuggestedGame {
  id: number;
  title: string | { en: string; fa: string };
  image: string;
  genres: string[];
  rating: number;
}


const useLanguageStore = () => {
  const [lang, setLang] = useState<'en' | 'fa'>('fa');
  return { lang, setLang };
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 150, damping: 25 } },
};

const useLanguageFont = (lang: 'en' | 'fa') => {
  return {
    fontClass: lang === 'fa' ? 'font-vazir' : 'font-inter',
    direction: lang === 'fa' ? 'rtl' : 'ltr'
  };
};

interface Comment {
  id: string;
  author: string;
  text: string;
  date: Date;
  likes: number;
  rating?: number;
}

const mockGame: Game = {
  title: { en: "Path of Exile 2", fa: "مسیر تبعید ۲" },
  description: {
    english: "Path of Exile 2 is a next-generation Action RPG from Grinding Gear Games. Travel across the vast continent of Wraeclast and discover the corrupting influences that are spreading. The game features a new skill gem system, 100 distinct environments, and a deep, immersive storyline, making it a true successor to the critically acclaimed original. The game is known for its complex skill tree and dark, gritty atmosphere.",
    persian: "یک بازی نقش‌آفرینی اکشن نسل بعدی از Grinding Gear Games. در سراسر قاره پهناور Wraeclast سفر کنید و تأثیرات فاسدکننده را کشف کنید. این بازی دارای یک سیستم سنگ مهارت جدید، ۱۰۰ محیط مجزا و یک خط داستانی عمیق و غوطه‌ورکننده است که آن را به یک جانشین واقعی برای نسخه اصلی تحسین‌شده تبدیل می‌کند. فضای بازی ترکیبی از فانتزی تاریک و گوتیک است که تجربه‌ای غنی و چالشی را برای بازیکنان فراهم می‌آورد.",
  },
  image: "https://via.placeholder.com/1920x1080/1a1a1a/FFF?text=Path+of+Exile+2+Hero",
  developer: "Grinding Gear Games",
  platform: "PC / PS5 / Xbox Series X/S",
  genres: ["Action RPG", "Dark Fantasy", "Gothic"],
  supportedLanguages: ["English", "Persian", "French", "German", "Spanish", "Italian"],
  releaseDate: "2025-12-10",
  betaDate: "2025-07-09",
  marketPrice: 59.99,
  trailerUrl: "https://www.youtube.com/embed/L5C63Bq_i4U",
  developerInfo: {
    description: {
      en: "Grinding Gear Games is a New Zealand video game developer founded in 2006. They are best known for the popular free-to-play ARPG, Path of Exile. The studio focuses on creating deep, complex games for hardcore players.",
      fa: "Grinding Gear Games یک توسعه‌دهنده بازی‌های ویدیویی نیوزیلندی است که در سال ۲۰۰۶ تأسیس شد. آن‌ها بیشتر به خاطر بازی محبوب اکشن نقش‌آفرینی رایگان خود، Path of Exile، شناخته می‌شوند. این استودیو بر ساخت بازی‌های عمیق و پیچیده برای بازیکنان حرفه‌ای تمرکز دارد.",
    },
    website: "https://www.grindinggear.com/",
    founded: "2006",
    logo: "https://via.placeholder.com/64x64/27272a/FFF?text=GGG",
  }
};

const mockSuggestedGames: SuggestedGame[] = [
  { id: 101, title: { en: "Diablo 4", fa: "دیابلو ۴" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Diablo+4", genres: ["Action RPG"], rating: 8.5 },
  { id: 102, title: { en: "Lost Ark", fa: "لست آرک" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Lost+Ark", genres: ["MMORPG", "Action RPG"], rating: 8.2 },
  { id: 103, title: { en: "Elden Ring", fa: "الدن رینگ" }, image: "https://via.placeholder.com/400x250/242424/FFF?text=Elden+Ring", genres: ["Dark Fantasy", "Souls-like"], rating: 9.5 },
];


// --- TRANSLATION FUNCTION ---
const useTranslations = (lang: 'en' | 'fa', commentsCount: number) => {
  const t = {
    lang, setLang: (l: 'en' | 'fa') => { },
    about: lang === 'fa' ? 'درباره بازی و داستان' : 'About the Game & Story',
    trailer: lang === 'fa' ? 'ویدیوها و گیم‌پلی' : 'Videos & Gameplay',
    comments: lang === 'fa' ? 'نظرات کاربران' : 'User Comments',
    sysReq: lang === 'fa' ? 'مشخصات فنی و سخت‌افزار' : 'Technical & System Specs',
    downloads: lang === 'fa' ? 'لینک‌های دانلود' : 'Download Links',
    gameDetails: lang === 'fa' ? 'جزئیات فنی بازی' : 'Game Technical Details',
    standardEdition: lang === 'fa' ? 'نسخه استاندارد' : 'Standard Edition',
    free: lang === 'fa' ? 'رایگان' : 'Free',
    viewDownloads: lang === 'fa' ? 'دریافت بازی' : 'Get the Game',
    crackedTested: lang === 'fa' ? 'کرک شده و تست شده' : 'Cracked and Tested',
    totalSize: lang === 'fa' ? 'حجم' : 'Size',
    writeComment: lang === 'fa' ? 'نظر خود را بنویسید (حداقل ۱۰ کاراکتر)...' : 'Write your comment (min 10 characters)...',
    submit: lang === 'fa' ? 'ارسال نظر' : 'Submit Comment',
    rateGame: lang === 'fa' ? 'امتیازدهی' : 'Rating',
    invalidComment: lang === 'fa' ? 'لطفا نظر معتبر (حداقل ۱۰ حرف) و امتیاز را وارد کنید.' : 'Please enter a valid comment (min 10 chars) and a rating.',
    ratingRequired: lang === 'fa' ? 'لطفا امتیازی بدهید' : 'Please give a rating',
    hoursAgo: (hours: number) => lang === 'fa' ? `${hours} ساعت پیش` : `${hours}h ago`,
    commentsCount: `${commentsCount} ${lang === 'fa' ? 'نظر' : 'Comments'}`,
    developerSpotlight: lang === 'fa' ? 'معرفی استودیو سازنده' : 'Developer Spotlight',
    suggestedGames: lang === 'fa' ? 'بازی‌های پیشنهادی' : 'Suggested Games',
    website: lang === 'fa' ? 'وب‌سایت رسمی' : 'Official Website',
    founded: lang === 'fa' ? 'تأسیس' : 'Founded',
    noTrailer: lang === 'fa' ? 'تریلری برای نمایش موجود نیست.' : 'No trailer available for this game.',
  };

  const navItems = [
    { id: 'about', label: lang === 'fa' ? 'داستان و معرفی' : 'Story & Intro', icon: BookOpen },
    { id: 'developer', label: lang === 'fa' ? 'استودیو سازنده' : 'Developer', icon: Factory },
    { id: 'trailer', label: lang === 'fa' ? 'ویدیوها' : 'Videos', icon: Film },
    { id: 'requirements', label: lang === 'fa' ? 'مشخصات فنی' : 'Tech Specs', icon: Cpu },
    { id: 'comments', label: lang === 'fa' ? 'نظرات' : 'Comments', icon: MessageSquare },
    { id: 'suggested', label: lang === 'fa' ? 'مشابه‌ها' : 'Similar', icon: Gamepad },
  ];

  return { ...t, navItems };
};


// --- UTILITY COMPONENTS ---

const LanguageSwitcher: React.FC<{ lang: 'en' | 'fa'; setLang: (lang: 'en' | 'fa') => void }> = ({ lang, setLang }) => {
  return (
    <motion.button
      onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-1 bg-zinc-700/80 backdrop-blur-sm hover:bg-zinc-600 text-white text-sm rounded-full transition-colors border border-zinc-600 shadow-md"
    >
      <Globe className="w-4 h-4 text-amber-400" />
      {lang === 'fa' ? 'English' : 'فارسی'}
    </motion.button>
  );
};

const IconWithLabel: React.FC<{ icon: React.ComponentType<{ className?: string }>; label: string; value: string | React.ReactNode; hideBorder?: boolean; direction: string }> = ({ icon: Icon, label, value, hideBorder = false, direction }) => (
  <motion.div
    variants={itemVariants}
    className={twMerge(
      `flex items-center justify-between py-3 transition-colors`,
      !hideBorder && 'border-b border-zinc-700/50'
    )}
  >
    <div className="flex items-center">
      <Icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
      <span className={`text-base text-gray-400 font-medium ${direction === 'rtl' ? 'mr-3' : 'ml-3'}`}>
        {label}
      </span>
    </div>
    {typeof value === 'string' ? (
      <span className="text-base font-semibold text-gray-200">{value}</span>
    ) : (
      value
    )}
  </motion.div>
);

const StarRating: React.FC<{ rating: number; onRate?: (rating: number) => void; interactive?: boolean; hoverRating: number; setHoverRating: (rating: number) => void }> = ({ rating, onRate, interactive = false, hoverRating, setHoverRating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
      <motion.button
        key={star}
        whileHover={interactive ? { scale: 1.2 } : {}}
        onClick={() => interactive && onRate && onRate(star)}
        onMouseEnter={() => interactive && setHoverRating(star)}
        onMouseLeave={() => interactive && setHoverRating(0)}
        className={twMerge("transition-colors", !interactive && "cursor-default")}
        disabled={!interactive}
      >
        <Star
          className={twMerge(
            "w-4 h-4",
            (interactive ? (hoverRating || rating) : rating) >= star
              ? "fill-amber-400 text-amber-400"
              : "text-gray-600"
          )}
        />
      </motion.button>
    ))}
  </div>
);

const DownloadModal: React.FC<{ downloads: any[]; onClose: () => void; t: ReturnType<typeof useTranslations>; direction: string }> = ({ downloads, onClose, t, direction }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`bg-zinc-900 w-full max-w-lg rounded-2xl p-6 md:p-8 border-2 border-amber-500/50 shadow-2xl shadow-amber-900/40 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="flex justify-between items-center pb-4 border-b border-zinc-700 mb-6">
          <h3 className="text-3xl font-extrabold text-amber-400 flex items-center gap-3">
            <Download className="w-7 h-7" />
            {t.downloads}
          </h3>
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90, scale: 1.1 }}
            className="p-1 rounded-full bg-zinc-800 text-gray-400 hover:text-white transition-all"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {downloads.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, backgroundColor: '#3f3f46' }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between p-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-all duration-300 border border-zinc-700 hover:border-amber-500 group"
            >
              <div className="flex flex-col gap-1">
                <span className="text-lg">{item.title}</span>
                <span className="text-sm text-gray-500">{t.totalSize}: {item.size}</span>
              </div>
              <Download className="w-6 h-6 text-amber-400 group-hover:animate-bounce" />
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-gray-500 pt-6 mt-6 border-t border-zinc-700/50 text-center">
          {t.crackedTested} | {t.totalSize}: 120 GB
        </p>
      </motion.div>
    </motion.div>
  );
};

const SuggestedGameCard: React.FC<{ game: SuggestedGame; direction: string }> = ({ game, direction }) => {
  const getGameTitle = () => typeof game.title === 'string' ? game.title : (game.title as { en: string; fa: string })[direction === 'rtl' ? 'fa' : 'en'];

  return (
    <motion.a
      href={`/game/${game.id}`}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.5)" }}
      className="block bg-zinc-800/70 rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:border-amber-500/50 transition-all duration-300 group"
    >
      <div className="relative h-32 overflow-hidden">
        <img src={game.image} alt={getGameTitle()} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
      </div>
      <div className="p-3">
        <h4 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors mb-1 truncate">
          {getGameTitle()}
        </h4>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400" />
            {game.rating.toFixed(1)}
          </div>
          <span className="text-gray-400 text-xs px-2 py-0.5 bg-zinc-700 rounded-full">
            {game.genres[0]}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

// --- STICKY NAVIGATION BAR ---
interface StickyNavigationBarProps {
  t: ReturnType<typeof useTranslations>;
  direction: string;
  scrollToSection: (id: string) => void;
  currentSection: string;
}

const StickyNavigationBar: React.FC<StickyNavigationBarProps> = ({ t, direction, scrollToSection, currentSection }) => {
  return (
    <div className="sticky top-0 z-30 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-0">

        {/* Logo / Back Button */}
        <motion.a
          href="/game"
          className="flex items-center gap-3 text-lg font-bold text-gray-300 hover:text-amber-400 transition-colors py-3 md:py-4 flex-shrink-0"
          whileHover={{ x: direction === 'rtl' ? -3 : 3 }}
        >
          {direction === 'rtl' ? <ArrowRight className="w-5 h-5 text-amber-400" /> : <ArrowLeft className="w-5 h-5 text-amber-400" />}
          {direction === 'fa' ? 'بازگشت به فروشگاه' : 'Back to Store'}
        </motion.a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex flex-grow justify-start" dir={direction}>
          {t.navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={twMerge(
                "flex items-center gap-2 py-4 px-6 text-sm font-semibold transition-colors duration-300 border-b-4",
                currentSection === item.id
                  ? "text-amber-400 border-amber-500"
                  : "text-gray-400 border-transparent hover:text-white hover:border-zinc-700"
              )}
              whileHover={{ scale: 1.01 }}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher lang={t.lang} setLang={t.setLang as (l: 'en' | 'fa') => void} />
        </div>
      </div>

      {/* Mobile: Scrollable Nav Items */}
      <nav className="md:hidden flex overflow-x-auto border-t border-zinc-800/50 p-2 space-x-4 space-x-reverse-4" dir={direction}>
        {t.navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={twMerge(
              "flex items-center gap-2 py-2 px-3 text-sm font-medium transition-colors duration-300 rounded-full flex-shrink-0",
              currentSection === item.id
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "text-gray-400 hover:text-white hover:bg-zinc-800"
            )}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </motion.button>
        ))}
      </nav>
    </div>
  );
};


// --- MAIN LAYOUT COMPONENT ---

interface GameDetailsLayoutProps {
  game: Game;
}

const GameDetailsLayout: React.FC<GameDetailsLayoutProps> = ({ game = mockGame }) => {
  const { lang, setLang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  // Comment state initialization and handlers
  const [comments, setComments] = useState<Comment[]>(() => [
    { id: '1', author: lang === 'fa' ? 'علی کریمی' : 'Ali Karimi', text: lang === 'fa' ? 'گرافیک بازی واقعا خیره‌کننده بود! تجربه بی‌نظیری از فانتزی تاریک ارائه می‌دهد.' : 'The graphics were truly stunning! It offers an unparalleled experience of dark fantasy.', date: new Date(Date.now() - 2 * 60 * 60 * 1000), likes: 12, rating: 9 },
    { id: '2', author: lang === 'fa' ? 'سارا احمدی' : 'Sara Ahmadi', text: lang === 'fa' ? 'یکی از بهترین بازی‌های سال! سیستم مهارت جدید بازی یک شاهکار است.' : 'One of the best games of the year! The new skill system is a masterpiece.', date: new Date(Date.now() - 5 * 60 * 60 * 1000), likes: 8, rating: 10 }
  ]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [commentError, setCommentError] = useState('');
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());


  // Refs for major sections
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    developer: useRef<HTMLDivElement>(null),
    trailer: useRef<HTMLDivElement>(null),
    requirements: useRef<HTMLDivElement>(null),
    comments: useRef<HTMLDivElement>(null),
    suggested: useRef<HTMLDivElement>(null),
    'downloads-section': useRef<HTMLDivElement>(null),
  };

  const t = useTranslations(lang, comments.length);
  const tWithLang = { ...t, lang, setLang };

  // Helper functions
  const getGameTitle = (g: Game) => typeof g.title === 'string' ? g.title : (g.title as { en: string; fa: string })[lang] || (g.title as { en: string; fa: string }).en;
  const getGameDescription = (g: Game) => {
    if (g.description) {
      if (typeof g.description === 'object') {
        const langKey = lang === 'fa' ? 'persian' : 'english';
        return (g.description as any)[langKey] || (g.description as any).english;
      }
      return g.description;
    }
    return lang === 'fa' ? "توضیحات مفصل بازی در دسترس نیست." : "Detailed game description not available.";
  };
  // GameDetailsLayout.tsx (حدود خط 404 در نسخه کامل قبلی)

  // ... (سایر توابع کمکی) ...

  const getDeveloperDescription = (g: Game) => {
    // ✅ تغییر: ابتدا بررسی می‌کنیم که developerInfo وجود دارد یا نه.
    if (typeof g.developerInfo?.description === 'object') {
      // اگر آبجکت بود (شامل en/fa)، به زبان مورد نظر دسترسی پیدا می‌کنیم.
      return (g.developerInfo.description as any)[lang] || (g.developerInfo.description as any).en;
    }
    // اگر رشته بود (یا در حالت fallback اگر developerInfo?.description وجود داشت)، آن را برمی‌گردانیم.
    return g.developerInfo?.description || (lang === 'fa' ? "توضیحات توسعه‌دهنده در دسترس نیست." : "Developer description not available.");
  };

  // ... (ادامه کد) ...

  const systemRequirements = {
    os: lang === 'fa' ? "ویندوز ۱۰ ۶۴ بیتی" : "Windows 10 64-bit",
    cpu: lang === 'fa' ? "اینتل Core i5-8400 یا AMD Ryzen 5 2600" : "Intel Core i5-8400 or AMD Ryzen 5 2600",
    ram: lang === 'fa' ? "۱۶ گیگابایت رم" : "16 GB RAM",
    gpu: lang === 'fa' ? "انویدیا GeForce GTX 1060 یا AMD Radeon RX 580" : "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
    storage: lang === 'fa' ? "۱۵۰ گیگابایت حافظه SSD" : "150 GB SSD",
  };
  const downloads = [
    { title: lang === 'fa' ? 'لینک مستقیم (نیم بها)' : 'Direct Link (Half-Price)', url: "#download-link-1", size: "120 GB" },
    { title: lang === 'fa' ? 'تورنت (Torrent)' : 'Torrent Link', url: "#download-link-2", size: "120 GB" },
  ];

  // Comment Handlers (Simplified for this full code block)
  const handleSubmitComment = useCallback(() => {
    setCommentError('');
    if (!newComment.trim() || newComment.length < 10 || newRating === 0) {
      setCommentError(t.invalidComment);
      return;
    }
    const comment: Comment = { id: Date.now().toString(), author: lang === 'fa' ? 'کاربر جدید' : 'New User', text: newComment, date: new Date(), likes: 0, rating: newRating };
    setComments([comment, ...comments]);
    setNewComment('');
    setNewRating(0);
  }, [newComment, newRating, comments, lang, t]);

  function handleLikeComment(id: string): void {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === id
          ? {
            ...comment,
            likes: likedComments.has(id) ? comment.likes - 1 : comment.likes + 1
          }
          : comment
      )
    );
    setLikedComments(prev =>
      new Set(
        likedComments.has(id)
          ? Array.from(prev).filter(cid => cid !== id)
          : [...Array.from(prev), id]
      )
    );
  }

  // Scroll and Observer logic
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const stickyNavHeight = window.innerWidth < 768 ? 120 : 65;
      const yOffset = -stickyNavHeight;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.15,
      }
    );

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [lang]);


  // --- LAYOUT RENDER ---
  return (
    <motion.div
      className={twMerge(`min-h-screen ${fontClass} text-white bg-zinc-950/95`)}
      dir={direction}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* 🔴 Top Centered Branding - Logo and Site Name */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
        <motion.a
          href="/game"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-2xl font-black text-amber-400 drop-shadow-lg"
        >
          <Gamepad className="w-6 h-6" />
          DIGI MOVIE
        </motion.a>
      </div>

      {/* 🔴 Mobile Language Switcher */}
      <div className={twMerge(
        "fixed top-4 z-50 md:hidden",
        direction === 'rtl' ? 'left-4' : 'right-4'
      )}>
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </div>

      {/* Hero Section (ID for observer) */}
      <motion.div
        ref={sectionRefs.hero}
        id="hero"
        className="relative w-full h-[65vh] md:h-[55vh] overflow-hidden mb-6 pt-16"
      >
        <div className='absolute inset-0'>
          <div className='absolute inset-0' style={{ backgroundImage: `url(${game.image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' }}></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950  to-white/5" />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end p-4 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className='text-sm uppercase tracking-widest text-amber-400 font-bold px-3 py-1 bg-amber-400/10 rounded-full border border-amber-400/20 shadow-md'>
                {game.platform}
              </span>
              <span className='text-sm text-gray-300 flex items-center gap-1'><Code className='w-3 h-3 text-zinc-500' />{game.developer}</span>
            </div>

            <h1 className="text-6xl md:text-6xl font-black text-white leading-tight drop-shadow-lg mb-6">
              {getGameTitle(game)}
            </h1>

            <motion.button
              onClick={() => scrollToSection('downloads-section')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center py-3 px-8 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-zinc-900 font-bold rounded-xl transition-all duration-300 shadow-xl text-lg group"
            >
              <Download className={`w-5 h-5 ${direction === 'rtl' ? 'ml-3' : 'mr-3'} group-hover:animate-bounce`} />
              {t.viewDownloads}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* 🔴 Sticky Navigation Bar */}
      <StickyNavigationBar
        t={tWithLang}
        direction={direction}
        scrollToSection={scrollToSection}
        currentSection={currentSection}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 p-4 md:p-12 pt-10">

        {/* Main Column: About, Developer, Trailer, Comments, Suggested Games */}
        <div className="lg:col-span-2 space-y-16">

          {/* About Section */}
          <motion.section
            ref={sectionRefs.about}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            id="about"
          >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
              <div className="w-1 h-8 bg-amber-500 rounded-full"></div>
              {t.about}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
              {getGameDescription(game)}
            </p>
          </motion.section>

          {/* 🔴 Developer Spotlight Section (Clean Code with Optional Chaining) */}
          <motion.section
            ref={sectionRefs.developer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            id="developer"
            className="p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl"
          >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
              <Factory className="w-7 h-7 text-amber-500" />
              {t.developerSpotlight}
              <span className="text-base text-gray-400 font-normal">{game.developer}</span>
            </h2>

            <div className='flex items-start gap-6'>
              {/* ✅ FIX: Added Optional Chaining '?' to safely access logo 
                */}
              {game.developerInfo?.logo && (
                <img src={game.developerInfo.logo} alt={game.developer} className='w-16 h-16 rounded-lg border border-zinc-700 flex-shrink-0 object-cover' />
              )}
              <div className='flex-grow'>
                {/* فراخوانی تابع اصلاح شده (که اکنون ایمن است) */}
                <p className='text-gray-300 text-base leading-relaxed mb-4'>
                  {getDeveloperDescription(game)}
                </p>

                {/* ✅ FIX: اضافه کردن شرط بر روی game.developerInfo برای جلوگیری از خطای website */}
                {game.developerInfo && (
                  <div className='flex flex-wrap items-center gap-6'>
                    <a href={game.developerInfo.website} target="_blank" rel="noopener noreferrer"
                      className='flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold'>
                      <Link className='w-4 h-4' />
                      {t.website}
                    </a>
                    <span className='flex items-center gap-2 text-gray-400 text-sm'>
                      <Calendar className='w-4 h-4' />
                      {t.founded}: {game.developerInfo.founded}
                    </span>
                  </div>
                )}
              </div>

            </div>
          </motion.section>

          {/* Trailer (Refined - Smaller size and Fallback) */}
          <motion.section
            ref={sectionRefs.trailer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            id="trailer"
          >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
              <Film className="w-7 h-7 text-amber-500" />
              {t.trailer}
            </h2>

            {game.trailerUrl ? (
              <div className="aspect-video w-full lg:w-3/4 mx-auto bg-black rounded-xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={game.trailerUrl}
                  title="Official Game Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video w-full lg:w-3/4 mx-auto bg-zinc-800/70 border-4 border-dashed border-zinc-600 rounded-xl flex flex-col items-center justify-center text-gray-500 p-8 shadow-inner">
                <Film className='w-12 h-12 mb-3' />
                <p className='text-lg font-semibold'>{t.noTrailer}</p>
                <p className='text-sm'>{lang === 'fa' ? 'به زودی اضافه خواهد شد.' : 'Will be added soon.'}</p>
              </div>
            )}
          </motion.section>

          {/* System Requirements (Grid layout for better use of space) */}
          <motion.section
            ref={sectionRefs.requirements}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl"
            id="requirements"
          >
            <h3 className="text-2xl font-extrabold text-white mb-4 pb-3 border-b border-zinc-700/50 flex items-center gap-2">
              <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
              {t.sysReq}
              <Zap className="w-5 h-5 text-red-500 ml-1" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              <IconWithLabel icon={Cpu} label={lang === 'fa' ? 'پردازنده' : 'Processor'} value={<span className="text-sm text-right">{systemRequirements.cpu}</span>} direction={direction} />
              <IconWithLabel icon={MemoryStick} label={lang === 'fa' ? 'رم' : 'Memory'} value={systemRequirements.ram} direction={direction} />
              <IconWithLabel icon={Image} label={lang === 'fa' ? 'گرافیک' : 'Graphics'} value={<span className="text-sm text-right">{systemRequirements.gpu}</span>} direction={direction} />
              <IconWithLabel icon={Layers} label={lang === 'fa' ? 'سیستم عامل' : 'OS'} value={systemRequirements.os} direction={direction} />
              <IconWithLabel icon={HardDrive} label={lang === 'fa' ? 'فضای دیسک' : 'Storage'} value={systemRequirements.storage} hideBorder direction={direction} />
            </div>
          </motion.section>

          {/* Comments Section */}
          <motion.section
            ref={sectionRefs.comments}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            id="comments"
          >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
              <MessageSquare className="w-7 h-7 text-amber-500" />
              {t.comments}
              <span className="text-base text-gray-500 font-normal">
                ({t.commentsCount})
              </span>
            </h2>

            {/* Comment Form */}
            <motion.div
              className="mb-10 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700 shadow-inner shadow-zinc-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <label className="block text-lg font-bold text-gray-300 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  {t.rateGame} (1-10)
                </label>
                <StarRating
                  rating={newRating}
                  onRate={setNewRating}
                  interactive={true}
                  hoverRating={hoverRating}
                  setHoverRating={setHoverRating}
                />
              </div>
              <textarea
                rows={4}
                value={newComment}
                onChange={(e) => {
                  setNewComment(e.target.value);
                  setCommentError('');
                }}
                placeholder={t.writeComment}
                className="w-full p-4 bg-zinc-900/70 border border-amber-500/30 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none shadow-inner text-base"
              />

              <AnimatePresence>
                {commentError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {commentError}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={handleSubmitComment}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-zinc-900 font-bold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                {t.submit}
              </motion.button>
            </motion.div>

            {/* Comments List */}
            <div className="space-y-6">
              <AnimatePresence>
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 bg-zinc-800/70 rounded-xl border border-zinc-700/70 hover:border-amber-500/40 transition-all duration-300 shadow-md"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-zinc-900" />
                        </div>
                        <div>
                          <p className="font-bold text-amber-400">{comment.author}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {t.hoursAgo(Math.floor((Date.now() - comment.date.getTime()) / (1000 * 60 * 60)))}
                          </div>
                        </div>
                      </div>
                      {comment.rating && (
                        <div className="flex flex-col items-end gap-1">
                          <StarRating
                            rating={comment.rating}
                            interactive={false}
                            hoverRating={0}
                            setHoverRating={() => { }}
                          />
                          <span className="text-xs text-gray-500">{comment.rating}/10</span>
                        </div>
                      )}
                    </div>

                    <p className="text-base text-gray-300 leading-relaxed my-3 pb-2 border-b border-zinc-700/50">
                      {comment.text}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleLikeComment(comment.id)}
                      className={twMerge(
                        "flex items-center gap-2 text-sm transition-colors",
                        likedComments.has(comment.id) ? "text-amber-400" : "text-gray-500 hover:text-amber-400"
                      )}
                    >
                      <ThumbsUp className={twMerge(
                        "w-4 h-4",
                        likedComments.has(comment.id) && "fill-amber-400"
                      )} />
                      <span className="font-medium">{comment.likes}</span>
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>

        {/* Right Column (Game Details, Download Box & Suggested Games - Sticky) */}
        <div className="lg:col-span-1 space-y-8">

          {/* Enhanced Game Details & Download Box (Sticky) */}
          <motion.section
            ref={sectionRefs['downloads-section']}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl sticky top-[85px]"
            id="downloads-section"
          >
            {/* Download Box */}
            <div className='mb-6 pb-4 border-b border-zinc-700/50'>
              <div className="flex justify-between items-center pb-3">
                <span className='text-gray-400 text-sm flex items-center gap-2'>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  {t.standardEdition}
                </span>
                <span className="text-3xl font-extrabold text-amber-400">
                  {game.marketPrice === 0 ? t.free : `$${game.marketPrice}`}
                </span>
              </div>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center py-4 mt-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-zinc-900 font-bold rounded-xl transition-all duration-300 shadow-xl text-lg group"
              >
                <Download className={`w-5 h-5 ${direction === 'rtl' ? 'ml-3' : 'mr-3'} group-hover:animate-bounce`} />
                {t.viewDownloads}
              </motion.button>

              <div className='pt-4 space-y-2 border-t border-zinc-700/30 mt-4'>
                <div className='flex items-center text-sm text-gray-300'>
                  <CheckCircle className={`w-4 h-4 text-green-500 ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                  {t.crackedTested}
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <h3 className="text-2xl font-extrabold text-white mb-4 pb-3 border-b border-zinc-700/50 flex items-center gap-2">
              <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
              {t.gameDetails}
            </h3>
            <div className="space-y-1">
              <IconWithLabel icon={Calendar} label={lang === 'fa' ? 'تاریخ انتشار' : 'Release Date'} value={game.releaseDate ? new Date(game.releaseDate).toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-US') : 'N/A'} direction={direction} />
              <IconWithLabel icon={Code} label={lang === 'fa' ? 'توسعه‌دهنده' : 'Developer'} value={game.developer} direction={direction} />
              <IconWithLabel icon={Hash} label={lang === 'fa' ? 'تگ‌ها و ژانر' : 'Tags & Genre'} value={
                <div className="flex flex-wrap gap-1 justify-end">{game.genres.slice(0, 2).map((genre, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">{genre}</span>
                ))}</div>} direction={direction}
              />
              <IconWithLabel icon={Gamepad} label={lang === 'fa' ? 'پلتفرم' : 'Platform'} value={game.platform} direction={direction} hideBorder />
            </div>
          </motion.section>

          {/* Suggested Games Section */}
          <motion.section
            ref={sectionRefs.suggested}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            id="suggested"
          >
            <h3 className="text-2xl font-extrabold text-white mb-4 pb-3 border-b border-zinc-700/50 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-500" />
              {t.suggestedGames}
            </h3>
            <div className="space-y-4">
              {mockSuggestedGames.map(sg => (
                <SuggestedGameCard key={sg.id} game={sg} direction={direction} />
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* Download Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <DownloadModal
            downloads={downloads}
            onClose={() => setIsModalOpen(false)}
            t={tWithLang}
            direction={direction}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GameDetailsLayout;