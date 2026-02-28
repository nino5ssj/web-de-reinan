import { motion } from "framer-motion";

const FeaturedEvents = () => {
  return (
    <section id="eventos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group overflow-hidden"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
            alt="Evento elegante con iluminación cinematográfica"
            className="w-full h-[400px] md:h-[500px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
        </motion.div>

        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-card p-8 md:p-12 relative z-10 px-4 lg:px-8 lg:mx-8">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Eventos Destacados</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-snug">
              Cada Evento es Único
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              No nos limitamos a un solo tipo de celebración. Nos adaptamos a cada evento, capturando la esencia y energía de cada momento con un enfoque artístico y profesional que hace justicia a tu historia.
            </p>
            <a
              href="#contacto"
              className="inline-block text-sm uppercase tracking-wider border border-[#E5E4E2]/30 text-foreground px-8 py-3 hover:bg-[#E5E4E2] hover:text-black transition-all duration-300"
            >
              Solicitar Cotización
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
