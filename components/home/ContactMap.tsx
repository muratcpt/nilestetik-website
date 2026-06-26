"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SALON } from "@/lib/data";

const MAP_URL = `https://maps.google.com/maps?q=${encodeURIComponent(SALON.mapQuery)}&z=16&output=embed`;

export default function ContactMap() {
  const waMsg = encodeURIComponent("Merhaba, randevu / bilgi almak istiyorum 😊");
  const cards = [
    { icon: <MapPin size={20} />, title: "Adres", value: SALON.address, action: "Yol Tarifi Al", href: `https://maps.google.com/maps?q=${encodeURIComponent(SALON.mapQuery)}`, external: true },
    { icon: <Phone size={20} />, title: "Telefon", value: SALON.phone, action: "Hemen Ara", href: `tel:${SALON.phoneRaw}`, external: false },
    { icon: <MessageCircle size={20} />, title: "WhatsApp", value: "Mesaj ile hızlı iletişim", action: "WhatsApp'tan Yaz", href: `${SALON.whatsapp}?text=${waMsg}`, external: true },
    { icon: <Clock size={20} />, title: "Çalışma Saatleri", value: `Hafta içi & Cmt: ${SALON.hours.weekdays} · Pazar: ${SALON.hours.sunday}`, action: "", href: "", external: false },
  ];

  return (
    <section className="section-pad" style={{ background: "var(--bg)", padding: "92px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>İletişim</span>
          <h2 className="h-display" style={{ fontSize: "clamp(27px,3.8vw,44px)", color: "var(--text)", margin: "16px 0 12px" }}>
            Bizi <em className="gold-text" style={{ fontStyle: "italic" }}>ziyaret edin</em>
          </h2>
          <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Çanakkale Merkez'deyiz. Soru ve randevularınız için bize en kolay yoldan ulaşın.
          </p>
        </div>

        <div className="map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 26, alignItems: "stretch" }}>
          {/* iletişim kartları */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                style={{ display: "flex", gap: 15, padding: "18px 20px", borderRadius: 18, background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 13, background: "linear-gradient(135deg,var(--primary),var(--primary-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text)" }}>{c.title}</div>
                  <div style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.55, marginTop: 3 }}>{c.value}</div>
                  {c.action && (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      style={{ display: "inline-block", marginTop: 8, fontSize: 13, fontWeight: 700, color: "var(--primary-dark)", textDecoration: "none" }}
                    >
                      {c.action} →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* harita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", minHeight: 420, boxShadow: "0 18px 44px var(--shadow)" }}
          >
            <iframe
              src={MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nil Estetik Konum"
            />
            <div style={{ position: "absolute", left: 16, bottom: 16, background: "rgba(255,255,255,.95)", backdropFilter: "blur(6px)", borderRadius: 14, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center", maxWidth: "calc(100% - 32px)", boxShadow: "0 10px 26px rgba(0,0,0,.15)" }}>
              <MapPin size={18} style={{ color: "var(--primary-dark)", flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, color: "var(--text)", fontWeight: 600, lineHeight: 1.4 }}>{SALON.addressShort}</span>
            </div>
          </motion.div>
        </div>

        {/* alt CTA bandı */}
        <div style={{ marginTop: 30, borderRadius: 22, background: "var(--text)", padding: "30px 32px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="h-display" style={{ fontSize: 22, color: "#fff" }}>Randevunuzu bugün oluşturun</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,.65)", marginTop: 4 }}>Ücretsiz analiz · Kişiye özel protokol · Hijyenik ortam</div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/randevu" className="btn-primary">✦ Randevu Al</Link>
            <a href={`${SALON.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
