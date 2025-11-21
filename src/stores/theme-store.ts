import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type Theme = typeof THEME[keyof typeof THEME];

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

const getSystemTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME.DARK;
  }
  return THEME.LIGHT;
};

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return THEME.LIGHT;
  
  const savedTheme = localStorage.getItem('theme-store');
  if (savedTheme) {
    try {
      const parsed = JSON.parse(savedTheme);
      if (parsed.state?.theme === THEME.LIGHT || parsed.state?.theme === THEME.DARK) {
        return parsed.state.theme;
      }
    } catch (_e) {
      // Si hay error al parsear, usar tema del sistema
    }
  }
  return getSystemTheme();
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
          if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', newTheme);
          }
          return { theme: newTheme };
        });
      },
    }),
    {
      name: 'theme-store',
      onRehydrateStorage: () => (state) => {
        if (state && typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', state.theme);
        }
      },
    }
  )
);

