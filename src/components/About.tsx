import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
              alt="Fotógrafo profesional en acción"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#E5E4E2]/10 -z-10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-[#E5E4E2] text-sm uppercase tracking-[0.3em] mb-4 font-bold">Sobre el Artista</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            Capturando la Esencia Detrás de Cada Lente
          </h2>
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
            <p>
              Con más de una década de experiencia en el mundo visual, mi enfoque va más allá de simplemente presionar un botón. Busco la narrativa invisible, el gesto espontáneo y la luz que transforma un momento ordinario en algo eterno.
            </p>
            <p>
              Mi trabajo en Cuba y el extranjero me ha permitido perfeccionar un estilo que combina la técnica cinematográfica con la sensibilidad documental, asegurando que cada historia se cuente con la profundidad que merece.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-3xl font-display text-foreground font-bold">10+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Años Exp.</p>
            </div>
            <div className="h-12 w-[1px] bg-border" />
            <div>
              <p className="text-3xl font-display text-foreground font-bold">50+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Eventos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
