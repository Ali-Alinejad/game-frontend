import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, Download, Copy, X, CheckCircle, FileArchive, MessageSquare, Target, Star, Globe, AlertCircle, Send } from 'lucide-react';
import { Game, Download as DownloadType, Comment, SuggestedGame } from '../../types/Game';
import { SuggestedGameCard, CommentItem, StarRating } from './shared';
import { useTranslations, itemVariants } from '../../hook/gameDetails/hooks';

// Mock crack data
const crackOptions = [
  {
    id: 1,
    name: 'FitGirl Repack',
    size: '45 GB',
    type: 'RAR Archives',
    parts: 20,
    url: '#fitgirl-link',
    description: 'High compression ratio'
  },
  {
    id: 2,
    name: 'Express Repack',
    size: '65 GB',
    type: 'ZIP Files',
    parts: 10,
    url: '#express-link',
    description: 'Faster download'
  },
  {
    id: 3,
    name: 'RunE Repack',
    size: '55 GB',
    type: 'ZIP Files',
    parts: 15,
    url: '#rune-link',
    description: 'Balanced compression'
  },
  {
    id: 4,
    name: 'Original Full',
    size: '120 GB',
    type: 'ISO Image',
    parts: 1,
    url: '#full-link',
    description: 'Complete uncompressed'
  }
];

// Links Modal Component
const LinksModalContent: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'fa';
  direction: string;
}> = ({ isOpen, onClose, lang, direction }) => {
  const [selectedCrack, setSelectedCrack] = useState<number | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const t = {
    title: lang === 'fa' ? 'لینک‌های دانلود' : 'Download Links',
    crackOptions: lang === 'fa' ? 'گزینه‌های کرک' : 'Crack Options',
    size: lang === 'fa' ? 'اندازه' : 'Size',
    type: lang === 'fa' ? 'نوع فایل' : 'File Type',
    parts: lang === 'fa' ? 'قسمت‌ها' : 'Parts',
    copyLink: lang === 'fa' ? 'کپی لینک' : 'Copy Link',
    copyAll: lang === 'fa' ? 'کپی تمام لینک‌ها' : 'Copy All Links',
    sendToIdm: lang === 'fa' ? 'ارسال به IDM' : 'Send to IDM',
    close: lang === 'fa' ? 'بستن' : 'Close',
    copied: lang === 'fa' ? 'کپی شد!' : 'Copied!',
    website: lang === 'fa' ? 'وبسایت رسمی' : 'Official Website',
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setSuccessMessage(t.copied);
    setTimeout(() => {
      setCopiedUrl(null);
      setSuccessMessage('');
    }, 2000);
  };

  const handleCopyAll = () => {
    const allLinks = crackOptions
      .map(crack => `${crack.name}: ${crack.url}`)
      .join('\n');
    navigator.clipboard.writeText(allLinks);
    setSuccessMessage(t.copied);
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  const handleSendToIdm = (url: string) => {
    // IDM protocol: idm://link
    const idmUrl = `idm://${url}`;
    window.location.href = idmUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-zinc-700 ${
              direction === 'rtl' ? 'text-right' : 'text-left'
            }`}
            dir={direction}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-zinc-800 to-zinc-900 border-b border-zinc-700 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <Download className="w-7 h-7 text-amber-500" />
                <h2 className="text-2xl font-bold text-amber-300">{t.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Success Message */}
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    {successMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Crack Options Table */}
              <div>
                <h3 className="text-lg font-semibold text-amber-300 mb-4 flex items-center gap-2">
                  <FileArchive className="w-5 h-5" />
                  {t.crackOptions}
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {crackOptions.map((crack) => (
                    <motion.div
                      key={crack.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-zinc-800/60 border border-zinc-700 rounded-lg hover:border-amber-500/50 transition-all cursor-pointer"
                      onClick={() =>
                        setSelectedCrack(selectedCrack === crack.id ? null : crack.id)
                      }
                    >
                      {/* Main Row */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full" />
                            <h4 className="text-lg font-semibold text-white">
                              {crack.name}
                            </h4>
                            <span className="text-sm text-gray-400">
                              ({crack.parts} {t.parts})
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{crack.description}</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                          <div className="flex gap-6">
                            <div>
                              <div className="text-xs text-gray-500 mb-1">{t.size}</div>
                              <div className="font-semibold text-amber-400">
                                {crack.size}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 mb-1">{t.type}</div>
                              <div className="font-semibold text-amber-400">
                                {crack.type}
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 w-full md:w-auto">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyLink(crack.url);
                              }}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all whitespace-nowrap text-sm font-medium ${
                                copiedUrl === crack.url
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20'
                              }`}
                            >
                              <Copy className="w-4 h-4" />
                              {copiedUrl === crack.url ? '✓' : t.copyLink}
                            </motion.button>

                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSendToIdm(crack.url);
                              }}
                              className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-all whitespace-nowrap text-sm font-medium"
                            >
                              <Download className="w-4 h-4" />
                              IDM
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {selectedCrack === crack.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-zinc-700 space-y-3"
                          >
                            <div className="bg-zinc-900/50 p-3 rounded-lg break-all font-mono text-sm text-gray-300">
                              {crack.url}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyLink(crack.url);
                                }}
                                className="w-full px-4 py-2 bg-amber-500/20 text-amber-400 border border-amber-500/50 rounded-lg hover:bg-amber-500/30 transition-all font-semibold"
                              >
                                {t.copyLink}
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSendToIdm(crack.url);
                                }}
                                className="w-full px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all font-semibold"
                              >
                                {t.sendToIdm}
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Copy All & Official Website */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyAll}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/50 rounded-lg hover:from-amber-500/30 hover:to-orange-500/30 transition-all font-semibold"
                >
                  <Copy className="w-5 h-5" />
                  {t.copyAll}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Links Section
