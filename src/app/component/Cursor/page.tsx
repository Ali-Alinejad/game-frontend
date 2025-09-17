"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GamingCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, input, [role="button"], [data-cursor-hover]');
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const cursorVariants = {
    default: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 0 },
    click: { scale: 0.9, rotate: 0 }
  };

  const shadowVariants = {
    default: { scale: 1, opacity: 0.4 },
    hover: { scale: 1.3, opacity: 0.6 },
    click: { scale: 0.8, opacity: 0.8 }
  };

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer Shadow */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x + 2,
          y: mousePosition.y + 2,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <motion.div
          variants={shadowVariants}
          animate={isClicking ? "click" : isHovering ? "hover" : "default"}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" className="drop-shadow-2xl">
            <path
              d="M4 4 L4 22 L9 17 L13 17 L18 28 L22 26 L17 15 L22 15 L4 4 Z"
              fill="rgba(0,0,0,0.5)"
              className="blur-sm"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Main Shadow */}
      <motion.div
        className="fixed pointer-events-none z-45"
        animate={{
          x: mousePosition.x + 1,
          y: mousePosition.y + 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        <motion.div
          variants={shadowVariants}
          animate={isClicking ? "click" : isHovering ? "hover" : "default"}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" className="drop-shadow-xl">
            <path
              d="M3 3 L3 20 L8 15 L11.5 15 L16 25 L19 23.5 L14.5 13 L20 13 L3 3 Z"
              fill="rgba(59, 130, 246, 0.6)"
              className="blur-sm"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="fixed pointer-events-none z-48"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          variants={shadowVariants}
          animate={isClicking ? "click" : isHovering ? "hover" : "default"}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" className="drop-shadow-lg">
            <path
              d="M2 2 L2 19 L7 14 L10.5 14 L15 24 L18 22.5 L13.5 12 L19 12 L2 2 Z"
              fill="rgba(34, 197, 94, 0.8)"
              className="blur-xs"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Main Cursor */}
{/* Main Cursor */}
{/* Main Cursor */}
<motion.div
  className="fixed pointer-events-none z-50"
  animate={{
    x: mousePosition.x,
    y: mousePosition.y,
  }}
  transition={{ type: "spring", stiffness: 600, damping: 35 }}
>
  <motion.div
    variants={cursorVariants}
    animate={isClicking ? "click" : isHovering ? "hover" : "default"}
    transition={{ type: "spring", stiffness: 500, damping: 30 }}
  >
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className="drop-shadow-[0_0_18px_rgba(0,150,255,0.9)]"
    >
      {/* فلش مثلثی اصلی */}
      <path
        d="M4 4 L44 24 L20 44 Z"
        fill="url(#cursorBlueGradient)"
        stroke="rgba(0,200,255,0.9)"
        strokeWidth="1.5"
      />

      {/* هایلایت داخلی */}
      <path
        d="M8 8 L38 24 L20 40 Z"
        fill="url(#highlightBlueGradient)"
      />

      <defs>
        {/* گرادیان اصلی */}
        <linearGradient id="cursorBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="50%" stopColor="#009dff" />
          <stop offset="100%" stopColor="#0044ff" />
        </linearGradient>

        {/* گرادیان هایلایت */}
        <linearGradient id="highlightBlueGradient" x1="0%" y1="0%" x2="60%" y2="60%">
          <stop offset="0%" stopColor="rgba(0,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(0,150,255,0.3)" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
</motion.div>



      {/* Particle Trail Effect */}
      <motion.div
        className="fixed pointer-events-none z-49"
        animate={{
          x: mousePosition.x + 12,
          y: mousePosition.y + 12,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-60 blur-sm" />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-48"
        animate={{
          x: mousePosition.x + 18,
          y: mousePosition.y + 18,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-40 blur-sm" />
      </motion.div>

      {/* Demo Interactive Elements */}
      <div className="fixed top-4 left-4 space-y-4 z-10">
        <button 
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          data-cursor-hover
        >
          Hover Me
        </button>
        <button 
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
          data-cursor-hover
        >
          Click Me
        </button>
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
          data-cursor-hover
        >
          Link Element
        </a>
      </div>

      <div className="fixed bottom-4 right-4 text-white/70 text-sm z-10 bg-black/20 px-3 py-2 rounded-lg backdrop-blur-sm">
        Gaming Cursor Active • Move • Hover • Click
      </div>
    </>
  );
};

export default GamingCursor;