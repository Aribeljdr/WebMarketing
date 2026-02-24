import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

export default function Calculator() {
  const [pages, setPages] = useState(1);
  const [ecommerce, setEcommerce] = useState(false);
  const [seo, setSeo] = useState(false);
  const [branding, setBranding] = useState(false);

  const totalPrice = useMemo(() => {
    let base = 500;
    base += (pages - 1) * 150;
    if (ecommerce) base += 1000;
    if (seo) base += 400;
    if (branding) base += 600;
    return base;
  }, [pages, ecommerce, seo, branding]);

  return (
    <section className="py-24 bg-brand-bg/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 md:p-12 overflow-hidden relative [.theme-retro_&]:retro-box [.theme-retro_&]:bg-white [.theme-retro_&]:text-brand-bg">
          {/* Decorative background */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-cyan/5 blur-[80px] rounded-full [.theme-retro_&]:hidden" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-8 [.theme-retro_&]:italic [.theme-retro_&]:underline">Calculadora de Inversión</h2>
              
              <div className="space-y-8">
                {/* Pages Slider */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-medium text-brand-muted uppercase tracking-widest [.theme-retro_&]:text-brand-bg">Número de Páginas</label>
                    <span className="text-brand-cyan font-bold [.theme-retro_&]:bg-brand-yellow [.theme-retro_&]:px-2">{pages}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={pages}
                    onChange={(e) => setPages(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan [.theme-retro_&]:bg-brand-bg/20"
                  />
                </div>

                {/* Toggles */}
                <div className="space-y-4">
                  {[
                    { id: 'ecommerce', label: 'Tienda / Ecommerce', state: ecommerce, setter: setEcommerce },
                    { id: 'seo', label: 'SEO Avanzado', state: seo, setter: setSeo },
                    { id: 'branding', label: 'Branding (Logo + Manual)', state: branding, setter: setBranding },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 [.theme-retro_&]:bg-brand-bg/5 [.theme-retro_&]:border-brand-bg/10">
                      <span className="text-sm font-medium">{item.label}</span>
                      <button
                        onClick={() => item.setter(!item.state)}
                        className={`w-12 h-6 rounded-full relative p-1 transition-colors ${item.state ? 'bg-brand-cyan' : 'bg-white/10'} [.theme-retro_&]:${item.state ? 'bg-brand-cyan' : 'bg-brand-bg/20'}`}
                      >
                        <motion.div
                          animate={{ x: item.state ? 24 : 0 }}
                          className={`w-4 h-4 rounded-full ${item.state ? 'bg-brand-bg' : 'bg-white/40'} [.theme-retro_&]:${item.state ? 'bg-brand-bg' : 'bg-brand-bg/40'}`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <span className="text-xs font-bold text-brand-muted uppercase tracking-[0.3em] mb-2 block [.theme-retro_&]:text-brand-bg/60">Inversión Estimada</span>
              <div className="flex items-baseline justify-center md:justify-end gap-2 mb-6">
                <span className="text-6xl md:text-8xl font-black text-gradient [.theme-retro_&]:text-brand-cyan">${totalPrice.toLocaleString()}</span>
                <span className="text-brand-muted font-bold [.theme-retro_&]:text-brand-bg/40">USD</span>
              </div>
              <p className="text-brand-muted text-sm mb-8 max-w-[280px] ml-auto [.theme-retro_&]:text-brand-bg/60">
                *Este es un presupuesto base. El precio final puede variar según requerimientos específicos.
              </p>
              <button className="w-full md:w-auto px-10 py-4 bg-brand-text text-brand-bg font-bold rounded-xl hover:scale-105 transition-all [.theme-retro_&]:retro-button [.theme-retro_&]:bg-brand-yellow">
                Reservar Consultoría Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
