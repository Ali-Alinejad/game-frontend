"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguageStore } from "../../zustand/uselangStore";

// تعریف نوع برای ذرات پرتال
interface PortalParticle {
  id: number;
  size: number;
  delay: number;
  isGold: boolean;
  angle: number; // برای حرکت شعاعی
  speed: number;
}

const NUM_PARTICLES = 120; // تعداد ذرات در پرتال

export default function Loading() {
  const { lang } = useLanguageStore();
  const [particlesData, setParticlesData] = useState<PortalParticle[]>([]);

  useEffect(() => {
    // تولید ذرات برای پرتال
    const data: PortalParticle[] = Array.from({ length: NUM_PARTICLES }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // اندازه 1 تا 4
      delay: Math.random() * 3, // تأخیر اولیه برای پخش شدن انیمیشن
      isGold: Math.random() > 0.5, // 50% شانس طلایی بودن
      angle: Math.random() * 360, // زاویه اولیه
      speed: Math.random() * 0.5 + 0.5, // سرعت حرکت (0.5 تا 1)
    }));
    setParticlesData(data);
  }, []);

  // انیمیشن برای هاله‌های اطراف لوگو
  const ringVariants = {
    animate: {
      scale: [0.5, 1.5], // هاله‌ها از کوچک به بزرگ می‌روند
      opacity: [0, 0.4, 0], // ظاهر شده و محو می‌شوند
      transition: {
        duration: 3,
        ease: "easeOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black" 
      style={{ 
        // بک‌گراند تیره با گرادیانت شعاعی که به مرکز نور می‌دهد
        background: 'radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 1) 0%, rgba(0, 0, 0, 1) 100%)',
        backdropFilter: 'blur(10px)', 
        WebkitBackdropFilter: 'blur(10px)'
      }}
    > 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center p-8 z-10"
      >
        
    
        <div className="absolute inset-0 flex items-center justify-center">
            {particlesData.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        background: particle.isGold 
                            ? 'radial-gradient(circle, rgba(255, 215, 0, 1) 0%, transparent 80%)'
                            : 'radial-gradient(circle, rgba(200, 200, 200, 1) 0%, transparent 100%)',
                        // قرار دادن ذرات در یک دایره بزرگتر از مرکز
                        top: `calc(50% + ${Math.sin(particle.angle * (Math.PI / 180)) * 200}px)`,
                        left: `calc(50% + ${Math.cos(particle.angle * (Math.PI / 180)) * 200}px)`,
                    }}
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{
                        // حرکت ذرات به سمت مرکز (لوگو)
                        x: [0, -Math.cos(particle.angle * (Math.PI / 180)) * 200],
                        y: [0, -Math.sin(particle.angle * (Math.PI / 180)) * 200],
                        opacity: [0.8, 0.1], // از پررنگ به محو
                        scale: [1, 0.5], // کوچک شدن به سمت مرکز
                    }}
                    transition={{
                        duration: particle.speed * 4, // سرعت متغیر
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                        repeatDelay: 0.5, // تأخیر بین تکرارها
                    }}
                />
            ))}
        </div>


        {/* Logo (در مرکز همه این افکت‌ها) */}
        <div className="relative  w-40 h-40 z-20"> {/* بزرگتر کردن لوگو */}
          <Image
            src="/logoes/logoGold.png"
            alt="Logo"
            fill
            sizes="md"
            style={{ objectFit: "contain", filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.3))" }} // سایه طلایی قوی‌تر برای لوگو
            priority
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="-mt-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 text-center uppercase tracking-widest z-20 animate-pulse"
        >
          {lang === "fa" ? "در حال بارگزاری" : "Loading"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-3  text-zinc-500 text-center z-20"
        >
          {lang === "fa" ? "ممنون از شکیبایی شما" : "thanks for wating "}
        </motion.p>
      </motion.div>
    </div>
  );
}