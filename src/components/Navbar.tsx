import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Precios', href: '#precios' },
  ];

  const renderLogo = () => {
    if (theme === 'brutalist') {
      return <span className="text-2xl font-black tracking-tighter text-white uppercase">LIMA DIGITAL</span>;
    }
    if (theme === 'retro') {
      return <span className="text-2xl font-black italic tracking-tighter text-white uppercase drop-shadow-[2px_2px_0px_#ff00ff]">LIMA DIGITAL_V01</span>;
    }
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center glow-cyan">
          <span className="text-brand-bg font-bold text-xl">L</span>
        </div>
        <span className="text-xl font-bold tracking-tighter">LUMINA<span className="text-brand-cyan">DIGITAL</span></span>
      </div>
    );
  };

  const renderLinks = () => {
    return (
      <div className="hidden md:flex items-center">
        {navLinks.map((link, index) => (
          <div key={link.name} className="flex items-center">
            <a
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                theme === 'default' ? 'text-brand-muted hover:text-brand-cyan' : 'text-white hover:text-brand-cyan'
              } ${theme !== 'default' ? 'px-4' : 'px-4'}`}
            >
              {link.name}
            </a>
            {(theme === 'brutalist' || theme === 'retro') && index < navLinks.length - 1 && (
              <span className="text-white/30 font-light">|</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderCTA = () => {
    if (theme === 'brutalist') {
      return (
        <button className="px-8 py-2 bg-[#00FF00] text-black font-black uppercase text-sm hover:scale-105 transition-transform">
          EMPEZAR
        </button>
      );
    }
    if (theme === 'retro') {
      return (
        <button className="px-8 py-2 bg-[#ff00ff] text-white font-black uppercase text-sm shadow-[4px_4px_0px_white] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          EMPEZAR .EXE
        </button>
      );
    }
    return (
      <button className="px-6 py-2.5 bg-brand-cyan text-brand-bg font-bold rounded-xl text-sm hover:scale-105 transition-transform glow-cyan-hover">
        Empezar Proyecto
      </button>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {renderLogo()}

        {/* Desktop Links */}
        {renderLinks()}

        <div className="hidden md:block">
          {renderCTA()}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-bg border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-brand-muted hover:text-brand-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-2">
            {renderCTA()}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
