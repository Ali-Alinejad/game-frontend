import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface PlayhostBackgroundProps {
  scrollY?: number;
  intensity?: 'low' | 'medium' | 'high';
}

export const PlayhostBackground: React.FC<PlayhostBackgroundProps> = ({ 
  scrollY = 0, 
  intensity = 'medium' 
}) => {
  const gameImages = useMemo(() => [
    "./images/Games/doom.png",
    "./images/Games/dota2.png",
    "./images/Games/acshadow.png",
    "./images/Games/bf6.png",
    "./images/Games/cromsondesert.png",
    "./images/Games/Csgo2.png",
    "./images/Games/eldenring.png",
    "./images/Games/eldenscroll.png",
    "./images/Games/expedition33.png",
    "./images/Games/forza6.png",
    "./images/Games/godofwar.png",
    "./images/Games/hades2.png",
    "./images/Games/hogward.png",
    "./images/Games/metro.png",
    "./images/Games/pathofexile2.png",
    "./images/Games/rambow6.png",
    "./images/Games/reddead2.png",
    "./images/Games/resident-evil-requiem.png",
    "./images/Games/starwars.png",
    "./images/Games/tlou2.png",
    "./images/Games/witcher4.png",
    "./images/Games/wukong.png",
    

  ], []);

  const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 150;

  // Create extended array for seamless loop
  const extendedImages = [...gameImages, ...gameImages, ...gameImages, ...gameImages, ...gameImages, ...gameImages, ...gameImages];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
      {/* Animated Gradient Base */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.12) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* 3D Grid Game Images with Wave Effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50">
        <div
          className="grid grid-cols-11 gap-4"
          style={{
            transform: "perspective(1500px) rotateX(25deg) rotateY(-20deg) scale(1.3)",
            transformStyle: "preserve-3d",
          }}
        >
          {extendedImages.map((img, i) => {
            const row = Math.floor(i / 11);
            const col = i % 11;
            const duration = 60 + (row * 8);
            const delay = col * 0.3;

            return (
              <motion.div
                key={`game-${i}`}
                className="w-40 h-40 relative group"
                initial={{ x: '0%', rotateY: 0 }}
                animate={{ 
                  x: '-700%',
                  y: [0, -15, 0],
                  rotateY: [0, 10, 0],
                }}
                transition={{
                  x: {
                    duration: duration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: delay,
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delay,
                  },
                  rotateY: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delay,
                  },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                    style={{ 
                      filter: "brightness(0.6) contrast(1.25) saturate(1.3)",
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                    }}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/160x160/1a1a2e/8b5cf6?text=Game";
                    }}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20 rounded-xl" />
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-xl border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300" />
                  
                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-[1]">
        {Array.from({ length: particleCount }).map((_, i) => {
          const size = 1 + Math.random() * 3;
          const duration = 10 + Math.random() * 15;
          const delay = Math.random() * 8;
          const colors = [
            'from-cyan-400 to-blue-500',
            'from-purple-400 to-violet-500',
            'from-pink-400 to-rose-500',
            'from-yellow-400 to-orange-500',
          ];
          
          return (
            <motion.div
              key={`particle-${i}`}
              className={`absolute rounded-full bg-gradient-to-r ${colors[i % colors.length]}`}
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${size * 3}px currentColor`,
              }}
              animate={{
                y: ['100vh', '-10vh'],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'linear',
              }}
            />
          );
        })}
      </div>

      {/* Morphing Gradient Blobs */}
      <div className="absolute inset-0 z-[2]">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
            top: '10%',
            left: '15%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%)',
            bottom: '15%',
            right: '15%',
          }}
          animate={{
            scale: [1.2, 0.9, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.8) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(139, 92, 246, 0.03) 50%)',
          backgroundSize: '100% 4px',
        }}
        animate={{ y: [0, 4] }}
        transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-[4] opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 z-[5]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />

      {/* Top/Bottom Fade */}
      <div className="absolute top-0 left-0 right-0 h-40 z-[6] bg-gradient-to-b from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[6] bg-gradient-to-t from-black/60 to-transparent" />

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(8, 1fr) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export const GameScene3D: React.FC<{ 
  scrollY?: number;
  performance?: 'low' | 'medium' | 'high';
}> = ({ 
  scrollY = 0, 
  performance = 'medium' 
}) => (
  <PlayhostBackground scrollY={scrollY} intensity={performance} />
);

export const GameShowcase: React.FC<{ scrollY: number }> = ({ scrollY }) => (
  <PlayhostBackground scrollY={scrollY} intensity="medium" />
);

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

export default PlayhostBackground;