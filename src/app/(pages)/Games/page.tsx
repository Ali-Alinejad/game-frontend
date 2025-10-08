"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Game } from "@/app/types/Game";
import { useLanguageStore } from "@/app/zustand/uselangStore";
import { useLanguageFont } from "@/app/hook/langFontUtils";
import Loading from "@/app/component/loading/Loading";
import Sidebar from "@/app/component/sidebar/page";
import { mockGames } from "@/app/types/mockData";
import MainNewsGrid from "@/app/component/GameSection/MainNewsGrid";
import GenreSections from "@/app/component/GameSection/GenreSections";
import GameModal from "@/app/component/GameSection/GameModal";
import GameSlider from "@/app/component/GameSection/GameSilder";

// Mock Games Data

export default function GamingSection() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
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
      setTimeout(() => {
        setGames(mockGames);
        setLoading(false);
      }, 5000);
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
        className={`ml-66 p-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          {/* Main Hero Section */}
          <MainNewsGrid games={games} onGameClick={openGameModal} />
          <GameSlider games={games} onGameClick={openGameModal} />
        </div>

        {/* Genre Sections (replaces NewsSections) */}
        <GenreSections games={games} onGameClick={openGameModal} />
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