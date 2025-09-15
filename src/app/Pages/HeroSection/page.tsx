// app/page.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useScroll, Sparkles, ScrollControls, Scroll } from '@react-three/drei';
import * as THREE from 'three';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';
import { useLanguageFont } from '../../hook/langFontUtils';
import { Avatar, Button } from '@heroui/react';
import { Search, LogIn, LogOut, Gamepad2, Newspaper, Trophy, Calendar, Flame, Star, Home, Users, MessageCircle, Send, Instagram, Youtube, ArrowDown } from 'lucide-react';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { mockGames } from '@/app/types/mockData';
import { Game } from '@/app/types/Game';

// THREE.js Scene Component
const Scene = () => {
    const scroll = useScroll();
    const meshRef = useRef();
    
    useFrame(() => {
        if (meshRef.current) {
            // @ts-ignore
            meshRef.current.rotation.y += 0.001;
            // @ts-ignore
            meshRef.current.position.y = -0.5 + scroll.offset * 2;
            // @ts-ignore
            meshRef.current.position.z = -1 + scroll.offset * 5;
        }
    });
    
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.2} color="#fff" />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF007F" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#EA0054" />
            <motion.mesh ref={meshRef} whileHover={{ scale: 1.1 }}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial 
                    color="#EA0054" 
                    roughness={0.5} 
                    metalness={0.9} 
                    wireframe={false} 
                    emissive="#ff007f" 
                    emissiveIntensity={0.5} 
                />
            </motion.mesh>
            <Sparkles count={150} scale={15} size={3} color="#EA0054" speed={0.5} opacity={0.5} />
            <Sparkles count={200} scale={10} size={2} color="#fff" speed={0.7} opacity={0.3} />
            <OrbitControls enableZoom={false} enablePan={false} />
        </>
    );
};

