'use client';

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { NewsArticleMock } from '@/lib/types/news/mockdataNews';

// =================================================================
// 1. MOCK DEPENDENCIES, TYPES, AND UTILITIES (for Single-File Mandate)
// =================================================================

// 1.1 Types
interface MultilingualString { en: string; fa: string; }

interface Author {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

interface NewsArticle {
  id: string;
  slug: string;
  category: string;
  breaking: boolean;
  featuredImage: string;
  publishedAt: string;
  readTime: number;
  views: number;
  title: MultilingualString;
  excerpt: MultilingualString;
  content: MultilingualString;
  author: Author;
  tags: string[];
}

interface ArticleViewProps {
  article: NewsArticle;
}

// 1.2 Utilities: formatTimeSince (Mock implementation)
const formatTimeSince = (dateString: string, lang: 'en' | 'fa'): string => {
  const now = new Date();
  const past = new Date(dateString);
  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const format = (value: number, unitEn: string, unitFa: string) => {
    if (lang === 'fa') {
      return `${value.toLocaleString('fa')} ${unitFa}${value > 1 ? '' : ''} پیش`;
    }
    return `${value} ${unitEn}${value !== 1 ? 's' : ''} ago`;
  };

  if (seconds < 60) return lang === 'fa' ? 'چند ثانیه پیش' : 'just now';
  if (minutes < 60) return format(minutes, 'minute', 'دقیقه');
  if (hours < 24) return format(hours, 'hour', 'ساعت');
  if (days < 30) return format(days, 'day', 'روز');
  
  return lang === 'fa' ? past.toLocaleDateString('fa-IR') : past.toLocaleDateString('en-US');
};

// 1.3 Mock Data for Related Articles
const mockRelatedArticles: NewsArticle[] =NewsArticleMock;

const getRelatedArticles = (article: NewsArticle, count: number): NewsArticle[] => {
  return mockRelatedArticles.filter(a => a.id !== article.id).slice(0, count);
};


// 1.4 Mock Hooks for Language Store and Font
const useLanguageStoreMock = (initialLang: 'en' | 'fa') => {
    const [lang, setLang] = useState<'en' | 'fa'>(initialLang);
    return { lang, setLang };
};

const useLanguageFontMock = (lang: 'en' | 'fa'): { fontClass: string; direction: "ltr" | "rtl" } => {
  const fontClass = lang === 'fa' ? 'font-[Noto_Sans_Arabic]' : 'font-[Inter]';
  const direction: "ltr" | "rtl" = lang === 'fa' ? 'rtl' : 'ltr';
  return { fontClass, direction };
};


// =================================================================
// 2. CHILD COMPONENTS (Updated for Readability and Clean Design)
// =================================================================

// Logo Header Component (Cleaned up colors)
const LogoHeader = ({ lang, setLang }: any) => (
  <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-800/50">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-black text-yellow-500 tracking-wider">
          {lang === 'fa' ? 'تایمز گیمینگ' : 'The Gaming Times'}
        </h1>
        
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-sm font-semibold transition-colors rounded-lg ${
              lang === 'en' ? 'text-white bg-yellow-600/20 border-b-2 border-yellow-500' : 'text-stone-400 hover:text-yellow-400'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang('fa')}       
            className={`px-3 py-1 text-sm font-semibold transition-colors rounded-lg ${
                lang === 'fa' ? 'text-white bg-yellow-600/20 border-b-2 border-yellow-500' : 'text-stone-400 hover:text-yellow-400'
                }`}
            >
            فارسی
            </button>
        </div>
        </div>
    </div>
    </header>
);

// Mobile Language Switcher (Kept stylish for small elements)
const MobileLanguageSwitcher = ({ lang, setLang }: any) => (
  <div className="fixed bottom-4 right-4 z-40 md:hidden">
    <div className="flex flex-col gap-2 bg-black/90 backdrop-blur-xl rounded-xl p-1.5 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
      <button
        onClick={() => setLang('en')}
        className={twMerge(
          'relative px-4 py-2 text-xs font-black rounded-lg transition-all duration-300 overflow-hidden min-w-[70px]',
          lang === 'en' 
            ? 'text-black scale-105' 
            : 'text-stone-400 hover:text-white'
        )}
      >
        {lang === 'en' && (
          <motion.div
            layoutId="mobileLangBg"
            className="absolute inset-0 bg-yellow-500 shadow-md shadow-yellow-500/50"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-1">
          <span>🇬🇧</span>
          <span>EN</span>
        </span>
      </button>
      <button
        onClick={() => setLang('fa')}
        className={twMerge(
          'relative px-4 py-2 text-xs font-black rounded-lg transition-all duration-300 overflow-hidden min-w-[70px]',
          lang === 'fa' 
            ? 'text-black scale-105' 
            : 'text-stone-400 hover:text-white'
        )}
      >
        {lang === 'fa' && (
          <motion.div
            layoutId="mobileLangBg"
            className="absolute inset-0 bg-yellow-500 shadow-md shadow-yellow-500/50"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-1">
          <span>🇮🇷</span>
          <span>فارسی</span>
        </span>
      </button>
    </div>
  </div>
);

// Article Banner Section (Replaced Hero)
const ArticleBanner = ({ article, lang, direction, sectionRef }: any) => {
  const isRTL = direction === 'rtl';
  
  return (
    <div ref={sectionRef} id="hero" className="relative pt-4 pb-5 overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full" dir={direction}>
          
          {/* Category Badge & Meta */}
          <div className={twMerge('flex flex-wrap items-center gap-3 mb-4', isRTL && 'flex-row-reverse justify-end')}>
              <span className="text-sm font-semibold uppercase text-yellow-500">
                {article.category}
              </span>
              <span className="text-xs text-stone-600">|</span>
              <div className="flex items-center gap-2 text-stone-400">
                <span className="text-sm font-medium">{article.author.name}</span>
              </div>
              <span className="text-xs text-stone-600">|</span>
              <div className="flex items-center gap-2 text-stone-400">
                <span className="text-sm font-medium">{formatTimeSince(article.publishedAt, lang)}</span>
              </div>
          </div>

          {/* Title - Reduced Size */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-snug">
            {article.title[lang]}
          </h1>

          {/* Excerpt - Reduced Size */}
          <p className="text-lg text-stone-400 mb-8 leading-relaxed border-l-4 border-yellow-500/50 pl-4 pr-0 md:pl-6 md:pr-0" dir={direction}>
            {article.excerpt[lang]}
          </p>

          {/* Featured Image */}
          <div className=" rounded-xl relative  shadow-2xl shadow-black/50 mt-8 mb-4 h-full w-full">
       <Image
  height={1000}
  width={1000}
  src={article.featuredImage || "/images/News/default-featured.png"}
  alt={article.title[lang]}
  className=""
/>

            {/* Breaking Badge (if needed) */}
            {article.breaking && (
              <span className={twMerge("absolute top-4 px-3 py-1.5 text-xs font-black uppercase rounded-lg animate-pulse shadow-lg bg-red-600 text-white", isRTL ? 'left-4' : 'right-4')}>
                {isRTL ? 'فوری' : 'BREAKING'}
              </span>
            )}
          </div>
      </div>
    </div>
  );
};

// Sticky Navigation Bar (Simplified and less intrusive)
const StickyNavigationBar = ({ currentSection, scrollToSection, lang, direction }: any) => {
  const isRTL = direction === 'rtl';
  // Removed 'hero' from navigation links as it's the banner above
  const sections = useMemo(() => [
    { id: 'content', label: { en: 'Read', fa: 'خواندن' }, icon: '📄' },
    { id: 'author', label: { en: 'Author', fa: 'نویسنده' }, icon: '✍️' },
    { id: 'related', label: { en: 'Related', fa: 'مرتبط' }, icon: '🔗' },
  ], []);

  return (
    <div className="sticky top-[72px] z-40 bg-black/95 backdrop-blur-xl border-b border-stone-800/50 shadow-lg hidden md:block">
      <div className="max-w-4xl mx-auto px-4">
        <nav className={twMerge('flex gap-2 justify-center', isRTL && 'flex-row-reverse')}>
          {sections.map((section ) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={twMerge(
                'group flex items-center gap-2 px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all relative',
                currentSection === section.id
                  ? 'text-yellow-500'
                  : 'text-stone-400 hover:text-white'
              )}
            >
     <span>{section.label[lang as "en" | "fa"]}</span>

              {currentSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow-500 rounded-t-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Content Section (Improved Readability)
const ContentSection = ({ article, lang, direction, sectionRef }: any) => {
  const isRTL = direction === 'rtl';

  return (
    <section ref={sectionRef} id="content" className="mb-12 pt-6">
        <div className="prose prose-invert prose-lg max-w-none text-stone-300 leading-relaxed md:prose-xl" dir={direction}>
          
          <h2 className={twMerge('text-3xl font-bold text-white mb-6', isRTL && 'text-right')}>
            {isRTL ? 'محتوای کامل' : 'Full Article'}
          </h2>

          {/* Body Content - Focused on clean paragraphs */}
          {article.content[lang].split('\n\n').map((paragraph: string, i: number) => (
            <p key={i} className="mb-6 text-stone-300 leading-8 text-base md:text-lg first:first-letter:text-5xl first:first-letter:font-bold first:first-letter:mr-3 first:first-letter:float-left first:first-letter:text-yellow-500">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className={twMerge('flex items-center gap-3 flex-wrap mt-8 pt-6 border-t border-stone-800', isRTL && 'flex-row  justify-start')}>
          <span className="text-sm text-yellow-500 font-bold flex-shrink-0">{lang === "fa" ? 'برچسب‌ها:' : 'Tags:'}</span>
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-stone-900/50 hover:bg-yellow-500/20 border border-stone-800 hover:border-yellow-500/30 text-stone-400 hover:text-yellow-300 text-xs font-semibold rounded-full transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
    </section>
  );
};

// Author Section (Cleaned up visual clutter)

interface Author {
  name: string;
  title: string;
  bio: string;
avatar: string;

}

interface NewsArticle {
  author: Author;
}

interface AuthorSectionProps {
  article: NewsArticle;
  lang: 'en' | 'fa';
  direction: 'ltr' | 'rtl';
  sectionRef: React.RefObject<HTMLElement | null>;
}


const AuthorSection = ({ article, direction, sectionRef }: AuthorSectionProps) => {
  const isRTL = direction === 'rtl';

  if (!article.author.bio) return null;

  return (
    <section ref={sectionRef} id="author" className="mb-12 pt-6 border-t border-stone-800">
      <div className="bg-stone-950/50 rounded-xl p-6 border border-stone-800 shadow-xl">
        <h2 className={twMerge('text-2xl font-bold text-white mb-6 flex items-center gap-3', isRTL && 'flex-reverse text-right')}>
          {isRTL ? 'درباره نویسنده' : 'About the Author'}
        </h2>

        <div className={twMerge('flex items-start gap-6', isRTL && 'flex-reverse')}>
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 relative rounded-full bg-yellow-500/50 p-0.5">
              {article.author.avatar ? (
             <Image
  fill
  src={article.author.avatar || '/images/avatars/default-avatar.png'}
  alt={article.author.name}
  className="object-cover rounded-full"
/>

              ) : (
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-yellow-500 font-bold text-3xl">{article.author.name.charAt(0)}</span>
                </div>
              )}
            </div>
          </div>
          <div className={twMerge('flex-1', isRTL && 'text-right')}>
            <h3 className="text-xl font-bold text-white mb-1">{article.author.name}</h3>
            <p className="text-yellow-600 font-medium mb-3 text-sm">{article.author.title}</p>
            <p className="text-stone-400 leading-relaxed text-base">{article.author.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};


// Related Articles Section (Made cards cleaner)
const RelatedArticlesSection = ({ relatedArticles, lang, direction, sectionRef }: any) => {
  const isRTL = direction === 'rtl';

  if (relatedArticles.length === 0) return null;

  return (
    <section ref={sectionRef} id="related" className="mb-12 pt-6 border-t border-stone-800">
        <h2 className={twMerge('text-2xl font-bold text-white mb-6 flex items-center gap-3', isRTL && 'flex-reverse text-right')}>
            <span>🔗</span>
            {isRTL ? 'مقالات مرتبط' : 'Related Articles'}
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((related: any) => (
            <a key={related.id} href={`/News/${related.slug}`}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)' }}
                className="group cursor-pointer h-full bg-stone-950/50 rounded-xl overflow-hidden border border-stone-800 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-36">
                  <Image
                  fill
                    src={related.featuredImage || "/images/News/default-featured.png"}
                    alt={related.title[lang]}
                    onError={(e) => { e.currentTarget.src = ''; }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                </div>
                
                <div className="p-4" dir={direction}>
                    <span className="text-xs font-medium uppercase text-yellow-600 mb-1 block">
                        {related.category}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors line-clamp-2">
                        {related.title[lang]}
                    </h4>
                    <p className="text-sm text-stone-500 font-medium">
                        {formatTimeSince(related.publishedAt, lang)}
                    </p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
    </section>
  );
};

interface QuickLink {
  id: string;
  icon: string;
  label: { en: string; fa: string };
}

interface SidePanelProps {
  article: {
    views: number;
    readTime: number;
    publishedAt: string;
    tags?: string[];
  };
  lang: 'en' | 'fa';
  direction: 'ltr' | 'rtl';
  scrollToSection: (id: string) => void;
}

const SidePanel = ({ article, lang, direction, scrollToSection }: SidePanelProps) => {
  const isRTL = direction === 'rtl';

  const quickLinks: QuickLink[] = useMemo(
    () => [
      { id: 'content', icon: '📄', label: { en: 'Read Article', fa: 'خواندن مقاله' } },
      { id: 'author', icon: '✍️', label: { en: 'About Author', fa: 'درباره نویسنده' } },
      { id: 'related', icon: '🔗', label: { en: 'Related Articles', fa: 'مقالات مرتبط' } },
    ],
    []
  );


  return (
    <div className="lg:sticky lg:top-20 space-y-6">
      {/* Article Stats */}
      <div className="bg-stone-950/50 rounded-xl p-5 border border-stone-800 shadow-xl">
        <h3 className={twMerge('text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-stone-800 pb-3', isRTL && 'text-right flex-reverse')}>
          <span>{isRTL ? 'آمار مقاله' : 'Article Stats'}</span>
        </h3>
        <div className="space-y-3">
          <div className={twMerge('flex items-center justify-between', isRTL && 'flex-reverse')}>
            <span className="text-stone-400 font-medium">{isRTL ? 'بازدید' : 'Views'}</span>
            <span className="text-yellow-500 font-semibold">{article.views.toLocaleString()}</span>
          </div>
          <div className={twMerge('flex items-center justify-between', isRTL && 'flex-reverse')}>
            <span className="text-stone-400 font-medium">{isRTL ? 'زمان مطالعه' : 'Read Time'}</span>
            <span className="text-yellow-500 font-semibold">{article.readTime} {isRTL ? 'دقیقه' : 'min'}</span>
          </div>
          <div className={twMerge('flex items-center justify-between', isRTL && 'flex-reverse')}>
            <span className="text-stone-400 font-medium">{isRTL ? 'تاریخ انتشار' : 'Published'}</span>
            <span className="text-stone-300 font-medium text-sm">{formatTimeSince(article.publishedAt, lang)}</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-stone-950/50 rounded-xl p-5 border border-stone-800 shadow-xl">
        <h3 className={twMerge('text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-stone-800 pb-3', isRTL && 'text-right flex-reverse')}>
          <span>🧭</span>
          <span>{isRTL ? 'دسترسی سریع' : 'Quick Links'}</span>
        </h3>
        <div className="space-y-2">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={twMerge(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-stone-900/50 hover:bg-yellow-500/10 border border-stone-800 hover:border-yellow-500/30 transition-all group',
                isRTL && 'flex-row-reverse text-right'
              )}
            >
              <span className="text-base group-hover:text-yellow-500 transition-colors">{link.icon}</span>
              <span className="font-semibold text-stone-300 group-hover:text-yellow-500 transition-colors text-sm">{link.label[lang]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="bg-stone-950/50 rounded-xl p-5 border border-stone-800 shadow-xl">
        <h3 className={twMerge('text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-stone-800 pb-3', isRTL && 'text-right flex-row-reverse')}>
          <span>📤</span>
          <span>{isRTL ? 'اشتراک‌گذاری' : 'Share'}</span>
        </h3>
        <div className="flex gap-3">
          {[
            { name: 'Twitter', icon: '𝕏' },
            { name: 'Facebook', icon: 'f' },
            { name: 'LinkedIn', icon: 'in' }
          ].map((platform) => (
            <button
              key={platform.name}
              className="flex-1 py-3 bg-stone-900/50 hover:bg-yellow-500/10 border border-stone-800 hover:border-yellow-500/30 rounded-lg transition-all text-base font-bold text-stone-300 hover:text-yellow-500"
            >
              {platform.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// =================================================================
// 3. MAIN COMPONENT (ArticleView)
// =================================================================

export default function ArticleView({ article }: ArticleViewProps) {
  const { lang, setLang } = useLanguageStoreMock('fa');
  const { fontClass, direction } = useLanguageFontMock(lang);

  const [currentSection, setCurrentSection] = useState('hero');

  const relatedArticles = useMemo(() => getRelatedArticles(article, 3), [article]);
const heroRef = useRef<HTMLDivElement | null>(null);
const contentRef = useRef<HTMLDivElement | null>(null);
const authorRef = useRef<HTMLDivElement | null>(null);
const relatedRef = useRef<HTMLDivElement | null>(null);

const sectionRefs = useMemo(() => ({
  hero: heroRef,
  content: contentRef,
  author: authorRef,
  related: relatedRef,
}), [heroRef, contentRef, authorRef, relatedRef]);





  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjusted sticky nav height to 72px (header) for desktop view
      const stickyNavHeight = 72; 
      const yOffset = -stickyNavHeight;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.top <= window.innerHeight * 0.5) {
          setCurrentSection(entry.target.id);
        }
      });
    },
    { rootMargin: '0px 0px -50% 0px', threshold: 0.1 }
  );

  Object.values(sectionRefs).forEach((ref) => {
    if (ref.current) observer.observe(ref.current);
  });

  return () => observer.disconnect();
}, [sectionRefs]);





  return (
    <motion.div
      className={twMerge(`min-h-screen bg-black ${fontClass} text-white`)}
      dir={direction}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LogoHeader lang={lang} setLang={setLang} />
      <MobileLanguageSwitcher lang={lang} setLang={setLang} direction={direction} />
      
      <ArticleBanner article={article} lang={lang} direction={direction} sectionRef={sectionRefs.hero} />
      
      {/* Sticky nav for desktop reading flow */}
      <StickyNavigationBar 
        currentSection={currentSection} 
        scrollToSection={scrollToSection} 
        lang={lang} 
        direction={direction}
      />

      {/* Main Content Grid (Narrower max-width for better readability) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-8">
        
        {/* Main Content (2/3 width on desktop, centered) */}
        <div className="lg:col-span-2 space-y-8 max-w-4xl mx-auto lg:mx-0 w-full">
          <ContentSection article={article} lang={lang} direction={direction} sectionRef={sectionRefs.content} />
<AuthorSection article={article} lang={lang} direction={direction} sectionRef={sectionRefs.author} />
<RelatedArticlesSection relatedArticles={relatedArticles} lang={lang} direction={direction} sectionRef={sectionRefs.related} />

        </div>

        {/* Side Panel (1/3 width on desktop, hidden on mobile) */}
        <div className="hidden lg:block">
          <SidePanel article={article} lang={lang} direction={direction} scrollToSection={scrollToSection} />
        </div>
      </div>

      <style jsx global>{`
        /* Global styles for Inter (English) and Noto Sans Arabic (Farsi) */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+Arabic:wght@100..900&display=swap');
        
        .font-\\[Inter\\] { font-family: 'Inter', sans-serif; }
        .font-\\[Noto_Sans_Arabic\\] { font-family: 'Noto Sans Arabic', sans-serif; }

        /* Custom scrollbar hide for horizontal nav on mobile */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }

        /* Improved dark theme for prose for blog readability */
        .prose-invert :is(h1, h2, h3, h4) {
          color: #fff;
          font-weight: 700; /* Bold */
        }
        .prose-invert p {
          color: #ccc;
        }
        .prose-invert ul {
            padding-left: 1.5em; /* Ensure lists are visible */
        }
        .prose-invert li {
            margin-bottom: 0.5em;
        }
      `}</style>
    </motion.div>
  );
}