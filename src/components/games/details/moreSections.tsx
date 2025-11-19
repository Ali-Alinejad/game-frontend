import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, Download, Copy, CheckCircle, FileArchive, MessageSquare, Target, Star, Globe, AlertCircle, Send, ExternalLink } from 'lucide-react';
import { SuggestedGameCard, CommentItem, StarRating } from './shared';
import Image from 'next/image';
import { Game, SuggestedGame, Comment } from '@/app/types/Game';
import { itemVariants, useTranslations } from '@/app/hook/gameDetails/hooks';

// Mock crack data
const crackOptions = [
  {
    id: 1,
    name: 'FitGirl Repack',
    size: '45 GB',
    type: 'RAR Archives',
    parts: 20,
    url: '#fitgirl-link',
    description: 'High compression ratio',
    files: [
      { name: 'fitgirl_part1.zip', size: '2.5 GB' },
      { name: 'fitgirl_part2.zip', size: '2.5 GB' },
      { name: 'fitgirl_part3.zip', size: '2.5 GB' },
      { name: 'fitgirl_setup.zip', size: '1.2 GB' },
    ]
  },
  {
    id: 2,
    name: 'Express Repack',
    size: '65 GB',
    type: 'ZIP Files',
    parts: 10,
    url: '#express-link',
    description: 'Faster download',
    files: [
      { name: 'express_complete.zip', size: '6.5 GB' },
      { name: 'express_part1.zip', size: '6.5 GB' },
      { name: 'express_part2.zip', size: '6.5 GB' },
      { name: 'express_patch.zip', size: '800 MB' },
    ]
  },
  {
    id: 3,
    name: 'RunE Repack',
    size: '55 GB',
    type: 'ZIP Files',
    parts: 15,
    url: '#rune-link',
    description: 'Balanced compression',
    files: [
      { name: 'rune_main.zip', size: '5.5 GB' },
      { name: 'rune_part1.zip', size: '5.5 GB' },
      { name: 'rune_part2.zip', size: '5.5 GB' },
      { name: 'rune_extra.zip', size: '2.0 GB' },
    ]
  },
  {
    id: 4,
    name: 'Original Full',
    size: '120 GB',
    type: 'ISO Image',
    parts: 1,
    url: '#full-link',
    description: 'Complete uncompressed',
    files: [
      { name: 'game_full.iso', size: '120 GB' },
    ]
  }
];

