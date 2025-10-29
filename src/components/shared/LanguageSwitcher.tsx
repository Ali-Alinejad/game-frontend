import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useLanguageStore } from '@/app/zustand/uselangStore';

interface Language {
    code: 'en' | 'fa';
    name: string;
    flag: string;
    dir: 'ltr' | 'rtl';
}

const languages: Language[] = [
    {
        code: 'en',
        name: 'English',
        flag: '/images/flags/en-flag.png',
        dir: 'ltr'
    },
    {
        code: 'fa',
        name: 'فارسی',
        flag: '/images/flags/iran-flag.png',
        dir: 'rtl'
    }
];

export const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const { lang, setLang } = useLanguageStore();

    const currentLanguage = languages.find(l => l.code === lang) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        document.documentElement.dir = currentLanguage.dir;
        document.documentElement.lang = currentLanguage.code;
    }, [currentLanguage]);

    const handleLanguageChange = (language: Language) => {
        setLang(language.code);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "group flex items-center gap-2 p-1 px-3 scale-90  rounded-full text-sm font-medium",
                    "transition-all duration-300 ease-out",
                    "bg-black/10 hover:bg-text-stone-700 text-stone-700",
                    "border border-white/30",
                   
                    "dark:hover:from-amber-900/30 dark:hover:to-yellow-900/20",
                    "dark:text-white/80 ",
                    "shadow-sm hover:shadow-md dark:shadow-amber-950/20",
                    "backdrop-blur-sm"
                )}
            >
                <motion.div
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Image
                        src={currentLanguage.flag}
                        alt={currentLanguage.name}
                        width={22}
                        height={22}
                        className="rounded-full"
                    />
                </motion.div>
                <span className="font-medium tracking-wide">{currentLanguage.name}</span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={cn(
                        "w-4 h-4",
                        isOpen ? "text-amber-600 dark:text-amber-400" : "text-stone-400 dark:text-amber-600"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </motion.svg>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={cn(
                            "absolute   w-32 rounded-3xl overflow-hidden z-!500",
                            "bg-white/95 border border-white/10",
                            "dark:bg-gradient-to-b dark:from-stone-900/98 dark:to-stone-950/98",
                 
                            "backdrop-blur-xl shadow-xl dark:shadow-2xl dark:shadow-amber-950/30"
                        )}
                        style={{
                            [currentLanguage.dir === 'rtl' ? 'right' : 'left']: '0'
                        }}
                    >
                        {languages.map((language, index) => (
                            <motion.button
                                key={language.code}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                whileHover={{ x: 4, backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleLanguageChange(language)}
                                className={cn(
                                    "group/item flex items-center gap-3 w-full px-4 py-2 text-sm font-medium",
                                    "transition-colors duration-200",
                                    "text-stone-700 hover:text-stone-900",
                                    "dark:text-amber-100/90 dark:hover:text-amber-50",
                                    language.code === lang 
                                        ? "bg-gradient-to-r from-stone-100 to-stone-50 dark:from-stone-800/50 dark:to-stone-600/30" 
                                        : "dark:hover:bg-gradient-to-r dark:hover:to-transparent",
                                    index === 0 && "rounded-t-lg",
                                    index === languages.length - 1 && "rounded-b-lg"
                                )}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Image
                                        src={language.flag}
                                        alt={language.name}
                                        width={22}
                                        height={22}
                                        className={cn(
                                            "rounded-full",
                                            language.code === lang && "ring-2 ring-stone-300 dark:ring-amber-600/50"
                                        )}
                                    />
                                </motion.div>
                                <span className="flex-1 text-left tracking-wide">
                                    {language.name}
                                </span>
                                <AnimatePresence>
                                    {language.code === lang && (
                                        <motion.svg
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            exit={{ scale: 0, rotate: 180 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                            className="w-4 h-4 text-amber-600 dark:text-amber-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        ))}
                        
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent dark:via-amber-600/30"
                            />
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent dark:via-amber-600/30"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};