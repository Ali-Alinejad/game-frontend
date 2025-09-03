"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/page";

interface Game {
  _id: string;
  title: string;
  marketPrice: number;
  hasDiscount: boolean;
  platform: string;
  releaseDate: string;
  betaDate?: string | null;
  image?: string;
  developer: string;
  genres: string[];
  tags: string[];
  trailerUrl?: string;
  supportedLanguages: string[];
  minimumSystemRequirements: Record<string, string>;
  recommendedSystemRequirements: Record<string, string>;
  description: {
    short: string;
    english: string;
    persian: string;
  };
}

// Mock data for gaming news
const mockGames: Game[] = [
  {
    _id: "1",
    title: "Ubisoft plans to release around ten games in 2026-2027",
    marketPrice: 0,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2025-09-03",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
    developer: "Ubisoft",
    genres: ["News"],
    tags: ["Gaming Industry"],
    description: {
      short: "Ubisoft outlines ambitious release schedule",
      english: "Ubisoft has announced plans to release approximately ten games between 2026 and 2027, marking a significant expansion of their gaming portfolio.",
      persian: "یوبی سافت برنامه انتشار ده بازی در سال‌های ۲۰۲۶-۲۰۲۷ را اعلام کرد"
    }
  },
  {
    _id: "2",
    title: "This week's releases: from September 1 to 5, 2025",
    marketPrice: 0,
    hasDiscount: false,
    platform: "Multi",
    releaseDate: "2025-09-01",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=500&fit=crop",
    developer: "Various",
    genres: ["Weekly Release"],
    tags: ["New Games"],
    description: {
      short: "Weekly gaming releases roundup",
      english: "A comprehensive look at all the games launching this week across various platforms.",
      persian: "مروری بر بازی‌های این هفته"
    }
  },
  {
    _id: "3",
    title: "007 First Light will have its own State of Play on September 3",
    marketPrice: 0,
    hasDiscount: false,
    platform: "PlayStation",
    releaseDate: "2025-09-03",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    developer: "Sony Interactive",
    genres: ["Action"],
    tags: ["007", "State of Play"],
    description: {
      short: "Exclusive PlayStation showcase announced",
      english: "Sony announces a dedicated State of Play presentation for the upcoming 007 First Light game.",
      persian: "سونی برنامه نمایش اختصاصی بازی ۰۰۷ را اعلام کرد"
    }
  },
  {
    _id: "4",
    title: "Rogue Factor's Hell is Us gets good reviews",
    marketPrice: 0,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2025-08-30",
    image: "https://images.unsplash.com/photo-1533613220915-609f7982bd90?w=600&h=400&fit=crop",
    developer: "Rogue Factor",
    genres: ["Action", "Horror"],
    tags: ["Indie", "Review"],
    description: {
      short: "Indie horror game receives critical acclaim",
      english: "Rogue Factor's latest title Hell is Us has been receiving positive reviews from critics and players alike.",
      persian: "بازی ترسناک Hell is Us نقدهای مثبتی دریافت کرده"
    }
  },
  {
    _id: "5",
    title: "The Witcher 4 and Cyberpunk 2 are getting more and more developers",
    marketPrice: 0,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2025-08-28",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop",
    developer: "CD Projekt RED",
    genres: ["RPG", "Action"],
    tags: ["The Witcher", "Cyberpunk"],
    description: {
      short: "CD Projekt RED expands development teams",
      english: "CD Projekt RED continues to hire more developers for their upcoming The Witcher 4 and Cyberpunk sequel projects.",
      persian: "CD Projekt RED تیم‌های توسعه ویچر ۴ و سایبرپانک ۲ را گسترش می‌دهد"
    }
  }
];

const newsItems = [
  {
    id: 1,
    title: "DLSS 4 is coming to Hell is Us and Cronos: The New Dawn",
    excerpt: "Asobo Studio has added DLSS 4 to Microsoft Flight Simulator 2024",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
  }
];

const lastStories = [
  {
    id: 1,
    title: "Gaming Story 1",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Gaming Story 2", 
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
  }
];

export default function GamingNewsWebsite() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setTimeout(() => {
        setGames(mockGames);
        setLoading(false);
      }, 1000);
    };
    fetchGames();
  }, []);

  const openGameModal = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-2xl font-semibold animate-pulse tracking-widest">
          Loading games...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-8">Video games news on PC and consoles</h1>
          
          {/* Main News Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Large News Item */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative cursor-pointer group"
              onClick={() => openGameModal(games[0])}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={games[0]?.image}
                  alt={games[0]?.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-2">{games[0]?.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <span>👁️ 10</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second News Item */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative cursor-pointer group"
              onClick={() => openGameModal(games[1])}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={games[1]?.image}
                  alt={games[1]?.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-2">{games[1]?.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <span>👁️ 6</span>
                      <span>💬 21</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Secondary News Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {games.slice(2, 5).map((game, index) => (
              <motion.div
                key={game._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative cursor-pointer group"
                onClick={() => openGameModal(game)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-sm font-semibold mb-2">{game.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-300 text-xs">
                      <span>👁️ {index + 2}</span>
                      {index === 2 && <span>💬 5</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Latest News */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest News</h2>
            <div className="space-y-4">
              {newsItems.map((news) => (
                <div key={news.id} className="flex space-x-4">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-1">{news.time}</div>
                    <h3 className="text-white font-semibold mb-1">{news.title}</h3>
                    <p className="text-gray-300 text-sm">{news.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Last Stories */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Last stories</h2>
              <button className="text-gray-400 hover:text-white text-sm">See all</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {lastStories.map((story) => (
                <div key={story.id} className="relative overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      {isModalOpen && selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-lg border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedGame.title}</h3>
              <p className="text-gray-300 mb-4">{selectedGame.description.english}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Developer: {selectedGame.developer}</span>
                <span>Platform: {selectedGame.platform}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}