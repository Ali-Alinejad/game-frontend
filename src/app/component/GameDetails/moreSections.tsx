import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as LinkIcon, Download, MessageSquare, Target, Star, Globe, AlertCircle, Send } from 'lucide-react';
import { Game, Download as DownloadType, Comment, SuggestedGame } from '../../types/Game';
import { SuggestedGameCard, CommentItem, StarRating } from './shared';
import { useTranslations, itemVariants } from '../../hook/gameDetails/hooks';

// Links Section
export const LinksSection: React.FC<{
    game: Game;
    lang: 'en' | 'fa';
    sectionRef: React.RefObject<HTMLDivElement | null>;
}> = ({ game, lang, sectionRef }) => {
    const t = useTranslations(lang, 0);

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            id="link-section"
            className="p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl"
        >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
                <LinkIcon className="w-7 h-7 text-amber-500" />
                {t.linkSectionTitle}
            </h2>
            <motion.a
                href={game.officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors group border border-zinc-700"
                whileHover={{ scale: 1.02 }}
            >
                <div className="flex flex-col">
                    <span className="font-semibold text-white">{t.website} (Official Game Page)</span>
                    <span className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                        <Globe className='w-4 h-4 text-gray-500' />
                    </span>
                </div>
                <LinkIcon className='w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform' />
            </motion.a>
        </motion.section>
    );
};

// Downloads Section
export const DownloadsSection: React.FC<{
    downloads: DownloadType[];
    lang: 'en' | 'fa';
    sectionRef: React.RefObject<HTMLDivElement | null>;

}> = ({ downloads, lang, sectionRef }) => {
    const t = useTranslations(lang, 0);

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            id="downloads-section"
            className="p-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-amber-600 shadow-2xl shadow-amber-900/40"
        >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
                <Download className="w-7 h-7 text-amber-500" />
                {t.downloads}
            </h2>
            <div className="space-y-4">
                {downloads.map((dl, index) => (
                    <motion.a
                        key={index}
                        href={dl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors group border border-amber-500/50"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex flex-col">
                            <span className="font-semibold text-white text-lg">{dl.title}</span>
                            <span className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                                <Download className='w-4 h-4 text-gray-500' />
                                {dl.size}
                            </span>
                        </div>
                        <Download className='w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform' />
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
};

// Comments Section
export const CommentsSection: React.FC<{
    comments: Comment[];
    newComment: string;
    newRating: number;
    hoverRating: number;
    commentError: string;
    likedComments: Set<string>;
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement | null>;

    onCommentChange: (text: string) => void;
    onRatingChange: (rating: number) => void;
    onHoverRatingChange: (rating: number) => void;
    onCommentSubmit: () => void;
    onCommentLike: (id: string) => void;
}> = ({
    comments,
    newComment,
    newRating,
    hoverRating,
    commentError,
    likedComments,
    lang,
    direction,
    sectionRef,
    onCommentChange,
    onRatingChange,
    onHoverRatingChange,
    onCommentSubmit,
    onCommentLike,
}) => {
    const t = useTranslations(lang, comments.length);

    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
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
                    <label className=" text-lg font-bold text-gray-300 flex items-center gap-2">
                        <Star className="w-5 h-5 text-amber-500" />
                        {t.rateGame} (1-5)
                    </label>
                    <StarRating
                        rating={newRating}
                        onRate={onRatingChange}
                        interactive={true}
                        hoverRating={hoverRating}
                        setHoverRating={onHoverRatingChange}
                    />
                </div>
                <textarea
                    rows={4}
                    value={newComment}
                    onChange={(e) => onCommentChange(e.target.value)}
                    placeholder={t.writeComment}
                    className='w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white resize-none focus:ring-amber-500 focus:border-amber-500 focus:outline-none'
                />
                {commentError && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center text-red-400 text-sm mt-2 mb-2 font-medium"
                    >
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {commentError}
                    </motion.div>
                )}
                <motion.button
                    onClick={onCommentSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-3 px-6 py-2 bg-amber-500 text-zinc-900 font-bold rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-2"
                >
                    <Send className='w-4 h-4' />
                    {t.submit}
                </motion.button>
            </motion.div>

            {/* Comments List */}
            <div className="space-y-6">
                <AnimatePresence>
                    {comments.map((comment) => (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            direction={direction}
                            onLike={onCommentLike}
                            isLiked={likedComments.has(comment.id)}
                            t={t}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

// Suggested Games Section
export const SuggestedGamesSection: React.FC<{
    suggestedGames: SuggestedGame[];
    lang: 'en' | 'fa';
    direction: string;
    sectionRef: React.RefObject<HTMLDivElement | null>;

}> = ({ suggestedGames, lang, direction, sectionRef }) => {
    const t = useTranslations(lang, 0);

    return (
        <motion.section
            id="suggested"
            ref={sectionRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
        >
            <h2 className="section-title text-3xl font-extrabold mb-6 text-amber-300 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
                <Target className="w-7 h-7 text-amber-500" />
                {t.suggestedGames}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {suggestedGames.map(sg => (
                    <SuggestedGameCard
                        key={sg.id}
                        game={sg}
                        direction={direction}
                    />
                ))}
            </div>

            {suggestedGames.length === 0 && (
                <div className="p-6 bg-zinc-800/50 border border-zinc-700 rounded-xl text-center text-gray-500 italic">
                    {t.noSuggested}
                </div>
            )}
        </motion.section>
    );
};