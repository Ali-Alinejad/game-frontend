import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Play, Cpu, Layers, MemoryStick, HardDrive, Zap } from 'lucide-react';
import { useTranslations } from '@/app/hook/gameDetails/hooks';
import { BacktoGames, LanguageSwitcher, StarRating } from './shared';
import Link from 'next/link';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import Image from 'next/image';

// Hero Section
export const HeroSection: React.FC<{
    game: any;
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement | null>;
    onDownloadClick: () => void;
    onTrailerClick: () => void;
}> = ({ game, direction, sectionRef, onDownloadClick, onTrailerClick }) => {
    const { lang } = useLanguageStore();
    const t = useTranslations(lang, 0);
    const gameTitle = typeof game.title === 'string' ? game.title : game.title[lang];

    return (
        <motion.div
            ref={sectionRef}
            id="hero"
            className="relative w-full h-[100vh] md:h-[91vh] max-sm:h-[50vh] overflow-hidden mb-6 pt-16"
        >
            <div className='absolute inset-0'>
                <div className='absolute inset-0' style={{ backgroundImage: `url(${game.backgroundImage !== '' ? game.backgroundImage : game.image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1)' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-black/30" />

            <div className='flex max-sm:flex-col max-sm:mx-20 justify-center-safe mt-20 max-sm:mt-2'>
                <div className={`relative aspect-video ${lang === 'fa' ? 'mr-60' : 'ml-60'}`}>
                    <motion.img
                        src={game.image}
                        className="w-100 ring-2 max-sm:rounded-xl max-sm:h-30 ring-amber-500 shadow-lg shadow-amber-800 rounded-4xl h-130 object-cover"
                        style={{ filter: "" }}
                    />
                </div>

                <div className="relative z-10 h-full flex items-end p-4 md:p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
                            style={{ textShadow: '0 0 20px rgba(255, 185, 0, 0.3)' }}
                        >
                            {gameTitle}
                        </motion.h1>
                        <div className="flex items-center gap-4 mt-3 max-sm:scale-70">
                            <span className='text-sm uppercase tracking-widest text-amber-400 font-bold px-3 py-1 bg-amber-400/10 rounded-full border border-amber-400/20 shadow-md'>
                                {game.platform}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-7 my-9">
                            {[
                                { icon: 'Calendar', label: lang === 'fa' ? 'انتشار' : 'Release', value: game.releaseDate },
                                { icon: 'Factory', label: lang === 'fa' ? 'سازنده' : 'Developer', value: game.developer },
                                { icon: 'Gamepad2', label: lang === 'fa' ? 'ژانرها' : 'Genres', value: game.genres },
                                { icon: 'Tag', label: lang === 'fa' ? 'برچسب‌ها' : 'Tags', value: game.tags },
                                { icon: 'Coins', label: lang === 'fa' ? 'قیمت' : 'Price', value: game.marketPrice },
                                { icon: 'BadgeCheck', label: lang === 'fa' ? 'وضعیت' : 'Status', value: game.hasDiscount ? (lang === 'fa' ? 'کرک شده' : 'Cracked') : (lang === 'fa' ? 'غیر کرک' : 'Not Cracked') },
                            ].map((item, index) => {
                                const Icon = require('lucide-react')[item.icon];
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-200"
                                    >
                                        <div className="flex items-center justify-center w-24 h-8 bg-amber-400/5 backdrop-blur-[3px] rounded-lg border border-amber-400/20 shadow-inner">
                                            <Icon className="w-4 h-4 text-amber-400" />
                                            <span className="text-sm text-amber-400 font-medium px-2">{item.label}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-300">{item.value || 'N/A'}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {game.trailerUrl && (
                            <motion.button
                                onClick={onTrailerClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center py-3 px-4 backdrop-blur-xs hover:bg-zinc-600 text-white rounded-xl transition-all duration-300 text-sm group border border-zinc-600"
                            >
                                <Play className={`w-5 h-5 ${direction === 'rtl' ? 'ml-2' : 'mr-2'} text-amber-400`} />
                                {t.playOnline}
                            </motion.button>
                        )}
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
                   {t.navItems.map(({ id, label, icon: Icon }) => (
  <motion.button
    key={id}
    onClick={() => scrollToSection(id)}
    className={twMerge(
      "flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
      currentSection === id
        ? "text-amber-400 shadow-md scale-105"
        : "text-gray-300 hover:bg-zinc-800/70 hover:text-white"
    )}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className={`w-4 h-4 text-amber-400 ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
    {label}
  </motion.button>
))}
                </div>
                <div className="hidden md:flex justify-between gap-4 flex-shrink-0">
                    <LanguageSwitcher lang={t.lang} setLang={t.setLang} />
                    <BacktoGames lang={t.lang} setLang={t.setLang} />
                </div>
            </div>
        </div>
    );
};

