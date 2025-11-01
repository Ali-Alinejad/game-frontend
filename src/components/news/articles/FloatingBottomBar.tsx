import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingBottomBarProps {
    language: 'en' | 'fa';
}

const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState<'newsletter' | 'trending' | 'share'>('trending');
    const isRTL = language === 'fa';

    useEffect(() => {
        const handleScroll = () => {
            // نمایش بعد از اسکرول 300 پیکسل
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const tabs = {
        trending: {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
            ),
            label: isRTL ? 'پرطرفدار' : 'Trending'
        },
        newsletter: {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: isRTL ? 'خبرنامه' : 'Newsletter'
        },
        share: {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            ),
            label: isRTL ? 'اشتراک' : 'Share'
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 border-t-2 border-black dark:border-amber-600 shadow-2xl"
                >
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200 dark:border-stone-800">
                        <div className="container mx-auto px-4">
                            <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                                {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all relative ${
                                            activeTab === tab
                                                ? 'text-amber-600 dark:text-amber-400'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                        }`}
                                    >
                                        {tabs[tab].icon}
                                        <span>{tabs[tab].label}</span>
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-400"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="container mx-auto px-4 py-4">
                        <AnimatePresence mode="wait">
                            {activeTab === 'trending' && (
                                <motion.div
                                    key="trending"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                    className="flex gap-4 overflow-x-auto pb-2"
                                >
                                    {[1, 2, 3, 4].map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="flex-shrink-0 w-64 group"
                                        >
                                            <div className="text-xs text-amber-600 dark:text-amber-500 font-semibold mb-1">
                                                {isRTL ? 'پرطرفدار' : 'TRENDING'}
                                            </div>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 line-clamp-2">
                                                Breaking: Latest gaming news update #{item}
                                            </h4>
                                        </a>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'newsletter' && (
                                <motion.div
                                    key="newsletter"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                    className={isRTL ? 'text-right' : 'text-left'}
                                >
                                    <div className="max-w-2xl mx-auto">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                                            {isRTL ? 'عضویت در خبرنامه' : 'Subscribe to our Newsletter'}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            {isRTL 
                                                ? 'آخرین اخبار را مستقیم در ایمیل خود دریافت کنید'
                                                : 'Get the latest news delivered directly to your inbox'}
                                        </p>
                                        <div className="flex gap-2">
                                            <input
                                                type="email"
                                                placeholder={isRTL ? 'ایمیل شما' : 'Enter your email'}
                                                className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:border-amber-600 dark:focus:border-amber-500"
                                            />
                                            <button className="px-6 py-2 bg-black dark:bg-amber-600 text-white font-semibold rounded hover:bg-gray-800 dark:hover:bg-amber-700 transition-colors">
                                                {isRTL ? 'عضویت' : 'Subscribe'}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'share' && (
                                <motion.div
                                    key="share"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                    className={`flex items-center justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    {['Twitter', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
                                        <button
                                            key={platform}
                                            className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-stone-700 text-gray-700 dark:text-gray-300 font-semibold rounded hover:border-amber-600 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all"
                                        >
                                            <span className="text-sm">{platform}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingBottomBar;