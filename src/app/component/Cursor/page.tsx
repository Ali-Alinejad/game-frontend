"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const SimpleCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { stiffness: 300, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "button, a, input, select, textarea, [role='button'], [data-cursor-hover]"
      );
      setIsHovering(!!isInteractive);
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
  }, [mouseX, mouseY]);

  const cursorVariants = {
    default: { scale: 1, rotate: 0, x: "-50%", y: "-50%", filter: "drop-shadow(0 0 0px rgba(0,0,0,0.5))" },
    hover: { 
      scale: 1, 
      rotate: 0, 
      filter: "drop-shadow(0 0 4px RGB(255, 255, 255)",
      x: "-50%", y: "-50%",
    },
    click: { 
      scale: 0.9, 
      rotate: 10,
      x: "-50%", y: "-50%",
      filter: "drop-shadow(0 0 2px  RGB(255, 255, 255)",
    },
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Glow */}
      <motion.div
        className="fixed rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          width: 40,
          height: 40,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      {/* Main cursor */}
      <motion.div
        className="fixed"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        variants={cursorVariants}
        animate={isClicking ? "click" : isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" className="drop-shadow">
          <defs>
            <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000" />
              <stop offset="100%" stopColor="#ff2500" />
            </linearGradient>
            <linearGradient id="cursorBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#ff2500" />
            </linearGradient>
          </defs>
          <path
            d="M2 2L22 12L12 14L8 22L2 2Z"
            fill="url(#cursorGrad)"
            stroke="url(#cursorBorder)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default SimpleCursor;