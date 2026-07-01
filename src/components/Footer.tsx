import {  Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 grain-texture opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Fox N Grain" className="h-14 w-14 object-contain bg-cream rounded-full p-1" />
              <div>
                <div className="font-display text-xl">Fox N Grain</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Premium Hand Picked</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed">
              Premium hand-picked Makhana and Falhari products — crafted with care, trusted for quality.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-all"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {[
                ["Home", "#top"],
                ["Our Story", "#about"],
                ["Process", "#process"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold">Product Grades</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              {["4 HP Makhana", "5 HP Makhana", "6 HP Makhana", "7+ HP Makhana", "Bulk / Export"].map(
                (l) => (
                  <li key={l}>
                    <a href="#products" className="hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> +91 7479697250
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> foxngrain@gmail.com
              </li>
              <li className="text-primary-foreground/70 leading-relaxed">
                Nandgola, Malsalami, Patna City 800008
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Fox N Grain. All rights reserved.</div>
          <div>Premium Hand Picked Goodness · From Nature's Best To Your Family</div>
        </div>
      </div>
    </footer>
  );
}
