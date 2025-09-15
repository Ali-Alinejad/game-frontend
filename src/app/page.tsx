"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "./component/sidebar/page";
import GameModal from "./component/GameModal";
import GameSlider from "./component/GameSilder";
import MainNewsGrid from "./component/MainNewsGrid";
import NewsSections from "./component/NewsSections";
import Loading from "./component/Loading";
import { Game } from "./types/Game";
import { mockGames, newsItems, lastStories } from "./types/mockData";
import { useLanguageStore } from "./zustand/uselangStore";
import { useLanguageFont } from "./hook/langFontUtils";

export default function GamingNewsWebsite() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Language and font setup
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  const openGameModal = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeGameModal = () => {
    setSelectedGame(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchGames = async () => {
      // شبیه‌سازی لودینگ
      setTimeout(() => {
        setGames(mockGames);
        setLoading(false);
      }, 1000);
    };
    fetchGames();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`min-h-screen bg-black text-white overflow-hidden ${fontClass}`}
      dir={direction}
      lang={lang}
    >
      <Sidebar />
      <motion.div
        className={`${lang === 'fa' ? 'ml-66' : 'ml-66'} p-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          {/* Main News Grid */}
          <MainNewsGrid games={games} onGameClick={openGameModal} />

          {/* Game Slider */}
          <GameSlider games={games} onGameClick={openGameModal} />
        </div>

        {/* Bottom Section */}
        <NewsSections newsItems={newsItems} lastStories={lastStories} />
      </motion.div>

      {/* Game Modal */}
      {isModalOpen && selectedGame && (
        <GameModal
          game={selectedGame}
          isOpen={isModalOpen}
          onClose={closeGameModal}
        />
      )}
    </div>
  );
}