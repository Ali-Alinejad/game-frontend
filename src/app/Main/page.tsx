"use client";
import { useState, useEffect } from "react";
import PageLoader from '@/components/shared/PageLoader';
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

  return (
    <div
      className={`min-h-screen bg-black text-white ${fontClass}`}
      dir={direction}
      lang={lang}
    >
      <PageLoader dataReady={!loading}>
        <GamingHub />
      </PageLoader>
    </div>
  );
}
