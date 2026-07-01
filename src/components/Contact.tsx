import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium">
            Contact
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">
            Get in <span className="italic text-gradient-gold">touch.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            For bulk orders, distribution partnerships or export inquiries —
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: MapPin,
                label: "Visit Us",
                value: "Nandgola, Malsalami, Patna City 800008",
              },
              { icon: Phone, label: "Call Us", value: "+91 7479697250" },
              { icon: Mail, label: "Email Us", value: "foxngrain@gmail.com" },
              {
                icon: Clock,
                label: "Business Hours",
                value: "Mon – Sat · 10:00AM – 10:00PM",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gold">
                    {c.label}
                  </div>
                  <div className="mt-1 text-foreground whitespace-pre-line">
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border h-56">
              <iframe
                title="Fox N Grain location"
                src="https://www.google.com/maps?q=India&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-3 p-8 sm:p-10 rounded-3xl bg-card border border-gold/30 shadow-luxe space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Phone" name="phone" placeholder="+91 …" />
            </div>
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@email.com"
            />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Product Interested In
              </label>
              <select
                required
                className="mt-2 w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select a grade…</option>
                {[
                  "4 HP",
                  "4+ HP",
                  "5 HP",
                  "5+ HP",
                  "6 HP",
                  "6+ HP",
                  "7+ HP",
                  "Bulk / Custom",
                ].map((g) => (
                  <option key={g}>{g} Makhana</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us a bit about your requirement…"
                className="mt-2 w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-luxe hover:translate-y-[-2px] transition-all"
            >
              {sent ? "Thank you — we'll be in touch" : "Send Inquiry"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}
