"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck, MapPin, Copy, Check, Clock } from "lucide-react";
import { SALON } from "@/lib/data";
import GoldParticles from "@/components/ui/GoldParticles";

const MAP_URL = `https://maps.google.com/maps?q=${encodeURIComponent(SALON.mapQuery)}&z=16&output=embed`;

function IgGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function IletisimPage() {
  const [copied, setCopied] = useState(false);
  const waMsg = encodeURIComponent("Merhaba, randevu / bilgi almak istiyorum 😊");

  const copyPhone = () => {
    navigator.clipboard?.writeText(SALON.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actions = [
    { icon: <Phone size={26} />, title: "Hemen Ara", desc: SALON.phone, href: `tel:${SALON.phoneRaw}`, bg: "linear-gradient(135deg,var(--primary),var(--primary-dark))", external: false },
    { icon: <MessageCircle size={26} />, title: "WhatsApp", desc: "Hızlı yanıt alın", href: `${SALON.whatsapp}?text=${waMsg}`, bg: "linear-gradient(135deg,#2ecc71,#25D366)", external: true },
    { icon: <CalendarCheck size={26} />, title: "Online Randevu", desc: "3 adımda ayırtın", href: "/randevu", bg: "linear-gradient(135deg,var(--gold),#A98438)", external: false },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #241C19 0%, #34261F 50%, #4A3327 100%)", padding: "130px 32px 64px" }}>
        <GoldParticles count={12} zIndex={1} />
        <div style={{ position: "relative", zIndex: 3, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p className="script" style={{ fontSize: "clamp(26px,4vw,38px)", color: "var(--gold)", marginBottom: 4 }}>Bize ulaşın</p>
          <h1 className="h-display" style={{ fontSize: "clamp(34px,5vw,58px)", color: "#fff", marginBottom: 14 }}>İletişim</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.76)", lineHeight: 1.6 }}>
            Çanakkale Merkez'deyiz. Sorularınız ve randevularınız için size en uygun kanalı seçin.
          </p>
        </div>
      </section>

      {/* Aksiyon kartları */}
      <section className="section-pad" style={{ background: "var(--bg)", padding: "48px 32px 16px" }}>
        <div className="action-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {actions.map((a, i) => (
            <motion.a
              key={i}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ display: "flex", flexDirection: "column", gap: 8, padding: "28px 26px", borderRadius: 20, background: a.bg, color: "#fff", textDecoration: "none", boxShadow: "0 14px 36px rgba(70,45,35,.2)" }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 15, background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>{a.icon}</div>
              <div className="h-display" style={{ fontSize: 22, fontWeight: 600 }}>{a.title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.88)" }}>{a.desc}</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Harita + bilgiler */}
      <section className="section-pad" style={{ background: "var(--bg)", padding: "40px 32px 70px" }}>
        <div className="map-grid" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 26, alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="card" style={{ padding: "22px 24px" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                <MapPin size={20} style={{ color: "var(--primary-dark)", flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>Adres</span>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 12 }}>{SALON.address}</p>
              <a href={`https://maps.google.com/maps?q=${encodeURIComponent(SALON.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13.5, fontWeight: 700, color: "var(--primary-dark)", textDecoration: "none" }}>Yol Tarifi Al →</a>
            </div>

            <div className="card" style={{ padding: "22px 24px" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                <Phone size={20} style={{ color: "var(--primary-dark)", flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>Telefon</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <a href={`tel:${SALON.phoneRaw}`} className="h-display" style={{ fontSize: 22, color: "var(--text)", textDecoration: "none" }}>{SALON.phone}</a>
                <button onClick={copyPhone} className="btn-pill" style={{ padding: "7px 13px" }}>
                  {copied ? <><Check size={14} /> Kopyalandı</> : <><Copy size={14} /> Kopyala</>}
                </button>
              </div>
            </div>

            <div className="card" style={{ padding: "22px 24px" }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <Clock size={20} style={{ color: "var(--primary-dark)", flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>Çalışma Saatleri</span>
              </div>
              {[["Pazartesi – Cuma", SALON.hours.weekdays], ["Cumartesi", SALON.hours.saturday], ["Pazar", SALON.hours.sunday]].map(([d, h]) => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, padding: "7px 0", borderBottom: "1px solid var(--border)", color: "var(--text-soft)" }}>
                  <span>{d}</span><span style={{ fontWeight: 700, color: h === "Kapalı" ? "var(--text-light)" : "var(--primary-dark)" }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position: "relative", borderRadius: 22, overflow: "hidden", border: "1px solid var(--border)", minHeight: 440, boxShadow: "0 18px 44px var(--shadow)" }}>
            <iframe src={MAP_URL} width="100%" height="100%" style={{ border: 0, minHeight: 440, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nil Estetik Konum" />
            <div style={{ position: "absolute", left: 16, bottom: 16, background: "rgba(255,255,255,.95)", backdropFilter: "blur(6px)", borderRadius: 14, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center", maxWidth: "calc(100% - 32px)" }}>
              <MapPin size={18} style={{ color: "var(--primary-dark)", flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, color: "var(--text)", fontWeight: 600, lineHeight: 1.4 }}>{SALON.addressShort}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section-pad" style={{ padding: "0 32px 90px" }}>
        <a href={SALON.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "flex", maxWidth: 1150, margin: "0 auto", borderRadius: 24, padding: "32px 36px", textDecoration: "none", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 18, background: "linear-gradient(135deg,#9E6446,#C9A35B)", color: "#fff", boxShadow: "0 18px 44px rgba(70,45,35,.25)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center" }}><IgGlyph size={28} /></div>
            <div>
              <div className="h-display" style={{ fontSize: 22 }}>Bizi Instagram'da takip edin</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.85)" }}>{SALON.instagramHandle} · {SALON.followers} takipçi</div>
            </div>
          </div>
          <span className="btn-ghost-light" style={{ background: "rgba(255,255,255,.2)" }}>Takip Et →</span>
        </a>
      </section>
    </>
  );
}
