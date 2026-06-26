"use client";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { SALON } from "@/lib/data";
import AppointmentWizard from "@/components/appointment/AppointmentWizard";
import GoldParticles from "@/components/ui/GoldParticles";
import PhoneWidget from "@/components/ui/PhoneWidget";

export default function RandevuPage() {
  const waMsg = encodeURIComponent("Merhaba, randevu almak istiyorum 😊");
  return (
    <>
      {/* Koyu hero bant */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #241C19 0%, #34261F 50%, #4A3327 100%)", padding: "130px 32px 70px" }}>
        <GoldParticles count={12} zIndex={1} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(50% 60% at 70% 10%, rgba(192,135,107,.2), transparent 70%)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 3, maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="glass" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 16px", borderRadius: 100, marginBottom: 18 }}>
            <Star size={14} fill="var(--gold)" color="var(--gold)" />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,.9)" }}>5.0 Google · {SALON.reviewCount} yorum · Ücretsiz analiz</span>
          </motion.span>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="script" style={{ fontSize: "clamp(26px,4vw,38px)", color: "var(--gold)", marginBottom: 4 }}>
            Sizi aramızda görmek isteriz
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="h-display" style={{ fontSize: "clamp(34px,5vw,60px)", color: "#fff", marginBottom: 14 }}>
            Online Randevu Al
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.26 }} style={{ fontSize: 16, color: "rgba(255,255,255,.76)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
            Yalnızca 3 adımda hizmetinizi, tarihinizi seçin ve WhatsApp üzerinden onaylayın.
          </motion.p>
        </div>
      </section>

      {/* İçerik */}
      <section className="section-pad" style={{ background: "var(--bg)", padding: "56px 32px 90px" }}>
        <div className="grid-randevu" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 330px", gap: 30, alignItems: "start" }}>
          <AppointmentWizard />

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--card)", borderRadius: 20, border: "1px solid var(--border)", padding: "22px 22px" }}>
              <h3 className="h-display" style={{ fontSize: 18, color: "var(--text)", marginBottom: 14 }}>Hızlı İletişim</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <PhoneWidget variant="light" size="md" />
                <a href={`${SALON.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ width: "100%" }}>
                  <MessageCircle size={18} /> WhatsApp'tan Yaz
                </a>
              </div>
            </div>

            <div style={{ background: "var(--card)", borderRadius: 20, border: "1px solid var(--border)", padding: "22px" }}>
              <h3 className="h-display" style={{ fontSize: 18, color: "var(--text)", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <Clock size={18} style={{ color: "var(--primary)" }} /> Çalışma Saatleri
              </h3>
              {[
                ["Pazartesi – Cuma", SALON.hours.weekdays],
                ["Cumartesi", SALON.hours.saturday],
                ["Pazar", SALON.hours.sunday],
              ].map(([d, h]) => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, padding: "8px 0", borderBottom: "1px solid var(--border)", color: "var(--text-soft)" }}>
                  <span>{d}</span>
                  <span style={{ fontWeight: 700, color: h === "Kapalı" ? "var(--text-light)" : "var(--primary-dark)" }}>{h}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "var(--text)", color: "#fff", borderRadius: 20, padding: "22px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 8 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={17} fill="var(--gold)" color="var(--gold)" />)}
              </div>
              <div className="h-display" style={{ fontSize: 30, fontWeight: 700 }}>5.0 / 5</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.65)", marginTop: 4 }}>{SALON.reviewCount} Google yorumu · {SALON.followers} takipçi</div>
            </div>

            <div style={{ background: "var(--bg-alt)", borderRadius: 20, border: "1px solid var(--border)", padding: "20px" }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <ShieldCheck size={20} style={{ color: "var(--primary-dark)", flexShrink: 0 }} />
                <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--text)" }}>Güvenle randevu alın</span>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 12 }}>
                Tüm uygulamalarımız hijyenik ortamda, kişiye özel protokollerle gerçekleştirilir.
              </p>
              <a href={`https://maps.google.com/maps?q=${encodeURIComponent(SALON.mapQuery)}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12.5, color: "var(--primary-dark)", textDecoration: "none", fontWeight: 600 }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 1 }} /> {SALON.address}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
