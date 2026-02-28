import { Instagram, Globe, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              </div>
              <div>
                <a href="#inicio" className="font-display text-2xl text-foreground">Reinán Chile</a>
                <p className="text-muted-foreground text-sm font-light mt-3 leading-relaxed">
                  Fotografía y filmmaking profesional para todo tipo de eventos en Cuba.
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground text-sm uppercase tracking-wider mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {["Inicio", "Portafolio", "Servicios", "Sobre mí", "Contacto"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/ /g, "-").replace("í", "i")}`}
                    className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground text-sm uppercase tracking-wider mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/reinan.chile.97" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1A1A1A] transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.2} />
              </a>
            </div>
          </div>
        </div>

        {/* Generado Para ti - Full Width y Elegante */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-2xl border border-[#39FF88]/20 bg-card/50 backdrop-blur-md transition-all duration-500 hover:border-[#39FF88]/40 hover:shadow-[0_0_30px_rgba(57,255,136,0.05)]"
        >
          <a 
            href="https://generadoparati.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative flex flex-col items-center justify-between gap-8 p-10 text-center md:flex-row md:text-left"
            aria-label="Generado Para ti"
          >
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-full bg-[#39FF88]/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                <img 
                  src="/images/logogpt.jpg" 
                  alt="Logo de Generado Para ti" 
                  className="relative h-24 w-24 rounded-2xl object-contain shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              
              <div className="space-y-2">
                <p className="text-xs font-light uppercase tracking-[0.3em] text-[#39FF88]/80">Estudio de Diseño & Desarrollo</p>
                <h3 className="font-display text-3xl font-bold tracking-tight text-foreground">
                  Desarrollado por <span style={{ color: '#39FF88' }}>Generado Para ti</span>
                </h3>
                <p className="max-w-md text-base font-light leading-relaxed text-muted-foreground">
                  Transformamos visiones en realidades digitales de alto impacto. Especialistas en potenciar marcas personales y negocios creativos.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:items-end">
              <div className="flex items-center gap-3 rounded-full bg-[#39FF88]/5 px-8 py-4 border border-[#39FF88]/20 transition-all duration-500 group-hover:bg-[#39FF88]/20 group-hover:border-[#39FF88]/40">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#39FF88]">Impulsa tu Marca</span>
                <ExternalLink size={18} className="text-[#39FF88] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-xs font-light text-muted-foreground/60">Únete a nuestra red de clientes exclusivos</p>
            </div>

            {/* Efecto de luz ambiental */}
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#39FF88]/5 blur-[100px] transition-opacity group-hover:opacity-100" />
            <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px] transition-opacity group-hover:opacity-100" />
          </a>
        </motion.div>

        <div className="border-t border-border mt-16 pt-8 text-center">
          <p className="text-muted-foreground text-xs font-light">
            © {year} Reinán Chile. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
