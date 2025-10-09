import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, HardDrive, CheckCircle, X, Film } from 'lucide-react';

// NOTE: Since the full project context (like the exact path and definition of useTranslations and DownloadType) is external, 
// we assume their correct structure for functionality. The required imports are included below.

/**
 * فرض بر این است که تایپ‌ها و هوک‌ها به این شکل تعریف شده‌اند:
 * type DownloadType = { title: string; url: string; size: string };
 * type Translations = { lang: 'en' | 'fa', setLang: (l: 'en' | 'fa') => void, viewDownloads: string, crackedTested: string, ... };
 */

// Placeholder for external imports for standalone compilation:
// You should ensure the real types and hooks are imported correctly in your project structure.

interface DownloadType {
    title: string;
    url: string;
    size: string;
}

interface TranslationProps {
    lang: 'en' | 'fa';
    setLang: (l: 'en' | 'fa') => void;
    viewDownloads: string;
    crackedTested: string;
    // Add other necessary translation keys here
}

// ----------------------------------------------------
// -------------- DOWNLOAD MODAL COMPONENT --------------
// ----------------------------------------------------

export const DownloadModal: React.FC<{ 
    downloads: DownloadType[]; 
    onClose: () => void; 
    t: TranslationProps; // Using placeholder type based on usage
    direction: string 
}> = ({ downloads, onClose, t, direction }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} 
        >
            <motion.div
                className={`bg-zinc-900 w-full max-w-lg rounded-2xl p-6 md:p-8 border-2 border-amber-500/50 shadow-2xl shadow-amber-900/40 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                initial={{ y: 50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center pb-4 border-b border-zinc-700 mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Download className='w-6 h-6 text-amber-500' />
                        {t.viewDownloads}
                    </h3>
                    <motion.button
                        onClick={onClose}
                        className="p-1 rounded-full bg-zinc-800 text-gray-400 hover:text-white transition-all"
                    >
                        <X className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* Download Links List */}
                <div className="space-y-4">
                    {downloads.map((dl, index) => (
                        <motion.a
                            key={index}
                            href={dl.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors group border border-zinc-700"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex flex-col">
                                <span className="font-semibold text-white">{dl.title}</span>
                                <span className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                                    <HardDrive className='w-4 h-4 text-gray-500' />
                                    {dl.size}
                                    <CheckCircle className='w-4 h-4 text-green-500' />
                                    {t.crackedTested}
                                </span>
                            </div>
                            <Download className='w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform' />
                        </motion.a>
                    ))}
                </div>

                <p className='text-center text-xs text-gray-500 mt-6'>
                    {t.lang === 'fa' ? 'تمامی لینک‌ها تست شده و فعال هستند.' : 'All links are tested and active.'}
                </p>
            </motion.div>
        </motion.div>
    );
};


// ----------------------------------------------------
// -------------- TRAILER MODAL COMPONENT ---------------
// ----------------------------------------------------

export const TrailerModal: React.FC<{ 
    trailerUrl: string; 
    onClose: () => void; 
    t: TranslationProps; // Using placeholder type based on usage
    direction: string 
}> = ({ trailerUrl, onClose, t, direction }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className={`bg-zinc-900 w-full max-w-4xl rounded-2xl p-2 md:p-4 border-2 border-amber-500/50 shadow-2xl shadow-amber-900/40 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                initial={{ y: 50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end p-2 ">
                    <motion.button
                        onClick={onClose}
                        className="p-1  rounded-full cursor-pointer bg-zinc-800 text-gray-400 hover:text-white transition-all z-10"
                    >
                        <X className="w-6 h-6" />
                    </motion.button>
                </div>

                <div className="aspect-video w-full -mt-10">
                    {trailerUrl ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={trailerUrl}
                            title="Official Game Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='rounded-xl'
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 bg-zinc-800 rounded-xl">
                            <Film className='w-8 h-8 mr-2' />
                            {t.lang === 'fa' ? 'آدرس تریلر نامعتبر است.' : 'Trailer URL is invalid.'}
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};
