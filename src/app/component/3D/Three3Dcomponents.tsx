import React from 'react';
import { motion } from 'framer-motion';

interface PlayhostBackgroundProps {
  scrollY?: number;
  intensity?: 'low' | 'medium' | 'high';
}

export const PlayhostBackground: React.FC<PlayhostBackgroundProps> = ({ 
  scrollY = 0, 
  intensity = 'medium' 
}) => {
  // Game images
  const gameImages = [
    "https://gaming-cdn.com/images/products/5813/orig/path-of-exile-2-pc-steam-cover.jpg?v=1753427678",
    "https://vgdl.ir/wp-content/uploads/2025/04/Clair_Obscur_Expedition_33.jpg",
    "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    "https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/mortal-kombat-11-1-scaled.jpeg",
    "https://substackcdn.com/image/fetch/$s_!kRZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcc7124b-6df8-4dc9-b6cf-8c6a4bc52e8a_1388x788.png",
    "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
        "https://gaming-cdn.com/images/products/5813/orig/path-of-exile-2-pc-steam-cover.jpg?v=1753427678",
    "https://vgdl.ir/wp-content/uploads/2025/04/Clair_Obscur_Expedition_33.jpg",
    "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    "https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/mortal-kombat-11-1-scaled.jpeg",
    "https://substackcdn.com/image/fetch/$s_!kRZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcc7124b-6df8-4dc9-b6cf-8c6a4bc52e8a_1388x788.png",
    "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
        "https://gaming-cdn.com/images/products/5813/orig/path-of-exile-2-pc-steam-cover.jpg?v=1753427678",
    "https://vgdl.ir/wp-content/uploads/2025/04/Clair_Obscur_Expedition_33.jpg",
    "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    "https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/mortal-kombat-11-1-scaled.jpeg",
    "https://substackcdn.com/image/fetch/$s_!kRZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcc7124b-6df8-4dc9-b6cf-8c6a4bc52e8a_1388x788.png",
    "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
      "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
    
      "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
        "https://vgdl.ir/wp-content/uploads/2025/04/Clair_Obscur_Expedition_33.jpg",
    "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    "https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/mortal-kombat-11-1-scaled.jpeg",
    "https://substackcdn.com/image/fetch/$s_!kRZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcc7124b-6df8-4dc9-b6cf-8c6a4bc52e8a_1388x788.png",
    "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
      "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
    
      "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
        "https://vgdl.ir/wp-content/uploads/2025/04/Clair_Obscur_Expedition_33.jpg",
    "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1748346026",
    "https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/mortal-kombat-11-1-scaled.jpeg",
    "https://substackcdn.com/image/fetch/$s_!kRZN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcc7124b-6df8-4dc9-b6cf-8c6a4bc52e8a_1388x788.png",
    "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
      "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
      "https://i.ytimg.com/vi/Djtsw5k_DNc/maxresdefault.jpg",
    "https://www.cdprojekt.com/en/wp-content/uploads-en/2022/11/fhimqstx0aymfdb.jpeg",
    "https://gaming-cdn.com/images/products/15544/616x353/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335",
    "https://cdnfa.com/softstore/779e/files/8929369.jpg",
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
    
  ];

  const cardCount = intensity === 'low' ? 6 : intensity === 'medium' ? 10 : 15;
  const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 150;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Gradient Background Base */}
      <div className="absolute inset-0" />

      {/* Animated Mesh Gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          filter: 'blur(10px)',
          animation: 'meshRotate 100s linear infinite',
        }}
      />

      {/* Game Images Background */}
{/* Background Game Collection with 3D Tilt */}
<div className="absolute inset-0 -z-10 flex items-center justify-center">
  <div
    className="grid grid-cols-11 gap-3 opacity-60"
    style={{
      transform: "perspective(1200px) rotateX(20deg) rotateY(-15deg) scale(1.2)",
      transformStyle: "preserve-3d",
    }}
  >
    {gameImages.map((img, i) => {
      const duration = 50 + Math.random() * 80; // سرعت حرکت متفاوت
      const delay = Math.random() * 10; // شروع تصادفی

      return (
        <motion.div
          key={`bg-3d-move-${i}`}
          className="w-40 h-40 relative"
          initial={{ x: '100%' }}
          animate={{ x: '-350%' }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
            delay: delay,
          }}
        >
          <img
            src={img}
            alt={`Game ${i}`}
            className="w-full h-full object-cover rounded-md shadow-md"
            style={{ filter: "brightness(0.8) contrast(1.1) saturate(1.1)" }}
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/300x200/1a1a2e/8b5cf6?text=Game";
            }}
          />
          <div className="absolute inset-0 bg-black/30 rounded-md" />
        </motion.div>
      );
    })}
  </div>
