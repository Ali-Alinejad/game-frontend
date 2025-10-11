import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Factory, Film, Cpu, Link, Download, MessageSquare, Target, Star, Code, Calendar, Gamepad, Zap, Layers, MemoryStick, Image, HardDrive, Globe, AlertCircle, Send, Play } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { IconWithLabel, StarRating, SuggestedGameCard, CommentItem } from './shared';
import { useTranslations, itemVariants, getSystemRequirements } from '../../hook/gameDetails/hooks';
import { Game } from '@/app/types/Game';

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
        <div
            id="about"
        className="space-y-6 pl-6 border-l-2 border-amber-500/30">
                <p className="text-gray-300  leading-relaxed ">
                    {description}
                </p>

                <p className="text-gray-300  leading-relaxed ">
                    {longDes}
                </p>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-lg p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 group"
            >
                <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-sm font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent uppercase tracking-wide">{lang === 'fa' ? 'داستان' : 'Info'}</h3>
                </div>
                <p className="text-gray-200 text-base leading-relaxed font-light italic">
                    {storyline}
                </p>
            </motion.div>
        </div>
    );
};

// Developer Spotlight Section
export const DeveloperSection: React.FC<{
    game: Game;
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement | null>;

}> = ({ game, lang, direction, sectionRef }) => {
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
            className="p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl"
        >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
                <Factory className="w-7 h-7 text-amber-500" />
                {t.developerSpotlight}
                <span className="text-base text-gray-400 font-normal">{game.developer}</span>
            </h2>
            <div className='flex items-start gap-6'>
                {game.developerInfo?.logo && (
                    <img src={game.developerInfo.logo} alt={game.developer} className='w-16 h-16 rounded-lg border border-zinc-700 flex-shrink-0 object-cover' />
                )}
                <div className='flex-grow'>
                    <p className='text-gray-300 text-base leading-relaxed mb-4'>
                        {devDesc}
                    </p>
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
    );
};

// Trailer Section
export const TrailerSection: React.FC<{
    game: Game;
    lang: 'en' | 'fa';
    sectionRef: React.RefObject<HTMLDivElement | null>;

    onPlayTrailer: () => void;
}> = ({ game, lang, sectionRef, onPlayTrailer }) => {
    const t = useTranslations(lang, 0);

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            id="trailer"
        >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
                <Film className="w-7 h-7 text-amber-500" />
                {t.trailer}
            </h2>
            {game.trailerUrl ? (
                <div className="relative aspect-video w-full lg:w-3/4 mx-auto bg-black rounded-xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
                    <div
                        className='absolute inset-0 z-0'
                        style={{ backgroundImage: `url(${game.image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(4px) brightness(0.6)' }}
                    />
                    <div className='absolute inset-0 bg-black/40 z-10 flex items-center justify-center'>
                        <motion.button
                            onClick={onPlayTrailer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className='relative z-20 w-24 h-24 rounded-full bg-amber-500/90 text-zinc-900 flex items-center justify-center shadow-2xl transition-all duration-300 hover:bg-amber-400'
                        >
                            <Play className='w-12 h-12 fill-zinc-900' />
                            <div className='absolute inset-0 rounded-full border-4 border-amber-500 animate-ping-slow opacity-50' />
                        </motion.button>
                    </div>
                    <div className='absolute bottom-0 p-4 text-white z-20 w-full bg-black/50'>
                        <motion.button
                            onClick={onPlayTrailer}
                            className='text-sm font-semibold flex items-center gap-2 hover:text-amber-400 transition-colors'
                        >
                            <Play className='w-4 h-4 text-amber-400' />
                            {t.viewTrailer}
                        </motion.button>
                    </div>
                </div>
            ) : (
                <div className="aspect-video w-full lg:w-3/4 mx-auto bg-zinc-800/70 border-4 border-dashed border-zinc-600 rounded-xl flex flex-col items-center justify-center text-gray-500 p-8 shadow-inner">
                    <Film className='w-12 h-12 mb-3' />
                    <p className='text-lg font-semibold'>{t.noTrailer}</p>
                    <p className='text-sm'>{lang === 'fa' ? 'به زودی اضافه خواهد شد.' : 'Will be added soon.'}</p>
                </div>
            )}
        </motion.section>
    );
};

// System Requirements Section
export const RequirementsSection: React.FC<{
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement | null>;

}> = ({ lang, direction, sectionRef }) => {
    const t = useTranslations(lang, 0);
    const sysReq = getSystemRequirements(lang);

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            className="p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl"
            id="requirements"
        >
            <h3 className="text-2xl font-extrabold text-white mb-4 pb-3 border-b border-zinc-700/50 flex items-center gap-2">
                <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
                {t.sysReq}
                <Zap className="w-5 h-5 text-red-500 ml-1" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                <IconWithLabel icon={Layers} label={lang === 'fa' ? 'سیستم عامل' : 'OS'} value={sysReq.os} direction={direction} />
                <IconWithLabel icon={MemoryStick} label={lang === 'fa' ? 'رم' : 'Memory'} value={sysReq.ram} direction={direction} />
                <IconWithLabel icon={Cpu} label={lang === 'fa' ? 'پردازنده' : 'Processor'} value={<span className="text-sm text-right">{sysReq.cpu}</span>} direction={direction} />
                <IconWithLabel icon={Image} label={lang === 'fa' ? 'گرافیک' : 'Graphics'} value={<span className="text-sm text-right">{sysReq.gpu}</span>} direction={direction} />
                <IconWithLabel icon={HardDrive} label={lang === 'fa' ? 'فضای دیسک' : 'Storage'} value={sysReq.storage} hideBorder direction={direction} />
                <IconWithLabel icon={HardDrive} label={lang === 'fa' ? 'مدل حافظه' : 'type storage'} value={sysReq.typeStorage} hideBorder direction={direction} />

            </div>
        </motion.section>
    );
};