"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Sidebar from "./sidebar/page";
import { Card } from "@heroui/react";

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
    _id: "68b6ec2c4ca283b28284dc19",
    title: "Path of Exile 2",
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2025-12-10T00:00:00.000Z",
    betaDate: "2025-7-09T00:00:00.000Z",
    image: "https://gaming-cdn.com/images/products/5813/orig/path-of-exile-2-pc-steam-cover.jpg?v=1753427678",
    developer: "CD Projekt RED",
    genres: ["Action RPG", "Open-World"],
    tags: ["Cyberpunk", "Sci-Fi", "Futuristic"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "Persian", "French", "German", "Spanish", "Italian"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-6700 or AMD Ryzen 5 1600",
      graphicsCard: "Nvidia GeForce GTX 1060 (6GB) or AMD Radeon RX 580 (8GB)",
      ram: "12 GB",
      storage: "70 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-12700 or AMD Ryzen 7 7800X3D",
      graphicsCard: "Nvidia GeForce RTX 2060 SUPER or AMD Radeon RX 5700 XT",
      ram: "16 GB",
      storage: "70 GB SSD",
    },
    description: {
      short: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      english: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      persian: "یک داستان ماجراجویی اکشن جهان-باز که در نایت سیتی، یک کلانشهر گرفتار در قدرت، زرق و برق و تغییرات بدن، اتفاق می‌افتد.",
    }
  },
  {
    _id: "68b6ec344ca283b28284dc1e",
    title: "expedition 33",
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2022-02-25T00:00:00.000Z",
    betaDate: null,
    image: "https://vgdl.ir/wp-content/uploads/2025/04/Clair_Obscur_Expedition_33.jpg",
    developer: "FromSoftware",
    genres: ["Action RPG", "Fantasy"],
    tags: ["Souls-like", "Dark Fantasy", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=L2vE8Ew_K0Y",
    supportedLanguages: ["English", "Japanese", "French", "German", "Italian", "Spanish", "Russian"],
    minimumSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
      graphicsCard: "NVIDIA GeForce GTX 1060 (3GB) or AMD Radeon RX 580 (4GB)",
      ram: "12 GB",
      storage: "60 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
      graphicsCard: "NVIDIA GeForce GTX 1070 (8GB) or AMD Radeon RX Vega 56 (8GB)",
      ram: "16 GB",
      storage: "60 GB SSD",
    },
    description: {
      short: "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      english: "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      persian: "یک بازی اکشن نقش‌آفرینی فانتزی در دنیایی وسیع پر از خطر و رمز و راز.",
    }
  },
  {
    _id: "68b6ec3a4ca283b28284dc23",
    title: "Baldur's Gate 3",
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2023-08-03T00:00:00.000Z",
    betaDate: "2020-10-06T00:00:00.000Z",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    developer: "Larian Studios",
    genres: ["RPG", "Fantasy"],
    tags: ["Dungeons & Dragons", "Turn-Based Combat", "Choices Matter"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 or AMD FX 8350",
      graphicsCard: "NVIDIA GTX 970 or RX 480",
      ram: "8 GB",
      storage: "150 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i7 8700K or AMD r5 3600",
      graphicsCard: "Nvidia RTX 2060 Super or RX 5700 XT",
      ram: "16 GB",
      storage: "150 GB SSD",
    },
    description: {
      short: "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      english: "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      persian: "یک بازی نقش‌آفرینی مبتنی بر گروه که در دنیای Dungeons & Dragons جریان دارد، با دنیایی گسترده و داستانی عمیق.",
    }
  },
  {
    _id: "68b6eec04ca283b28284dc32",
    title: "Mortal Combat",
    marketPrice: 1,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2023-08-03T00:00:00.000Z",
    betaDate: "2020-10-06T00:00:00.000Z",
    image: "https://images.ctfassets.net/nwksj2ft7iku/1mpqWPrT4km2yPHCPhAwJp/468842158cb73c7546bd88a591375380/hero_1556585321.png",
    developer: "Bone",
    genres: ["RPG", "Action"],
    tags: ["Dungeons & Dragons", "Turn-Based Combat", "Choices Matter"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 or AMD FX 8350",
      graphicsCard: "NVIDIA GTX 970 or RX 480",
      ram: "8 GB",
      storage: "150 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i7 8700K or AMD r5 3600",
      graphicsCard: "Nvidia RTX 2060 Super or RX 5700 XT",
      ram: "16 GB",
      storage: "150 GB SSD",
    },
    description: {
      short: "Mortal Combat",
      english: "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      persian: "یک بازی نقش‌آفرینی مبتنی بر گروه که در دنیای Dungeons & Dragons جریان دارد، با دنیایی گسترده و داستانی عمیق.",
    }
  },
   {
    _id: "68b6ec3a4ca283b28284dc23",
    title: "Baldur's Gate 3",
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2023-08-03T00:00:00.000Z",
    betaDate: "2020-10-06T00:00:00.000Z",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    developer: "Larian Studios",
    genres: ["RPG", "Fantasy"],
    tags: ["Dungeons & Dragons", "Turn-Based Combat", "Choices Matter"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 or AMD FX 8350",
      graphicsCard: "NVIDIA GTX 970 or RX 480",
      ram: "8 GB",
      storage: "150 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i7 8700K or AMD r5 3600",
      graphicsCard: "Nvidia RTX 2060 Super or RX 5700 XT",
      ram: "16 GB",
      storage: "150 GB SSD",
    },
    description: {
      short: "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      english: "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      persian: "یک بازی نقش‌آفرینی مبتنی بر گروه که در دنیای Dungeons & Dragons جریان دارد، با دنیایی گسترده و داستانی عمیق.",
    }
  },
   {
    _id: "68b6ec2c4ca283b28284dc19",
    title: "Cyberpunk 2077",
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2020-12-10T00:00:00.000Z",
    betaDate: null,
    image: "https://substackcdn.com/image/fetch/$s_!kRZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcc7124b-6df8-4dc9-b6cf-8c6a4bc52e8a_1388x788.png",
    developer: "CD Projekt RED",
    genres: ["Action RPG", "Open-World"],
    tags: ["Cyberpunk", "Sci-Fi", "Futuristic"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "Persian", "French", "German", "Spanish", "Italian"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-6700 or AMD Ryzen 5 1600",
      graphicsCard: "Nvidia GeForce GTX 1060 (6GB) or AMD Radeon RX 580 (8GB)",
      ram: "12 GB",
      storage: "70 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i7-12700 or AMD Ryzen 7 7800X3D",
      graphicsCard: "Nvidia GeForce RTX 2060 SUPER or AMD Radeon RX 5700 XT",
      ram: "16 GB",
      storage: "70 GB SSD",
    },
    description: {
      short: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      english: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
      persian: "یک داستان ماجراجویی اکشن جهان-باز که در نایت سیتی، یک کلانشهر گرفتار در قدرت، زرق و برق و تغییرات بدن، اتفاق می‌افتد.",
    }
  },
  {
    _id: "68b6ec344ca283b28284dc1e",
    title: "Elden Ring",
    marketPrice: 59.99,
    hasDiscount: true,
    platform: "PC",
    releaseDate: "2022-02-25T00:00:00.000Z",
    betaDate: null,
    image: "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    developer: "FromSoftware",
    genres: ["Action RPG", "Fantasy"],
    tags: ["Souls-like", "Dark Fantasy", "Open-World"],
    trailerUrl: "https://www.youtube.com/watch?v=L2vE8Ew_K0Y",
    supportedLanguages: ["English", "Japanese", "French", "German", "Italian", "Spanish", "Russian"],
    minimumSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
      graphicsCard: "NVIDIA GeForce GTX 1060 (3GB) or AMD Radeon RX 580 (4GB)",
      ram: "12 GB",
      storage: "60 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10",
      processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
      graphicsCard: "NVIDIA GeForce GTX 1070 (8GB) or AMD Radeon RX Vega 56 (8GB)",
      ram: "16 GB",
      storage: "60 GB SSD",
    },
    description: {
      short: "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      english: "A fantasy action RPG game in a vast world filled with peril and intrigue.",
      persian: "یک بازی اکشن نقش‌آفرینی فانتزی در دنیایی وسیع پر از خطر و رمز و راز.",
    }
  },
  {
    _id: "68b6ec3a4ca283b28284dc23",
    title: "Baldur's Gate 3",
    marketPrice: 59.99,
    hasDiscount: false,
    platform: "PC",
    releaseDate: "2023-08-03T00:00:00.000Z",
    betaDate: "2020-10-06T00:00:00.000Z",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    developer: "Larian Studios",
    genres: ["RPG", "Fantasy"],
    tags: ["Dungeons & Dragons", "Turn-Based Combat", "Choices Matter"],
    trailerUrl: "https://www.youtube.com/watch?v=L5C63Bq_i4U",
    supportedLanguages: ["English", "French", "German", "Spanish", "Polish"],
    minimumSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 or AMD FX 8350",
      graphicsCard: "NVIDIA GTX 970 or RX 480",
      ram: "8 GB",
      storage: "150 GB SSD",
    },
    recommendedSystemRequirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i7 8700K or AMD r5 3600",
      graphicsCard: "Nvidia RTX 2060 Super or RX 5700 XT",
      ram: "16 GB",
      storage: "150 GB SSD",
    },
    description: {
      short: "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      english: "A party-based RPG set in the Dungeons & Dragons universe, featuring an expansive world and deep narrative.",
      persian: "یک بازی نقش‌آفرینی مبتنی بر گروه که در دنیای Dungeons & Dragons جریان دارد، با دنیایی گسترده و داستانی عمیق.",
    }
  },
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
const openGameModal = (game: Game) => {
  setSelectedGame(game);
  setIsModalOpen(true);
};
  useEffect(() => {
    const fetchGames = async () => {
      setTimeout(() => {
        setGames(mockGames);
        setLoading(false);
      }, 1000);
    };
    fetchGames();
  }, []);


