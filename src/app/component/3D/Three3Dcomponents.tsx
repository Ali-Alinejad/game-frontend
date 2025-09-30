import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const gameImages = useMemo(() => [
    "./images/Games/doom.png",
    "./images/Games/dota2.png",
    "./images/Games/acshadow.png",
    "./images/Games/bf6.png",
    "./images/Games/crimsondesert.png",
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
    "./images/Games/deadstranding2.png",
  ], []);

  const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 120;

  // تعداد بیشتر تکرار برای حلقه بی‌نهایت روان‌تر
  const extendedImages = useMemo(() => {
    const repeatCount = 12;
    return Array(repeatCount).fill(gameImages).flat();
  }, [gameImages]);

  const particles = useMemo(() => 
    Array.from({ length: particleCount }).map((_, i) => ({
      size: 1 + seededRandom(i * 123) * 3,
      duration: 10 + seededRandom(i * 456) * 15,
      delay: seededRandom(i * 789) * 8,
      left: seededRandom(i * 111) * 100,
      top: seededRandom(i * 222) * 100,
      xOffset: seededRandom(i * 333) * 100 - 50,
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
      {/* پس‌زمینه گرادیانت متحرک */}
      <motion.div
        className="absolute inset-0"
        animate={isMounted ? {
          background: [
            'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          ],
        } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* گرید 3D عکس‌های بازی با حلقه بی‌نهایت */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40">
        <div
          className="grid grid-cols-11 gap-6"
          style={{
            transform: "perspective(1800px) rotateX(30deg) rotateY(-15deg) scale(1.4)",
            transformStyle: "preserve-3d",
          }}
        >
          {extendedImages.map((img, i) => {
            const row = Math.floor(i / 11);
            const col = i % 11;
            // مدت زمان بیشتر برای انیمیشن روان‌تر
            const duration = 120 + (row * 15);
            const delay = col * 0.4;

            return (
              <motion.div
                key={`game-${i}`}
                className="relative group"
                style={{
                  width: '160px',
                  height: '160px',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
                initial={{ x: '0%', y: 0, rotateY: 0 }}
                animate={isMounted ? { 
                  x: '-700%',
                  y: [0, -20, 0],
                  rotateY: [0, 8, 0],
                  rotateZ: [0, 2, 0],
                } : {
                  x: '0%',
                  y: 0,
                  rotateY: 0,
                  rotateZ: 0,
                }}
                transition={{
                  x: {
                    duration: duration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: delay,
                  },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delay,
                  },
                  rotateY: {
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delay,
                  },
                  rotateZ: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delay + 1,
                  },
                }}
              >
                <div className="relative w-full h-full">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
                    <Image
                      width={160}
                      height={160}
                      src={img}
                      alt=""
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      style={{ 
                        filter: "brightness(0.7) contrast(1.3) saturate(1.4)",
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(139, 92, 246, 0.2)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      loading="eager"
                      quality={75}
                      unoptimized
                    />
                  </div>
                  
                  {/* گرادیانت روی عکس */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30 rounded-2xl pointer-events-none" />
                  
                  {/* حاشیه نورانی */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                    style={{
                      borderColor: 'rgba(139, 92, 246, 0.3)',
                    }}
                  />
                  
                  {/* درخشش hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  
                  {/* نور پس‌زمینه */}
                  <div
                    className="absolute inset-0 -z-10 blur-xl rounded-2xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                      opacity: 0.4,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ذرات شناور */}
      <div className="absolute inset-0 z-[1]">
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full bg-gradient-to-r ${colors[particle.colorIndex]}`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              boxShadow: `0 0 ${particle.size * 4}px currentColor`,
            }}
            animate={isMounted ? {
              y: ['100vh', '-10vh'],
              x: [0, particle.xOffset],
              opacity: [0, 0.9, 0],
              scale: [0, 1.2, 0],
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

      {/* نورهای گرادیانت بزرگ */}
      <div className="absolute inset-0 z-[2]">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            top: '5%',
            left: '10%',
          }}
          animate={isMounted ? {
            scale: [1, 1.4, 1],
            x: [0, 70, 0],
            y: [0, 40, 0],
            opacity: [0.25, 0.4, 0.25],
          } : {}}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
          }}
          animate={isMounted ? {
            scale: [1.3, 0.9, 1.3],
            x: [0, -50, 0],
            y: [0, -60, 0],
            opacity: [0.3, 0.45, 0.3],
          } : {}}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={isMounted ? {
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.35, 0.2],
          } : {}}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />

        {/* نور اضافی زرد */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.2) 0%, transparent 70%)',
            top: '60%',
            right: '30%',
          }}
          animate={isMounted ? {
            scale: [1.1, 1.4, 1.1],
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.15, 0.25, 0.15],
          } : {}}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* افکت Scanline */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(139, 92, 246, 0.02) 50%)',
          backgroundSize: '100% 4px',
        }}
        animate={isMounted ? { y: [0, 4] } : {}}
        transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
      />

      {/* بافت نویز */}
      <div 
        className="absolute inset-0 z-[4] opacity-15 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 z-[5]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.7) 100%)',
        }}
      />

      {/* فید بالا و پایین */}
      <div className="absolute top-0 left-0 right-0 h-48 z-[6] bg-gradient-to-b from-black/90 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[6] bg-gradient-to-t from-black/70 to-transparent" />

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(8, 1fr) !important;
            gap: 1rem !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }

        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
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
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  React.useEffect(() => {
    if (!isMounted) return;

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
  }, [targetFPS, isMounted]);
  
  return intensity;
};

export default PlayhostBackground;