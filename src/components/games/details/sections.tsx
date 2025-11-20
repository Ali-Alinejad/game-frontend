import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Film, Calendar, Link, ChevronLeft, ChevronRight } from 'lucide-react';
import { Game } from '@/app/types/Game';
import { itemVariants, useTranslations } from '@/app/hook/gameDetails/hooks';
import Image from 'next/image';

// About Section
export const AboutSection: React.FC<{
    game: Game;
    lang: 'en' | 'fa';
    sectionRef: React.RefObject<HTMLDivElement | null>;
}> = ({ game, lang, sectionRef }) => {
    const t = useTranslations(lang, 0);
    const description = typeof game.description === 'object'
        ? (game.description.short as any)[lang === 'fa' ? 'persian' : 'english']
        : game.description;

    const longDes = typeof game.description.long === 'object'
        ? (game.description.long as any)[lang === 'fa' ? 'persian' : 'english']
        : game.description.long;

    const storyline = typeof game.description.storyline === 'object'
        ? (game.description.storyline as any)[lang === 'fa' ? 'persian' : 'english']
        : game.description.storyline;

    return (
  <motion.section
    ref={sectionRef}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={itemVariants}
    id="about"
    className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/50 backdrop-blur-xl rounded-2xl p-8 border border-amber-500/20 shadow-2xl"
>
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 pb-4 border-b border-zinc-700/50">
        <div className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
            {t.about}
    </h2>
    
    <p className="text-amber-200/80 leading-relaxed text-lg mb-4">
        {description}
    </p>
    
   <p className="text-gray-300 text-justify  leading-loose whitespace-pre-line mb-8">
    
        {longDes}
    </p>

    {storyline && (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300"
        >
            <div className="flex items-start gap-3 mb-3">
                <h3 className="text-sm font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent uppercase tracking-wide">
                    {lang === 'fa' ? 'داستان' : 'Storyline'}
                </h3>
            </div>
            <p className="text-gray-200 text-base leading-relaxed font-light italic">
                {storyline}
            </p>
        </motion.div>
    )}
</motion.section>
    );
};

// Developer Spotlight Section
export const DeveloperSection: React.FC<{
    game: Game;
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement | null>;
}> = ({ game, lang, sectionRef }) => {
    const t = useTranslations(lang, 0);
    const devDesc = typeof game.developerInfo?.description === 'object'
        ? (game.developerInfo.description as any)[lang]
        : game.developerInfo?.description;

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            id="developer"
            className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-700/50 shadow-2xl"
        >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 pb-4 border-b border-zinc-700/50">
                <Factory className="w-6 h-6 text-amber-400" />
                <span className="">{t.developerSpotlight}</span>
                <span className="text-gray-500 text-lg font-normal">{game.developer}</span>
            </h2>
            
            <div className='flex items-start gap-6'>
                {game.developerInfo?.logo && (
                    <Image 
                    height={60}
                    width={60}
                        src={game.developerInfo.logo} 
                        alt={game.developer} 
                        className='  rounded-xl border-2 border-zinc-700/50 shadow-lg object-cover flex-shrink-0' 
                    />
                )}
                <div className='flex-grow'>
                    <p className='text-gray-300 leading-relaxed mb-4'>
                        {devDesc}
                    </p>
                    {game.developerInfo && (
                        <div className='flex flex-wrap items-center gap-6'>
                            <a 
                                href={game.developerInfo.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-semibold'
                            >
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
    );
};

// Screenshots/Trailer Section (Updated)
export const TrailerSection: React.FC<{
    game: Game;
    lang: 'en' | 'fa';
    sectionRef: React.RefObject<HTMLDivElement | null>;
    onPlayTrailer: () => void;
}> = ({ game, lang, sectionRef }) => {
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const direction = lang === 'fa' ? 'rtl' : 'ltr';

    // استفاده از screenshots بازی یا آرایه خالی
    const screenshots = game.screenshots || [];

    const nextScreenshot = () => {
        setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    };

    const prevScreenshot = () => {
        setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            id="trailer"
            className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-700/50 shadow-2xl"
        >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 pb-4 border-b border-zinc-700/50">
                <Film className="w-6 h-6 text-amber-400" />
                    {lang === 'fa' ? 'تصاویر بازی' : 'Game Screenshots'}
            </h2>

            {screenshots && screenshots.length > 0 ? (
                <div className="relative">
                    <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border-2 border-amber-500/30 ">
                        <Image
                        fill
                            src={screenshots[currentScreenshot]}
                            alt={`Screenshot ${currentScreenshot + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {screenshots.length > 1 && (
                        <>
                            <button
                                onClick={prevScreenshot}
                                className={`absolute top-1/2 -translate-y-1/2 ${direction === 'rtl' ? 'right-4' : 'left-4'} bg-zinc-900/50 hover:bg-zinc-800 border border-amber-500/30 text-amber-400 p-3 rounded-full transition-all  hover:scale-110`}
                            >
                                {direction === 'rtl' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                            </button>
                            <button
                                onClick={nextScreenshot}
                                className={`absolute top-1/2 -translate-y-1/2 ${direction === 'rtl' ? 'left-4' : 'right-4'} bg-zinc-900/50 hover:bg-zinc-800 border border-amber-500/30 text-amber-400 p-3 rounded-full transition-all shadow-lg hover:scale-110`}
                            >
                                {direction === 'rtl' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                            </button>
                        </>
                    )}

                    {/* Thumbnail Navigation */}
                    {screenshots.length > 1 && (
                        <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-zinc-800">
                            {screenshots.map((screenshot, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentScreenshot(index)}
                                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                        currentScreenshot === index
                                            ? 'border-amber-500   '
                                            : 'border-zinc-700 hover:border-amber-500/50'
                                    }`}
                                >
                                    <Image
                                    height={80}
                                    width={80}
                                        src={screenshot}
                                        alt={`Thumbnail ${index + 1}`}
                                        className=""
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className="aspect-video w-full bg-zinc-800/70 border-4 border-dashed border-zinc-600 rounded-xl flex flex-col items-center justify-center text-gray-500 p-8">
                    <Film className="w-16 h-16 mb-4 text-zinc-600" />
                    <p className="text-xl font-semibold">
                        {lang === 'fa' ? 'به زودی اضافه خواهد شد' : 'Coming Soon'}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        {lang === 'fa' ? 'تصاویر بازی به زودی در دسترس خواهد بود' : 'Game screenshots will be available soon'}
                    </p>
                </div>
            )}
        </motion.section>
    );
};

// System Requirements Section - حذف شده (منتقل به سایدبار)
// این تابع را برای سازگاری با کدهای قدیمی نگه می‌داریم اما null برمی‌گرداند
export const RequirementsSection: React.FC<{
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement | null>;
}> = () => {
    // این بخش به سایدبار منتقل شده است
    return null;
};