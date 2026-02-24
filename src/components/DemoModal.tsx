/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import './DemoModal.css';
import React, { useState, useEffect } from 'react';
import { 
  PawPrint, 
  Plane, 
  Utensils, 
  Dumbbell,
  Wrench,
  Hammer,
  PaintRoller,
  HardHat,
  Terminal,
  X, 
  Heart, 
  MapPin, 
  Clock,
  Zap,
  ShieldCheck,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  Menu
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

type Niche = 'vet' | 'travel' | 'food' | 'gym' | 'construction';

interface BuildState {
  header: 'hidden' | 'skeleton' | 'loaded';
  hero: 'hidden' | 'skeleton' | 'loaded';
  services: 'hidden' | 'skeleton' | 'loaded';
  contact: 'hidden' | 'skeleton' | 'loaded';
  footer: 'hidden' | 'skeleton' | 'loaded';
}

interface DemoModalProps {
  onClose: () => void;
}

export default function DemoModal({ onClose }: DemoModalProps) {
  const { theme: luminaTheme } = useTheme(); // lumina's theme
  const [theme, setTheme] = useState<Niche>('vet'); // local niche theme
  const [statusText, setStatusText] = useState('> Inicializando constructor...');
  const [isSuccess, setIsSuccess] = useState(false);
  const [buildState, setBuildState] = useState<BuildState>({
    header: 'hidden',
    hero: 'hidden',
    services: 'hidden',
    contact: 'hidden',
    footer: 'hidden'
  });

  const buildWebsite = async (selectedNiche: Niche) => {
    setTheme(selectedNiche);
    setIsSuccess(false);
    setBuildState({
      header: 'hidden',
      hero: 'hidden',
      services: 'hidden',
      contact: 'hidden',
      footer: 'hidden'
    });

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    setStatusText('> Inicializando constructor de Landing Page...');
    await delay(750);
    setStatusText('> Generando contenido... nav-bar...');
    setBuildState(prev => ({ ...prev, header: 'skeleton' }));
    await delay(750);
    setBuildState(prev => ({ ...prev, header: 'loaded' }));
    setStatusText('> Generando contenido... Banner principal...');
    setBuildState(prev => ({ ...prev, hero: 'skeleton' }));
    await delay(750);
    setBuildState(prev => ({ ...prev, hero: 'loaded' }));
    setStatusText('> Estructurando secciones de conversión...');
    setBuildState(prev => ({ ...prev, services: 'skeleton' }));
    await delay(750);
    setBuildState(prev => ({ ...prev, services: 'loaded' }));
    setStatusText('> Integrando formularios de alta conversión...');
    setBuildState(prev => ({ ...prev, contact: 'skeleton' }));
    await delay(750);
    setBuildState(prev => ({ ...prev, contact: 'loaded' }));
    setStatusText('> Estructurando pie de página y enlaces...');
    setBuildState(prev => ({ ...prev, footer: 'skeleton' }));
    await delay(750);
    setBuildState(prev => ({ ...prev, footer: 'loaded' }));
    setStatusText('✅ ¡Página web de alto impacto generada con éxito!');
    setIsSuccess(true);
  };

  useEffect(() => {
    buildWebsite(theme);
  }, []);

  const handleNicheChange = (newNiche: Niche) => {
    if (newNiche !== theme) {
      buildWebsite(newNiche);
    }
  };

  const renderSection = (
    type: keyof BuildState, 
    skeleton: React.ReactNode, 
    content: React.ReactNode
  ) => {
    const state = buildState[type];
    if (state === 'hidden') return null;
    return (
      <div className="w-full">
        {state === 'skeleton' ? (
          <div className="p-4">{skeleton}</div>
        ) : (
          <div className="loaded">{content}</div>
        )}
      </div>
    );
  };

  const themeData = {
    vet: {
      title: 'CUIDADO EXPERTO PARA TU MEJOR AMIGO',
      subtitle: 'Servicios veterinarios de alta calidad con amor y dedicación. Porque su salud es nuestra prioridad número uno.',
      cta: 'RESERVAR CITA',
      img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      services: [
        { icon: <Heart />, title: 'Chequeo General', desc: 'Exámenes completos para asegurar que tu mascota esté siempre en su mejor estado de salud.' },
        { icon: <Zap />, title: 'Urgencias 24/7', desc: 'Atención inmediata para situaciones críticas en cualquier momento del día o la noche.' },
        { icon: <ShieldCheck />, title: 'Vacunación', desc: 'Esquemas completos de vacunación para proteger a tu mascota contra enfermedades comunes.' },
        { icon: <Star />, title: 'Grooming', desc: 'Servicios de estética y limpieza profunda para que tu mascota luzca y se sienta increíble.' },
      ]
    },
    travel: {
      title: 'DESCUBRE TU PRÓXIMA GRAN AVENTURA',
      subtitle: 'Paquetes turísticos exclusivos a los destinos más exóticos del mundo. Viaja con comodidad y seguridad.',
      cta: 'EXPLORAR DESTINOS',
      img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
      services: [
        { icon: <MapPin />, title: 'Tours Guiados', desc: 'Expertos locales que te mostrarán los secretos mejor guardados de cada ciudad.' },
        { icon: <Plane />, title: 'Vuelos Directos', desc: 'Conexiones rápidas y cómodas a los principales hubs internacionales del mundo.' },
        { icon: <Clock />, title: 'Soporte 24/7', desc: 'Asistencia personalizada durante todo tu viaje para cualquier imprevisto que surja.' },
        { icon: <Zap />, title: 'Ofertas Flash', desc: 'Descuentos exclusivos de último minuto para viajeros intrépidos y decididos.' },
      ]
    },
    food: {
      title: 'EL SABOR AUTÉNTICO EN CADA BOCADO',
      subtitle: 'Ingredientes frescos y recetas tradicionales con un toque moderno. Una experiencia culinaria inolvidable.',
      cta: 'VER MENÚ',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      services: [
        { icon: <Utensils />, title: 'Menú Gourmet', desc: 'Platos diseñados por chefs reconocidos internacionalmente con los mejores ingredientes.' },
        { icon: <Zap />, title: 'Entrega Rápida', desc: 'Tu comida favorita caliente y en la puerta de tu casa en menos de 30 minutos.' },
        { icon: <Heart />, title: 'Opción Vegana', desc: 'Variedad de platos deliciosos basados en plantas para todos los gustos y dietas.' },
        { icon: <Star />, title: 'Eventos VIP', desc: 'Servicio de catering exclusivo para tus celebraciones más especiales e importantes.' },
      ]
    },
    gym: {
      title: 'FORJA TU MEJOR VERSIÓN HOY MISMO',
      subtitle: 'Entrenamiento de alto rendimiento con los mejores coaches. Transforma tu cuerpo y tu mente ahora.',
      cta: 'EMPEZAR AHORA',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      services: [
        { icon: <Dumbbell />, title: 'Pesas Libres', desc: 'Zona equipada con la última tecnología para maximizar tus ganancias musculares.' },
        { icon: <Zap />, title: 'HIIT Training', desc: 'Sesiones de alta intensidad para quemar grasa y mejorar tu resistencia cardiovascular.' },
        { icon: <ShieldCheck />, title: 'Coach Personal', desc: 'Planes de entrenamiento y nutrición 100% personalizados según tus objetivos.' },
        { icon: <Star />, title: 'Zona de Relax', desc: 'Sauna y masajes deportivos para una recuperación óptima después de entrenar.' },
      ]
    },
    construction: {
      title: 'CONSTRUIMOS SOLUCIONES, REPARAMOS FUTUROS',
      subtitle: 'Servicios integrales de construcción y reparaciones. Calidad, confianza y eficiencia en cada proyecto.',
      cta: 'COTIZAR PROYECTO',
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      services: [
        { icon: <Wrench />, title: 'Plomería', desc: 'Soluciones expertas para fugas, instalaciones y mantenimiento de tuberías.' },
        { icon: <Hammer />, title: 'Carpintería', desc: 'Diseño y fabricación de muebles a medida, reparaciones y estructuras de madera.' },
        { icon: <PaintRoller />, title: 'Pintura', desc: 'Servicios de pintura interior y exterior con acabados profesionales y duraderos.' },
        { icon: <HardHat />, title: 'Remodelaciones', desc: 'Transformamos tus espacios. Proyectos de remodelación parcial o total.' },
      ]
    }
  };
  
  const currentData = themeData[theme];


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(10, 15, 22, 0.8)', backdropFilter: 'blur(10px)' }}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-brand-bg border border-white/10 w-full max-w-6xl h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col relative"
      >
        {/* ... Modal Header ... */}
        <div className="bg-brand-bg/50 border-b border-white/10 p-3 flex flex-wrap items-center justify-center gap-4 z-40">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Selecciona Nicho:</span>
          <div className="flex bg-black/20 p-1 rounded-lg">
            {(['vet', 'travel', 'food', 'gym', 'construction'] as Niche[]).map((t) => (
              <button
                key={t}
                onClick={() => handleNicheChange(t)}
                className={`px-4 py-1 rounded-md text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                  theme === t 
                    ? 'bg-brand-cyan text-brand-bg shadow-md' 
                    : 'text-brand-text/50 hover:bg-white/5'
                }`}
              >
                {t === 'vet' && <PawPrint className="w-4 h-4" />}
                {t === 'travel' && <Plane className="w-4 h-4" />}
                {t === 'food' && <Utensils className="w-4 h-4" />}
                {t === 'gym' && <Dumbbell className="w-4 h-4" />}
                {t === 'construction' && <Wrench className="w-4 h-4" />}
                <span className="hidden sm:inline">{t}</span>
              </button>
            ))}
          </div>
          <button 
            onClick={onClose}
            className="ml-auto p-2 hover:bg-white/10 rounded-full transition-colors text-brand-muted"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Terminal Overlay */}
        {!isSuccess && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="w-full max-w-md p-6 bg-black border border-brand-cyan/30 rounded-lg shadow-2xl font-mono">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <Terminal className="w-4 h-4 text-brand-cyan" />
                <span className="text-[10px] text-white/50 uppercase tracking-widest">Constructor Engine v1.0.42</span>
              </div>
              <div className="space-y-4">
                <p className="text-brand-cyan text-sm leading-relaxed">{statusText}</p>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-cyan"
                    initial={{ width: "0%" }}
                    animate={{ width: isSuccess ? "100%" : "95%" }}
                    transition={{ duration: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Web Canvas */}
        <div className={`flex-1 overflow-y-auto theme-${theme}`} style={{ backgroundColor: 'var(--bg, #fff)' }}>
          {/* Section: Header */}
          {renderSection(
            'header',
            <div className="h-16 skeleton w-full mb-4" />,
            <nav className="h-16 px-6 flex items-center justify-between shadow-sm sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-black/5" style={{ background: 'var(--bg)', borderColor: 'var(--primary, #000)22' }}>
              <div className="flex items-center gap-2 font-black italic text-xl" style={{ color: 'var(--primary)' }}>
                {theme === 'vet' && <PawPrint className="w-6 h-6" />}
                {theme === 'travel' && <Plane className="w-6 h-6" />}
                {theme === 'food' && <Utensils className="w-6 h-6" />}
                {theme === 'gym' && <Dumbbell className="w-6 h-6" />}
                {theme === 'construction' && <Wrench className="w-6 h-6" />}
                <span>{theme.toUpperCase()}</span>
              </div>
              <div className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--text)' }}>
                <a href="#" className="link-underline">Inicio</a>
                <a href="#" className="link-underline">Servicios</a>
                <a href="#" className="link-underline">Contacto</a>
              </div>
              <Menu className="w-6 h-6 md:hidden" style={{ color: 'var(--text)' }} />
            </nav>
          )}

          {/* Section: Hero */}
          {renderSection(
            'hero',
            <div className="h-[400px] skeleton w-full mb-8" />,
            <div className="relative min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden">
              <img src={currentData.img} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 hero-overlay" />
              <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none text-shadow-sm">
                  {currentData.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                  {currentData.subtitle}
                </p>
                <button className="btn-impact rounded-full" style={{ backgroundColor: 'var(--primary)', color: theme === 'gym' || theme === 'construction' ? '#000' : '#fff' }}>
                  {currentData.cta}
                </button>
              </div>
            </div>
          )}

          {/* Section: Services */}
          {renderSection(
            'services',
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-12">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-48 skeleton rounded-xl" />)}
            </div>,
            <div className="section-padding px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic" style={{ color: 'var(--primary)' }}>Nuestros Servicios</h2>
                  <div className="h-1.5 w-24 mx-auto rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {currentData.services.map((s, i) => (
                    <div key={i} className={`p-8 rounded-2xl shadow-soft transition-all hover:-translate-y-2 group ${theme === 'gym' ? 'gym-card-neon' : 'bg-white'}`} style={{ borderBottom: `4px solid var(--primary)` }}>
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:scale-110 duration-300" style={{ backgroundColor: 'var(--primary)', color: theme === 'gym' || theme === 'construction' ? '#000' : '#fff' }}>
                        {React.cloneElement(s.icon as React.ReactElement, { className: "w-8 h-8" })}
                      </div>
                      <h3 className="text-xl font-black mb-3 uppercase tracking-tight" style={{ color: 'var(--text)' }}>{s.title}</h3>
                      <p className="text-sm leading-relaxed opacity-70" style={{ color: 'var(--text)' }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section: Contact */}
          {renderSection(
            'contact',
            <div className="h-[400px] skeleton w-full mb-8" />,
            <div className="section-padding px-6 bg-black/5" style={{ backgroundColor: theme === 'gym' || theme === 'construction' ? '#111' : '#f8fafc' }}>
              <div className="max-w-5xl mx-auto">
                <div className={`p-8 md:p-12 overflow-hidden relative ${theme === 'gym' ? 'gym-industrial-cut' : 'contact-card-white shadow-luxe'}`}>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="relative z-10">
                      <h2 className="text-4xl font-black mb-6 uppercase leading-none" style={{ color: theme === 'gym' || theme === 'construction' ? 'var(--primary)' : 'var(--text)' }}>
                        ¿LISTO PARA <span className="italic" style={{ color: 'var(--primary)' }}>COMENZAR?</span>
                      </h2>
                      <p className="mb-8 opacity-70 text-lg" style={{ color: theme === 'gym' || theme === 'construction' ? '#fff' : 'var(--text)' }}>
                        Déjanos tus datos y un especialista se pondrá en contacto contigo en menos de 24 horas.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--primary)33', color: 'var(--primary)' }}><Phone className="w-5 h-5" /></div>
                          <span className="font-bold" style={{ color: theme === 'gym' || theme === 'construction' ? '#fff' : 'var(--text)' }}>+52 (55) 1234-5678</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--primary)33', color: 'var(--primary)' }}><Mail className="w-5 h-5" /></div>
                          <span className="font-bold" style={{ color: theme === 'gym' || theme === 'construction' ? '#fff' : 'var(--text)' }}>contacto@{theme}.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <div>
                        <label className="contact-label">Nombre Completo</label>
                        <input type="text" placeholder="Ej. Juan Pérez" className={`w-full p-4 rounded-lg focus:ring-2 outline-none transition-all ${theme === 'gym' ? 'gym-input' : 'contact-input'}`} style={{ color: theme === 'gym' || theme === 'construction' ? '#fff' : '#000' }} />
                      </div>
                      <div>
                        <label className="contact-label">Correo Electrónico</label>
                        <input type="email" placeholder="juan@ejemplo.com" className={`w-full p-4 rounded-lg focus:ring-2 outline-none transition-all ${theme === 'gym' ? 'gym-input' : 'contact-input'}`} style={{ color: theme === 'gym' || theme === 'construction' ? '#fff' : '#000' }} />
                      </div>
                      <button className="w-full py-5 rounded-lg btn-impact" style={{ backgroundColor: 'var(--primary)', color: theme === 'gym' || theme === 'construction' ? '#000' : '#fff' }}>
                        ENVIAR SOLICITUD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section: Footer */}
          {renderSection(
            'footer',
            <div className="h-64 skeleton w-full" />,
            <footer className="footer-dark pt-20 pb-10 px-6">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 font-black italic text-2xl mb-6" style={{ color: 'var(--primary)' }}>
                    {theme === 'vet' && <PawPrint className="w-8 h-8" />}
                    {theme === 'travel' && <Plane className="w-8 h-8" />}
                    {theme === 'food' && <Utensils className="w-8 h-8" />}
                    {theme === 'gym' && <Dumbbell className="w-8 h-8" />}
                    {theme === 'construction' && <Wrench className="w-8 h-8" />}
                    <span>{theme.toUpperCase()}</span>
                  </div>
                  <p className="max-w-sm opacity-60 text-lg leading-relaxed mb-8">
                    Líderes en el sector con más de 15 años de experiencia brindando excelencia y resultados comprobables a nuestros clientes.
                  </p>
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest mb-8 text-white">Enlaces</h4>
                  <ul className="space-y-4 opacity-60 font-medium">
                    <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Servicios</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Proyectos</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest mb-8 text-white">Legal</h4>
                  <ul className="space-y-4 opacity-60 font-medium">
                    <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                  </ul>
                </div>
              </div>
              <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 opacity-40 text-sm">
                <p>© 2026 {theme.toUpperCase()} - Todos los derechos reservados.</p>
                <div className="flex items-center gap-2">
                  <span>Hecho con</span>
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>por Lumina Digital</span>
                </div>
              </div>
            </footer>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
