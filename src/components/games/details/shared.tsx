"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, User, Link as SendToBack, ThumbsDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from '@/app/hook/gameDetails/hooks';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { Comment, SuggestedGame } from '@/app/types/Game';
import Link from 'next/link';

// Language Switcher

export const BacktoGames: React.FC = () => {
    const { lang } = useLanguageStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const safeLang = mounted ? lang : "en";

    return (
        <Link href="/Games">
            <motion.button
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${safeLang === 'fa' ? 'flex-row' : 'flex-row-reverse'} 
                    flex items-center gap-2 px-3 py-1 bg-zinc-700/40 
                    backdrop-blur-sm hover:bg-zinc-700 text-gray-300 
                    text-sm rounded-full transition-colors 
                    border border-zinc-600 shadow-md`}
            >
                <SendToBack className="w-4 h-4 text-amber-400" />

                {safeLang === "en"
                    ? "back To Game Page"
                    : "برگشت به بازی ها"}
            </motion.button>
        </Link>
    );
};


// Icon with Label
export const IconWithLabel: React.FC<{
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: React.ReactNode;
    hideBorder?: boolean;
    direction: string;
}> = ({ icon: Icon, label, value, hideBorder = false, direction }) => (
    <div className={twMerge("flex items-center py-2", !hideBorder && "border-b border-zinc-700/50")}>
        <div className={`flex items-center text-gray-400 flex-shrink-0 w-36 ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}>
            <Icon className="w-4 h-4 text-amber-500/80" />
            <span className={`font-medium text-sm ${direction === 'rtl' ? 'mr-2' : 'ml-2'}`}>{label}</span>
        </div>
        <div className={`flex-grow text-white font-semibold text-base ${direction === 'rtl' ? 'text-left' : 'text-right'}`}>
            {value}
        </div>
    </div>
);

