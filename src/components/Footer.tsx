import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-10"
          >
            ¿VAS A<br />
            <span className="text-gradient">QUEDARTE ATRÁS?</span>
          </motion.h2>
          
          <button className="relative group px-12 py-5 bg-brand-cyan text-brand-bg font-black rounded-xl text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,229,255,0.2)] hover:shadow-[0_0_60px_rgba(0,229,255,0.4)]">
            Reserva mi lugar
            <div className="absolute inset-0 rounded-xl bg-brand-cyan blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
                <span className="text-brand-bg font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold tracking-tighter">LUMINA<span className="text-brand-cyan">DIGITAL</span></span>
            </div>
            <p className="text-brand-muted max-w-sm mb-8">
              Transformamos negocios tradicionales en líderes digitales mediante tecnología de punta y diseño enfocado en resultados.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center hover:bg-brand-text/5 transition-colors">
                  <Icon className="w-5 h-5 text-brand-muted" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Explorar</h4>
            <ul className="space-y-4 text-brand-muted text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Proceso</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-brand-muted text-sm">
              <li className="flex items-center gap-2">
                hola@lumina.digital
                <ArrowUpRight className="w-3 h-3" />
              </li>
              <li>+51 987 654 321</li>
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-muted/50">
          <p>© 2024 Lumina Digital Agency. Hecho con pasión.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-text transition-colors">Términos</a>
            <a href="#" className="hover:text-brand-text transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
