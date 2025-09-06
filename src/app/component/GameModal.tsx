"use client";

import { motion } from "framer-motion";
import { Game } from "../types/Game";

interface GameModalProps {
  game: Game;
  isOpen: boolean;
  onClose: () => void;
}

export default function GameModal({ game, isOpen, onClose }: GameModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-gray-800 rounded-lg border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            src={game.image}
            alt={game.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all duration-200 transform hover:scale-110"
          >
            ×
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="p-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4">{game.title}</h3>
          <p className="text-gray-300 mb-4">{game.description.english}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Developer:</span>
              <span className="text-white ml-2">{game.developer}</span>
            </div>
            <div>
              <span className="text-gray-400">Platform:</span>
              <span className="text-white ml-2">{game.platform}</span>
            </div>
            <div>
              <span className="text-gray-400">Price:</span>
              <span className="text-white ml-2">${game.marketPrice}</span>
            </div>
            <div>
              <span className="text-gray-400">Release Date:</span>
              <span className="text-white ml-2">
                {new Date(game.releaseDate).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-400">Genres:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {game.genres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-2 py-1 rounded text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}