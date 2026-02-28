import { motion } from "framer-motion";

const portfolioItems = [
  { src: "/images/boda-vina-del-mar.jpg", label: "Boda", aspectRatio: "aspect-[3/4]" },
  { src: "/images/film-still.jpg", label: "Film Still", aspectRatio: "aspect-[3/2]" },
  { src: "/images/evento-nocturno.jpg", label: "Evento Nocturno", aspectRatio: "aspect-square" },
  { src: "/images/retrato-cinematografico.jpg", label: "Retrato Cinematográfico", aspectRatio: "aspect-[3/4]" },
  { src: "/images/ninos-esperanza.jpg", label: "Los niños son la esperanza del mundo", aspectRatio: "aspect-[9/16]" },
  { src: "/images/abeja-reina.jpg", label: "La abeja reina", aspectRatio: "aspect-[3/4]" },
  { src: "/images/la-habana.jpg", label: "La Habana", aspectRatio: "aspect-[3/2]" },
  { src: "/images/intimidad.jpg", label: "Intimidad", aspectRatio: "aspect-square" },
  { src: "/images/coche-rojo.jpg", label: "Coche Rojo", aspectRatio: "aspect-[3/2]" },
  { src: "/images/prometidos.jpg", label: "Prometidos", aspectRatio: "aspect-[3/4]" },
  { src: "/images/retrato.jpg", label: "Retrato", aspectRatio: "aspect-[3/2]" },
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="section-padding bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground font-semibold uppercase tracking-tight">Nuestro Trabajo</h2>
        </motion.div>

        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
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
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "circOut" } }
              }}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer rounded-sm"
            >
              <div className={item.aspectRatio}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 backdrop-blur-[2px]">
                <div className="text-center overflow-hidden">
                  <motion.span 
                    className="block text-[#E5E4E2] font-display text-xl tracking-wider mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  >
                    {item.label}
                  </motion.span>
                  <motion.div 
                    className="h-[1px] w-0 group-hover:w-full bg-[#E5E4E2] mx-auto transition-all duration-500 delay-100"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-block text-sm uppercase tracking-wider border border-[#E5E4E2]/30 text-foreground px-8 py-3 hover:bg-[#E5E4E2] hover:text-black transition-all duration-300"
          >
            Explorar Galería
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
