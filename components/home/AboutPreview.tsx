"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { SALON, VALUES } from "@/lib/data";
import PhoneWidget from "@/components/ui/PhoneWidget";

export default function AboutPreview() {
  const [failed, setFailed] = useState(false);
  return (
    <section className="section-pad" style={{ background: "var(--bg-alt)", padding: "92px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 60, alignItems: "center" }}>
          {/* görsel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", aspectRatio: "5/6", borderRadius: 28, overflow: "hidden", boxShadow: "0 28px 64px var(--shadow)", background: "linear-gradient(135deg,var(--accent),var(--secondary))" }}>
              {!failed ? (
                <Image src="/images/about-clinic.jpg" alt="Nil Estetik merkezi" fill sizes="(max-width:767px) 100vw, 45vw" style={{ objectFit: "cover" }} onError={() => setFailed(true)} />
              ) : (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 70 }}>✨</div>
              )}
            </div>
            {/* puan rozeti */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", bottom: 18, left: -14, background: "var(--card)", borderRadius: 18, padding: "13px 18px", boxShadow: "0 16px 40px var(--shadow)", display: "flex", alignItems: "center", gap: 11 }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,var(--gold),var(--primary))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Star size={20} fill="#fff" color="#fff" />
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <div className="h-display" style={{ fontSize: 19, fontWeight: 700, color: "var(--text)" }}>5.0 Puan</div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)", fontWeight: 600 }}>Google Yorumları</div>
              </div>
            </motion.div>
            {/* konum rozeti */}
            <div
              className="about-float-location"
              style={{ position: "absolute", top: 18, right: -14, background: "var(--text)", color: "#fff", borderRadius: 16, padding: "11px 15px", boxShadow: "0 16px 40px rgba(0,0,0,.25)", display: "flex", alignItems: "center", gap: 9, maxWidth: 200 }}
            >
              <MapPin size={17} style={{ color: "var(--gold)", flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.35 }}>{SALON.addressShort}</span>
            </div>
          </motion.div>

          {/* içerik */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow">Hakkımızda</span>
            <h2 className="h-display" style={{ fontSize: "clamp(27px,3.6vw,44px)", color: "var(--text)", margin: "16px 0 16px", lineHeight: 1.1 }}>
              Çanakkale'de <em className="gold-text" style={{ fontStyle: "italic" }}>güven veren</em> bir güzellik adresi
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-muted)", marginBottom: 18 }}>
              Nil Estetik olarak kişisel bakım, güzellik ve estetik alanında üstün kalite anlayışı
              ve güncel teknolojiyle hizmet veriyoruz. Çanakkale'de ilk ve tek saç çoğaltma merkezi
              olmanın sorumluluğuyla; her uygulamada hijyen, samimiyet ve kişiye özel yaklaşımı esas alıyoruz.
            </p>

            <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "26px 0 30px" }}>
              {VALUES.slice(0, 4).map((v) => (
                <div key={v.title} style={{ display: "flex", gap: 12, padding: "14px 16px", borderRadius: 16, background: "var(--card)", border: "1px solid var(--border)" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{v.icon}</span>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text)" }}>{v.title}</div>
                    <div style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.45, marginTop: 2 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <Link href="/hakkimizda" className="btn-primary">
                Daha Fazla <ArrowRight size={17} />
              </Link>
              <PhoneWidget variant="light" size="md" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
