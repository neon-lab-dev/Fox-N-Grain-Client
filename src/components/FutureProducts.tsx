import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const items = [
  "Premium Dry Fruits",
  "Roasted Snacks",
  "Fasting Mixes",
  "Healthy Seeds",
  "Special Falhari Products",
];

export function FutureProducts() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Coming Soon</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary leading-tight">
            More Premium <span className="italic text-gradient-gold">Falhari</span> Products
          </h2>
          <p className="mt-5 text-muted-foreground">
            The Fox N Grain family is growing. New healthy, hand-picked goodness on the way.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative p-6 rounded-3xl border border-dashed border-gold/50 bg-card/60 hover:bg-card transition-all min-h-[200px] flex flex-col justify-between"
            >
              <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-[10px] tracking-[0.18em] uppercase text-primary font-medium">
                <Sparkles className="h-3 w-3" />
                Coming Soon
              </div>
              <h3 className="font-display text-2xl text-primary mt-6 leading-tight">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
