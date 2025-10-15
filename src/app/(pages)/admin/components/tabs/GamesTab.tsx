"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Filter, Download, Edit2, Trash2, Gamepad2 } from 'lucide-react';
import { translations } from '../../lib/translations';
import { Game } from '@/app/types/Game';
import GameFormModal from '../../modals/GameForModal';

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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t.gameManagement}
        </h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
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

      {/* Games Table */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800/50 border-b border-zinc-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">{t.title}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.developer}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.releaseDate}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.price}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.status}</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, idx) => (
                <motion.tr 
                  key={game.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-zinc-700 overflow-hidden flex-shrink-0">
                        {game.image ? (
                          <img src={game.image} alt={game.title.en} className="w-full h-full object-cover" />
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
              ))}
            </tbody>
          </table>
        </div>
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