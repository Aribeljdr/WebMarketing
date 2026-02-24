import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Comparison() {
  const { theme } = useTheme();

  if (theme === 'brutalist') {
    return (
      <section id="servicios" className="py-24 bg-black text-white overflow-hidden px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Texts */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-white">
              EL PROBLEMA <span className="text-white/50">VS.</span>
              <span className="text-[#00FF00] block mt-2">NUESTRA SOLUCIÓN</span>
            </h2>
            <div className="mt-8 border-l-4 border-[#00FF00] pl-6 text-white/80 text-lg uppercase tracking-wider max-w-md">
              <p>
                DEJA DE PERDER CLIENTES CON UNA WEB GENÉRICA. LA MAYORÍA DE LAS AGENCIAS TE VENDEN "BONITO", NOSOTROS TE VENDEMOS "RENTABLE".
              </p>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="flex flex-col gap-6 w-full max-w-lg lg:ml-auto">
            {/* Traditional Card */}
            <div className="border-4 border-white p-6 md:p-8 rounded-none bg-black">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0">
                  <X className="text-black w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase">Agencias Tradicionales</h3>
              </div>
              <ul className="space-y-2 font-mono uppercase text-xs md:text-sm tracking-widest">
                {[
                  'Diseños genéricos sin estrategia',
                  'Tiempos de entrega eternos',
                  'Cero enfoque en conversión',
                  'Sin mantenimiento técnico',
                  'Costos ocultos constantes'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-white/50">/</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lumina Card */}
            <div className="border-4 border-[#00FF00] p-6 md:p-8 rounded-none bg-black shadow-[8px_8px_0px_#00FF00]">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 bg-[#00FF00] flex items-center justify-center shrink-0">
                  <Check className="text-black w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#00FF00] uppercase">Lumina Digital</h3>
              </div>
              <ul className="space-y-2 uppercase text-xs md:text-sm font-bold text-white tracking-widest">
                {[
                  'Sistemas de venta 100% a medida',
                  'Lanzamientos en tiempo récord',
                  'Optimización de CRO avanzada',
                  'Soporte técnico 24/7 incluido',
                  'Transparencia total en precios'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-[#00FF00] w-5 h-5" />
                    <span className="underline underline-offset-4">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (theme === 'retro') {
    return (
      <section id="servicios" className="py-24 bg-[#12002b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Column 1: Title Box */}
            <div className="bg-[#ff00ff] border-4 border-white shadow-[8px_8px_0px_white] p-8 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6 italic">
                <span className="text-white">EL PROBLEMA VS.</span><br />
                <span className="text-[#ffff00]">NUESTRA SOLUCIÓN</span>
              </h2>
              <p className="text-white font-bold text-lg leading-snug">
                Deja de perder clientes con una web genérica. La mayoría de las agencias te venden "bonito", nosotros te vendemos "rentable".
              </p>
            </div>

            {/* Column 2: Traditional Card */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#ff0000] p-8">
              <div className="w-12 h-12 bg-[#ff0000] border-2 border-black flex items-center justify-center mb-6">
                <X className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-8 text-black underline decoration-4">Agencias Tradicionales</h3>
              <ul className="space-y-4 text-black italic font-medium">
                {[
                  'Diseños genéricos sin estrategia',
                  'Tiempos de entrega eternos',
                  'Cero enfoque en conversión',
                  'Sin mantenimiento técnico',
                  'Costos ocultos constantes'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-black">[-]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Lumina Card */}
            <div className="bg-[#00ffff] border-4 border-black shadow-[8px_8px_0px_#8a2be2] p-8">
              <div className="w-12 h-12 bg-[#ff00ff] border-2 border-black flex items-center justify-center mb-6">
                <Check className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-8 text-black underline decoration-4">Lumina Digital</h3>
              <ul className="space-y-4 text-black font-black">
                {[
                  'Sistemas de venta 100% a medida',
                  'Lanzamientos en tiempo récord',
                  'Optimización de CRO avanzada',
                  'Soporte técnico 24/7 incluido',
                  'Transparencia total en precios'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#ff00ff]">[+]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default Cyberpunk Theme
  return (
    <section id="servicios" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            El Problema vs.<br />
            <span className="text-brand-cyan">Nuestra Solución</span>
          </h2>
          <p className="text-brand-muted max-w-xl">
            Deja de perder clientes con una web genérica. La mayoría de las agencias te venden "bonito", nosotros te vendemos "rentable".
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl bg-red-500/5 border border-red-500/10 group transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-6">
              <X className="text-red-500 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Agencias Tradicionales</h3>
            <ul className="space-y-4">
              {[
                'Diseños genéricos sin estrategia',
                'Tiempos de entrega eternos',
                'Cero enfoque en conversión',
                'Sin mantenimiento técnico',
                'Costos ocultos constantes'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 group transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="px-3 py-1 bg-brand-cyan text-brand-bg text-[10px] font-bold rounded-full uppercase tracking-tighter">
                El Estándar Lumina
              </div>
            </div>
            
            <div className="w-12 h-12 rounded-lg bg-brand-cyan/20 flex items-center justify-center mb-6 glow-cyan">
              <Check className="text-brand-cyan w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Lumina Digital</h3>
            <ul className="space-y-4">
              {[
                'Sistemas de venta 100% a medida',
                'Lanzamientos en tiempo récord',
                'Optimización de CRO avanzada',
                'Soporte técnico 24/7 incluido',
                'Transparencia total en precios'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-text/80">
                  <Check className="text-brand-cyan w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
