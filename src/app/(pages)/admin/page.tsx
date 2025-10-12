"use client"
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Users, MessageSquare, Gamepad2, TrendingUp, 
  Ban, Settings, Globe, BarChart3, Calendar, Star,
  Search, Bell, ChevronDown, Plus, Filter, Download,
  Eye, Edit2, Trash2, CheckCircle, XCircle,
  Tag,
  CompassIcon,
} from 'lucide-react';
import { mockGames } from '@/app/types/mockData';

// =================================================================
// 1. INTERFACES (واسط‌ها)
// =================================================================

interface LocalizedString {
  en: string;
  fa: string;
}

interface LocalizedText {
  english: string;
  persian: string;
}

interface SystemSpecs {
  os: string;
  ram: string;
  cpu: string;
  gpu: string;
  storage: string;
  typeStorage: string;
}

interface CrackFile {
  name: string;
  size: string;
  url: string;
}

interface CrackVersion {
  name: string;
  version: string;
  totalSize: string;
  files: CrackFile[];
}

interface Game {
  id: string;
  title: LocalizedString;
  image: string;
  backgroundImage: string;
  screenshots: string[];
  supportedLanguages: string[];
  platform: string[];
  releaseDate: string;
  developer: string;
  genres: string[];
  tags: string[];
  marketPrice: number;
  hasDiscount: boolean;
  trailerUrl: string;
  description: {
    short: LocalizedText;
    long: LocalizedText;
    storyline: LocalizedText;
  };
  developerInfo: {
    logo: string;
    description: LocalizedString;
    website: string;
    founded: string;
  };
  systemRequirements: {
    minimum: SystemSpecs;
    recommended: SystemSpecs;
  };
  crackVersions: CrackVersion[];
}

// =================================================================
// 2. MOCK DATA (داده‌های ساختگی)
// =================================================================




// =================================================================
// 3. TRANSLATIONS (ترجمه‌ها)
// =================================================================

const translations = (lang: string) => ({
    dashboard: lang === 'fa' ? 'داشبورد' : 'Dashboard',
    overview: lang === 'fa' ? 'نمای کلی' : 'Overview',
    users: lang === 'fa' ? 'کاربران' : 'Users',
    comments: lang === 'fa' ? 'نظرات' : 'Comments',
    games: lang === 'fa' ? 'بازی‌ها' : 'Games',
    trending: lang === 'fa' ? 'ترند روز' : 'Trending',
    news: lang === 'fa' ? 'اخبار' : 'News',
    top10: lang === 'fa' ? '10 برتر' : 'Top 10',
    settings: lang === 'fa' ? 'تنظیمات' : 'Settings',
    totalUsers: lang === 'fa' ? 'کل کاربران' : 'Total Users',
    activeUsers: lang === 'fa' ? 'کاربران فعال' : 'Active Users',
    totalGames: lang === 'fa' ? 'کل بازی‌ها' : 'Total Games',
    pendingComments: lang === 'fa' ? 'نظرات در انتظار' : 'Pending Comments',
    search: lang === 'fa' ? 'جستجو...' : 'Search...',
    gameManagement: lang === 'fa' ? 'مدیریت بازی‌ها' : 'Games Management',
    addNewGame: lang === 'fa' ? 'افزودن بازی جدید' : 'Add New Game',
    title: lang === 'fa' ? 'عنوان' : 'Title',
    developer: lang === 'fa' ? 'توسعه‌دهنده' : 'Developer',
    releaseDate: lang === 'fa' ? 'تاریخ انتشار' : 'Release Date',
    price: lang === 'fa' ? 'قیمت (دلار)' : 'Price (USD)',
    status: lang === 'fa' ? 'وضعیت' : 'Status',
    actions: lang === 'fa' ? 'عملیات' : 'Actions',
    editGame: lang === 'fa' ? 'ویرایش بازی' : 'Edit Game',
    shortDescription: lang === 'fa' ? 'توضیح کوتاه' : 'Short Description',
    longDescription: lang === 'fa' ? 'توضیح کامل' : 'Long Description',
    saveChanges: lang === 'fa' ? 'ذخیره تغییرات' : 'Save Changes',
    close: lang === 'fa' ? 'بستن' : 'Close',
    free: lang === 'fa' ? 'رایگان' : 'Free',
    paid: lang === 'fa' ? 'پولی' : 'Paid',
    filter: lang === 'fa' ? 'فیلتر' : 'Filter',
});


