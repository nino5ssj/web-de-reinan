import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
          <motion.a 
            href="#inicio" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-xl md:text-2xl font-semibold tracking-wide text-foreground"
          >
            Reinán Chile
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="relative text-xs font-medium tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E5E4E2] transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#contacto"
              className="hidden lg:inline-block text-xs uppercase tracking-[0.2em] border border-[#E5E4E2]/30 text-foreground px-8 py-3 hover:bg-[#E5E4E2] hover:text-black transition-all duration-500 rounded-sm"
            >
              Reservar Sesión
            </a>
          </motion.div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2 relative z-[10000]"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu - separate from header */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black lg:hidden"
          style={{ zIndex: 9998 }}
          onClick={() => setMobileOpen(false)}
        >
          <div 
            className="fixed inset-0 bg-black flex items-center justify-center"
            style={{ zIndex: 9999 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
            
            {/* Navigation links */}
            <div className="flex flex-col items-center justify-center gap-8 px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl text-white hover:text-gray-300 transition-colors text-center"
                >
                  {link.label}
                </a>
              ))}
              
              {/* CTA button */}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-8 text-sm uppercase tracking-wider border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                Reservar Sesión
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
