import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
    alt: "Fotografía de boda cinematográfica",
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80",
    alt: "Ceremonia de boda elegante",
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80",
    alt: "Celebración y evento nocturno",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-4xl mb-4 sm:mb-6 px-2 drop-shadow-lg"
        >
          {"Capturamos Momentos que se Vuelven Eternos".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + (wordIndex * 5 + charIndex) * 0.03,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              {"\u00A0"}
            </span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-base sm:text-lg md:text-xl font-light max-w-2xl mb-6 sm:mb-8 px-4"
        >
          Fotografía y filmmaking profesional para todo tipo de eventos en Cuba.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4"
        >
          <a
            href="#portafolio"
            className="px-6 sm:px-8 py-2.5 sm:py-3 border border-white/50 text-white text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-500 min-w-[120px] backdrop-blur-sm"
          >
            Ver Portafolio
          </a>
          <a
            href="#contacto"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black text-xs sm:text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-500 min-w-[120px] shadow-xl"
          >
            Cotizar Evento
          </a>
        </motion.div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-foreground/60 hover:text-foreground transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-foreground/60 hover:text-foreground transition-colors"
        aria-label="Siguiente slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-foreground w-8" : "bg-foreground/40"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
