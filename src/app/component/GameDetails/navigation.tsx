import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Gamepad } from 'lucide-react';
import { useTranslations } from '@/app/hook/gameDetails/hooks';
import { IconWithLabel, LanguageSwitcher, StarRating } from './shared';
import { GameCard } from '../cards/GameCard';

// Hero Section
export const HeroSection: React.FC<{
    game: any;
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement>;
    onDownloadClick: () => void;
    onTrailerClick: () => void;
}> = ({ game, lang, direction, sectionRef, onDownloadClick, onTrailerClick }) => {
    const t = useTranslations(lang, 0);
    const gameTitle = typeof game.title === 'string' ? game.title : game.title[lang];

    return (
        <motion.div
            ref={sectionRef}
            id="hero"
            className="relative w-full h-[100vh] md:h-[91vh] overflow-hidden mb-6 pt-16"
        >
            <div className='absolute inset-0'>
                <div className='absolute inset-0' style={{ backgroundImage: `url(${game.image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1)' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950  to-black/30" />

            
            <div className='flex justify-center-safe mt-20  '>


       <div className="relative aspect-video"> 
                        <motion.img
                          src={game.image}
                          className="w-100 ring-2 ring-amber-400 shadow-lg shadow-amber-800 rounded-4xl h-130 object-cover " 
                          style={{ filter: "" }} 
                        />
                      </div>

            <div className="relative z-10  h-full flex items-end p-4 md:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    
                    <div className="flex items-center gap-4 mb-4">
                        <span className='text-sm uppercase tracking-widest text-amber-400 font-bold px-3 py-1 bg-amber-400/10 rounded-full border border-amber-400/20 shadow-md'>
                            {game.platform}
                        </span>
                        <span className='text-sm text-gray-300'>{game.developer}</span>
                    </div>

                      <motion.h1 
                      className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
                      style={{ textShadow: '0 0 20px rgba(255, 185, 0, 0.3)' }}
                    >
                                             {gameTitle}

                    </motion.h1>
                

                    <div className='flex gap-4'>
                        <motion.button
                            onClick={onDownloadClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center py-3 px-8 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-zinc-900 font-bold rounded-xl transition-all duration-300 shadow-xl text-lg group"
                        >
                            {t.viewDownloads}
                        </motion.button>

                        {game.trailerUrl && (
                            <motion.button
                                onClick={onTrailerClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center py-3 px-8 bg-zinc-700/80 hover:bg-zinc-600 text-white font-bold rounded-xl transition-all duration-300 shadow-xl text-lg group border border-zinc-600"
                            >
                                {t.playOnline}
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </div>
            </div>

        </motion.div>
    );
};

// Sticky Navigation Bar
export const StickyNavigationBar: React.FC<{
    t: ReturnType<typeof useTranslations> & { lang: 'en' | 'fa', setLang: (l: 'en' | 'fa') => void };
    direction: string;
    scrollToSection: (id: string) => void;
    currentSection: string;
}> = ({ t, direction, scrollToSection, currentSection }) => {
    return (
        <div className="sticky top-0 z-30 w-full bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800 shadow-xl" id="sticky-nav">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-2 md:p-3">
                <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {t.navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={twMerge(
                                "flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                                currentSection === item.id
                                    ? "bg-amber-500 text-zinc-900 shadow-md scale-105"
                                    : "text-gray-300 hover:bg-zinc-800/70 hover:text-white"
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <item.icon className={`w-4 h-4 ${currentSection === item.id ? 'text-zinc-900' : 'text-amber-400'} ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                            {item.label}
                        </motion.button>
                    ))}
                </div>
                <div className="hidden md:block flex-shrink-0">
                    <LanguageSwitcher lang={t.lang} setLang={t.setLang} />
                </div>
            </div>
        </div>
    );
};

