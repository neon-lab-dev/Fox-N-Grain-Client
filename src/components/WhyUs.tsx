import { motion } from "framer-motion";
import { Hand, Award, Globe2, Leaf, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Hand, title: "Hand Picked Selection", desc: "Every single piece is carefully selected by trained hands." },
  { icon: Award, title: "Superior Quality", desc: "Consistent size, color and crunch in every batch." },
  { icon: Globe2, title: "Export Standards", desc: "Premium grading process aligned with global markets." },
  { icon: Leaf, title: "Natural Nutrition", desc: "Wholesome, light and naturally healthy for daily snacking." },
  { icon: Sparkles, title: "Hygienic Processing", desc: "Clean facilities and safe, sealed packaging." },
  { icon: ShieldCheck, title: "Trusted Supply", desc: "Reliable sourcing with end-to-end quality control." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Why Choose Us</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">
            Crafted with care, <span className="italic text-gradient-gold">trusted by many.</span>
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all hover:shadow-soft"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/5 border border-gold/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-primary">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
