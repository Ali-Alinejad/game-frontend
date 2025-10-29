"use client"
import React from 'react';
import { Search, Globe, Bell, ChevronDown } from 'lucide-react';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';

interface HeaderProps {
  lang: string;
  setLang: (lang: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  searchQuery,
  setSearchQuery,
  t
}) => {
  return (
    <header className="bg-zinc-900/50 backdrop-blur-xl border-b border-zinc-800 px-8 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-4 flex-1 max-w-2xl">

        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Notifications */}
          <button className="relative p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {/* User Menu */}
          <button className="flex items-center gap-3 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;