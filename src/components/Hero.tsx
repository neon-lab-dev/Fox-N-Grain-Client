import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import hero from "../assets/grade-4hp.jpg";
import piece from "../assets/makhana-piece.png";

const stats = [
  { v: "100%", l: "Hand Picked" },
  { v: "Premium", l: "Grade" },
  { v: "Export", l: "Quality" },
  { v: "Naturally", l: "Healthy" },
];

export function Hero() {
  const particles = Array.from({ length: 14 });
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Floating makhana particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((_, i) => {
          const size = 22 + Math.random() * 30;
          const left = Math.random() * 100;
          const dur = 14 + Math.random() * 14;
          const delay = -Math.random() * dur;
          return (
            <img
              key={i}
              src={piece}
              alt=""
              aria-hidden
              className="absolute animate-float-down opacity-70"
              style={{
                left: `${left}%`,
                width: size,
                height: size,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 -z-10 grain-texture opacity-40" />
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-leaf/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-xs tracking-[0.2em] uppercase text-primary mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Premium Hand Picked Goodness
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary leading-[1.02]">
            Premium <span className="italic text-gradient-gold">Hand Picked</span>
            <br /> Makhana
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Every Makhana is carefully selected by hand to ensure superior size, purity and quality —
            from nature's best to your family.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-luxe hover:translate-y-[-2px] transition-all"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary/5 transition-all"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl text-primary">{s.v}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-luxe ring-1 ring-gold/30">
            <img
              src={hero}
              alt="Premium hand picked makhana in a wooden bowl with wheat"
              className="w-full h-[560px] object-cover animate-gentle-float"
              width={1600}
              height={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl bg-card border border-gold/30 shadow-luxe hidden sm:block">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Grade</div>
            <div className="font-display text-2xl text-primary">7+ HP</div>
          </div>
          <div className="absolute -top-4 -right-4 px-5 py-4 rounded-2xl bg-primary text-primary-foreground shadow-luxe hidden sm:block">
            <div className="text-xs uppercase tracking-widest opacity-80">Selected</div>
            <div className="font-display text-2xl">By Hand</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
