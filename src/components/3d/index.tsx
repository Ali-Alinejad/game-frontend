"use client"

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PlayhostBackgroundProps {
  scrollY?: number;
  intensity?: 'low' | 'medium' | 'high';
}

/**
 * Generates a seeded pseudo-random number between 0 and 1.
 */
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const PlayhostBackground: React.FC<PlayhostBackgroundProps> = ({ 

  intensity = 'medium' 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure animations only run after the component has mounted
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
  const ROWS = 5;
  const ITEMS_PER_COPY = COLUMNS * ROWS;
  const ITEM_SIZE = 170;
  const GAP_SIZE = 10;

  const gridItems = useMemo(() => {
    const images = [...baseGameImages];
    // Ensure enough images to fill the grid
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
      colorIndex: i % 2, 
    })),
    [particleCount]
  );

  // Particle colors: Gold/Amber only
  const colors = [
    'from-amber-400 to-yellow-300', 
    'from-orange-500 to-amber-500', 
  ];

  return (
    <div data-testid="playhost-background" className="fixed inset-0 z-0 overflow-hidden ">
      
      {/* 1. Animated gradient background (Smooth Gold Ambient Glow) */}
      <motion.div
        className="absolute inset-0"
        style={{
          // Single soft gold radial gradient for smooth animation
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 185, 0, 0.09) 0%, transparent 80%)',
          willChange: 'transform, filter',
        }}
        animate={isMounted ? {
          // Animate position, scale, and brightness softly
          scale: [1, 1.3, 1.05, 1.2, 1],
          x: ['-5%', '5%', '-5%', '0%'],
          y: ['-5%', '0%', '5%', '-5%'],
          filter: ['brightness(1)', 'brightness(1.1)', 'brightness(1)'],
        } : {}}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: 'easeInOut', 
          repeatType: 'reverse' 
        }}
      />

      {/* 2. 3D Game Grid */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-35 overflow-hidden">
        <div
          ref={containerRef}
          // Perspective and rotation for 3D effect
          style={{
            transform: "perspective(2000px) rotateX(35deg) rotateY(-10deg) rotateZ(10deg) scale(1.4)", 
            transformStyle: "preserve-3d",
          }}
        >
          {/* Animated container for horizontal scrolling loop */}
          <motion.div
            className="flex gap-2.5" 
            style={{
              transformStyle: "preserve-3d",
              width: `${gridWidth  + GAP_SIZE * 3}px`,
              willChange: 'transform',
            }}
            animate={isMounted ? {
              x: [-220, -gridWidth - GAP_SIZE, -gridWidth * 2 - GAP_SIZE * 2, -gridWidth - GAP_SIZE, 0],
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
                className="grid gap-2.5 flex-shrink-0"
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
                        // Subtle up/down and rotation animation
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
                        {/* Game Card Container (Gold Trim) */}
                        <div 
                          className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-900/20 via-black/20 to-yellow-900/20 border border-yellow-700/30 shadow-2xl"
                          style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 185, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <div className="relative w-full h-full p-2">
                            <div className="w-full h-full rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm">
                              <Image
                                src={img}
                                alt=""
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                style={{ 
                                  filter: "brightness(0.65) contrast(1.1) saturate(1.2)",
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
                        
                        {/* Enhanced glow effects (Gold/Orange) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/15 via-transparent to-orange-600/15 rounded-2xl pointer-events-none opacity-60" />
                        
                        {/* Shine effect on hover (Gold/White) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" 
                          style={{
                            transform: 'translateX(-100%)',
                            animation: 'shine 3s infinite',
                          }}
                        />
                        
                        {/* Ambient glow (Gold) */}
                        <div
                          className="absolute inset-0 -z-10 blur-2xl rounded-2xl pointer-events-none opacity-50"
                          style={{
                            background: 'radial-gradient(circle, rgba(255, 185, 0, 0.5) 0%, rgba(255, 185, 20, 0.3) 50%, transparent 70%)',
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
      
      {/* 3. Optimized particles (Gold/Orange Theme) */}
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

      {/* 4. Large gradient orbs (Gold/Orange Theme) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        
        {/* Orb 1 - Gold/Amber */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 193, 7, 0.25) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
          }}
          animate={isMounted ? {
            scale: [1.2, 0.9, 1.2],
            x: [0, -45, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.35, 0.2], 
          } : {}}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Orb 2 - Gold/Orange */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)',
            top: '5%',
            left: '5%',
          }}
          animate={isMounted ? {
            scale: [0.8, 1.1, 0.8],
            x: [0, 60, 0],
            y: [0, 40, 0],
            opacity: [0.2, 0.35, 0.2], 
          } : {}}
          transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
        />
     
      </div>

      {/* 5. Scanline effect (Subtle Gold/Dark) */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none opacity-20" 
        style={{
          // Subtle gold scanline pattern
          backgroundImage: 'linear-gradient(transparent 50%, rgba(255, 185, 0, 0.05) 50%)', 
          backgroundSize: '100% 4px',
        }}
        animate={isMounted ? { y: [0, 4] } : {}}
        transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
      />

      {/* 6. Subtle noise texture */}
      <div 
        className="absolute inset-0 z-[4] opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* 7. Vignette */}
      <div 
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 25%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      {/* 8. Edge fades (ensure content is readable at edges) */}
      <div className="absolute top-0 left-0 right-0 h-40 z-[6] bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[6] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* 9. Keyframes for shine and accessibility adjustments */}
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