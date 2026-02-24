import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Estrategia & Discovery',
    description: 'Analizamos tu mercado, competencia y objetivos para trazar el camino al éxito.',
    icon: Search,
  },
  {
    title: 'Diseño U/X & U/I',
    description: 'Creamos interfaces intuitivas que guían al usuario hacia la conversión final.',
    icon: PenTool,
  },
  {
    title: 'Desarrollo a Medida',
    description: 'Código limpio, rápido y escalable utilizando las últimas tecnologías del mercado.',
    icon: Code,
  },
  {
    title: 'Lanzamiento & Crecimiento',
    description: 'Desplegamos tu proyecto y monitoreamos resultados para optimización continua.',
    icon: Rocket,
  },
];

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="proceso" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 [.theme-retro_&]:italic [.theme-retro_&]:text-brand-yellow">Nuestra Metodología</h2>
          <p className="text-brand-muted [.theme-retro_&]:text-brand-text [.theme-retro_&]:font-bold">Un proceso refinado para resultados predecibles.</p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-white/10" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-brand-cyan glow-cyan"
          />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex items-center gap-8 md:gap-20 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 text-right ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm md:text-base">{step.description}</p>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-bg border-2 border-brand-cyan flex items-center justify-center glow-cyan">
                    <step.icon className="text-brand-cyan w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
