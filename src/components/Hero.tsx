import { motion } from 'motion/react';
import { ArrowRight, Play, ArrowRightIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  if (theme === 'brutalist') {
    return (
      <section className="relative min-h-screen flex flex-col justify-center bg-brand-bg overflow-hidden pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative border-4 border-white p-5 md:p-12 lg:p-16 flex flex-col justify-center min-h-[50vh] md:min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full max-w-full lg:max-w-[65%]"
            >
              <div className="inline-block bg-brand-cyan text-brand-bg px-3 py-1 text-[10px] font-black uppercase mb-4">
                AGENCIA #1 EN LIMA & CUSCO
              </div>
              
              <h1 className="text-[1.75rem] md:text-6xl lg:text-[5.5rem] font-black leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 uppercase tracking-tighter w-full">
                <span className="block text-white">NO DISEÑAMOS</span>
                <span className="block text-white">WEBS.</span>
                <span className="block text-brand-cyan mt-1 md:mt-2 text-[1.5rem] md:text-6xl lg:text-[5.5rem]">DISEÑAMOS SISTEMAS</span>
                <span className="block text-brand-cyan">QUE VENDEN.</span>
              </h1>
            </motion.div>

            {/* Floating White Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative mt-4 md:absolute bottom-0 right-0 md:-bottom-4 md:-right-4 z-20 w-full max-w-full md:max-w-[420px] bg-white text-brand-bg p-5 md:p-8 border-4 border-[#00FF00] shadow-[4px_4px_0px_#00FF00] md:shadow-[8px_8px_0px_#00FF00]"
            >
              <p className="text-[11px] md:text-lg font-bold leading-tight mb-4 md:mb-6 uppercase">
                ELEVAMOS TU MARCA CON ESTRATEGIAS DIGITALES DE ALTO IMPACTO. DISEÑO PERUANO DE CLASE MUNDIAL, OPTIMIZADO PARA CONVERSIÓN.
              </p>

              <div className="flex flex-col gap-2 md:gap-3">
                <button className="px-5 py-3 md:px-8 md:py-4 bg-brand-bg text-white border-2 border-white font-black text-xs md:text-lg uppercase flex items-center justify-center gap-2 hover:bg-white hover:text-brand-bg transition-all group">
                  Quiero Cotizar
                  <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-5 py-3 md:px-8 md:py-4 bg-white text-brand-bg border-2 border-brand-bg font-black text-xs md:text-lg uppercase hover:bg-brand-bg hover:text-white transition-all">
                  Ver Portafolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (theme === 'retro') {
    return (
      <section className="relative min-h-screen pt-20 pb-12 flex flex-col justify-center bg-brand-bg overflow-hidden">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        {/* Watermark */}
        <div className="absolute -top-10 -left-10 text-[10rem] md:text-[25rem] font-black text-yellow-500/10 select-none pointer-events-none italic -rotate-12 z-0">
          199X
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#12002b] border-4 border-white p-5 md:p-12 shadow-[6px_6px_0px_#ff00ff] md:shadow-[10px_10px_0px_#ff00ff] relative w-full max-w-4xl mx-auto mb-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffff00] text-black border-2 border-white px-3 py-1 font-bold -rotate-2 whitespace-nowrap z-20 text-[9px] md:text-base">
              AGENCIA #1 EN LIMA & CUSCO // READY_PLAYER_1
            </div>

            <div className="text-center">
              <h1 className="text-[1.75rem] md:text-7xl font-black leading-none mb-6 md:mb-8 italic">
                <span className="block text-white drop-shadow-[2px_2px_0px_#00ffff] md:drop-shadow-[4px_4px_0px_#00ffff]">NO DISEÑAMOS WEBS.</span>
                <span className="inline-block bg-brand-blue text-brand-bg px-3 py-1 md:px-4 md:py-2 mt-2 md:mt-3 shadow-[4px_4px_0px_#ff00ff] md:shadow-[6px_6px_0px_#ff00ff] w-fit max-w-full text-[1.5rem] md:text-6xl">DISEÑAMOS SISTEMAS</span>
                <span className="block text-white mt-2 md:mt-3">QUE VENDEN.</span>
              </h1>

              <p className="max-w-xl mx-auto text-[11px] md:text-lg text-brand-muted font-bold leading-snug uppercase">
                Elevamos tu marca con estrategias digitales de alto impacto. Diseño peruano de clase mundial, optimizado para conversión.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 w-full px-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-brand-cyan text-white font-black text-sm md:text-lg uppercase border-4 border-white shadow-[4px_4px_0px_#ffffff] md:shadow-[6px_6px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Quiero Cotizar {">>"}
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-brand-bg font-black text-sm md:text-lg uppercase border-4 border-brand-bg hover:bg-brand-bg hover:text-white transition-all">
              Ver Portafolio
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Default Cyberpunk Theme
  return (
    <section className="relative min-h-screen h-[100dvh] pt-32 pb-12 flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-cyan/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6">
            Agencia de Alta Conversión
          </span>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
            No diseñamos webs.{" "}
            <span className="text-gradient block md:inline">Diseñamos sistemas</span>{" "}
            que venden.
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-xl text-brand-muted mb-10 leading-relaxed px-4">
            Fusionamos ingeniería de conversión con diseño de vanguardia para transformar tu presencia digital en una máquina de ingresos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
            <button className="w-full sm:w-auto group px-8 py-4 bg-brand-cyan text-brand-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all glow-cyan-hover">
              Quiero Cotizar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-brand-text/20 hover:border-brand-text/40 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-brand-text" />
              Ver Portafolio
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 relative z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted/50">Scroll para explorar</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