// Links Section - بدون مودال، انتخاب مستقیم
export const LinksSection: React.FC<{
  game: Game;
  lang: 'en' | 'fa';
  sectionRef: React.RefObject<HTMLDivElement | null>;
  direction?: string;
}> = ({ game, lang, sectionRef  }) => {
  const [selectedCrackId, setSelectedCrackId] = useState<number | null>(null);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [allFilesCopied, setAllFilesCopied] = useState(false);

  const tLocal = {
    linkSectionTitle: lang === 'fa' ? 'لینک‌های دانلود' : 'Download Links',
    website: lang === 'fa' ? 'وبسایت رسمی' : 'Official Website',
    steamPage: lang === 'fa' ? 'صفحه Steam' : 'Steam Page',
    selectCrack: lang === 'fa' ? 'یک نسخه انتخاب کنید' : 'Select a version',
    copyFile: lang === 'fa' ? 'کپی' : 'Copy',
    copied: lang === 'fa' ? 'کپی شد!' : 'Copied!',
    zipFiles: lang === 'fa' ? 'فایل‌های ZIP' : 'ZIP Files',
    downloadWith: lang === 'fa' ? 'IDM' : 'IDM',
    openInBrowser: lang === 'fa' ? 'باز کردن' : 'Open',
    copyAllFiles: lang === 'fa' ? 'کپی تمام لینک‌ها' : 'Copy All Links',
    openAllFiles: lang === 'fa' ? 'باز کردن همه' : 'Open All',
    allFilesCopied: lang === 'fa' ? 'همه لینک‌ها کپی شدند!' : 'All links copied!',
  };

  const selectedCrack = selectedCrackId
    ? crackOptions.find(c => c.id === selectedCrackId)
    : null;

  const handleCopyFile = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedFile(url);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const handleSendToIdm = (url: string) => {
    const idmUrl = `idm://${url}`;
    window.location.href = idmUrl;
  };

  const handleOpenFile = (url: string) => {
    window.open(url, '_blank');
  };

  const handleCopyAllFiles = () => {
    if (selectedCrack) {
      const allFiles = selectedCrack.files
        .map(f => selectedCrack.url + '/' + f.name)
        .join('\n');
      navigator.clipboard.writeText(allFiles);
      setAllFilesCopied(true);
      setTimeout(() => setAllFilesCopied(false), 3000);
    }
  };

  const handleOpenAllFiles = () => {
    if (selectedCrack) {
      selectedCrack.files.forEach((file, index) => {
        setTimeout(() => {
          window.open(selectedCrack.url + '/' + file.name, '_blank');
        }, index * 300); // Delay each window to prevent browser blocking
      });
    }
  };

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
      <h2 className="section-title text-2xl font-extrabold mb-6 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
        <Link2 className="w-7 h-7 text-amber-500" />
        {tLocal.linkSectionTitle}
      </h2>

      {/* Official Website & Steam */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

        <motion.a
          href="https://store.steampowered.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-between p-4 bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-xl hover:from-blue-900/50 hover:to-blue-800/50 transition-colors group border border-blue-500/30 overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/images/company-logoes/steam.png"
              alt="Steam"
              fill
              sizes='md'
              className="object-cover scale-100"
            />
          </div>
          <div className="relative z-10 flex flex-col">
            <span className="font-semibold text-white">{tLocal.steamPage}</span>
          </div>
          <Link2 className="relative z-10 w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
        </motion.a>
      </div>

      {/* Crack Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-amber-300 mb-4 flex items-center gap-2">
          <FileArchive className="w-5 h-5" />
          {tLocal.selectCrack}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {crackOptions.map((crack) => (
            <motion.button
              key={crack.id}
              onClick={() => setSelectedCrackId(selectedCrackId === crack.id ? null : crack.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${selectedCrackId === crack.id
                  ? 'bg-amber-500/20 border-amber-500 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-800/50 border-zinc-700 hover:border-amber-500/50'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-white mb-1">{crack.name}</h4>
                  <p className="text-sm text-gray-400">{crack.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-amber-400">{crack.size}</div>
                  <div className="text-xs text-gray-500">{crack.parts} parts</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Zip Files List */}
      <AnimatePresence>
        {selectedCrack && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-zinc-800/50 rounded-lg border border-amber-500/30 p-6"
          >
            <h3 className="text-lg font-semibold text-amber-300 mb-4 flex items-center gap-2">
              <FileArchive className="w-5 h-5" />
              {tLocal.zipFiles} - {selectedCrack.name}
            </h3>

            <div className="space-y-3">
              {selectedCrack.files.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-zinc-900/50 rounded-lg border border-zinc-700 hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                      <p className="font-mono text-sm text-gray-300">{file.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{file.size}</p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {/* Copy Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopyFile(selectedCrack.url + '/' + file.name)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all text-xs font-medium ${copiedFile === selectedCrack.url + '/' + file.name
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20'
                          }`}
                      >
                        {copiedFile === selectedCrack.url + '/' + file.name ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>{tLocal.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>{tLocal.copyFile}</span>
                          </>
                        )}
                      </motion.button>

                      {/* IDM Download Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSendToIdm(selectedCrack.url + '/' + file.name)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-all text-xs font-medium"
                        title="Download with IDM"
                      >
                        <Download className="w-4 h-4" />
                        <span>{tLocal.downloadWith}</span>
                      </motion.button>

                      {/* Open in Browser Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleOpenFile(selectedCrack.url + '/' + file.name)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-all text-xs font-medium"
                        title="Open in browser"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{tLocal.openInBrowser}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bulk Actions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Copy All Files Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyAllFiles}
                className={`px-6 py-3 rounded-lg transition-all font-semibold flex items-center justify-center gap-2 ${allFilesCopied
                    ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50'
                    : 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-2 border-amber-500/50 hover:from-amber-500/30 hover:to-orange-500/30'
                  }`}
              >
                {allFilesCopied ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {tLocal.allFilesCopied}
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    {tLocal.copyAllFiles}
                  </>
                )}
              </motion.button>

              {/* Open All Files Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenAllFiles}
                className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-2 border-purple-500/50 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                {tLocal.openAllFiles}
              </motion.button>
            </div>

            {/* Info Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 flex items-start gap-2"
            >
              <FileArchive className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                {lang === 'fa'
                  ? 'برای دانلود سریع‌تر، از IDM استفاده کنید یا لینک‌ها را در مرورگر باز کنید.'
                  : 'For faster downloads, use IDM or open links in your browser.'
                }
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
// Downloads Section
type DownloadItem = { url: string; title: string; size: string };

export const DownloadsSection: React.FC<{
  downloads: DownloadItem[];
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
      <h2 className="section-title text-2xl font-extrabold mb-6  border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
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

export const CommentsSection: React.FC<{
  comments: Comment[];
  newComment: string;
  newRating: number;
  hoverRating: number;
  commentError: string;
  likedComments: Set<string>;
  dislikedComments: Set<string>; // NEW
  lang: 'en' | 'fa';
  direction: string;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  onCommentChange: (text: string) => void;
  onRatingChange: (rating: number) => void;
  onHoverRatingChange: (rating: number) => void;
  onCommentSubmit: () => void;
  onCommentLike: (id: string) => void;
  onCommentDislike: (id: string) => void; // NEW
}> = ({
  comments,
  newComment,
  newRating,
  hoverRating,
  commentError,
  likedComments,
  dislikedComments, // NEW
  lang,
  direction,
  sectionRef,
  onCommentChange,
  onRatingChange,
  onHoverRatingChange,
  onCommentSubmit,
  onCommentLike,
  onCommentDislike, // NEW
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
        <h2 className="section-title text-2xl font-extrabold mb-6 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
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
              <AlertCircle className="w-4 h-4 mx-2" />
              {commentError}
            </motion.div>
          )}
          <motion.button
            onClick={onCommentSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-3 px-6 py-2 border-1 border-gray-500 text-gray-200 rounded-lg hover:border-amber-400 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            {t.submit}
          </motion.button>
        </motion.div>

        {/* Comments List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {comments && comments.length > 0 ? (
              comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  direction={direction}
                  onLike={onCommentLike}
                  onDislike={onCommentDislike} // NEW
                  isLiked={likedComments.has(comment.id)}
                  isDisliked={dislikedComments.has(comment.id)} // NEW
                  t={t}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 bg-zinc-800/50 border border-zinc-700 rounded-xl text-center text-gray-500 italic"
              >
                {lang === 'fa' ? 'هنوز کامنتی نیست' : 'No comments yet'}
              </motion.div>
            )}
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
      <h2 className="section-title text-2xl font-extrabold mb-6 border-b-2 border-amber-500/40 pb-3 flex items-center gap-3">
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