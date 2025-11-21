"use client"
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Filter, Download, Edit2, Trash2, Gamepad2, Search, X } from 'lucide-react';
import { Game } from '@/app/types/Game';
import GameFormModal from '../modals/GameForModal';
import Pagination from '@/app/(pages)/admin/components/reusable/Pagination/page';
import { translations } from '@/lib/constants/admin/translations';
import Image from 'next/image';
import OptimizedImage from '@/components/shared/optimizeImage/page';

interface GamesTabProps {
  lang: string;
  games: Game[];
  setGamesData: (data: Game[] | ((prev: Game[]) => Game[])) => void;
}

const GamesTab: React.FC<GamesTabProps> = ({ lang, games, setGamesData }) => {
  const t = translations(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isAddMode, setIsAddMode] = useState(false);
  
  // Pagination state - Default to 7 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  
  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'discount' | 'regular'>('all');
  const [sortBy, setSortBy] = useState<'title' | 'price' | 'date'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort games
  const filteredAndSortedGames = useMemo(() => {
    let filtered = [...games];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(game => 
        game.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.title.fa.includes(searchQuery) ||
        game.developer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price filter
    if (priceFilter === 'free') {
      filtered = filtered.filter(game => game.marketPrice === 0);
    } else if (priceFilter === 'paid') {
      filtered = filtered.filter(game => game.marketPrice > 0);
    }

    // Status filter
    if (statusFilter === 'discount') {
      filtered = filtered.filter(game => game.hasDiscount);
    } else if (statusFilter === 'regular') {
      filtered = filtered.filter(game => !game.hasDiscount);
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'title') {
        comparison = (lang === 'fa' ? a.title.fa : a.title.en)
          .localeCompare(lang === 'fa' ? b.title.fa : b.title.en);
      } else if (sortBy === 'price') {
        comparison = a.marketPrice - b.marketPrice;
      } else if (sortBy === 'date') {
        comparison = new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [games, searchQuery, priceFilter, statusFilter, sortBy, sortOrder, lang]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedGames.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = filteredAndSortedGames.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, priceFilter, statusFilter, sortBy, sortOrder]);

  const handleEdit = (game: Game) => {
    setSelectedGame(game);
    setIsAddMode(false);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedGame(null);
    setIsAddMode(true);
    setIsModalOpen(true);
  };

  const handleSave = (gameData: Game) => {
    if (isAddMode) {
      setGamesData((prev: Game[]) => [...prev, gameData]);
    } else {
      setGamesData((prev: Game[]) => prev.map(g => g.id === gameData.id ? gameData : g));
    }
  };

  const handleDelete = (gameId: string) => {
    if (confirm(lang === 'fa' ? 'آیا از حذف این بازی مطمئن هستید؟' : 'Are you sure you want to delete this game?')) {
      setGamesData((prev: Game[]) => prev.filter(g => g.id !== gameId));
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setPriceFilter('all');
    setStatusFilter('all');
    setSortBy('title');
    setSortOrder('asc');
  };

  const hasActiveFilters = searchQuery || priceFilter !== 'all' || statusFilter !== 'all' || sortBy !== 'title' || sortOrder !== 'asc';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-10 mt-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t.gameManagement}
        </h2>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              showFilters ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
          >
            <Filter className="w-4 h-4" />
            {t.filter}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            {t.export}
          </button>
          <motion.button 
            onClick={handleAdd} 
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-lg transition-colors shadow-lg shadow-amber-500/30" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4" />
            {t.addNewGame}
          </motion.button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={lang === 'fa' ? 'جستجوی بازی، توسعه دهنده...' : 'Search games, developer...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-10 overflow-hidden"
          >
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {lang === 'fa' ? 'قیمت' : 'Price'}
                  </label>
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value as any)}
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">{lang === 'fa' ? 'همه' : 'All'}</option>
                    <option value="free">{lang === 'fa' ? 'رایگان' : 'Free'}</option>
                    <option value="paid">{lang === 'fa' ? 'پولی' : 'Paid'}</option>
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {lang === 'fa' ? 'وضعیت' : 'Status'}
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">{lang === 'fa' ? 'همه' : 'All'}</option>
                    <option value="discount">{lang === 'fa' ? 'تخفیف دار' : 'Discount'}</option>
                    <option value="regular">{lang === 'fa' ? 'عادی' : 'Regular'}</option>
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {lang === 'fa' ? 'مرتب سازی' : 'Sort By'}
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500"
                  >
                    <option value="title">{lang === 'fa' ? 'عنوان' : 'Title'}</option>
                    <option value="price">{lang === 'fa' ? 'قیمت' : 'Price'}</option>
                    <option value="date">{lang === 'fa' ? 'تاریخ انتشار' : 'Release Date'}</option>
                  </select>
                </div>

                {/* Sort Order */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {lang === 'fa' ? 'ترتیب' : 'Order'}
                  </label>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500"
                  >
                    <option value="asc">{lang === 'fa' ? 'صعودی' : 'Ascending'}</option>
                    <option value="desc">{lang === 'fa' ? 'نزولی' : 'Descending'}</option>
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                  {lang === 'fa' ? 'پاک کردن فیلترها' : 'Clear Filters'}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Games Table */}
      <div className="bg-gradient-to-br from-zinc-900 mx-10 to-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800/50 border-b border-zinc-700">
              <tr>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.title}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.developer}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.releaseDate}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.price}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.status}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {currentGames.length > 0 ? (
                currentGames.map((game, idx) => (
                  <motion.tr 
                    key={game.id} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-22  h-12 rounded-lg bg-zinc-700 overflow-hidden flex-shrink-0">
                          {game.image ? (
                            <OptimizedImage  height={200} width={250}  src={game.image} alt={game.title.en} className=" object-cover" />
                          ) : (
                            <Gamepad2 className="w-6 h-6 text-gray-400 m-auto mt-3" />
                          )}
                        </div>
                        <div>
                          <span className="font-medium block">{lang === 'fa' ? game.title.fa : game.title.en}</span>
                          <span className="text-xs text-gray-400">{lang === 'fa' ? game.title.en : game.title.fa}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">{game.developer}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{game.releaseDate}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        game.marketPrice === 0 ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {game.marketPrice === 0 ? t.free : `$${game.marketPrice.toFixed(2)}`}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        game.hasDiscount ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {game.hasDiscount ? t.discount : t.regular}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEdit(game)} 
                          className="p-2 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors" 
                          title={t.edit}
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(game.id)} 
                          className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors" 
                          title={t.delete}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    {lang === 'fa' ? 'بازی یافت نشد' : 'No games found'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Component */}
      <div className="px-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(items) => {
            setItemsPerPage(items);
            setCurrentPage(1);
          }}
          totalItems={filteredAndSortedGames.length}
          startIndex={startIndex}
          endIndex={endIndex}
          lang={lang}
          showItemsPerPage={true}
          itemsPerPageOptions={[7, 10, 15, 25, 50]}
          maxVisiblePages={5}
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <GameFormModal 
            game={selectedGame} 
            isAddMode={isAddMode} 
            onClose={() => setIsModalOpen(false)} 
            onSave={handleSave} 
            lang={lang} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GamesTab;