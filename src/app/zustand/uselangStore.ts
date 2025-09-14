import { create } from 'zustand';

type Language = 'fa' | 'en';

interface LanguageStore {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  lang: 'en',
  toggleLang: () => set((state) => ({ lang: state.lang === 'en' ? 'fa' : 'en' })),
  setLang: (lang) => set({ lang }),
}));
