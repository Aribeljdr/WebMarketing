import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Perú',
    category: 'Plataforma Web',
    image: 'https://picsum.photos/seed/fintech/800/600',
    size: 'large'
  },
  {
    title: 'Studio Z',
    category: 'Branding & Web',
    image: 'https://picsum.photos/seed/studio/800/600',
    size: 'small'
  },
  {
    title: 'Moda Ultra',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/fashion/800/600',
    size: 'small'
  },
  {
    title: 'Cyber Security',
    category: 'SaaS Dashboard',
    image: 'https://picsum.photos/seed/cyber/800/600',
    size: 'medium'
  }
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trabajos Recientes</h2>
            <p className="text-brand-muted">Proyectos que están redefiniendo sus industrias.</p>
          </div>
          <button className="text-brand-cyan font-bold flex items-center gap-2 group">
            Ver todo el portafolio
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-xl overflow-hidden bg-white/5 aspect-[4/3] ${
                project.size === 'large' ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-brand-text">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
