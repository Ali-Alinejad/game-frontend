import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PlayhostBackgroundProps {
  scrollY?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const PlayhostBackground: React.FC<PlayhostBackgroundProps> = ({ 
  scrollY = 0, 
  intensity = 'medium' 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const baseGameImages = useMemo(() => [
    "./images/Games/doom.png", "./images/Games/dota2.png", "./images/Games/acshadow.png", 
    "./images/Games/bf6.png", "./images/Games/crimsondesert.png", "./images/Games/Csgo2.png", 
    "./images/Games/eldenring.png", "./images/Games/eldenscroll.png", "./images/Games/expedition33.png", 
    "./images/Games/forza6.png", "./images/Games/godofwar.png", "./images/Games/hades2.png",
    "./images/Games/hogward.png", "./images/Games/metro.png", "./images/Games/pathofexile2.png", 
    "./images/Games/rambow6.png", "./images/Games/reddead2.png", "./images/Games/resident-evil-requiem.png", 
    "./images/Games/starwars.png", "./images/Games/tlou2.png", "./images/Games/witcher4.png", 
    "./images/Games/wukong.png", "./images/Games/deadstranding2.png", "./images/Games/valorant.png",
    "./images/Games/ufc4.png", "./images/Games/assassinscreedvalhalla.png", "./images/Games/avengers.png", 
    "./images/Games/cyberpunk2077.png", "./images/Games/farcry6.png", "./images/Games/halo5.png", 
    "./images/Games/minecraft.png", "./images/Games/overwatch2.png",
  ], []);

  const COLUMNS = 8;
  const ROWS = 4;
  const ITEMS_PER_COPY = COLUMNS * ROWS;
  const ITEM_SIZE = 170;
  const GAP_SIZE = 10;

  const gridItems = useMemo(() => {
    const images = [...baseGameImages];
    while (images.length < ITEMS_PER_COPY) {
      images.push(baseGameImages[images.length % baseGameImages.length]);
    }
    return images.slice(0, ITEMS_PER_COPY);
  }, [baseGameImages, ITEMS_PER_COPY]);

  const gridWidth = (COLUMNS * ITEM_SIZE) + ((COLUMNS - 1) * GAP_SIZE);

  const particleCount = intensity === 'low' ? 30 : intensity === 'medium' ? 60 : 90;
  
  const particles = useMemo(() => 
    Array.from({ length: particleCount }).map((_, i) => ({
      size: 1.5 + seededRandom(i * 123) * 2.5,
      duration: 12 + seededRandom(i * 456) * 18,
      delay: seededRandom(i * 789) * 10,
      left: seededRandom(i * 111) * 100,
      top: seededRandom(i * 222) * 100,
      xOffset: seededRandom(i * 333) * 80 - 40,
      colorIndex: i % 4,
    })),
    [particleCount]
  );

  const colors = [
    'from-cyan-400 to-blue-500',
    'from-purple-400 to-violet-500',
    'from-pink-400 to-rose-500',
    'from-yellow-400 to-orange-500',
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={isMounted ? {
          background: [
            'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.12) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)',
          ],
        } : {}}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* 3D Game Grid with smooth left-right-back animation */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-35 overflow-hidden">
        <div
          ref={containerRef}
          style={{
            transform: "perspective(2000px) rotateX(35deg) rotateY(-10deg) rotateZ(10deg) scale(1.4)", 
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="flex gap-5"
            style={{
              transformStyle: "preserve-3d",
              width: `${gridWidth  + GAP_SIZE * 2}px`,
              willChange: 'transform',
            }}
            animate={isMounted ? {
              x: [0, -gridWidth - GAP_SIZE, -gridWidth * 2 - GAP_SIZE * 2, -gridWidth - GAP_SIZE, 0],
            } : {}}
            transition={{
              x: {
                duration: 500,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              },
            }}
          >
            {[0, 1, 2].map((copyIndex) => (
              <div
                key={`copy-${copyIndex}`}
                className="grid gap-5 flex-shrink-0"
                style={{
                  transformStyle: "preserve-3d",
                  width: `${gridWidth}px`,
                  gridTemplateColumns: `repeat(${COLUMNS}, ${ITEM_SIZE}px)`,
                  gridTemplateRows: `repeat(${ROWS}, ${ITEM_SIZE}px)`,
                }}
              >
                {gridItems.map((img, i) => {
                  const row = Math.floor(i / COLUMNS);
                  const col = i % COLUMNS;
                  
                  return (
                    <motion.div
                      key={`game-${copyIndex}-${i}`}
                      className="relative group"
                      style={{
                        width: `${ITEM_SIZE}px`,
                        height: `${ITEM_SIZE}px`,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                      animate={isMounted ? { 
                        y: [0, -12 - (row * 2), 0],
                        rotateZ: [0, 2, 0],
                      } : {}}
                      transition={{
                        y: {
                          duration: 5 + (col * 0.3),
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: col * 0.15 + row * 0.1,
                          repeatType: 'reverse',
                        },
                        rotateZ: {
                          duration: 8 + (row * 0.5),
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: col * 0.2,
                          repeatType: 'reverse',
                        },
                      }}
                    >
                      <div className="relative w-full h-full">
                        {/* Modern card design */}
                        <div 
                          className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-purple-500/20 shadow-2xl"
                          style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <div className="relative w-full h-full p-2">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
                              <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                style={{ 
                                  filter: "brightness(0.75) contrast(1.2) saturate(1.3)",
                                  imageRendering: '-webkit-optimize-contrast',
                                }}
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced glow effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 rounded-3xl pointer-events-none opacity-60" />
                        
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" 
                          style={{
                            transform: 'translateX(-100%)',
                            animation: 'shine 3s infinite',
                          }}
                        />
                        
                        {/* Ambient glow */}
                        <div
                          className="absolute inset-0 -z-10 blur-2xl rounded-3xl pointer-events-none opacity-50"
                          style={{
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)',
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Optimized particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full bg-gradient-to-r ${colors[particle.colorIndex]}`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              boxShadow: `0 0 ${particle.size * 3}px currentColor`,
              willChange: 'transform, opacity',
            }}
            animate={isMounted ? {
              y: ['100vh', '-10vh'],
              x: [0, particle.xOffset],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            } : {}}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Large gradient orbs */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)',
            top: '5%',
            left: '10%',
          }}
          animate={isMounted ? {
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, 35, 0],
            opacity: [0.2, 0.35, 0.2],
          } : {}}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
          }}
          animate={isMounted ? {
            scale: [1.2, 0.9, 1.2],
            x: [0, -45, 0],
            y: [0, -50, 0],
            opacity: [0.25, 0.4, 0.25],
          } : {}}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={isMounted ? {
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.18, 0.3, 0.18],
          } : {}}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(139, 92, 246, 0.03) 50%)',
          backgroundSize: '100% 4px',
        }}
        animate={isMounted ? { y: [0, 4] } : {}}
        transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
      />

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 z-[4] opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 25%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      {/* Edge fades */}
      <div className="absolute top-0 left-0 right-0 h-40 z-[6] bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[6] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
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

export default PlayhostBackground;