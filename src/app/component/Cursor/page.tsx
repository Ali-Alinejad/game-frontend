"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FancyCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full pointer-events-none z-50 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 blur-xl mix-blend-screen"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default FancyCursor;