useEffect(() => {

  controls.start({

    x:["0","-700%"] ,
    transition:{
      duration:50,
      ease:"linear",
      repeatType:"reverse",
      repeat: Infinity
    },



  });

}, [controls]);


  const handleScroll = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = scrollContainer.offsetWidth;
    scrollContainer.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    controls.start({
      x: -scrollWidth,
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
      },
    });
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
                  className="w-full h-90 object-cover transition-transform duration-500"
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
                  className="w-full h-90 object-cover transition-transform duration-300"
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

          {/* Secondary News Slider */}
        <div className="relative mb-8">
  <button
    onClick={() => handleScroll("left")}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
  >
    ←
  </button>
  <div
    className="overflow-hidden"
    ref={scrollRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <motion.div
      className="flex"
      animate={controls}
      style={{ width: "max-content" }}
    >
      {/* Duplicate games to create seamless loop */}
      {games.concat(games).map((game, index) => (
        <div
          key={`${game._id}-${index}`}
          className="relative cursor-pointer w-60 flex-shrink-0 mx-4"
          onClick={() => openGameModal(game)}
        >
          <Card className="relative overflow-hidden rounded-lg">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-50 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-sm font-semibold mb-2">{game.title}</h3>
              <div className="flex items-center space-x-2 text-gray-300 text-xs">
                <span>👁️ {index % 10 + 2}</span>
                {index % 10 === 2 && <span>💬 5</span>}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </motion.div>
  </div>
  <button
    onClick={() => handleScroll("right")}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
  >
    →
  </button>
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
                onClick={() => setIsModalOpen(false)}
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