"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguageStore } from '../../zustand/uselangStore';

export default function Loading() {
  const { lang } = useLanguageStore();

  const stars = Array.from({ length: 50 }); // تعداد بیشتر برای جذابیت

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 drop-blur-md">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Glow circle */}
        <motion.div
         
          animate={{ scale: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Logo */}
        <div className="relative w-24 h-24 z-10">
          <Image
            src="/logoes/newLogo.png"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Stars / particles */}
        <div className="absolute w-64 h-64">
          {stars.map((_, i) => {
            const size = Math.random() * 3 + 1; // اندازه ستاره 1 تا 4 px
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const duration = Math.random() * 4 + 1.5; // سرعت بیشتر
            const opacity = Math.random() * 0.8 + 0.2;
            const blur = Math.random() * 1.5;

            return (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: size,
                  height: size,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: opacity,
                  filter: `blur(${blur}px)`,
                }}
                animate={{
                  y: [0, -Math.random() * 60],
                  x: [0, Math.random() * 60 - 30],
                  opacity: [opacity, 0.1, opacity],
                }}
                transition={{
                  repeat: Infinity,
                  duration: duration,
                  ease: "easeInOut",
                  repeatType: "mirror",
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg font-semibold text-white text-center"
        >
          {lang === "fa" ? "درحال بارگذاری" : "Loading"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-2 text-sm text-gray-300 text-center"
        >
          {lang === "fa" ? "ممنون از شکیبایی شما" : "Thanks for waiting"}
        </motion.p>
      </motion.div>
    </div>
  );
}
