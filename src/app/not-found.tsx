"use client"
import Link from 'next/link'
import { useLanguageStore } from '@/app/zustand/uselangStore'
import { useEffect, useState } from 'react'

const translations = {
    en: {
        title: "Page Not Found",
        description: "Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.",
        button: "Go Back Home"
    },
    fa: {
        title: "صفحه مورد نظر یافت نشد",
        description: "متأسفیم، صفحه‌ای که به دنبال آن هستید پیدا نشد. ممکن است حذف شده، نامش تغییر کرده یا موقتاً در دسترس نباشد.",
        button: "بازگشت به صفحه اصلی"
    }
}

export default function NotFound() {
    const { lang } = useLanguageStore()
    const [mounted, setMounted] = useState(false)

    // Handle hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const t = translations[lang]
    const isRTL = lang === 'fa'
console.log(lang , 111111111111)
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            <div dir={isRTL ? 'rtl' : 'ltr'} className="relative w-full max-w-2xl mx-auto px-4">
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-8">
                    {/* Glowing 404 */}
                    <div className="relative">
                        <span className="absolute inset-0 text-6xl md:text-8xl font-bold text-blue-500/20 blur-sm">404</span>
                        <h1 className="relative text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            404
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                            {t.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                            {t.description}
                        </p>
                    </div>

                    {/* Button with animation */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg 
                         hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            {t.button}
                        </Link>
                    </div>

                    {/* Decorative dots */}
                    <div className="absolute bottom-4 right-4">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-pink-500/50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}