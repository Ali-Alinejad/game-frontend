// news/pages/NewsIndexWrapper.tsx (A file that might wrap NewsIndex.tsx)
"use client";

import React, { useState } from 'react';
import { Header } from '@/components/mainSection/Header/HeaderMain';
import RedesignedNews from './RedesignedNews';

// Mock types and translation data to satisfy the Header component's requirements
type Language = 'en' | 'fa';
const mockT = {
    logo: { en: 'THE GAMING TIMES', fa: 'اخبار بازی' },
    login: { en: 'Login', fa: 'ورود' },
    searchPlaceholder: { en: 'Search news, games, and hardware...', fa: 'جستجو در اخبار، بازی‌ها و سخت‌افزار...' },
    // Add other necessary translations
};
const mockUser = { id: '1', name: 'Gamer', avatar: '/authors/john.jpg' };


const NewsIndexWrapper: React.FC = () => {
    const [lang, setLang] = useState<Language>('en');
    const [isScrolled, setIsScrolled] = useState(false); // Simplified scrolling for example
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Create a translations object that matches what Header expects (t.logo, t.login, etc.)
    const t = {
        logo: mockT.logo[lang],
        login: mockT.login[lang],
        searchPlaceholder: mockT.searchPlaceholder[lang],
    };

    const handleToggleLang = () => {
        setLang(prev => (prev === 'en' ? 'fa' : 'en'));
    };

    const isRTL = lang === 'fa';

    // Apply RTL/LTR direction to the body or main container
    React.useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.body.className = isRTL ? 'font-fa' : 'font-sans';
        // You would need to define 'font-fa' for Persian font in your CSS/Tailwind config
    }, [isRTL]);


    // NOTE: The header component is massive, I'm just showing the minimum props needed
    // This setup ensures the language state is managed here and passed to both Header and NewsIndex.
    return (
        <>
            <Header
                isLoggedIn={true}
                user={mockUser}
                activeItem="news"
                isScrolled={isScrolled}
                isMenuOpen={isMenuOpen}
                lang={lang}
                t={t}
                onLogin={() => { }}
                onLogout={() => { }}
                onNavigation={() => { }}
                onToggleMenu={() => setIsMenuOpen(prev => !prev)}
                onToggleLang={handleToggleLang} // <-- The action hook
            />

            {/* Add padding top to account for the fixed header */}
            <main className="pt-32">
                <RedesignedNews language={lang} t={t} />
            </main>
        </>
    );
};

export default NewsIndexWrapper;