// components/ArticleView.tsx

'use client';

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { NewsArticle } from '@/lib/types/news/NewsType';
import { formatTimeSince } from '@/lib/utils/news/newsUtils';
import { getRelatedArticles } from '@/lib/types/news/mockdataNews';

// فرض می‌کنیم این hookها را دارید
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { useLanguageFont } from '@/app/hook/langFontUtils';

interface ArticleViewProps {
  article: NewsArticle;
}

// Logo Header Component
const LogoHeader = ({ lang, setLang }: any) => (
  <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif font-bold">
          {lang === 'fa' ? 'تایمز گیمینگ' : 'The Gaming Times'}
        </h1>
        
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              lang === 'en' ? 'text-white border-b-2 border-white' : 'text-gray-500'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('fa')}       
            className={`px-3 py-1 text-xs font-medium transition-colors ${
                lang === 'fa' ? 'text-white border-b-2 border-white' : 'text-gray-500'
                }`}
            >
            فارسی
            </button>
        </div>
        </div>
    </div>
    </header>
);

// Mobile Language Switcher
const MobileLanguageSwitcher = ({ lang, setLang, direction }: any) => (
  <div className="fixed top-20 right-4 z-40 md:hidden">
    <div className="flex flex-col gap-2 bg-black/90 backdrop-blur-xl rounded-2xl p-2 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
      <button
        onClick={() => setLang('en')}
        className={twMerge(
          'relative px-4 py-3 text-xs font-black rounded-xl transition-all duration-300 overflow-hidden min-w-[80px]',
          lang === 'en' 
            ? 'text-black scale-105' 
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        )}
      >
        {lang === 'en' && (
          <motion.div
            layoutId="mobileLangBg"
            className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/50"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-1.5">
          <span>🇬🇧</span>
          <span>EN</span>
        </span>
      </button>
      <button
        onClick={() => setLang('fa')}
        className={twMerge(
          'relative px-4 py-3 text-xs font-black rounded-xl transition-all duration-300 overflow-hidden min-w-[80px]',
          lang === 'fa' 
            ? 'text-black scale-105' 
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        )}
      >
        {lang === 'fa' && (
          <motion.div
            layoutId="mobileLangBg"
            className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/50"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-1.5">
          <span>🇮🇷</span>
          <span>FA</span>
        </span>
      </button>
    </div>
  </div>
);

// Hero Section
const HeroSection = ({ article, lang, direction, sectionRef }: any) => {
  const isRTL = direction === 'rtl';
  
  return (
    <div ref={sectionRef} id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={article.featuredImage}
          alt={article.title[lang]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" dir={direction}>
          
          {/* Left Side - Article Cover */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20 transform hover:scale-105 transition-transform duration-500">
              <img
                src={article.featuredImage}
                alt={article.title[lang]}
                className="w-full aspect-[3/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Badges on Image */}
              <div className={twMerge('absolute top-4 flex gap-2', isRTL ? 'right-4' : 'left-4')}>
                <span className="bg-yellow-500 text-black px-3 py-1.5 text-xs font-black uppercase rounded-lg shadow-lg">
                  {article.category}
                </span>
                {article.breaking && (
                  <span className="bg-red-600 text-white px-3 py-1.5 text-xs font-black uppercase rounded-lg animate-pulse shadow-lg">
                    {isRTL ? 'فوری' : 'BREAKING'}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isRTL ? 'text-right' : ''}
          >
            {/* Category Badge */}
            <div className={twMerge('flex items-center gap-3 mb-6', isRTL && 'flex-row-reverse')}>
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              {article.title[lang]}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {article.excerpt[lang]}
            </p>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <span>📅</span>
                  <span className="text-xs font-bold uppercase">{isRTL ? 'تاریخ' : 'Release'}</span>
                </div>
                <p className="text-white font-bold">{formatTimeSince(article.publishedAt, lang)}</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <span>⏱️</span>
                  <span className="text-xs font-bold uppercase">{isRTL ? 'زمان' : 'Read Time'}</span>
                </div>
                <p className="text-white font-bold">{article.readTime} {isRTL ? 'دقیقه' : 'min'}</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <span>👁️</span>
                  <span className="text-xs font-bold uppercase">{isRTL ? 'بازدید' : 'Views'}</span>
                </div>
                <p className="text-white font-bold">{article.views.toLocaleString()}</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 text-yellow-400 mb-1">
                  <span>✍️</span>
                  <span className="text-xs font-bold uppercase">{isRTL ? 'نویسنده' : 'Author'}</span>
                </div>
                <p className="text-white font-bold">{article.author.name}</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black rounded-xl overflow-hidden shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all">
              <span className="relative z-10 flex items-center gap-2">
                <span>📖</span>
                <span>{isRTL ? 'شروع مطالعه' : 'Start Reading'}</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Sticky Navigation Bar
const StickyNavigationBar = ({ currentSection, scrollToSection, lang, direction }: any) => {
  const isRTL = direction === 'rtl';
  const sections = useMemo(() => [
    { id: 'hero', label: { en: 'Overview', fa: 'نمای کلی' }, icon: '🏠' },
    { id: 'content', label: { en: 'Article', fa: 'مقاله' }, icon: '📄' },
    { id: 'author', label: { en: 'Author', fa: 'نویسنده' }, icon: '✍️' },
    { id: 'related', label: { en: 'Related', fa: 'مرتبط' }, icon: '🔗' },
  ], []);

  return (
    <div className="sticky top-[72px] z-40 bg-black/95 backdrop-blur-xl border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <nav className={twMerge('flex gap-2 overflow-x-auto scrollbar-hide', isRTL && 'flex-row-reverse')}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={twMerge(
                'group flex items-center gap-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-all relative',
                currentSection === section.id
                  ? 'text-yellow-400'
                  : 'text-gray-400 hover:text-white'
              )}
            >
              <span className="text-lg">{section.icon}</span>
              <span>{section.label.en}</span>
              {currentSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Content Section
const ContentSection = ({ article, lang, direction, sectionRef }: any) => {
  const isRTL = direction === 'rtl';

  return (
    <section ref={sectionRef} id="content" className="mb-12">
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📄</span>
          </div>
          <h2 className={twMerge('text-3xl font-black text-white', isRTL && 'text-right')}>
            {isRTL ? 'محتوای مقاله' : 'Article Content'}
          </h2>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none" dir={direction}>
          {article.content[lang].split('\n\n').map((paragraph: string, i: number) => (
            <p key={i} className="mb-6 text-gray-300 leading-relaxed text-lg first:first-letter:text-7xl first:first-letter:font-bold first:first-letter:mr-3 first:first-letter:float-left first:first-letter:text-yellow-400">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className={twMerge('flex items-center gap-3 flex-wrap mt-8 pt-6 border-t border-yellow-500/20', isRTL && 'flex-row-reverse')}>
          <span className="text-sm text-yellow-400 font-bold">{isRTL ? 'برچسب‌ها:' : 'Tags:'}</span>
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white/5 hover:bg-yellow-500/20 border border-yellow-500/30 hover:border-yellow-500/50 text-gray-300 hover:text-yellow-400 text-sm font-semibold rounded-lg transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// Author Section
const AuthorSection = ({ article, lang, direction, sectionRef }: any) => {
  const isRTL = direction === 'rtl';

  if (!article.author.bio) return null;

  return (
    <section ref={sectionRef} id="author" className="mb-12">
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">✍️</span>
          </div>
          <h2 className={twMerge('text-3xl font-black text-white', isRTL && 'text-right')}>
            {isRTL ? 'درباره نویسنده' : 'About the Author'}
          </h2>
        </div>
        
        <div className={twMerge('flex items-start gap-6', isRTL && 'flex-row-reverse')}>
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
              {article.author.avatar ? (
                <img src={article.author.avatar} alt="" className="w-full h-full rounded-xl object-cover" />
              ) : (
                <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-4xl">{article.author.name.charAt(0)}</span>
                </div>
              )}
            </div>
          </div>
          <div className={twMerge('flex-1', isRTL && 'text-right')}>
            <h3 className="text-2xl font-bold text-white mb-2">{article.author.name}</h3>
            <p className="text-yellow-400 font-semibold mb-3">{article.author.title}</p>
            <p className="text-gray-300 leading-relaxed">{article.author.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Related Articles Section
const RelatedArticlesSection = ({ relatedArticles, lang, direction, sectionRef }: any) => {
  const isRTL = direction === 'rtl';

  if (relatedArticles.length === 0) return null;

  return (
    <section ref={sectionRef} id="related" className="mb-12">
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🔗</span>
          </div>
          <h2 className={twMerge('text-3xl font-black text-white', isRTL && 'text-right')}>
            {isRTL ? 'مقالات مرتبط' : 'Related Articles'}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((related: any) => (
            <Link key={related.id} href={`/News/${related.slug}`}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden rounded-xl mb-3 h-48 border-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-all">
                  <img
                    src={related.featuredImage}
                    alt={related.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-black uppercase rounded">
                      {related.category}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {related.title[lang]}
                </h4>
                <p className="text-sm text-gray-500 font-semibold">
                  {formatTimeSince(related.publishedAt, lang)}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Side Panel
const SidePanel = ({ article, lang, direction, scrollToSection }: any) => {
  const isRTL = direction === 'rtl';

  const quickLinks = useMemo(() => [
    { id: 'content', icon: '📄', label: { en: 'Read Article', fa: 'خواندن مقاله' } },
    { id: 'author', icon: '✍️', label: { en: 'About Author', fa: 'درباره نویسنده' } },
    { id: 'related', icon: '🔗', label: { en: 'Related Articles', fa: 'مقالات مرتبط' } },
  ], []);

  return (
    <div className="lg:sticky lg:top-36 space-y-6">
      {/* Article Stats */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 shadow-xl">
        <h3 className={twMerge('text-xl font-black text-white mb-6 flex items-center gap-2', isRTL && 'text-right flex-row-reverse')}>
          <span>📊</span>
          <span>{isRTL ? 'آمار مقاله' : 'Article Stats'}</span>
        </h3>
        <div className="space-y-4">
          <div className={twMerge('flex items-center justify-between', isRTL && 'flex-row-reverse')}>
            <span className="text-gray-400 font-semibold">{isRTL ? 'بازدید' : 'Views'}</span>
            <span className="text-yellow-400 font-bold text-lg">{article.views.toLocaleString()}</span>
          </div>
          <div className={twMerge('flex items-center justify-between', isRTL && 'flex-row-reverse')}>
            <span className="text-gray-400 font-semibold">{isRTL ? 'زمان' : 'Read Time'}</span>
            <span className="text-yellow-400 font-bold text-lg">{article.readTime} {isRTL ? 'دقیقه' : 'min'}</span>
          </div>
          <div className={twMerge('flex items-center justify-between', isRTL && 'flex-row-reverse')}>
            <span className="text-gray-400 font-semibold">{isRTL ? 'تاریخ' : 'Published'}</span>
            <span className="text-yellow-400 font-bold text-sm">{formatTimeSince(article.publishedAt, lang)}</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 shadow-xl">
        <h3 className={twMerge('text-xl font-black text-white mb-4 flex items-center gap-2', isRTL && 'text-right flex-row-reverse')}>
          <span>🧭</span>
          <span>{isRTL ? 'دسترسی سریع' : 'Quick Links'}</span>
        </h3>
        <div className="space-y-2">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={twMerge(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-yellow-600/20 border border-transparent hover:border-yellow-500/30 transition-all group',
                isRTL && 'flex-row-reverse text-right'
              )}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{link.icon}</span>
              <span className="font-bold text-gray-300 group-hover:text-yellow-400 transition-colors">{link.label[lang]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 shadow-xl">
        <h3 className={twMerge('text-xl font-black text-white mb-4 flex items-center gap-2', isRTL && 'text-right flex-row-reverse')}>
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
              className="flex-1 py-3 bg-white/5 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-yellow-600/20 border border-yellow-500/20 hover:border-yellow-500/40 rounded-xl transition-all text-sm font-bold hover:text-yellow-400"
            >
              {platform.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function ArticleView({ article }: ArticleViewProps) {
  const { lang, setLang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);
  const [currentSection, setCurrentSection] = useState('hero');

  const relatedArticles = useMemo(() => getRelatedArticles(article, 3), [article]);

  const sectionRefs = {
    hero: useRef<HTMLDivElement | null>(null),
    content: useRef<HTMLDivElement | null>(null),
    author: useRef<HTMLDivElement | null>(null),
    related: useRef<HTMLDivElement | null>(null),
  };

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const stickyNavHeight = 145;
      const yOffset = -stickyNavHeight;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  // Intersection observer
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

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className={twMerge(`min-h-screen bg-black ${fontClass} text-white`)}
      dir={direction}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LogoHeader lang={lang} setLang={setLang} />
      <MobileLanguageSwitcher lang={lang} setLang={setLang} direction={direction} />
      <HeroSection article={article} lang={lang} direction={direction} sectionRef={sectionRefs.hero} />
      <StickyNavigationBar 
        currentSection={currentSection} 
        scrollToSection={scrollToSection} 
        lang={lang} 
        direction={direction}
      />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-12 pt-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <ContentSection article={article} lang={lang} direction={direction} sectionRef={sectionRefs.content} />
          <AuthorSection article={article} lang={lang} direction={direction} sectionRef={sectionRefs.author} />
          <RelatedArticlesSection relatedArticles={relatedArticles} lang={lang} direction={direction} sectionRef={sectionRefs.related} />
        </div>

        {/* Side Panel */}
        <SidePanel article={article} lang={lang} direction={direction} scrollToSection={scrollToSection} />
      </div>
    </motion.div>
  );
}