// =================================================================
// UTILITY CLASSES FOR TAILWIND (رفع باگ کلاس‌های داینامیک)
// =================================================================
// Tailwind requires the full class strings to be present for the JIT compiler to work correctly.
const colorClasses: { [key: string]: string } = {
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600',
    red: 'from-red-500 to-red-600',
    green: 'from-green-500 to-green-600',
};


// =================================================================
// 4. MAIN COMPONENTS (کامپوننت‌های اصلی)
// =================================================================

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('games'); // Start on GamesTab for demonstration
  const [lang, setLang] = useState('fa');
  const [searchQuery, setSearchQuery] = useState('');
  const [gamesData, setGamesData] = useState<Game[]>(mockGames);

  const t = translations(lang);

  const stats = useMemo(() => [
    { label: t.totalUsers, value: '92,864', change: '+12%', color: 'purple', icon: Users },
    { label: t.activeUsers, value: '48,789', change: '+8%', color: 'blue', icon: Users },
    { 
        label: t.totalGames, 
        value: gamesData.length.toLocaleString(), // Use actual game count
        change: '+2%', 
        color: 'red', 
        icon: Gamepad2 
    },
    { label: t.pendingComments, value: '48,763', change: '-15%', color: 'green', icon: MessageSquare },
  ], [t, gamesData.length]);

  const menuItems = [
    { id: 'overview', label: t.overview, icon: BarChart3 },
    { id: 'users', label: t.users, icon: Users },
    { id: 'comments', label: t.comments, icon: MessageSquare },
    { id: 'games', label: t.games, icon: Gamepad2 },
    { id: 'trending', label: t.trending, icon: TrendingUp },
    { id: 'news', label: t.news, icon: Calendar },
    { id: 'top10', label: t.top10, icon: Star },
  ];
  
  // Function to update game data
  const handleUpdateGame = (updatedGame: Game) => {
    setGamesData(prev => 
      prev.map(game => (game.id === updatedGame.id ? updatedGame : game))
    );
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-white" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-r border-zinc-800 flex flex-col"
      >
        {/* Logo */}
        <div className="p-6 border-b border-zinc-800">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    GameFord
                  </h1>
                  <p className="text-xs text-gray-500">Admin Panel</p>
                </div>
              </motion.div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30'
                  : 'text-gray-400 hover:bg-zinc-800 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </motion.button>
          ))}
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-zinc-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-zinc-800 hover:text-white transition-all">
            <Settings className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="font-medium">{t.settings}</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-zinc-900/50 backdrop-blur-xl border-b border-zinc-800 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className={`absolute ${lang === 'fa' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500`} />
                <input
                  type="text"
                  placeholder={t.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full ${lang === 'fa' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors`}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{lang === 'fa' ? 'EN' : 'FA'}</span>
              </button>

              {/* Notifications */}
              <button className="relative p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <button className="flex items-center gap-3 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-sm font-bold">A</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && <OverviewTab stats={stats} lang={lang} />}
            {activeTab === 'users' && <UsersTab lang={lang} />}
            {activeTab === 'comments' && <CommentsTab lang={lang} />}
            {activeTab === 'games' && <GamesTab lang={lang} games={gamesData} onUpdateGame={handleUpdateGame} />}
            {activeTab === 'trending' && <TrendingTab lang={lang} />}
            {activeTab === 'news' && <NewsTab lang={lang} />}
            {activeTab === 'top10' && <Top10Tab lang={lang} />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

// =================================================================
// 5. TAB COMPONENTS (کامپوننت‌های تب)
// =================================================================


// Overview Tab - FIXED
const OverviewTab = ({ stats, lang }: any) => {
    const t = translations(lang);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
        >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {lang === 'fa' ? 'نمای کلی داشبورد' : 'Dashboard Overview'}
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat: any, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700 hover:border-amber-500/50 transition-colors"
                    >
                        {/* FIX: Using defined colorClasses map to prevent Tailwind JIT issues */}
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[stat.color]} flex items-center justify-center`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {stat.change}
                        </span>
                        
                        <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Charts - Ready for Recharts/Tremor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700">
                    <h3 className="text-xl font-bold mb-4">{lang === 'fa' ? 'رشد کاربران' : 'User Growth'}</h3>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[65, 48, 89, 72, 95, 58, 78, 85, 92, 70, 88, 95].map((height, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex-1 bg-gradient-to-t from-amber-600 to-orange-500 rounded-t-lg relative group cursor-pointer"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    {height}%
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700">
                    <h3 className="text-xl font-bold mb-4">{lang === 'fa' ? 'فعالیت اخیر' : 'Recent Activity'}</h3>
                    <div className="space-y-4">
                        {[
                            { user: 'علی احمدی', action: 'نظر جدید', time: '2 دقیقه پیش', type: 'comment' },
                            { user: 'Sara Smith', action: 'New user registered', time: '5 min ago', type: 'user' },
                            { user: 'محمد رضایی', action: 'بازی جدید اضافه شد', time: '10 دقیقه پیش', type: 'game' },
                        ].map((activity, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                            >
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                                    activity.type === 'comment' ? 'from-blue-500 to-blue-600' :
                                    activity.type === 'user' ? 'from-green-500 to-green-600' :
                                    'from-purple-500 to-purple-600'
                                } flex items-center justify-center`}>
                                    {activity.type === 'comment' ? <MessageSquare className="w-5 h-5" /> :
                                    activity.type === 'user' ? <Users className="w-5 h-5" /> :
                                    <Gamepad2 className="w-5 h-5" />}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold">{activity.user}</p>
                                    <p className="text-xs text-gray-400">{activity.action}</p>
                                </div>
                                <span className="text-xs text-gray-500">{activity.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// =================================================================
// Edit Game Modal (مُدال ویرایش بازی)
// =================================================================

const EditGameModal = ({ game, onClose, onSave, lang }: { game: Game, onClose: () => void, onSave: (game: Game) => void, lang: string }) => {
    const [editedGame, setEditedGame] = useState(game);
    const t = translations(lang);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        if (name.startsWith('title-')) {
            const langKey = name.split('-')[1] as keyof LocalizedString;
            setEditedGame(prev => ({ 
                ...prev, 
                title: { ...prev.title, [langKey]: value } 
            }));
        } else if (name.startsWith('desc-short-')) {
            // Logic for short description in Persian or English
            const langKey = name.split('-')[2] === 'persian' ? 'persian' : 'english';
            setEditedGame(prev => ({ 
                ...prev, 
                description: { 
                    ...prev.description, 
                    short: { ...prev.description.short, [langKey]: value } 
                } 
            }));
        } else if (name === 'marketPrice') {
            setEditedGame(prev => ({ ...prev, marketPrice: parseFloat(value) || 0 }));
        } else if (name === 'releaseDate') {
            setEditedGame(prev => ({ ...prev, releaseDate: value }));
        } else if (name === 'developer') {
            setEditedGame(prev => ({ ...prev, developer: value }));
        }
    };

    const handleSave = () => {
        onSave(editedGame);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-zinc-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/50"
                dir={lang === 'fa' ? 'rtl' : 'ltr'}
            >
                <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        {t.editGame}: {lang === 'fa' ? game.title.fa : game.title.en}
                    </h3>
                    <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Title - FA */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">{t.title} ({lang === 'fa' ? 'فارسی' : 'Persian'})</label>
                            <input 
                                type="text" 
                                name="title-fa" 
                                value={editedGame.title.fa} 
                                onChange={handleChange} 
                                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                            />
                        </div>
                        {/* Title - EN */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">{t.title} ({lang === 'fa' ? 'انگلیسی' : 'English'})</label>
                            <input 
                                type="text" 
                                name="title-en" 
                                value={editedGame.title.en} 
                                onChange={handleChange} 
                                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                            />
                        </div>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">{t.developer}</label>
                            <input type="text" name="developer" value={editedGame.developer} onChange={handleChange} className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">{t.releaseDate}</label>
                            <input type="date" name="releaseDate" value={editedGame.releaseDate} onChange={handleChange} className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">{t.price}</label>
                            <input type="number" name="marketPrice" value={editedGame.marketPrice} onChange={handleChange} className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 transition-colors" />
                        </div>
                    </div>
                    
                    {/* Descriptions */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">{t.shortDescription} ({lang === 'fa' ? 'فارسی' : 'Persian'})</label>
                        <textarea 
                            name="desc-short-persian" 
                            value={editedGame.description.short.persian} 
                            onChange={handleChange} 
                            rows={3}
                            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">{t.shortDescription} ({lang === 'fa' ? 'انگلیسی' : 'English'})</label>
                        <textarea 
                            name="desc-short-english" 
                            value={editedGame.description.short.english} 
                            onChange={handleChange} 
                            rows={3}
                            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                        />
                    </div>
                    {/* NOTE: Add more fields for genres, platforms, system requirements, etc. for a complete admin panel */}

                </div>
                
                <div className="p-6 border-t border-zinc-800 flex justify-end gap-3">
                    <button 
                        onClick={onClose}
                        className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors font-medium"
                    >
                        {t.close}
                    </button>
                    <motion.button 
                        onClick={handleSave}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-xl transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <CheckCircle className="w-5 h-5" />
                        {t.saveChanges}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};


// Games Tab - FULL IMPLEMENTATION (پیاده‌سازی کامل تب بازی‌ها)
const GamesTab = ({ lang, games, onUpdateGame }: { lang: string, games: Game[], onUpdateGame: (game: Game) => void }) => {
  const t = translations(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleEdit = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };
  
  const handleSave = (updatedGame: Game) => {
    onUpdateGame(updatedGame);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t.gameManagement}
        </h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            {t.addNewGame}
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
        <table className="w-full ">
          <thead className="bg-zinc-800/50  border-b border-zinc-700">
            <tr>
              <th className=" text-sm   font-semibold text-gray-400 ">
                {t.title}
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 ">
                {t.developer}
              </th>
              <th className=" text-center text-sm font-semibold text-gray-400 ">
                {t.releaseDate}
              </th>
              <th className="text-center text-sm font-semibold text-gray-400 ">
                {t.price}
              </th>
              <th className=" text-center text-sm font-semibold text-gray-400 ">
                {t.status}
              </th>
              <th className=" text-center text-sm font-semibold text-gray-400 ">
                {t.actions}
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <motion.tr
                key={game.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors"
              >
                <td className=" py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center">
                        <Gamepad2 className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className='flex flex-col'>
                    <span className="font-medium">{lang === 'fa' ? game.title.fa : game.title.en}</span>
                    <span className=" text-[12px] text-gray-400 my-1">{lang === 'fa' ? game.title.en : game.title.fa}</span>
</div>
                  </div>
                </td>
                <td className=" py-4 text-gray-400">
                    <span className="flex items-center gap-1">
                        <CompassIcon className="w-4 h-4 text-blue-400" /> {game.developer}
                    </span>
                </td>
                <td className="px-6 py-4 text-gray-400">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-green-400" /> {game.releaseDate}
                    </span>
                </td>
                <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                        game.marketPrice === 0.00 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                        {game.marketPrice === 0.00 ? t.free : `$${game.marketPrice.toFixed(2)}`}
                    </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                    game.hasDiscount ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {game.hasDiscount ? 'Discount' : 'Regular'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button 
                        onClick={() => handleEdit(game)}
                        className="p-2 hover:bg-zinc-700 rounded-lg transition-colors"
                        title={lang === 'fa' ? 'ویرایش' : 'Edit'}
                    >
                      <Edit2 className="w-4 h-4 text-blue-400" />
                    </button>
                    <button className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors" title={lang === 'fa' ? 'حذف' : 'Delete'}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Edit Modal */}
      <AnimatePresence>
        {isModalOpen && selectedGame && (
            <EditGameModal 
                game={selectedGame} 
                onClose={() => setIsModalOpen(false)} 
                onSave={handleSave}
                lang={lang}
            />
        )}
      </AnimatePresence>
    </motion.div>
  );
};


// Users Tab - Placeholder
const UsersTab = ({ lang }: any) => {
  const users = [
    { id: 1, name: 'علی کریمی', email: 'ali@example.com', role: 'Admin', status: 'active', comments: 45, joined: '2024-01-15' },
    { id: 2, name: 'Sara Smith', email: 'sara@example.com', role: 'User', status: 'active', comments: 23, joined: '2024-02-10' },
    { id: 3, name: 'محمد رضایی', email: 'mohammad@example.com', role: 'User', status: 'banned', comments: 12, joined: '2024-01-20' },
  ];
  const t = translations(lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t.users}
        </h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            {t.filter}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            {t.totalUsers}
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-800/50 border-b border-zinc-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                {lang === 'fa' ? 'کاربر' : 'User'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                {lang === 'fa' ? 'ایمیل' : 'Email'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                {lang === 'fa' ? 'نقش' : 'Role'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                {lang === 'fa' ? 'وضعیت' : 'Status'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                {lang === 'fa' ? 'نظرات' : 'Comments'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                {lang === 'fa' ? 'عملیات' : 'Actions'}
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <span className="font-bold text-sm">{user.name[0]}</span>
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-400">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'Admin' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                    user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {user.status === 'active' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400">{user.comments}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-zinc-700 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-zinc-700 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

// Comments Tab
const CommentsTab = ({ lang }: any) => {
    const t = translations(lang);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
        >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {t.comments}
            </h2>

            <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600"></div>
                                <div>
                                    <p className="font-semibold">کاربر {i}</p>
                                    <p className="text-sm text-gray-400">در بازی Cyberpunk 2077</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500">2 ساعت پیش</span>
                        </div>
                        <p className="text-gray-300 mb-4">
                            این بازی واقعا عالیه! گرافیک و داستان فوق‌العاده است. پیشنهاد می‌کنم حتما تجربه کنید.
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg transition-colors">
                                <CheckCircle className="w-4 h-4" />
                                تأیید
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors">
                                <XCircle className="w-4 h-4" />
                                رد
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Other Tabs - Placeholders
const TrendingTab = ({ lang }: any) => {
    const t = translations(lang);
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-20">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-amber-500" />
            <h2 className="text-2xl font-bold">{t.trending}</h2>
            <p className="text-gray-400">{lang === 'fa' ? 'در حال توسعه...' : 'Under development...'}</p>
        </motion.div>
    );
};


const NewsTab = ({ lang }: any) => {
    const t = translations(lang);
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-20">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h2 className="text-2xl font-bold">{t.news}</h2>
            <p className="text-gray-400">{lang === 'fa' ? 'در حال توسعه...' : 'Under development...'}</p>
        </motion.div>
    );
};

const Top10Tab = ({ lang }: any) => {
    const t = translations(lang);
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-20">
            <Star className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-2xl font-bold">{t.top10}</h2>
            <p className="text-gray-400">{lang === 'fa' ? 'در حال توسعه...' : 'Under development...'}</p>
        </motion.div>
    );
};


export default AdminDashboard;