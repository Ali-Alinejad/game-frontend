"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguageStore } from '../../zustand/uselangStore';

// تعریف نوع برای ستاره
interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  opacity: number;
  blur: number;
  // مقادیر تصادفی انیمیشن که باید ثابت بمانند
  initialDelay: number; 
  movementY: number;
  movementX: number;
}

const NUM_STARS = 50; // تعداد ستاره‌ها

export default function Loading() {
  const { lang } = useLanguageStore();
  const [starsData, setStarsData] = useState<Star[]>([]); // حالت برای ذخیره داده‌های ثابت ستاره‌ها

  // استفاده از useEffect برای تولید داده‌های تصادفی فقط در سمت کلاینت (پس از Hydration)
  useEffect(() => {
    const data: Star[] = Array.from({ length: NUM_STARS }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 1.5,
      opacity: Math.random() * 0.8 + 0.2,
      blur: Math.random() * 1.5,
      initialDelay: Math.random() * 2, // تأخیر اولیه ثابت شده
      movementY: -Math.random() * 60, // حرکت تصادفی Y ثابت شده
      movementX: Math.random() * 60 - 30, // حرکت تصادفی X ثابت شده
    }));
    setStarsData(data);
  }, []); // اجرا فقط یک بار پس از Hydration

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/80"> 
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative flex flex-col items-center justify-center"
      >
        
        {/* Glow circle */}
        <motion.div
          className="absolute w-52 h-52 rounded-full bg-amber-400/10"
          animate={{ scale: [0.8, 1.2, 0.8] }}
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
          {starsData.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                width: star.size,
                height: star.size,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: star.opacity,
                filter: `blur(${star.blur}px)`,
              }}
              animate={{
                // استفاده از مقادیر ثابت شده
                y: [0, star.movementY], 
                x: [0, star.movementX],
                opacity: [star.opacity, 0.1, star.opacity],
              }}
              transition={{
                repeat: Infinity,
                duration: star.duration, 
                ease: "easeInOut",
                repeatType: "mirror",
                delay: star.initialDelay, // استفاده از تأخیر ثابت شده
              }}
            />
          ))}
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 text-center"
        >
          {lang === "fa" ? "درحال بارگذاری..." : "Loading..."}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-2 text-sm text-zinc-400 text-center"
        >
          {lang === "fa" ? "ممنون از شکیبایی شما" : "Thanks for waiting"}
        </motion.p>
      </motion.div>
    </div>
  );
}