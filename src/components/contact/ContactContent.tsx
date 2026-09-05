"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, MessageSquare, Radio } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const SOCIALS = [
  { label: "Instagram", handle: "@mechmerise_2k26", icon: Instagram, href: "https://www.instagram.com/mechmerise_2k26?igsi=MXRkbnRqbXJ2ZjdvcA==", color: "hover:text-pink-400" },
  { label: "WhatsApp", handle: "Join Community", icon: MessageSquare, href: "#", color: "hover:text-[#25D366]" },
];

export default function ContactContent() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/events-bg.png')" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/30 to-carbon" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-carbon/55 via-transparent to-carbon/55" />
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-25 mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* ─── LEFT: Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

          {/* ─── RIGHT: Info Panel ─── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact details panel */}
            <div className="relative border border-titanium/15 bg-asphalt/70 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 racing-stripe" />
              <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-circuit-blue/30" />
              <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-racing-red/30" />

              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 mb-5">
                  <Radio size={14} className="text-racing-red animate-telemetry-blink" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-circuit-blue tabular">
                    PIT RADIO · COMMS
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-titanium/15 bg-carbon/60">
                      <Mail size={16} className="text-racing-red" />
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-titanium/40 tabular mb-1">Email</p>
                      <a href="mailto:mechmerise2k26@gmail.com" className="text-sm text-titanium/80 hover:text-white transition-colors throttle-link">
                        mechmerise2k26@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-titanium/15 bg-carbon/60">
                      <MapPin size={16} className="text-racing-red" />
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-titanium/40 tabular mb-1">Address</p>
                      <p className="text-sm text-titanium/70 leading-relaxed">
                        St. Vincent Pallotti College of Engineering and Technology,<br />
                        Wardha Road, Gavsi-Manapur,<br />
                        Nagpur, Maharashtra – 441108
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-titanium/15 bg-carbon/60">
                      <Phone size={16} className="text-racing-red" />
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-titanium/40 tabular mb-1">Phone</p>
                      <p className="text-sm text-titanium/60 tabular">[Coordinator Phone — TBD]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="relative border border-titanium/15 bg-asphalt/70 backdrop-blur-sm overflow-hidden">
              <div className="p-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-titanium/40 tabular mb-4">
                  SOCIAL CHANNELS
                </p>
                <div className="space-y-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 px-4 py-3 border border-titanium/10 bg-carbon/40 hover:border-titanium/30 transition-colors ${s.color}`}
                    >
                      <s.icon size={16} className="text-titanium/50 group-hover:text-current transition-colors" />
                      <div>
                        <p className="text-sm text-titanium/80 font-semibold">{s.label}</p>
                        <p className="text-[10px] text-titanium/40 tabular">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