// Side Panel
export const SidePanelGameDetails: React.FC<{
    game: any;
    lang: 'en' | 'fa';
    direction: string;
    scrollToSection: (id: string) => void;
}> = ({ game, lang, direction, scrollToSection }) => {
    const t = useTranslations(lang, 0);
    const [activeTab, setActiveTab] = useState<'minimum' | 'recommended'>('minimum');

    const systemRequirements = game.systemRequirements || {
        minimum: {
            os: 'Windows 10 64-bit',
            ram: '8 GB',
            cpu: 'Intel Core i5-3570K',
            gpu: 'NVIDIA GTX 780 3GB',
            storage: '70 GB',
            typeStorage: 'HDD'
        },
        recommended: {
            os: 'Windows 10/11 64-bit',
            ram: '16 GB',
            cpu: 'Intel Core i7-6700',
            gpu: 'NVIDIA GTX 1060 6GB',
            storage: '70 GB',
            typeStorage: 'SSD Required'
        }
    };

    const currentReq = activeTab === 'minimum' ? systemRequirements.minimum : systemRequirements.recommended;

    return (
        <motion.div
            className="lg:col-span-1 lg:sticky lg:top-20 h-fit space-y-8"
            initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            <motion.div
                className="bg-gradient-to-br from-amber-900/30 via-zinc-900/90 to-zinc-800/50 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-500/30 shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 pb-3 border-b border-zinc-700/50">
                    {lang === 'fa' ? 'امتیاز کاربران' : 'User Rating'}
                </h3>
                
                <div className='flex items-center justify-around mb-6'>
                    <span className='text-5xl font-black bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent'>
                        4.2
                    </span>
                    <div className='flex flex-col items-center gap-2'>
                        <StarRating rating={4.5} hoverRating={0} setHoverRating={() => { }} />
                        <span className='text-sm text-gray-400'>(2,500 {lang === 'fa' ? 'رای' : 'Votes'})</span>
                    </div>
                </div>
                
                <motion.button
                    onClick={() => scrollToSection('comments')}
                    className="w-full mt-4 py-3 bg-amber-500/10 rounded-xl border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                >
                    {lang === 'fa' ? 'نظرات و امتیازدهی شما' : 'Your Review & Rating'}
                </motion.button>

                <div className="mt-8 pt-6 border-t border-zinc-700/50">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 ">
                        <Zap className="w-5 h-5" />
                        {lang === 'fa' ? 'سیستم مورد نیاز' : 'System Requirements'}
                    </h3>

                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setActiveTab('minimum')}
                            className={twMerge(
                                "flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all",
                                activeTab === 'minimum'
                                    ? "bg-amber-500/20  border-2 border-amber-500/50"
                                    : "bg-zinc-800/50 text-gray-400 border border-zinc-700/50 hover:bg-zinc-800"
                            )}
                        >
                            {lang === 'fa' ? 'حداقل' : 'Minimum'}
                        </button>
                        <button
                            onClick={() => setActiveTab('recommended')}
                            className={twMerge(
                                "flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all",
                                activeTab === 'recommended'
                                    ? "bg-amber-500/20  border-2 border-amber-500/50"
                                    : "bg-zinc-800/50 text-gray-400 border border-zinc-700/50 hover:bg-zinc-800"
                            )}
                        >
                            {lang === 'fa' ? 'پیشنهادی' : 'Recommended'}
                        </button>
                    </div>
                    
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                    >
                        <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30">
                            <Layers className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="text-xs text-gray-500 mb-1">{lang === 'fa' ? 'سیستم عامل' : 'OS'}</div>
                                <div className="text-sm text-gray-300">{currentReq.os}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30">
                            <Cpu className="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="text-xs text-gray-500 mb-1">{lang === 'fa' ? 'پردازنده' : 'CPU'}</div>
                                <div className="text-xs text-gray-300 leading-tight">{currentReq.cpu}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30">
                            <MemoryStick className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="text-xs text-gray-500 mb-1">{lang === 'fa' ? 'رم' : 'RAM'}</div>
                                <div className="text-sm text-gray-300">{currentReq.ram}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30">
                            <HardDrive className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="text-xs text-gray-500 mb-1">{lang === 'fa' ? 'گرافیک' : 'GPU'}</div>
                                <div className="text-xs text-gray-300 leading-tight">{currentReq.gpu}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30">
                            <HardDrive className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="text-xs text-gray-500 mb-1">{lang === 'fa' ? 'فضای دیسک' : 'Storage'}</div>
                                <div className="text-sm text-gray-300">{currentReq.storage}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/30">
                            <HardDrive className="w-5 h-5 text-amber-400 flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="text-xs text-gray-500 mb-1">{lang === 'fa' ? 'نوع حافظه' : 'Type'}</div>
                                <div className="text-sm text-gray-300">{currentReq.typeStorage}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Logo Header
export const LogoHeader: React.FC = () => {
    return (
        <div className="absolute top-6 right-0 -translate-x-1/4 z-40 flex justify-center">
            <Link
                href="/"
                className="relative flex items-center transition-all duration-300 group"
            >
                <div className="relative w-12 h-12 scale-125">
                    <Image
                        src="/logoes/logoGold.png"
                        alt="GameFord Logo"
                        fill
                        className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#facc15]"
                        priority
                    />
                </div>

                <motion.div
                    className="overflow-hidden transition-all duration-300"
                    animate={{
                        opacity: 1,
                        width: 'auto',
                        marginLeft: 12,
                    }}
                >
                    <span className="text-yellow-400 text-2xl font-semibold tracking-wide whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,204,65,0.4)]">
                        GameFord
                    </span>
                </motion.div>
            </Link>
        </div>
    );
};

export const MobileLanguageSwitcher: React.FC<{ 
    lang: 'en' | 'fa'; 
    setLang: (lang: 'en' | 'fa') => void; 
    direction: string 
}> = ({ lang, setLang, direction }) => {
    return (
        <div className={twMerge(
            "fixed top-4 z-50 md:hidden",
            direction === 'rtl' ? 'left-4' : 'right-4'
        )}>
            <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
    );
};