import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  name: string;
  email: string;
  eventType: string;
  date: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", eventType: "", date: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Requerido";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido";
    if (!form.eventType.trim()) e.eventType = "Requerido";
    if (!form.message.trim()) e.message = "Requerido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    await supabase.from("contact_submissions").insert({
      name: form.name,
      email: form.email,
      event_type: form.eventType,
      date: form.date || null,
      message: form.message,
    });
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-card border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors";

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Contacto</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">Hablemos de tu Proyecto</h2>

          <div className="space-y-6">
            <a href="tel:+5358056244" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
              <Phone size={20} strokeWidth={1.2} />
              <span className="font-light">+53 5 8056244</span>
            </a>
            <a
              href="https://wa.me/5358056244?text=Hola%2C%20me%20interesa%20cotizar%20un%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle size={20} strokeWidth={1.2} />
              <span className="font-light">WhatsApp Business</span>
            </a>
            <a href="mailto:contacto@reinanchile.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={20} strokeWidth={1.2} />
              <span className="font-light">contacto@reinanchile.com</span>
            </a>
            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPin size={20} strokeWidth={1.2} />
              <span className="font-light">La Habana, Cuba</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5358056244?text=Hola%2C%20me%20interesa%20cotizar%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 bg-foreground text-primary-foreground px-8 py-3 text-sm uppercase tracking-wider hover:bg-muted-foreground transition-all duration-300"
          >
            <MessageCircle size={18} />
            Escríbenos por WhatsApp
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="bg-card p-12 text-center">
              <h3 className="font-display text-2xl text-foreground mb-4">¡Gracias por tu consulta!</h3>
              <p className="text-muted-foreground font-light">Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  aria-label="Nombre completo"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  aria-label="Email"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <select
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  className={inputClass}
                  aria-label="Tipo de evento"
                >
                  <option value="">Tipo de evento</option>
                  <option value="boda">Boda</option>
                  <option value="bautizo">Bautizo</option>
                  <option value="quinceañera">Quinceañera</option>
                  <option value="cumpleaños">Cumpleaños</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="sesion">Sesión Personal</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.eventType && <p className="text-destructive text-xs mt-1">{errors.eventType}</p>}
              </div>
              <div>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={inputClass}
                  aria-label="Fecha del evento"
                />
              </div>
              <div>
                <textarea
                  placeholder="Cuéntanos sobre tu evento..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  aria-label="Mensaje"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-primary-foreground py-3 text-sm uppercase tracking-wider hover:bg-muted-foreground transition-all duration-300"
              >
                Enviar Consulta
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
