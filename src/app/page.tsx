"use client";
import { useState, useEffect } from "react";
import { useLanguageStore } from "./zustand/uselangStore";
import { useLanguageFont } from "./hook/langFontUtils";
import GamingHub from "./(pages)/HeroSection/page";
import Loading from "@/components/ui/loading";

export default function GamingNewsWebsite() {
  const [loading, setLoading] = useState(true);

  // Language and font setup
  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);




  useEffect(() => {
    const fetchGames = async () => {
      // شبیه‌سازی لودینگ
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };
    fetchGames();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`min-h-screen bg-black text-white overflow-hidden ${fontClass}`}
      dir={direction}
      lang={lang}
    >

      {/* <GamingSection /> */}


      <GamingHub />


    </div>
  );
}