import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme: currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'default', name: 'Cyberpunk', color: '#00E5FF' },
    { id: 'brutalist', name: 'Brutalista', color: '#00FF00' },
    { id: 'retro', name: 'Retro', color: '#ff00ff' },
  ] as const;

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full mb-4 left-0 bg-brand-bg/95 backdrop-blur-xl border border-white/10 p-2 rounded-xl shadow-2xl min-w-[200px]"
          >
            <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest px-3 py-2">Seleccionar Diseño</div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm group"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: theme.color, boxShadow: `0 0 10px ${theme.color}40` }} 
                  />
                  <span className={currentTheme === theme.id ? 'text-brand-cyan font-bold' : 'text-brand-text/70'}>
                    {theme.name}
                  </span>
                </div>
                {currentTheme === theme.id && <Check className="w-4 h-4 text-brand-cyan" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-5 py-3 bg-brand-bg border border-white/10 rounded-full shadow-xl hover:scale-105 transition-all group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Palette className={`w-5 h-5 transition-colors ${isOpen ? 'text-brand-cyan' : 'text-brand-text/70'}`} />
        <span className="text-sm font-bold text-brand-text/80">Cambiar Diseño</span>
        <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}
