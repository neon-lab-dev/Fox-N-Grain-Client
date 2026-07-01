import { motion } from "framer-motion";
import hero from "../assets/gallery-closeup.jpg";
import handpicking from "../assets/process-handpicking.jpg";
import packaging from "../assets/gallery-packaging.jpg";
import closeup from "../assets/gallery-closeup.jpg";
import snack from "../assets/gallery-snack.jpg";
import farm from "../assets/gallery-farm.jpg";
import storage from "../assets/process-storage.jpg";
import packagingProcess from "../assets/process-packaging.jpg";

const tiles = [
  { src: hero, span: "row-span-2", alt: "Premium hand picked makhana bowl" },
  { src: handpicking, span: "", alt: "Hand picking process" },
  { src: farm, span: "", alt: "Lotus pond at sunrise in Bihar" },
  { src: packaging, span: "row-span-2", alt: "Premium makhana packaging" },
  { src: closeup, span: "", alt: "Macro close-up of a single makhana" },
  { src: snack, span: "", alt: "Roasted makhana healthy snack" },
  { src: packagingProcess, span: "", alt: "Hygienic packaging process" },
  { src: storage, span: "", alt: "Export-quality storage warehouse" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Gallery</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">
              Inside our <span className="italic text-gradient-gold">craft.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse of the farms, hands and care that go into every Fox N Grain pack.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[200px_200px_200px_200px] md:grid-rows-[260px_260px] gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-3xl ${t.span} group`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
