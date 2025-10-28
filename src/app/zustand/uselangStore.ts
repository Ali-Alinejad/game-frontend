import { create } from "zustand";

type Language = "fa" | "en";

interface LanguageStore {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  cookiesEnabled: boolean;
  setCookiesEnabled: (enabled: boolean) => void;
}

const COOKIE_NAME = "lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

const log = (message: string, data?: any) => {
  console.log(`[Language Store] ${message}`, data || "");
};

const canUseCookies = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cookieConsent") === "accepted";
};

const getInitialLang = (): Language => {
  if (typeof window === "undefined") return "en";

  log("Checking initial language");

  // 1) cookie if consent given
  if (canUseCookies()) {
    const m = document.cookie.match(
      new RegExp("(^|;)\\s*" + COOKIE_NAME + "\\s*=\\s*([^;]+)")
    );
    if (m && m[2]) {
      const v = decodeURIComponent(m[2]);
      log("Found language in cookie:", v);
      return v === "fa" ? "fa" : "en";
    }
  } else {
    log("Cookies not enabled or no consent given");
  }

  // 2) browser preference
  if (typeof navigator !== "undefined") {
    if (navigator.language?.startsWith("fa")) {
      log("Using browser language preference:", navigator.language);
      return "fa";
    }
  }

  log("Using default language: en");
  return "en";
};

const setLangCookie = (lang: Language) => {
  if (typeof document === "undefined") return;

  if (!canUseCookies()) {
    log("Cannot set cookie - no consent");
    return;
  }

  try {
    document.cookie = `${COOKIE_NAME}=${lang}; Path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    log("Set language cookie:", lang);
  } catch (e) {
    log("Error setting cookie:", e);
  }
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  lang: getInitialLang(),
  cookiesEnabled: canUseCookies(),
  setCookiesEnabled: (enabled: boolean) => {
    log("Setting cookies enabled:", enabled);
    set({ cookiesEnabled: enabled });
    if (enabled) {
      // Re-set the cookie with current language when cookies are enabled
      const state = useLanguageStore.getState();
      setLangCookie(state.lang);
    }
  },
  toggleLang: () =>
    set((state) => {
      const next = state.lang === "en" ? "fa" : "en";
      if (state.cookiesEnabled) {
        setLangCookie(next);
      }
      log("Language toggled to:", next);
      return { lang: next };
    }),
  setLang: (lang) => {
    const state = useLanguageStore.getState();
    if (state.cookiesEnabled) {
      setLangCookie(lang);
    }
    log("Language set to:", lang);
    set({ lang });
  },
}));