// Side Panel (Game Details Card)
export const SidePanelGameDetails: React.FC<{
    game: any;
    lang: 'en' | 'fa';
    direction: string;
    scrollToSection: (id: string) => void;
}> = ({ game, lang, direction, scrollToSection }) => {
    const t = useTranslations(lang, 0);

    return (
        <motion.div
            className="lg:col-span-1 lg:sticky lg:top-20 h-fit space-y-8"
            initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            {/* Game Details Card */}
            <motion.div
                className="p-6 bg-zinc-800 rounded-2xl shadow-xl border border-zinc-700"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={require('../../hook/gameDetails/hooks').itemVariants}
            >
                <h3 className="text-2xl font-bold mb-4 flex items-center text-amber-400 border-b border-zinc-700 pb-2">
                    <span className={direction === 'rtl' ? 'mr-2' : 'ml-2'}>{t.gameDetails}</span>
                </h3>
                <div className='space-y-1'>
                    <IconWithLabel icon={require('lucide-react').Calendar} label={lang === 'fa' ? 'تاریخ انتشار' : 'Release Date'} value={game.releaseDate || 'N/A'} direction={direction} hideBorder />
                    <IconWithLabel icon={require('lucide-react').Factory} label={lang === 'fa' ? 'سازنده' : 'Developer'} value={game.developer} direction={direction} hideBorder />
                    <IconWithLabel icon={require('lucide-react').Code} label={lang === 'fa' ? 'پلتفرم' : 'Platform'} value={game.platform} direction={direction} hideBorder />
                    <IconWithLabel icon={require('lucide-react').Gamepad} label={lang === 'fa' ? 'ژانرها' : 'Genres'} value={game.genres.join(', ')} direction={direction} hideBorder />
                    <IconWithLabel icon={require('lucide-react').Globe} label={lang === 'fa' ? 'زبان‌ها' : 'Supported Langs'} value={game.supportedLanguages.slice(0, 2).join(', ') + (game.supportedLanguages.length > 2 ? '...' : '')} direction={direction} hideBorder />
                    <IconWithLabel icon={require('lucide-react').Download} label={lang === 'fa' ? 'نوع دسترسی' : 'Access Type'} value={<span className='text-green-400 font-bold'>{t.free}</span>} direction={direction} hideBorder />
                </div>
            </motion.div>

            {/* Rating Card */}
            <motion.div
                className="p-6 bg-zinc-800 rounded-2xl shadow-xl border border-amber-500/50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={require('../../hook/gameDetails/hooks').itemVariants}
            >
                <h3 className="text-2xl font-bold mb-4 flex items-center text-amber-400 border-b border-zinc-700 pb-2">
                    <span className={direction === 'rtl' ? 'mr-2' : 'ml-2'}>{lang === 'fa' ? 'امتیاز و رأی‌دهی کاربران' : 'User Rating & Votes'}</span>
                </h3>
                <div className='flex items-center justify-between my-4'>
                    <span className='text-6xl font-black text-amber-400'>9.2</span>
                    <div className='flex flex-col items-center'>
                        <StarRating rating={9.2} hoverRating={0} setHoverRating={() => {}} />
                        <span className='text-sm text-gray-400 mt-1'>(2500 {lang === 'fa' ? 'رای' : 'Votes'})</span>
                    </div>
                </div>
                <motion.button
                    onClick={() => scrollToSection('comments')}
                    className="w-full mt-4 py-3 bg-amber-500/10 text-amber-400 font-bold rounded-xl border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                >
                    {lang === 'fa' ? 'نظرات و امتیازدهی شما' : 'Your Review & Rating'}
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

// Logo Header
export const LogoHeader: React.FC = () => {
    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
            <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-2xl font-black text-amber-400 drop-shadow-lg"
            >
                <Gamepad className="w-6 h-6" />
                <span className='font-impact'>Gameford</span>
            </motion.a>
        </div>
    );
};

// Mobile Language Switcher
export const MobileLanguageSwitcher: React.FC<{ lang: 'en' | 'fa'; setLang: (lang: 'en' | 'fa') => void; direction: string }> = ({ lang, setLang, direction }) => {
    return (
        <div className={twMerge(
            "fixed top-4 z-50 md:hidden",
            direction === 'rtl' ? 'left-4' : 'right-4'
        )}>
            <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
    );
};