// Star Rating
export const StarRating: React.FC<{
    rating: number;
    onRate?: (rate: number) => void;
    interactive?: boolean;
    hoverRating: number;
    setHoverRating: (rate: number) => void;
}> = ({ rating, onRate, interactive = false, hoverRating, setHoverRating }) => {
    const displayRating = interactive ? hoverRating || rating : rating;
    return (
        <div className="flex" onMouseLeave={() => interactive && setHoverRating(0)}>
            {Array.from({ length: 5 }).map((_, index) => {
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
                        <Star
                            className={`w-5 h-5 ${
                                isFilled ? 'text-amber-400 fill-amber-400' : 'text-gray-600 fill-gray-800'
                            }`}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
};

// Suggested Game Card
export const SuggestedGameCard: React.FC<{ game: SuggestedGame; direction: string }> = ({
    game,
    direction,
}) =>
    
    
    (
    <motion.div
        className="group relative w-full aspect-video bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-500/20 transition-shadow duration-300 cursor-pointer border border-zinc-700"
        whileHover={{ y: -5 }}
    >
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${game.image})` }}
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
        <div className="relative p-3 h-full flex flex-col justify-end">
            <div
                className={`absolute top-3 ${
                    direction === 'rtl' ? 'left-3' : 'right-3'
                } flex items-center gap-1 text-sm bg-zinc-900/80 backdrop-blur-sm px-2 py-1 rounded-full text-amber-400 font-bold`}
            >
                <Star className="w-3 h-3 fill-amber-400" />
                {game.rating}
            </div>
            <h4 className="text-lg font-bold text-white mb-1 leading-tight">
                {typeof game.title === 'string' ? game.title : game.title.fa}
            </h4>
            <p className="text-xs text-gray-300">{game.genres.join(', ')}</p>
        </div>
    </motion.div>
);

export const CommentItem: React.FC<{
    comment: Comment;
    direction: string;
    onLike: (id: string) => void;
    onDislike: (id: string) => void;
    isLiked: boolean;
    isDisliked: boolean;
    t: ReturnType<typeof useTranslations>;
}> = ({ comment, onLike, onDislike, isLiked, isDisliked }) => {
    const { lang } = useLanguageStore();
    const isRTL = lang === 'fa';
    const [showReply, setShowReply] = React.useState(false);
    
    // Force component to re-render when language changes
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    
    React.useEffect(() => {
        forceUpdate();
    }, [lang]);
    
    const formatTimeAgo = (date: Date) => {
        const now = new Date();
        const diffMs = now.getTime() - new Date(date).getTime();
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMins < 1) return isRTL ? 'همین الان' : 'just now';
        if (diffMins < 60) return isRTL ? `${diffMins} دقیقه پیش` : `${diffMins} min ago`;
        if (diffHours < 24) return isRTL ? `${diffHours} ساعت پیش` : `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffDays < 7) return isRTL ? `${diffDays} روز پیش` : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

        return new Date(date).toLocaleDateString(isRTL ? 'fa-IR' : 'en-US');
    };
  const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
      setMounted(true);
    }, []);
    const safeIsRTL = mounted ? isRTL : false;
    return (
       <motion.div
    key={`comment-${comment.id}-${lang}`}
    className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
  >
    {/* Header */}
    <div className={`flex items-start justify-between mb-2 ${safeIsRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex items-center gap-2 ${safeIsRTL ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-amber-400" />
        </div>

        <div className={`flex flex-col ${safeIsRTL ? 'items-end' : 'items-start'}`}>
          <span className="font-semibold text-white text-sm">
            {mounted ? comment.author : ""}
          </span>

          <span className="text-xs text-gray-500">
            {mounted ? formatTimeAgo(comment.date) : ""}
          </span>
        </div>
      </div>

                {/* Rating */}
                {comment.rating !== undefined && (
                    <div className={`flex items-center gap-1 ${safeIsRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-amber-400 font-semibold text-xs">{mounted && comment.rating}/5</span>
                    </div>
                )}
            </div>

            {/* Comment Text */}
            <p className={`text-gray-300 text-sm leading-relaxed mb-2 ${safeIsRTL ? 'text-right' : 'text-left'}`}>
                {mounted ? comment.text : 'no massage loaded'}
            </p>

            {/* Actions */}
            <div className={`flex items-center gap-2 ${safeIsRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Like */}
                <motion.button
                    onClick={() => onLike(comment.id)}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                        isLiked
                            ? 'bg-green-500/20 text-green-400'
                            : 'text-gray-400 hover:bg-green-500/10 hover:text-green-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-green-400' : ''}`} />
                    <span className="font-medium">{comment.likes}</span>
                </motion.button>

                {/* Dislike */}
                <motion.button
                    onClick={() => onDislike(comment.id)}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                        isDisliked
                            ? 'bg-red-500/20 text-red-400'
                            : 'text-gray-400 hover:bg-red-500/10 hover:text-red-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ThumbsDown className={`w-3.5 h-3.5 ${isDisliked ? 'fill-red-400' : ''}`} />
                    <span className="font-medium">{comment.dislikes || 0}</span>
                </motion.button>

                {/* Reply Button */}
                <motion.button
                    onClick={() => setShowReply(!showReply)}
                    className="text-xs text-gray-400 hover:text-amber-400 transition-colors px-2 py-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {mounted && safeIsRTL ? 'پاسخ' : 'Reply'}
                </motion.button>
            </div>

            {/* Reply Input */}
            {showReply && (
                <motion.div
                    className="mt-3 pt-3 border-t border-zinc-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <textarea
                        placeholder={safeIsRTL ? 'پاسخ خود را بنویسید...' : 'Write your reply...'}
                        className={`w-full bg-zinc-800/50 text-white text-sm rounded p-2 border border-zinc-700 focus:border-amber-500/50 focus:outline-none resize-none ${safeIsRTL ? 'text-right' : 'text-left'}`}
                        rows={2}
                    />
                    <div className={`flex gap-2 mt-2 ${safeIsRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <motion.button
                            className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-black text-xs font-medium rounded transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {mounted && safeIsRTL ? 'ارسال' : 'Send'}
                        </motion.button>
                        <motion.button
                            onClick={() => setShowReply(false)}
                            className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-medium rounded transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {mounted && safeIsRTL ? 'لغو' : 'Cancel'}
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};