export const LinksSection: React.FC<{
  game: Game;
  lang: 'en' | 'fa';
  sectionRef: React.RefObject<HTMLDivElement | null>;
  direction?: string;
}> = ({ game, lang, sectionRef, direction = 'ltr' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations(lang, 0);

  const tLocal = {
    linkSectionTitle: lang === 'fa' ? 'لینک‌های دانلود' : 'Download Links',
    website: lang === 'fa' ? 'وبسایت رسمی' : 'Official Website',
    viewCracks: lang === 'fa' ? 'مشاهده گزینه‌های کرک' : 'View Crack Options',
  };

  return (
    <>
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
          <Link2 className="w-7 h-7 text-amber-500" />
          {tLocal.linkSectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Official Website */}
          <motion.a
            href={game.officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors group border border-zinc-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col">
              <span className="font-semibold text-white">{tLocal.website}</span>
              <span className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                <Globe className="w-4 h-4 text-gray-500" />
                Official Game Page
              </span>
            </div>
            <Link2 className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" />
          </motion.a>

          {/* View Cracks Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl hover:from-amber-500/20 hover:to-orange-500/20 transition-colors group border border-amber-500/50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col text-left">
              <span className="font-semibold text-white">{tLocal.viewCracks}</span>
              <span className="text-sm text-gray-400">FitGirl, Express, RunE...</span>
            </div>
            <Download className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      </motion.section>

      {/* Modal */}
      <LinksModalContent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lang={lang} direction={direction} />
    </>
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
                <Download className="w-4 h-4 text-gray-500" />
                {dl.size}
              </span>
            </div>
            <Download className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" />
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
      <motion.div className="mb-10 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700 shadow-inner shadow-zinc-900">
        <div className="mb-4 flex items-center justify-between">
          <label className="text-lg font-bold text-gray-300 flex items-center gap-2">
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
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white resize-none focus:ring-amber-500 focus:border-amber-500 focus:outline-none"
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
          <Send className="w-4 h-4" />
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
        {suggestedGames.map((sg) => (
          <SuggestedGameCard key={sg.id} game={sg} direction={direction} />
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