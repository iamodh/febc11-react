import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const ThemeStore = (set) => ({
  // 초기값 사용저 설정으로 세팅
  isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
});

// const useUserStore = create(UserStore);

const useThemeStore = create(
  persist(ThemeStore, {
    name: "themeStore",
  })
);

export default useThemeStore;
