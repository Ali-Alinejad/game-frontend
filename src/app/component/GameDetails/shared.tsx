import React from 'react';
import { motion } from 'framer-motion';
import { Star, Globe, ThumbsUp, Clock, User, Download, HardDrive, CheckCircle, X, Link as LinkIcon, Film } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { SuggestedGame,Comment } from '@/app/types/GameDetails/types';
import { useTranslations } from '@/app/hook/gameDetails/hooks';
import { useLanguageStore } from '@/app/zustand/uselangStore';

// Language Switcher
export const LanguageSwitcher: React.FC<{ lang: 'en' | 'fa'; setLang: (lang: 'en' | 'fa') => void }> = ({  setLang }) => {
      const { lang, toggleLang } = useLanguageStore();
    
    return (
        <motion.button
           onClick={toggleLang}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-1 bg-zinc-700/80 backdrop-blur-sm hover:bg-zinc-600 text-white text-sm rounded-full transition-colors border border-zinc-600 shadow-md"
        >
            <Globe className="w-4 h-4 text-amber-400" />
            {lang === 'fa' ? 'English' : 'فارسی'}
        </motion.button>
    );
};

// Icon with Label
export const IconWithLabel: React.FC<{ icon: React.ComponentType<{ className?: string }>, label: string, value: React.ReactNode, hideBorder?: boolean, direction: string }> = ({ icon: Icon, label, value, hideBorder = false, direction }) => (
    <div className={twMerge("flex items-center py-2", !hideBorder && "border-b border-zinc-700/50")}>
        <div className={`flex items-center text-gray-400 flex-shrink-0 w-36 ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}>
            <Icon className="w-4 h-4 text-amber-500/80" />
            <span className={`font-medium text-sm ${direction === 'rtl' ? 'mr-2' : 'ml-2'}`}>{label}</span>
        </div>
        <div className={`flex-grow text-white font-semibold text-base ${direction === 'rtl' ? 'text-left' : 'text-right'}`}>{value}</div>
    </div>
);

// Star Rating
export const StarRating: React.FC<{ rating: number, onRate?: (rate: number) => void, interactive?: boolean, hoverRating: number, setHoverRating: (rate: number) => void }> = ({ rating, onRate, interactive = false, hoverRating, setHoverRating }) => {
    const displayRating = interactive ? hoverRating || rating : rating;
    return (
        <div className="flex" onMouseLeave={() => interactive && setHoverRating(0)}>
            {Array.from({ length: 10 }).map((_, index) => {
                const starValue = index + 1;
                const isFilled = displayRating >= starValue;
                return (
                    <motion.div
                        key={index}
                        className={`cursor-pointer transition-colors ${interactive ? 'hover:scale-110' : ''}`}
                        onClick={() => interactive && onRate && onRate(starValue)}
                        onMouseEnter={() => interactive && setHoverRating(starValue)}
                        whileTap={{ scale: interactive ? 0.9 : 1 }}
                    >
                        <Star className={`w-5 h-5 ${isFilled ? 'text-amber-400 fill-amber-400' : 'text-gray-600 fill-gray-800'}`} />
                    </motion.div>
                );
            })}
        </div>
    );
};

// Suggested Game Card
export const SuggestedGameCard: React.FC<{ game: SuggestedGame, direction: string }> = ({ game, direction }) => (
    <motion.div
        className="group relative w-full aspect-video bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-500/20 transition-shadow duration-300 cursor-pointer border border-zinc-700"
        whileHover={{ y: -5 }}
    >
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${game.image})` }} />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
        <div className="relative p-3 h-full flex flex-col justify-end">
            <div className={`absolute top-3 ${direction === 'rtl' ? 'left-3' : 'right-3'} flex items-center gap-1 text-sm bg-zinc-900/80 backdrop-blur-sm px-2 py-1 rounded-full text-amber-400 font-bold`}>
                <Star className='w-3 h-3 fill-amber-400' />
                {game.rating}
            </div>
            <h4 className="text-lg font-bold text-white mb-1 leading-tight">
                {typeof game.title === 'string' ? game.title : game.title.fa}
            </h4>
            <p className="text-xs text-gray-300">
                {game.genres.join(', ')}
            </p>
        </div>
    </motion.div>
);

// Comment Item
export const CommentItem: React.FC<{ comment: Comment, direction: string, onLike: (id: string) => void, isLiked: boolean, t: ReturnType<typeof useTranslations> }> = ({ comment, direction, onLike, isLiked, t }) => {
    const timeAgo = (date: Date) => {
        const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
        return t.hoursAgo(hours > 0 ? hours : 1);
    };

    const { itemVariants } = require('../../hook/gameDetails/hooks');

    return (
        <motion.div
            className="p-4 bg-zinc-900 rounded-xl border border-zinc-700/50 shadow-md"
            variants={itemVariants}
        >
            <div className={`flex items-start justify-between mb-2 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="font-bold text-amber-400">{comment.author}</span>
                </div>
                {comment.rating !== undefined && (
                    <div className="flex items-center gap-1 text-sm font-semibold">
                        <Star className='w-4 h-4 fill-amber-500 text-amber-500' />
                        <span className='text-white'>{comment.rating}</span>
                        <span className='text-gray-500'>/10</span>
                    </div>
                )}
            </div>
            <p className={`text-gray-300 text-base leading-relaxed mb-3 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>{comment.text}</p>
            <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-zinc-800">
                <span className='flex items-center gap-1'><Clock className='w-3 h-3' />{timeAgo(comment.date)}</span>
                <motion.button
                    onClick={() => onLike(comment.id)}
                    className="flex items-center gap-1 transition-colors group"
                    whileTap={{ scale: 0.95 }}
                >
                    <ThumbsUp className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-500 group-hover:text-red-400'}`} />
                    <span className={`font-semibold ${isLiked ? 'text-red-400' : 'text-gray-400 group-hover:text-red-300'}`}>{comment.likes}</span>
                </motion.button>
            </div>
        </motion.div>
    );
};