</div>



      {/* Morphing Blob Shapes */}
      <div className="absolute inset-0">
       
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
     

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      <style jsx>{`
        @keyframes meshRotate {
          from { transform: rotate(0deg) scale(1.2); }
          to { transform: rotate(360deg) scale(1.2); }
        }

        @keyframes particleFloat {
          0% { 
            transform: translateY(100vh) translateX(0px) rotate(0deg); 
            opacity: 0; 
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { 
            transform: translateY(-10vh) translateX(50px) rotate(360deg); 
            opacity: 0; 
          }
        }

        .blob-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          mix-blend-mode: screen;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          top: 10%;
          left: 15%;
          animation: blobMorph1 20s ease-in-out infinite;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          top: 60%;
          right: 20%;
          animation: blobMorph2 25s ease-in-out infinite;
        }

        .blob-3 {
          width: 250px;
          height: 250px;
          bottom: 20%;
          left: 25%;
          animation: blobMorph3 18s ease-in-out infinite;
        }

        .blob-4 {
          width: 350px;
          height: 200px;
          top: 40%;
          left: 60%;
          animation: blobMorph4 22s ease-in-out infinite;
        }

        @keyframes blobMorph1 {
          0%, 100% {
            border-radius: 50% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            border-radius: 70% 30% 50% 50% / 50% 60% 40% 50%;
            transform: rotate(180deg) scale(0.9);
          }
          75% {
            border-radius: 40% 60% 30% 70% / 70% 50% 50% 30%;
            transform: rotate(270deg) scale(1.05);
          }
        }

        @keyframes blobMorph2 {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          33% {
            border-radius: 30% 60% 40% 70% / 50% 60% 30% 60%;
            transform: rotate(120deg) scale(1.15);
          }
          66% {
            border-radius: 50% 50% 80% 20% / 80% 20% 50% 50%;
            transform: rotate(240deg) scale(0.85);
          }
        }

        @keyframes blobMorph3 {
          0%, 100% {
            border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
            transform: rotate(0deg) scale(1);
          }
          50% {
            border-radius: 80% 20% 30% 70% / 50% 80% 20% 50%;
            transform: rotate(180deg) scale(1.2);
          }
        }

        @keyframes blobMorph4 {
          0%, 100% {
            border-radius: 50% 50% 50% 50% / 60% 40% 60% 40%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 70% 30% 50% 50% / 30% 70% 40% 60%;
            transform: rotate(45deg) scale(1.1);
          }
          50% {
            border-radius: 30% 70% 40% 60% / 70% 30% 60% 40%;
            transform: rotate(135deg) scale(0.9);
          }
          75% {
            border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
            transform: rotate(225deg) scale(1.05);
          }
        }

        /* Performance optimizations */
        @media (max-width: 768px) {
          .blob-shape:nth-child(n+3) { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .blob-shape, .absolute:nth-child(n+2) {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

// Game Scene Wrapper
export const GameScene3D: React.FC<{ 
  scrollY?: number;
  performance?: 'low' | 'medium' | 'high';
}> = ({ 
  scrollY = 0, 
  performance = 'medium' 
}) => (
  <PlayhostBackground scrollY={scrollY} intensity={performance} />
);

// Export as GameShowcase
export const GameShowcase: React.FC<{ scrollY: number }> = ({ scrollY }) => (
  <PlayhostBackground scrollY={scrollY} intensity="medium" />
);

// Hook for dynamic performance adjustment
export const useGameBackground = (targetFPS = 60) => {
  const [intensity, setIntensity] = React.useState<'low' | 'medium' | 'high'>('medium');
  
  React.useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const checkPerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;
        
        if (fps < targetFPS - 10) {
          setIntensity(prev => prev === 'high' ? 'medium' : 'low');
        } else if (fps > targetFPS + 5) {
          setIntensity(prev => prev === 'low' ? 'medium' : 'high');
        }
      }
      
      requestAnimationFrame(checkPerformance);
    };
    
    const animationId = requestAnimationFrame(checkPerformance);
    return () => cancelAnimationFrame(animationId);
  }, [targetFPS]);
  
  return intensity;
};
