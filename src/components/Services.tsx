import { motion } from "framer-motion";
import { Heart, Droplets, Crown, Cake, Building2, Camera, User } from "lucide-react";

const services = [
  { icon: Heart, title: "Bodas", desc: "Cobertura completa de tu día más especial con un enfoque cinematográfico y emotivo." },
  { icon: Droplets, title: "Bautizos", desc: "Capturamos la ternura y espiritualidad de cada ceremonia con delicadeza." },
  { icon: Crown, title: "Quinceañeras", desc: "Celebraciones vibrantes documentadas con elegancia y estilo único." },
  { icon: Cake, title: "Cumpleaños", desc: "Cada celebración merece ser recordada con imágenes que cuentan historias." },
  { icon: Camera, title: "Fotos Turísticas", desc: "Captura la esencia de destinos únicos con fotografía turística profesional y paisajística." },
  { icon: User, title: "Servicios Personalizados", desc: "Soluciones fotográficas personalizadas adaptadas a tus necesidades y visión única." },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-secondary lg:overflow-y-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Lo que hacemos</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Nuestros Servicios</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group bg-card p-8 hover:bg-accent transition-all duration-300 hover:-translate-y-1 w-full"
            >
              <s.icon className="w-8 h-8 text-muted-foreground group-hover:text-[#E5E4E2] transition-colors mb-6" strokeWidth={1.2} />
              <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
          {/* Espaciador para centrar la última fila en PC */}
          <div className="hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#portafolio"
            className="inline-block text-sm uppercase tracking-wider border border-[#E5E4E2]/30 text-foreground px-8 py-3 hover:bg-[#E5E4E2] hover:text-black transition-all duration-300"
          >
            Ver Portafolio Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
