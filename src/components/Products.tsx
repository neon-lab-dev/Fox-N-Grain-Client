import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import g4 from "../assets/grade-4hp.jpg";
import g4p from "../assets/grade-4plus-hp.jpg";
import g5 from "../assets/grade-5hp.jpg";
import g5p from "../assets/grade-5plus-hp.jpg";
import g6 from "../assets/grade-6hp.jpg";
import g6p from "../assets/grade-6plus-hp.jpg";
import g7p from "../assets/grade-7plus-hp.jpg";

const products = [
  { grade: "4 HP", title: "Hand Picked Premium", uses: "Daily consumption · Roasting · Snacks", img: g4 },
  { grade: "4+ HP", title: "Larger Size Selection", uses: "Premium retail · Healthy snacking", img: g4p },
  { grade: "5 HP", title: "High Quality Hand Picked", uses: "Retail · Distribution", img: g5 },
  { grade: "5+ HP", title: "Premium Large-Sized", uses: "Gifting · Premium consumers", img: g5p },
  { grade: "6 HP", title: "Superior Quality", uses: "Premium stores · Wellness brands", img: g6 },
  { grade: "6+ HP", title: "Extra-Large Selection", uses: "Luxury packaging", img: g6p },
  { grade: "7+ HP", title: "Our Finest Selection", uses: "Export · High-end gifting · Premium brands", img: g7p },
];

export function Products() {
  return (
    <section id="products" className="relative py-28 bg-secondary/40">
      <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Collection</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary leading-tight">
              Premium Makhana, <span className="italic text-gradient-gold">graded by hand.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Seven premium grades from 4 HP to 7+ HP — each meticulously sorted for size, purity, crunch
            and consistency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.grade}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-gold/50 transition-all hover:shadow-luxe"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.grade} makhana`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wider">
                  {p.grade}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.uses}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group/btn"
                >
                  Inquire now
                  <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
