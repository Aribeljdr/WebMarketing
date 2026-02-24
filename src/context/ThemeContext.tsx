import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'default' | 'brutalist' | 'retro';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('default');

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-brutalist', 'theme-retro');
    
    if (theme === 'brutalist') {
      root.classList.add('theme-brutalist');
    } else if (theme === 'retro') {
      root.classList.add('theme-retro');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
