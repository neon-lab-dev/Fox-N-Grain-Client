import { motion } from "framer-motion";
import process from "../assets/process-handpicking.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={process}
            alt="Hands carefully sorting premium makhana"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-[2rem] shadow-luxe ring-1 ring-border w-full object-cover h-[560px]"
          />
          <div className="absolute -bottom-8 -right-4 sm:-right-8 max-w-xs p-6 rounded-2xl bg-card shadow-luxe border border-gold/30">
            <div className="font-display text-3xl text-gradient-gold">Since Day One</div>
            <p className="text-sm text-muted-foreground mt-2">
              Uncompromising standards on every single piece we deliver.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Our Story</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary leading-tight">
            A simple mission, hand picked <span className="italic text-gradient-gold">to perfection.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fox N Grain was founded to deliver the finest hand-picked Makhana and Falhari products while
            maintaining uncompromising quality standards. Every product undergoes a strict selection
            process to ensure customers receive only the very best.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            As we grow, Fox N Grain aims to become a trusted destination for premium Falhari foods and
            healthy snacking — rooted in nature, refined by craft.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {["Pure", "Premium", "Natural"].map((w) => (
              <div
                key={w}
                className="px-4 py-5 rounded-xl bg-secondary text-center border border-border"
              >
                <div className="font-display text-xl text-primary">{w}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
