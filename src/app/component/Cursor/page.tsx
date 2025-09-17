"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const ProCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number }>>([]);

  // Smooth mouse movement with spring physics
  const springConfig = { stiffness: 350, damping: 22 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Update trail positions
      setTrailPositions((prev) => {
        const newTrail = [{ x: e.clientX, y: e.clientY }, ...prev.slice(0, 3)];
        return newTrail;
      });

      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'button, a, input, select, textarea, [role="button"], [data-cursor-hover]'
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

  const outerVariants = {
    default: {
      scale: 1,
      opacity: 0.65,
      borderColor: "transparent",
      background: "radial-gradient(circle, rgba(94, 234, 212, 0.5) 0%, rgba(147, 197, 253, 0.3) 70%)",
      rotate: 0,
      transition: { duration: 0.25 },
    },
    hover: {
      scale: 2,
      opacity: 0.9,
      borderColor: "rgba(94, 234, 212, 0.8)",
      background: "radial-gradient(circle, rgba(94, 234, 212, 0.7) 0%, rgba(147, 197, 253, 0.5) 70%)",
      rotate: 180,
      transition: { duration: 0.35 },
    },
    click: {
      scale: 0.6,
      opacity: 0.85,
      borderColor: "rgba(94, 234, 212, 0.9)",
      background: "radial-gradient(circle, rgba(94, 234, 212, 0.9) 0%, rgba(147, 197, 253, 0.6) 70%)",
      rotate: 0,
      transition: { duration: 0.15 },
    },
  };

  const innerVariants = {
    default: {
      scale: 1,
      opacity: 0.85,
      background: "linear-gradient(45deg, #5eead4, #93c5fd)",
    },
    hover: {
      scale: 0.3,
      opacity: 1,
      background: "linear-gradient(45deg, #5eead4, #3b82f6)",
    },
    click: {
      scale: 1.5,
      opacity: 1,
      background: "linear-gradient(45deg, #5eead4, #3b82f6)",
    },
  };

  const trailVariants = {
    default: (i: number) => ({
      scale: 0.6 - i * 0.15,
      opacity: 0.35 - i * 0.1,
      background: "linear-gradient(45deg, rgba(94, 234, 212, 0.4), rgba(147, 197, 253, 0.2))",
      transition: { duration: 0.25 },
    }),
  };

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Pulse Effect */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          width: '40px',
          height: '40px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(94, 234, 212, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      {/* Trail Effect */}
      {trailPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-40 rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            width: '14px',
            height: '14px',
            transform: 'translate(-50%, -50%)',
          }}
          variants={trailVariants}
          custom={i}
          animate="default"
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
        />
      ))}

      {/* Outer Ring */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full border"
        style={{
          x: mouseX,
          y: mouseY,
          width: '32px',
          height: '32px',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(94, 234, 212, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)',
        }}
        variants={outerVariants}
        animate={isClicking ? "click" : isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          width: '12px',
          height: '12px',
          transform: 'translate(-50%, -50%)',
        }}
        variants={innerVariants}
        animate={isClicking ? "click" : isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 550, damping: 32 }}
      />
    </>
  );
};

export default ProCursor;