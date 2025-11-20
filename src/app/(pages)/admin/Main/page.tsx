"use client"
import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BarChart3, Gamepad2, Users, MessageSquare, TrendingUp, Calendar, Star } from 'lucide-react';
import { Game } from '@/app/types/Game';
import { mockGames } from '@/app/types/mockData';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import OverviewTab from '@/components/admin/tabs/OverviewTab';
import GamesTab from '@/components/admin/tabs/GamesTab';
import UsersTab from '@/components/admin/tabs/UsersTab';
import CommentsTab from '@/components/admin/tabs/CommentsTab';
import PlaceholderTab from '@/components/admin/tabs/PlaceholderTab';
import { translations } from '@/lib/constants/admin/translations';

// Components


const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [lang, setLang] = useState('fa');
  const [searchQuery, setSearchQuery] = useState('');
  const [gamesData, setGamesData] = useState<Game[]>(mockGames);

  const t = translations(lang);

  const stats = useMemo(() => [
    { label: t.totalUsers, value: '92,864', change: '+12%', trend: 'up' as const, color: 'purple' as const, icon: Users },
    { label: t.activeUsers, value: '48,789', change: '+8%', trend: 'up' as const, color: 'blue' as const, icon: Users },
    { label: t.totalGames, value: gamesData.length.toString(), change: '+2%', trend: 'up' as const, color: 'amber' as const, icon: Gamepad2 },
    { label: t.pendingComments, value: '1,247', change: '-15%', trend: 'down' as const, color: 'green' as const, icon: MessageSquare },
  ], [t, gamesData.length]);

  const menuItems = [
    { id: 'overview', label: t.overview, icon: BarChart3 },
    { id: 'games', label: t.games, icon: Gamepad2 },
    { id: 'users', label: t.users, icon: Users },
    { id: 'comments', label: t.comments, icon: MessageSquare },
    { id: 'trending', label: t.trending, icon: TrendingUp },
    { id: 'news', label: t.news, icon: Calendar },
    { id: 'top10', label: t.top10, icon: Star },
  ];

  return (
    <div className="flex h-screen bg-zinc-950 text-white" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        menuItems={menuItems}
        lang={lang}
        t={t}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          lang={lang}
          setLang={setLang}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          t={t}
        />

        <main className="flex-1 overflow-y-auto ">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && <OverviewTab stats={stats} lang={lang} games={gamesData} />}
            {activeTab === 'games' && <GamesTab lang={lang} games={gamesData} setGamesData={setGamesData} />}
            {activeTab === 'users' && <UsersTab lang={lang} />}
            {activeTab === 'comments' && <CommentsTab lang={lang} />}
            {activeTab === 'trending' && <PlaceholderTab icon={TrendingUp} title={t.trending} lang={lang} />}
            {activeTab === 'news' && <PlaceholderTab icon={Calendar} title={t.news} lang={lang} />}
            {activeTab === 'top10' && <PlaceholderTab icon={Star} title={t.top10} lang={lang} />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;