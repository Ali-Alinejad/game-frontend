"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Game } from "@/app/types/Game";
import { useLanguageStore } from "@/app/zustand/uselangStore";
import { useLanguageFont } from "@/app/hook/langFontUtils";


import { mockGames } from "@/app/types/mockData";
import Loading from "@/components/ui/loading";
import Sidebar from "@/components/layout/Sidebar";
import MainNewsGrid from "@/components/games/sections/MainNewsGrid";
import GameSlider from "@/components/games/sections/GameSilder";
import GenreSections from "@/components/games/sections/GenreSections";
import GameModal from "@/components/games/sections/GameModal";


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
      className={`min-h-screen bg-zinc-950/90 text-white overflow-hidden ${fontClass}`}
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