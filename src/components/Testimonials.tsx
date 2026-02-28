import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina & Andrés",
    event: "Boda",
    text: "Reinán capturó cada momento de nuestra boda con una sensibilidad increíble. Las fotos parecen sacadas de una película.",
    stars: 5,
  },
  {
    name: "Familia Morales",
    event: "Bautizo",
    text: "Profesionalismo y calidez humana. Nos entregó recuerdos que atesoraremos por siempre. Totalmente recomendado.",
    stars: 5,
  },
  {
    name: "Valentina Rojas",
    event: "Quinceañera",
    text: "Mi fiesta de quince quedó documentada de forma espectacular. Cada foto transmite la alegría de ese día.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-card lg:overflow-y-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Testimonios</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">Lo que dicen nuestros clientes</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="bg-secondary p-8 text-center rounded-sm hover:shadow-xl transition-shadow duration-500 border border-transparent hover:border-[#39FF88]/10"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="text-[#E5E4E2] fill-[#E5E4E2]" />
                ))}
              </div>
              <p className="text-muted-foreground font-light text-base leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="space-y-1">
                <p className="text-foreground font-display text-lg font-semibold tracking-tight">{t.name}</p>
                <p className="text-[#E5E4E2] text-xs uppercase tracking-[0.2em] font-bold">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
