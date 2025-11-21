"use client"
import Link from 'next/link'
import { useLanguageStore } from '@/app/zustand/uselangStore'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const translations = {
    en: {
        title: "Page Not Found",
        description: "The page you're looking for seems to have wandered off into the digital void.",
        button: "Return Home"
    },
    fa: {
        title: "صفحه یافت نشد",
        description: "صفحه‌ای که به دنبالش هستید در خلأ دیجیتال گم شده است.",
        button: "بازگشت به خانه"
    }
}

export default function NotFound() {
    const { lang } = useLanguageStore()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const t = translations[lang]
    const isRTL = lang === 'fa'

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />
            
            {/* Radial gradient overlays */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
    

            <div dir={isRTL ? 'rtl' : 'ltr'} className="relative z-10 w-full max-w-7xl mx-auto px-6">
                {/* Main content */}
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Giant 404 with artistic design */}
                    <div className="relative">
                        {/* Background glow layers */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 -inset-x-20 -inset-y-10"
                        >
                            <div className="w-full h-full bg-linear-to-r from-amber-500/30 via-yellow-500/30 to-amber-500/30 blur-[100px] rounded-full" />
                        </motion.div>

                        {/* Main 404 */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 100, 
                                damping: 15,
                                delay: 0.1 
                            }}
                            className="relative"
                        >
                            <h1 className="text-[10rem] md:text-[18rem] lg:text-[20rem] font-black leading-none tracking-tighter">
                                <span className="inline-block bg-clip-text text-transparent bg-linear-to-b from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_0_60px_rgba(251,191,36,0.5)]">
                                    4
                                </span>
                                <span className="inline-block bg-clip-text text-transparent bg-linear-to-b from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_0_60px_rgba(250,204,21,0.5)] mx-2 md:mx-6">
                                    0
                                </span>
                                <span className="inline-block bg-clip-text text-transparent bg-linear-to-b from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_0_60px_rgba(251,191,36,0.5)]">
                                    4
                                </span>
                            </h1>
                        </motion.div>

                        {/* Decorative line under 404 */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[2px] bg-linear-to-r from-transparent via-amber-500 to-transparent"
                        />
                    </div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="space-y-6 max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-amber-100">
                            {t.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-amber-200/60 font-light">
                            {t.description}
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="pt-6"
                    >
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(251,191,36,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-5 text-lg font-semibold text-black bg-linear-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-full overflow-hidden transition-all duration-300"
                            >
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                                    animate={{
                                        x: ['-200%', '200%']
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 1
                                    }}
                                />
                                
                                <span className="relative flex items-center gap-3">
                                    <svg 
                                        className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                        style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2.5} 
                                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        />
                                    </svg>
                                    {t.button}
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <div className="absolute top-1/4 left-10 md:left-20">
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-4 h-4 border-2 border-amber-500/50 rounded-sm"
                        />
                    </div>

                    <div className="absolute top-1/3 right-10 md:right-20">
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, -180, -360]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-3 h-3 bg-yellow-500/30 rounded-full"
                        />
                    </div>

                    <div className="absolute bottom-1/4 left-1/4">
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-2 h-2 bg-amber-400/40 rounded-full"
                        />
                    </div>

                    <div className="absolute bottom-1/3 right-1/3">
                        <motion.div
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 20, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-6 h-6 border border-yellow-500/30 rotate-45"
                        />
                    </div>
                </div>
            </div>

            {/* Subtle particles effect */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    )
}