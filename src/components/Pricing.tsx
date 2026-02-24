import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface PricingProps {
  onDemoClick: () => void;
}

// Helper function to generate dynamic class names
const cx = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export default function Pricing({ onDemoClick }: PricingProps) {
  const { theme } = useTheme();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getDisplayPrice = (monthlyPrice: number) => {
    const amount = billingCycle === 'monthly' ? monthlyPrice : monthlyPrice * 10;
    return amount.toLocaleString('es-MX');
  };

  const plans = [
    { name: 'Landing Page', monthlyPrice: 350, description: 'Perfecto para validar una idea o producto rápido.', features: ['Diseño de 1 página', 'Optimización SEO básica', 'Formulario de contacto', 'Hosting incluido (1 año)', 'Certificado SSL'], cta: 'Elegir Básico' },
    { name: 'Plan Pro', monthlyPrice: 750, description: 'Nuestra solución más popular para negocios en crecimiento.', features: ['Hasta 5 páginas internas', 'Integración CRM / WhatsApp', 'Copywriting persuasivo', 'Optimización de velocidad', 'Analítica avanzada'], featured: true, cta: 'Empezar Ahora' },
    { name: 'E-commerce / App', monthlyPrice: 2500, description: 'Sistemas robustos para ventas masivas y automatización.', features: ['Tienda online completa', 'Pasarela de pagos', 'Gestión de inventario', 'Panel de administración', 'Soporte prioritario'], cta: 'Contactar Ventas' },
  ];

  const themeConfig = {
    default: {
      section: 'py-24 bg-brand-bg',
      titleContainer: 'text-center mb-16',
      title: 'text-4xl md:text-5xl font-bold mb-6',
      grid: 'grid lg:grid-cols-3 gap-8 items-center',
      card: (featured: boolean) => cx('p-8 rounded-xl border transition-all relative flex flex-col', featured ? 'bg-white/5 border-brand-cyan scale-105 z-10 glow-cyan' : 'bg-white/[0.02] border-white/10 hover:border-white/20'),
      featuredTag: 'absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cyan text-brand-bg text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest',
      planName: 'text-xl font-bold mb-2',
      price: 'text-4xl font-extrabold',
      pricePeriod: 'text-brand-muted text-sm',
      description: 'text-brand-muted text-sm mb-8',
      features: 'space-y-4 mb-8',
      featureItem: 'flex items-center gap-3 text-sm text-brand-text/70',
      featureIcon: <Check className="text-brand-cyan w-4 h-4 flex-shrink-0" />,
      ctaButton: (featured: boolean) => cx('w-full py-4 rounded-lg font-bold transition-all', featured ? 'bg-brand-cyan text-brand-bg hover:scale-[1.02]' : 'bg-white/10 text-white hover:bg-white/20'),
      demoButton: 'w-full text-center py-2 text-brand-muted hover:text-brand-text transition-colors text-sm flex items-center justify-center gap-2',
      disabledDemoButton: 'w-full text-center py-2 text-brand-muted/50 transition-colors text-sm flex items-center justify-center gap-2 cursor-not-allowed',
    },
    brutalist: {
      section: 'pt-12 pb-24 bg-white text-black overflow-hidden',
      titleContainer: 'mb-8',
      title: 'text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4 mt-0',
      subtitle: 'font-mono uppercase tracking-widest text-lg',
      grid: 'grid lg:grid-cols-3 gap-6',
      card: (featured: boolean) => cx('p-8 border-4 border-black rounded-none flex flex-col', featured ? 'bg-black text-white relative' : 'bg-white text-black'),
      featuredTag: 'absolute top-0 right-0 bg-[#00FF00] text-black px-4 py-1 font-black text-xs uppercase',
      planName: (featured: boolean) => cx('text-2xl font-black uppercase mb-4', featured ? 'text-[#00FF00]' : 'text-black'),
      priceContainer: 'border-b-4 border-current pb-4 mb-6',
      price: 'text-5xl font-black',
      pricePeriod: 'font-mono text-sm uppercase',
      description: (featured: boolean) => cx('text-sm font-bold mb-8 uppercase leading-tight', featured ? 'text-white/70' : 'text-black/70'),
      features: 'space-y-4 mb-10 flex-grow',
      featureItem: 'flex items-start gap-3 font-mono text-xs md:text-sm uppercase tracking-tight',
      featureIcon: (featured: boolean) => <span className={featured ? 'text-[#00FF00]' : 'text-black'}>[+]</span>,
      ctaButton: (featured: boolean) => cx('w-full py-4 font-black text-lg uppercase transition-all border-2 border-black', featured ? 'bg-[#00FF00] text-black hover:bg-white' : 'bg-white text-black hover:bg-black hover:text-white'),
      demoButton: 'w-full py-2 font-mono text-xs uppercase transition-all text-black/60 hover:text-black',
      disabledDemoButton: 'w-full py-2 font-mono text-xs uppercase text-black/30 cursor-not-allowed',
    },
    retro: {
        section: 'py-24 bg-[#12002b] overflow-hidden',
        titleContainer: 'text-center mb-20',
        title: 'text-3xl md:text-5xl font-black text-white uppercase italic tracking-wider',
        subtitle: 'text-[#00ffff] font-mono font-bold tracking-[0.2em] uppercase text-sm',
        grid: 'grid lg:grid-cols-3 gap-10',
        card: (featured: boolean) => cx('p-8 rounded-none flex flex-col relative', featured ? 'bg-[#ff00ff] border-4 border-white shadow-[12px_12px_0px_#00ffff] scale-105 z-10' : 'bg-white border-4 border-black shadow-[12px_12px_0px_#000000]'),
        featuredTag: 'absolute -top-5 right-4 bg-[#ffff00] text-black px-4 py-1 font-black text-xs uppercase border-2 border-black rotate-3 z-20',
        planName: (featured: boolean) => cx('w-fit font-bold text-sm mb-6 border-2', featured ? 'bg-white text-[#ff00ff] border-black px-4 py-1' : 'bg-[#4b0082] text-white px-4 py-1 border-black'),
        price: (featured: boolean) => cx('text-5xl font-black', featured ? 'text-white drop-shadow-[2px_2px_0px_#000000]' : 'text-black'),
        pricePeriod: 'font-bold text-sm uppercase',
        description: (featured: boolean) => cx('font-bold text-sm mb-8 leading-snug', featured ? 'text-white' : 'text-black/70'),
        features: (featured: boolean) => cx('space-y-3 mb-10 flex-grow font-bold text-sm', featured ? 'text-white' : 'text-black'),
        featureItem: 'flex items-center gap-2',
        featureIcon: (featured: boolean) => <span className={featured ? 'text-[#ffff00] font-black' : 'text-[#4b0082] font-black'}>{featured ? '[*]' : '>>'}</span>,
        ctaButton: (featured: boolean) => cx('w-full py-4 font-black uppercase transition-all shadow-[4px_4px_0px_#000000] active:shadow-none active:translate-x-1 active:translate-y-1', featured ? 'bg-[#ffff00] border-4 border-black text-black hover:bg-white' : 'bg-white border-4 border-black text-black hover:bg-black hover:text-white'),
        demoButton: 'w-full py-2 text-xs font-mono uppercase text-black/50 hover:text-black',
        disabledDemoButton: 'w-full py-2 text-xs font-mono uppercase text-black/30 cursor-not-allowed',
    },
  };
  
  const styles = themeConfig[theme] || themeConfig.default;

  const renderTitle = () => {
    if (theme === 'brutalist') {
      return (
        <>
          <h2 className={styles.title}>PLANES</h2>
          <p className={styles.subtitle}>ESTRATEGIAS DE ALTO IMPACTO PARA CUALQUIER ESCALA.</p>
        </>
      );
    }
    if (theme === 'retro') {
      return (
        <>
          <div className="inline-block bg-[#4b0082] border-4 border-[#00ffff] shadow-[8px_8px_0px_#00ffff] px-8 py-4 mb-6">
            <h2 className={styles.title}>PLANES DE CRECIMIENTO</h2>
          </div>
          <p className={styles.subtitle}>SELECCIONA_TU_NIVEL_DE_JUEGO</p>
        </>
      );
    }
    // Default theme
    return (
      <>
        <h2 className={styles.title}>Planes diseñados para tu crecimiento</h2>
        <div className="flex items-center justify-center gap-4">
          <span className={cx('text-sm', billingCycle === 'monthly' ? 'text-brand-text' : 'text-brand-muted')}>Mensual</span>
          <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} className="w-14 h-7 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20">
            <motion.div animate={{ x: billingCycle === 'monthly' ? 0 : 28 }} className="w-5 h-5 bg-brand-cyan rounded-full glow-cyan" />
          </button>
          <span className={cx('text-sm', billingCycle === 'yearly' ? 'text-brand-text' : 'text-brand-muted')}>Anual <span className="text-brand-cyan text-[10px] font-bold ml-1">2 meses gratis</span></span>
        </div>
      </>
    );
  };
  
  const getDynamicClass = (styleFn: any, featured: boolean) => (typeof styleFn === 'function' ? styleFn(featured) : styleFn);

  return (
    <section id="precios" className={styles.section}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.titleContainer}>{renderTitle()}</div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={styles.card(plan.featured || false)}
            >
              <div className="flex-grow">
                {plan.featured && <div className={styles.featuredTag}>Recomendado</div>}
                
                <div className={getDynamicClass(styles.planName, plan.featured || false)}>{theme === 'retro' ? (plan.featured ? 'Web Profesional' : plan.name) : plan.name}</div>
                
                <div className={getDynamicClass(styles.priceContainer, plan.featured || false)}>
                  <div className="flex items-baseline gap-1">
                    <span className={getDynamicClass(styles.price, plan.featured || false)}>${getDisplayPrice(plan.monthlyPrice)}</span>
                    <span className={getDynamicClass(styles.pricePeriod, plan.featured || false)}>/ {billingCycle === 'monthly' ? (theme === 'brutalist' || theme === 'retro' ? 'MES' : 'mes') : 'año'}</span>
                  </div>
                </div>

                <p className={getDynamicClass(styles.description, plan.featured || false)}>{plan.description}</p>
                
                <ul className={getDynamicClass(styles.features, plan.featured || false)}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      {typeof styles.featureIcon === 'function' ? styles.featureIcon(plan.featured || false) : styles.featureIcon}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <button className={styles.ctaButton(plan.featured || false)}>{plan.cta}</button>
                
                {plan.name === 'Landing Page' ? (
                  <button onClick={onDemoClick} className={styles.demoButton}>
                    <Eye className="w-4 h-4" /> Ver Demo del Constructor
                  </button>
                ) : (
                  <button disabled className={styles.disabledDemoButton}>
                    <Eye className="w-4 h-4" /> Ver Demo (Próximamente)
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
