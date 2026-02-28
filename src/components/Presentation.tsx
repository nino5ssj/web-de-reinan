import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        {/* Image - First on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 max-w-md mx-auto lg:max-w-none w-full"
        >
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/anillos.jpg"
              alt="Anillos de boda"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="bg-card p-6 sm:p-8 lg:p-12 lg:-mr-16 relative z-10 rounded-lg shadow-lg">
            <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Nuestra Esencia</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 sm:mb-6 leading-tight lg:leading-snug">
              Fotografía y Cine para Cada Historia
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Creamos recuerdos visuales con estética cinematográfica, cuidando cada detalle para que revivas tu evento una y otra vez.
            </p>
            <a
              href="#sobre-mi"
              className="inline-block text-xs sm:text-sm uppercase tracking-wider border border-foreground/30 text-foreground px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
            >
              Conoce Más
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentation;
