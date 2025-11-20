"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/loading";
import { useLanguageFont } from "../hook/langFontUtils";
import { useLanguageStore } from "../zustand/uselangStore";
import GamingHub from "../(pages)/HeroSection/page";

export default function GamingNewsWebsite() {
  const [loading, setLoading] = useState(true);

  const { lang } = useLanguageStore();
  const { fontClass, direction } = useLanguageFont(lang);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) return <Loading />;

  return (
    <div
      className={`min-h-screen bg-black text-white ${fontClass}`}
      dir={direction}
      lang={lang}
    >
      <GamingHub />
    </div>
  );
}
