import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "The 7+ HP makhana from Fox N Grain is genuinely the cleanest, crispest batch we've sourced for our retail line.",
    name: "Ananya Sharma",
    role: "Founder, Wellness Pantry",
  },
  {
    quote:
      "Consistent size, beautiful colour and excellent crunch — exactly what our export buyers expect. A reliable partner.",
    name: "Rohit Mehta",
    role: "Export Distributor",
  },
  {
    quote:
      "We switched our gifting hampers to Fox N Grain and the feedback has been unanimous. Premium in every sense.",
    name: "Priya Iyer",
    role: "Luxury Hampers Co.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Testimonials</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">
            Words from those who <span className="italic text-gradient-gold">know quality.</span>
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-8 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all hover:shadow-soft"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/40" />
              <blockquote className="text-foreground leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-lg text-primary">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
