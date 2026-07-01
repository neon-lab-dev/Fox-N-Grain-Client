import { motion } from "framer-motion";
import { Sprout, Hand, Scale, Package, Truck } from "lucide-react";

const steps = [
  { icon: Sprout, title: "Sourcing", desc: "Carefully sourced from trusted Indian lotus farms." },
  { icon: Hand, title: "Hand Picking", desc: "Skilled artisans select each piece by hand." },
  { icon: Scale, title: "Quality Grading", desc: "Sorted into 4 HP – 7+ HP premium grades." },
  { icon: Package, title: "Hygienic Packaging", desc: "Sealed in clean, food-safe packaging." },
  { icon: Truck, title: "Delivery", desc: "Shipped to homes, retailers and global markets." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grain-texture opacity-20" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[400px] w-[400px] rounded-full bg-gold/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Process</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            From Farm <span className="italic text-gradient-gold">To Table.</span>
          </h2>
        </div>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-primary border-2 border-gold flex items-center justify-center text-gold relative z-10">
                  <s.icon className="h-8 w-8" />
                </div>
                <div className="mt-2 text-xs tracking-[0.25em] text-gold uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
