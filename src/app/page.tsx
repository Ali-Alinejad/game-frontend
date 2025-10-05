"use client";
import { useState, useEffect } from "react";
import Loading from "./component/loading/Loading";
import { Game } from "./types/Game";
import { mockGames } from "./types/mockData";
import { useLanguageStore } from "./zustand/uselangStore";
import { useLanguageFont } from "./hook/langFontUtils";
import GamingHub from "./Pages/HeroSection/page";

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

      {/* <GamingSection /> */}


      <GamingHub />


    </div>
  );
}