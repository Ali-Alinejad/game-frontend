import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Session } from "next-auth";
import { Theme } from "@/types";

interface AuthState {
  session: Session | null;
  loading: boolean;
  theme: Theme;
  language: "en" | "fa";
  isDark: boolean;
  setSession: (session: Session | null) => void;
  setLoading: (loading: boolean) => void;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: "en" | "fa") => void;
  setIsDark: (isDark: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      session: null,
      loading: false,
      theme: "dark",
      language: "en",
      isDark: true,
      setSession: (session) => set({ session }),
      setLoading: (loading) => set({ loading }),
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      setIsDark: (isDark) => set({ isDark }),
    }),
    {
      name: "auth-store",
    }
  )
);