// Main Page Component
const GamingHub: React.FC = () => {
    const { lang, toggleLang } = useLanguageStore();
    const { fontClass, direction } = useLanguageFont(lang);
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<{ name: string; avatar: string } | null>(null);
    const [activeItem, setActiveItem] = useState('home');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position
    useEffect(() => {
        const updateScrollY = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', updateScrollY);
        return () => window.removeEventListener('scroll', updateScrollY);
    }, []);

    // Placeholder for API data fetch
    const games = mockGames;
    const featuredGames = games.slice(0, 5);
    const sideGames = games.slice(1, 4);

    useEffect(() => {
        if (games.length > 3) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % Math.min(games.length, 5));
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [games.length]);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUser({ name: "Ali Alinejad", avatar: "https://i.pravatar.cc/150?u=ali" });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    const handleExploreClick = () => {
        router.push('/game');
    };

    const menuItems = [
        { id: 'home', label: { fa: 'خانه', en: 'Home' }, icon: Home },
        { id: 'news', label: { fa: 'اخبار', en: 'News' }, icon: Newspaper },
        { id: 'releases', label: { fa: 'تاریخ عرضه', en: 'Releases' }, icon: Calendar },
        { id: 'collection', label: { fa: 'کالکشن', en: 'Collection' }, icon: Trophy },
        { id: 'trending', label: { fa: 'ترندینگ', en: 'Trending' }, icon: Flame },
        { id: 'reviews', label: { fa: 'نقد و بررسی', en: 'Reviews' }, icon: Star }
    ];

    const getGameTitle = (game: Game) => {
        if (typeof game.title === 'object' && game.title !== null && typeof (game.title as Record<string, string>).en === 'string') {
            return (game.title as Record<string, string>)[lang] || (game.title as Record<string, string>).en || 'Game Title';
        }
        return typeof game.title === 'string' ? game.title : 'Game Title';
    };

    const getGameDescription = (game: Game) => {
        if (game.description) {
            if (typeof game.description === 'object') {
                const langKey = lang === 'fa' ? 'persian' : lang === 'en' ? 'english' : lang === 'short' ? 'short' : 'english';
                return game.description[langKey] || game.description.english || "Experience the ultimate gaming adventure.";
            }
            return game.description;
        }
        return lang === 'fa' ? "تجربه‌ای فوق‌العاده از بازی با گرافیک خیره‌کننده." : "Experience the ultimate gaming adventure.";
    };
    
    const onGameClick = (game: Game) => {
        console.log('Game clicked:', game.title);
        router.push('/game');
    };

    // Header scroll effects
    const isScrolled = scrollY > 50;

    return (
        <div className={twMerge(`min-h-screen bg-zinc-950 text-white overflow-x-hidden`, fontClass)} dir={direction}>
            {/* Enhanced Header - Made Horizontal */}
            <AnimatePresence>
                <motion.header
                    className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                        isScrolled 
                            ? 'backdrop-blur-xl bg-zinc-950/95 border-b border-zinc-800/50 shadow-2xl shadow-zinc-950/50' 
                            : 'backdrop-blur-sm bg-zinc-950/20'
                    }`}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className={`transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
                        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8">
                            {/* Logo Section */}
                            <motion.div 
                                className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative">
                                    <motion.div 
                                        className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl transform -rotate-12 shadow-lg shadow-rose-500/50"
                                        animate={{ 
                                            boxShadow: isScrolled 
                                                ? "0 10px 25px rgba(244, 63, 94, 0.3)" 
                                                : "0 20px 40px rgba(244, 63, 94, 0.6)"
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Gamepad2 className="w-5 h-5 text-white z-20" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 font-bold text-xl">
                                        GAMING HUB
                                    </span>
                                    {!isScrolled && (
                                        <motion.span 
                                            className="text-xs text-gray-400 font-medium"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {lang === 'fa' ? 'دنیای گیمینگ' : 'Gaming World'}
                                        </motion.span>
                                    )}
                                </div>
                            </motion.div>

                            {/* Center Navigation - Horizontal Menu */}
                            <motion.nav 
                                className="hidden lg:flex items-center space-x-1 bg-zinc-800/40 backdrop-blur-xl rounded-full px-2 py-2 border border-zinc-700/50"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                {menuItems.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = activeItem === item.id;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveItem(item.id)}
                                            className={`relative flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm
                                                ${isActive 
                                                    ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/40" 
                                                    : "text-gray-300 hover:text-white hover:bg-zinc-700/60"
                                                }
                                            `}
                                        >
                                            <Icon className="w-4 h-4 mr-2" />
                                            <span className="whitespace-nowrap">{item.label[lang]}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-gradient-to-r from-rose-500 to-red-600 rounded-full -z-10"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </motion.nav>

                            {/* Mobile Navigation Toggle */}
                            <motion.button
                                className="lg:hidden p-2 rounded-full bg-zinc-800/60 border border-zinc-700/50"
                                whileTap={{ scale: 0.95 }}
                            >
                                <Gamepad2 className="w-5 h-5 text-rose-400" />
                            </motion.button>

                            {/* Right Section */}
                            <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                                {/* Enhanced Search */}
                                <motion.div 
                                    className="relative hidden md:block"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <input 
                                        type="text" 
                                        placeholder={lang === 'fa' ? 'جستجوی بازی...' : 'Search games...'} 
                                        className={`bg-zinc-800/60 text-white placeholder-gray-400 rounded-full border border-zinc-700/50 focus:border-rose-400/50 focus:outline-none focus:ring-2 focus:ring-rose-400/20 transition-all duration-300 ${
                                            isScrolled ? 'py-2 px-4 text-sm w-40' : 'py-2.5 px-5 text-base w-48'
                                        }`}
                                    />
                                    <Search className="w-4 h-4 text-gray-400 absolute inset-y-0 right-4 my-auto pointer-events-none" />
                                </motion.div>

                                {/* User Authentication */}
                                {isLoggedIn && user ? (
                                    <motion.div 
                                        className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Avatar 
                                            src={user.avatar} 
                                            alt="User Avatar" 
                                            className="w-9 h-9 rounded-full border-2 border-rose-400/50 cursor-pointer shadow-lg hover:shadow-rose-400/30 transition-all duration-300" 
                                        />
                                        <Button 
                                            isIconOnly 
                                            variant="ghost" 
                                            className="text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300 rounded-full" 
                                            onClick={handleLogout}
                                        >
                                            <LogOut className="w-4 h-4" />
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button 
                                            variant="solid" 
                                            className={`bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 ${
                                                isScrolled ? 'text-sm py-2 px-4' : 'text-base py-2.5 px-5'
                                            }`}
                                            onClick={handleLogin}
                                        >
                                            <LogIn className={`w-4 h-4 ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                                            {lang === 'fa' ? 'ورود' : 'Login'}
                                        </Button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.header>
            </AnimatePresence>

            {/* Mobile Navigation Menu */}
            <motion.div
                className="lg:hidden fixed top-20 inset-x-0 z-40 backdrop-blur-xl bg-zinc-900/95 border-b border-zinc-800/30"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <div className="px-4 py-3">
                    <div className="flex space-x-2 overflow-x-auto scrollbar-gaming">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeItem === item.id;
                            return (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveItem(item.id)}
                                    className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap
                                        ${isActive 
                                            ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/40" 
                                            : "text-gray-300 hover:text-white hover:bg-zinc-800/60"
                                        }
                                    `}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {item.label[lang]}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* THREE.js Canvas Background */}
            <div className="fixed inset-0 z-0">
                <Canvas>
                    <ScrollControls pages={3} damping={0.2}>
                        <Scene />
                        <Scroll html>
                            {/* Main Content */}
                            <div className="relative z-10 pt-32 lg:pt-28 pb-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                                {/* Hero Section */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 50 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 1.2, delay: 0.8 }} 
                                    className="h-[70vh] flex flex-col justify-center items-center text-center mb-20"
                                >
                                    <motion.h1 
                                        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 mb-6 drop-shadow-2xl"
                                        animate={{ 
                                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity,
                                            ease: "linear" 
                                        }}
                                        style={{ backgroundSize: '200% 200%' }}
                                    >
                                        {lang === 'fa' ? 'هاب گیمینگ' : 'GAMING HUB'}
                                    </motion.h1>
                                    <motion.p 
                                        className="text-xl md:text-2xl max-w-3xl text-gray-300 mb-8 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                    >
                                        {lang === 'fa' 
                                            ? 'دروازه شما به دنیای گیمینگ. آخرین اخبار، نقد و بررسی و ترندهای بازی را کشف کنید.' 
                                            : 'Your ultimate portal to the gaming world. Discover latest news, reviews, and game trends.'
                                        }
                                    </motion.p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5 }}
                                    >
                                        <Button 
                                            variant="solid" 
                                            onClick={handleExploreClick}
                                            className="bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold rounded-full py-4 px-10 text-lg shadow-2xl hover:shadow-rose-500/50 transition-all duration-300"
                                        >
                                            {lang === 'fa' ? 'کاوش هاب' : 'Explore Hub'}
                                        </Button>
                                    </motion.div>
                                    <motion.div 
                                        className="mt-12 flex items-center text-sm text-gray-400"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <ArrowDown className="w-5 h-5 mr-2" />
                                        {lang === 'fa' ? 'برای کاوش اسکرول کنید' : 'Scroll to explore'}
                                    </motion.div>
                                </motion.div>

                                {/* Enhanced News Grid */}
                                <motion.div 
                                    className="mt-20"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="relative mb-12 overflow-hidden rounded-3xl">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                            {/* Enhanced Main Featured Game */}
                                            <div className="lg:col-span-2 relative group cursor-pointer" onClick={() => onGameClick(featuredGames[currentSlide])}>
                                                <motion.div 
                                                    key={currentSlide} 
                                                    initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} 
                                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
                                                    exit={{ opacity: 0, scale: 0.95, rotateY: 10 }} 
                                                    transition={{ duration: 0.8, ease: "easeInOut" }} 
                                                    className="relative w-full h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                                                >
                                                    <motion.img 
                                                        src={featuredGames[currentSlide]?.image} 
                                                        alt={getGameTitle(featuredGames[currentSlide])} 
                                                        className="absolute inset-0 w-full h-full object-cover" 
                                                        whileHover={{ scale: 1.05 }} 
                                                        transition={{ duration: 0.6, ease: "easeOut" }} 
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                                                    <div className={`absolute inset-0 bg-gradient-to-${direction === 'rtl' ? 'l' : 'r'} from-black/70 via-transparent to-transparent`} />
                                                    
                                                    <div className={`absolute bottom-0 ${direction === 'rtl' ? 'right-0 text-end' : 'left-0 text-start'} p-10`}>
                                                        <motion.div 
                                                            initial={{ y: 50, opacity: 0 }} 
                                                            animate={{ y: 0, opacity: 1 }} 
                                                            transition={{ delay: 0.3, duration: 0.8 }} 
                                                            className="space-y-6"
                                                        >
                                                            <div className={`flex ${direction === 'rtl' ? 'space-x-reverse space-x-4 justify-end' : 'space-x-4'}`}>
                                                                <span className="px-4 py-2 bg-gradient-to-r from-rose-500 to-red-600 text-white text-sm font-bold rounded-full shadow-lg">
                                                                    {lang === 'fa' ? 'منتخب' : 'FEATURED'}
                                                                </span>
                                                                {featuredGames[currentSlide]?.hasDiscount && (
                                                                    <motion.span 
                                                                        className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-bold rounded-full backdrop-blur-sm"
                                                                        animate={{ scale: [1, 1.05, 1] }}
                                                                        transition={{ duration: 2, repeat: Infinity }}
                                                                    >
                                                                        {lang === 'fa' ? 'کرک' : 'Crack'}
                                                                    </motion.span>
                                                                )}
                                                            </div>
                                                            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight group-hover:text-rose-300 transition-colors duration-300">
                                                                {getGameTitle(featuredGames[currentSlide])}
                                                            </h1>
                                                            <p className="text-gray-200 text-xl max-w-2xl leading-relaxed">
                                                                {getGameDescription(featuredGames[currentSlide])}
                                                            </p>
                                                            <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-8 justify-end' : 'space-x-8'} text-gray-300`}>
                                                                <div className={`flex items-center ${direction === 'rtl' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                                                                    <span className="text-2xl">⭐</span>
                                                                    <span className="font-bold text-xl">{(Math.random() * 2 + 8).toFixed(1)}/10</span>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Enhanced Side Content */}
                                            <div className="space-y-6">
                                                {/* Enhanced Hub Info Card */}
                                                <motion.div 
                                                    initial={{ opacity: 0, x: 50 }} 
                                                    animate={{ opacity: 1, x: 0 }} 
                                                    transition={{ delay: 0.8, duration: 0.8 }} 
                                                    className="relative overflow-hidden bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/30 shadow-2xl"
                                                >
                                                    <div className="absolute inset-0 overflow-hidden">
                                                        <motion.div 
                                                            animate={{ 
                                                                background: [
                                                                    "radial-gradient(circle at 100% 40%, rgba(244, 63, 94, 0.3) 10%, transparent 60%)", 
                                                                    "radial-gradient(circle at 10% 40%, rgba(239, 68, 68, 0.3) 0%, transparent 60%)"
                                                                ] 
                                                            }} 
                                                            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} 
                                                            className="absolute inset-0" 
                                                        />
                                                    </div>
                                                    <div className="relative z-10">
                                                        <div className="flex items-center justify-between mb-6">
                                                            <h3 className="text-2xl font-bold text-white">
                                                                {lang === 'fa' ? 'هاب گیمینگ' : 'Gaming Hub'}
                                                            </h3>
                                                            <Gamepad2 className="w-8 h-8 text-rose-400" />
                                                        </div>
                                                        <p className="text-gray-200 text-base leading-relaxed mb-6">
                                                            {lang === 'fa' 
                                                                ? 'بازی‌های ترند، محتوای اختصاصی و جامعه‌ای پر جنب و جوش از گیمرها را کشف کنید!' 
                                                                : 'Discover trending games, exclusive content, and join our vibrant gaming community!'
                                                            }
                                                        </p>
                                                        <div className="flex flex-wrap gap-3 mb-6">
                                                            {(lang === 'fa' 
                                                                ? ['نقد و بررسی', 'اخبار', 'به‌روزرسانی', 'کامیونیتی'] 
                                                                : ['Reviews', 'News', 'Updates', 'Community']
                                                            ).map((tag, index) => (
                                                                <motion.span 
                                                                    key={tag} 
                                                                    initial={{ opacity: 0, scale: 0 }} 
                                                                    animate={{ opacity: 1, scale: 1 }} 
                                                                    transition={{ delay: 1 + index * 0.1 }} 
                                                                    className="text-sm bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                                                                >
                                                                    {tag}
                                                                </motion.span>
                                                            ))}
                                                        </div>
                                                                                                               <motion.button 
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={handleExploreClick}
                                                            className="w-full bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-rose-500/40 transition-all duration-300"
                                                        >
                                                            {lang === 'fa' ? 'شروع کاوش' : 'Start Exploring'}
                                                        </motion.button>
                                                    </div>
                                                </motion.div>

                                                {/* Enhanced Side Games */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                                    {sideGames.map((game, index) => (
                                                        <motion.div 
                                                          game  key={game.id} 
                                                            initial={{ opacity: 0, x: 50 }} 
                                                            animate={{ opacity: 1, x: 0 }} 
                                                            transition={{ delay: 1 + index * 0.2, duration: 0.6 }} 
                                                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer border border-zinc-700/40 hover:border-rose-500/40 transition-all duration-300"
                                                            onClick={() => onGameClick(game)}
                                                        >
                                                            <motion.img 
                                                                src={game.image} 
                                                                alt={getGameTitle(game)} 
                                                                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" 
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                                            <div className="absolute bottom-0 left-0 p-4">
                                                                <h4 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                                                                    {getGameTitle(game)}
                                                                </h4>
                                                                <p className="text-sm text-gray-300 line-clamp-2">
                                                                    {getGameDescription(game)}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </div>
        </div>
    );
};

export default GamingHub;
