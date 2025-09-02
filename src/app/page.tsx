"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:8585/games");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-xl animate-pulse">Loading games...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Three.js Background */}
      <Canvas className="absolute inset-0  h-[100vh] ">
        <Stars radius={80} depth={20} count={1000} factor={4} fade />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
      <header className="text-center -py-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          Game Center
        </motion.h1>
        <p className="text-lg text-gray-400 mt-3">
          Explore epic worlds & adventures
        </p>
      </header>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10 pb-20">
        {games.map((game) => (
          <motion.div
            key={game.id}
            whileHover={{ scale: 1.07, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="bg-gray-900/80 border border-gray-700 shadow-2xl backdrop-blur-md">
              <CardBody className="overflow-hidden p-0">
                <Image
                  removeWrapper
                  alt={game.title}
                  className="w-full h-56 object-cover"
                  src={
                    game.image ||
                    "https://via.placeholder.com/600x400?text=No+Image"
                  }
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-3 p-4">
                <h2 className="text-2xl font-bold">{game.title}</h2>

                {/* Genres */}
                <div className="flex flex-wrap gap-2">
                  {game.genres?.map((genre, idx) => (
                    <Chip key={idx} color="warning" variant="flat">
                      {genre}
                    </Chip>
                  ))}
                </div>

                {/* Short Description */}
                <p className="text-sm text-gray-300 line-clamp-2">
                  {game.description?.short || "No description available."}
                </p>

                {/* Developer / Platform / Price */}
                <div className="w-full text-sm space-y-1">
                  <p className="text-gray-400">
                    Developer: <span className="text-white">{game.developer}</span>
                  </p>
                  <p className="text-gray-400">
                    Platform: <span className="text-white">{game.platform}</span>
                  </p>
                  <p className="text-green-400 font-semibold">
                    ${game.marketPrice}
                  </p>
                  <p className="text-purple-400">
                    Release: {new Date(game.releaseDate).toLocaleDateString()}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-2">
                  <Button
                    as="a"
                    href={game.trailerUrl}
                    target="_blank"
                    color="primary"
                    variant="shadow"
                  >
                    Trailer
                  </Button>
                  <Button
                    onPress={() => {
                      setSelectedGame(game);
                      onOpen();
                    }}
                    color="secondary"
                    variant="ghost"
                  >
                    Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for Details */}
      {selectedGame && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              {selectedGame.title}
            </ModalHeader>
            <ModalBody>
              <h3 className="font-bold text-lg">Description</h3>
              <p>{selectedGame.description?.english}</p>
              <p className="text-gray-400">{selectedGame.description?.persian}</p>

              <h3 className="font-bold text-lg mt-3">Supported Languages</h3>
              <div className="flex flex-wrap gap-2">
                {selectedGame.supportedLanguages?.map((lang, idx) => (
                  <Chip key={idx} color="success" variant="flat">
                    {lang}
                  </Chip>
                ))}
              </div>

              <h3 className="font-bold text-lg mt-3">System Requirements</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-yellow-400">Minimum</p>
                  {Object.entries(selectedGame.minimumSystemRequirements || {}).map(
                    ([key, value], idx) => (
                      <p key={idx}>
                        {key}: <span className="text-gray-300">{value}</span>
                      </p>
                    )
                  )}
                </div>
                <div>
                  <p className="font-semibold text-green-400">Recommended</p>
                  {Object.entries(
                    selectedGame.recommendedSystemRequirements || {}
                  ).map(([key, value], idx) => (
                    <p key={idx}>
                      {key}: <span className="text-gray-300">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onOpenChange}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
