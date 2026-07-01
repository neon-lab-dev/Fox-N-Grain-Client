import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is HP Makhana?",
    a: "HP stands for Hand Picked. The number (4 HP, 5 HP, 7+ HP) indicates the size grade — higher numbers represent larger, more premium makhana selected by hand for size and purity.",
  },
  {
    q: "What's the difference between 4 HP and 7+ HP?",
    a: "4 HP is our daily-consumption grade — smaller, crisp and versatile. 7+ HP is our finest, extra-large grade reserved for export, high-end gifting and luxury brands.",
  },
  {
    q: "Do you offer bulk orders?",
    a: "Yes. We supply bulk quantities to retailers, distributors, wholesalers, wellness brands and exporters. Reach out via our inquiry form for custom quotes.",
  },
  {
    q: "Do you supply wholesalers?",
    a: "Absolutely. We work with wholesalers across India and partner with private-label brands for consistent, premium-grade supply.",
  },
  {
    q: "Do you provide export-quality products?",
    a: "Yes — our 6+ HP and 7+ HP grades are graded to international export standards, with hygienic processing and sealed packaging.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">FAQ</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">
            Your questions, <span className="italic text-gradient-gold">answered.</span>
          </h2>
        </div>
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl bg-card border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg text-primary">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 text-gold shrink-0 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
